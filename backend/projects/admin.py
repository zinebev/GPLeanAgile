from django.contrib import admin
from .models import Projet, Tache

@admin.register(Projet)
class ProjetAdmin(admin.ModelAdmin):
    list_display = ['nom', 'chef_projet', 'statut', 'date_debut', 'date_fin', 'budget_prevu']
    list_filter = ['statut']
    search_fields = ['nom']

@admin.register(Tache)
class TacheAdmin(admin.ModelAdmin):
    list_display = ['titre', 'projet', 'assignee', 'statut', 'priorite']
    list_filter = ['statut']
    search_fields = ['titre']