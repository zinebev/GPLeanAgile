from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'waste', views.MudaViewSet, basename='muda')
router.register(r'vsm', views.VSMViewSet, basename='vsm')
router.register(r'kaizen', views.KaizenViewSet, basename='kaizen')

urlpatterns = [
    path('', include(router.urls)),
]