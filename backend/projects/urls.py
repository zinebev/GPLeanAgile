from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'projects', views.ProjetViewSet, basename='projet')
router.register(r'tasks', views.TacheViewSet, basename='tache')
router.register(r'costs', views.CoutViewSet, basename='cout')
router.register(r'non-conformities', views.NonConformiteViewSet, basename='nonconformite')

urlpatterns = [
    path('', include(router.urls)),
    path('projects/<int:pk>/kpi/', views.ProjetViewSet.as_view({'get': 'kpi'}), name='projet-kpi'),
]