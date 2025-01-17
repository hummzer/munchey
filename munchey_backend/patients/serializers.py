from rest_framework import serializers
from .models import Patient
from django.contrib.auth.hashers import make_password  # Import for password hashing
from django.core.exceptions import ValidationError  # Import for custom validations

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [ 'name', 'email', 'phone', 'password']  # Include all required fields
        extra_kwargs = {
            'password': {'write_only': True},  # Make password write-only
            'email': {'required': True},  # Ensure email is mandatory
            'phone': {'required': True},  # Ensure phone is mandatory
        }

    def validate_email(self, value):
        """Ensure the email is unique."""
        if Patient.objects.filter(email=value).exists():
            raise ValidationError("A user with this email already exists.")
        return value

    def validate_phone(self, value):
        """Ensure the phone number is unique."""
        if Patient.objects.filter(phone=value).exists():
            raise ValidationError("A user with this phone number already exists.")
        return value

    def validate_password(self, value):
        """Optionally validate password strength."""
        if len(value) < 8:
            raise ValidationError("Password must be at least 8 characters long.")
        return value

    def create(self, validated_data):
        """Hash the password before saving the patient."""
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        """Optionally hash the password if it is being updated."""
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)

