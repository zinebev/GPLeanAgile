from rest_framework import serializers
from .models import Projet, Tache, Cout, NonConformite, ActionCorrective

class TacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tache
        fields = '__all__'

class ProjetSerializer(serializers.ModelSerializer):
    taches = TacheSerializer(many=True, read_only=True, source='tache_set')
    
    class Meta:
        model = Projet
        fields = '__all__'
        read_only_fields = ['chef_projet', 'date_creation']
        extra_kwargs = {
            'date_debut': {'required': False, 'allow_null': True},
            'date_fin': {'required': False, 'allow_null': True},
        }

class CoutSerializer(serializers.ModelSerializer):
    ecart = serializers.SerializerMethodField()
    
    class Meta:
        model = Cout
        fields = '__all__'
    
    def get_ecart(self, obj):
        return obj.ecart()

class NonConformiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = NonConformite
        fields = '__all__'

class ActionCorrectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionCorrective
        fields = '__all__'