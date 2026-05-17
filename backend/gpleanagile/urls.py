from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('account.urls')),
    path('api/', include('projects.urls')),
    path('api/lean/', include('lean.urls')),
    path('api/agile/', include('agile.urls')),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]