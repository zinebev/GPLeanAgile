from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'sprints', views.SprintViewSet, basename='sprint')
router.register(r'backlog', views.BacklogViewSet, basename='backlog')

urlpatterns = [
    path('', include(router.urls)),
]