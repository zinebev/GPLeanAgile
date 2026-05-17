from django.db import models
from projects.models import Projet

class Muda(models.Model):
    TYPE_CHOICES = [
        ('surproduction', 'Surproduction'),
        ('attente', 'Attente'),
        ('transport', 'Transport'),
        ('surtraitement', 'Surtraitement'),
        ('stock', 'Stock excessif'),
        ('mouvement', 'Mouvement inutile'),
        ('defaut', 'Défaut'),
    ]
    projet = models.ForeignKey(Projet, on_delete=models.CASCADE)
    type_muda = models.CharField(max_length=50, choices=TYPE_CHOICES)
    description = models.TextField()
    impact = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.type_muda} - {self.projet.nom}"

class Kaizen(models.Model):
    projet = models.ForeignKey(Projet, on_delete=models.CASCADE)
    titre = models.CharField(max_length=200)
    description = models.TextField()
    statut = models.CharField(max_length=50, choices=[
        ('planifie', 'Planifié'),
        ('en_cours', 'En cours'),
        ('termine', 'Terminé'),
    ], default='planifie')
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titre

class VSM(models.Model):
    projet = models.ForeignKey(Projet, on_delete=models.CASCADE)
    etape = models.CharField(max_length=200)
    temps_va = models.FloatField(help_text="Temps à valeur ajoutée (minutes)")
    temps_attente = models.FloatField(help_text="Temps d'attente (minutes)")
    ordre = models.IntegerField(default=0)

    def ratio_efficacite(self):
        total = self.temps_va + self.temps_attente
        return round((self.temps_va / total) * 100, 2) if total > 0 else 0

    def __str__(self):
        return f"{self.etape} - {self.projet.nom}"