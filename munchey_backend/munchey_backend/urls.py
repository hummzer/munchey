from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from patients.views import RegisterPatientView, LoginView  # Ensure you import the correct views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/patients/', include('patients.urls')),
    path('api/register/', RegisterPatientView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', lambda request: HttpResponse("Welcome to the API Root")),
]
