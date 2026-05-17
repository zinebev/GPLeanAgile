from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'projects', views.ProjetViewSet, basename='projet')
router.register(r'tasks', views.TacheViewSet, basename='tache')
router.register(r'costs', views.CoutViewSet, basename='cout')
router.register(r'non-conformities', views.NonConformiteViewSet, basename='nonconformite')
router.register(r'corrective-actions', views.ActionCorrectiveViewSet, basename='actioncorrective')

urlpatterns = [
    path('', include(router.urls)),
    path('projects/<int:pk>/timeline/', views.ProjetViewSet.as_view({'get': 'timeline'}), name='projet-timeline'),
path('projects/<int:pk>/progress/', views.ProjetViewSet.as_view({'get': 'progress'}), name='projet-progress'),
path('projects/<int:pk>/kpi-avances/', views.ProjetViewSet.as_view({'get': 'kpi_avances'}), name='projet-kpi-avances'),
    path('projects/<int:pk>/kpi/', views.ProjetViewSet.as_view({'get': 'kpi'}), name='projet-kpi'),
]