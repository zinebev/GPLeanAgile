from django.db import models
from projects.models import Projet, Tache

class Sprint(models.Model):
    projet = models.ForeignKey(Projet, on_delete=models.CASCADE)
    nom = models.CharField(max_length=200)
    date_debut = models.DateField()
    date_fin = models.DateField()
    objectif = models.TextField(blank=True)
    statut = models.CharField(max_length=20, choices=[
        ('planifie', 'Planifié'),
        ('en_cours', 'En cours'),
        ('termine', 'Terminé'),
    ], default='planifie')

    def __str__(self):
        return f"{self.nom} - {self.projet.nom}"

class Backlog(models.Model):
    projet = models.ForeignKey(Projet, on_delete=models.CASCADE)
    titre = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    priorite = models.IntegerField(default=1)
    sprint = models.ForeignKey(Sprint, on_delete=models.SET_NULL, null=True, blank=True)
    statut = models.CharField(max_length=20, choices=[
        ('todo', 'À faire'),
        ('en_cours', 'En cours'),
        ('done', 'Terminé'),
    ], default='todo')

    def __str__(self):
        return self.titre