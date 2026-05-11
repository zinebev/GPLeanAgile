from rest_framework import viewsets, permissions
from .models import Sprint, Backlog
from .serializers import SprintSerializer, BacklogSerializer

class SprintViewSet(viewsets.ModelViewSet):
    serializer_class = SprintSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Sprint.objects.filter(projet__chef_projet=self.request.user)

class BacklogViewSet(viewsets.ModelViewSet):
    serializer_class = BacklogSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Backlog.objects.filter(projet__chef_projet=self.request.user)