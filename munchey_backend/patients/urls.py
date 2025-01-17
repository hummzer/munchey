# patients/urls.py
from django.urls import path
from .views import RegisterPatientView, LoginView, PatientDetailView, PatientList

urlpatterns = [
    path('register/', RegisterPatientView.as_view(), name='register'),  # Trailing slash here
    path('login/', LoginView.as_view(), name='login'),
    path('me/', PatientDetailView.as_view(), name='patient_detail'),
    path('', PatientList.as_view(), name='list'),
]

