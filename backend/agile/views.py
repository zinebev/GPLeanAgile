from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Sprint, Backlog
from .serializers import SprintSerializer, BacklogSerializer
import datetime


class SprintViewSet(viewsets.ModelViewSet):
    serializer_class = SprintSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Sprint.objects.filter(projet__chef_projet=self.request.user)

    @action(detail=True, methods=['get'])
    def burndown(self, request, pk=None):
        sprint = self.get_object()
        projet = sprint.projet
        taches = projet.tache_set.all()
        total_taches = taches.count()

        if not sprint.date_debut or not sprint.date_fin:
            return Response({'error': 'Sprint sans dates définies'}, status=400)

        date_debut = sprint.date_debut
        date_fin = sprint.date_fin
        today = datetime.date.today()

        # Ligne idéale
        nb_jours = (date_fin - date_debut).days + 1
        ideal = []
        for i in range(nb_jours):
            jour = date_debut + datetime.timedelta(days=i)
            restant_ideal = total_taches - (total_taches * i / (nb_jours - 1)) if nb_jours > 1 else 0
            ideal.append({'date': str(jour), 'restant': round(restant_ideal, 1)})

        # Ligne réelle (tâches terminées par jour)
        reel = []
        for i in range(nb_jours):
            jour = date_debut + datetime.timedelta(days=i)
            if jour > today:
                break
            terminees = taches.filter(statut='done', date_fin__lte=jour).count()
            reel.append({'date': str(jour), 'restant': total_taches - terminees})

        return Response({
            'sprint': sprint.nom,
            'total_taches': total_taches,
            'date_debut': str(date_debut),
            'date_fin': str(date_fin),
            'ideal': ideal,
            'reel': reel,
        })


class BacklogViewSet(viewsets.ModelViewSet):
    serializer_class = BacklogSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Backlog.objects.filter(projet__chef_projet=self.request.user)