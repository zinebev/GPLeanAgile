from rest_framework import serializers
from .models import Muda, Kaizen

class MudaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muda
        fields = '__all__'

class KaizenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kaizen
        fields = '__all__'