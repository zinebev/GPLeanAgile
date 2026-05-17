from rest_framework import serializers
from .models import Muda, Kaizen , VSM

class MudaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muda
        fields = '__all__'

class KaizenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kaizen
        fields = '__all__'
        
class VSMSerializer(serializers.ModelSerializer):
    ratio_efficacite = serializers.SerializerMethodField()
    
    class Meta:
        model = VSM
        fields = '__all__'
    
    def get_ratio_efficacite(self, obj):
        return obj.ratio_efficacite()