from django.urls import path
from .views import RegisterPatientView, LoginView, PatientDetailView

urlpatterns = [
    path('register/', RegisterPatientView.as_view(), name='register_patient'),
    path('login/', LoginView.as_view(), name='login'),
    path('me/', PatientDetailView.as_view(),name='patient_detail'),
]
