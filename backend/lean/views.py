from rest_framework import viewsets, permissions
from .models import Muda, Kaizen, VSM
from .serializers import MudaSerializer, KaizenSerializer, VSMSerializer

class MudaViewSet(viewsets.ModelViewSet):
    serializer_class = MudaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Muda.objects.filter(projet__chef_projet=self.request.user)

class KaizenViewSet(viewsets.ModelViewSet):
    serializer_class = KaizenSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Kaizen.objects.filter(projet__chef_projet=self.request.user)
    
class VSMViewSet(viewsets.ModelViewSet):
    serializer_class = VSMSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return VSM.objects.filter(projet__chef_projet=self.request.user)