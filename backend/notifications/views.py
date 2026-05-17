from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Notification
from .serializers import NotificationSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return Notification.objects.filter(utilisateur=self.request.user).order_by('-date_creation')

    def perform_create(self, serializer):
        serializer.save(utilisateur=self.request.user)

    @action(detail=True, methods=['put'])
    def read(self, request, pk=None):
        notification = self.get_object()
        notification.lu = True
        notification.save()
        return Response({'message': 'Notification marquée comme lue'})

    @action(detail=False, methods=['put'])
    def read_all(self, request):
        Notification.objects.filter(utilisateur=request.user, lu=False).update(lu=True)
        return Response({'message': 'Toutes les notifications marquées comme lues'})