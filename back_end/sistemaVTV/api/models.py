from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Rol(models.Model):
    nombre = models.CharField(max_length=255)


class DetalleUsuario(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    dni = models.CharField(max_length=255)
    rol = models.ForeignKey(Rol, on_delete=models.PROTECT)
    usuario = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )


class Sucursal(models.Model):
    nombre = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255)
    latitud = models.FloatField
    longgitud = models.FloatField


class Turno(models.Model):
    fecha = models.DateTimeField
    sucursal = models.ForeignKey(Sucursal, on_delete=models.PROTECT)
    matricula = models.CharField(max_length=255)
    solicitante = models.ForeignKey(User, related_name="turnos", on_delete=models.PROTECT)


class Evaluacion(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    matricula = models.CharField(max_length=255)
    observaciones = models.CharField(max_length=255)
    paso_evaluacion = models.BooleanField
    valido_hasta = models.DateTimeField(blank=True)
    solicitante = models.ForeignKey(User, related_name="evaluaciones", on_delete=models.PROTECT)

