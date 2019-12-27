from django.contrib.auth.models import *
from .models import *
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

#Para devolver los turnos en formato Json
class TurnoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Turno
        fields = ('id', 'matricula')


#Para devolver y enviar usuarios completos en formato json (Las siguientes dos clases)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        #Esto es para pedir la pasword cuando se recibe (se crea), pero NO cuando se envia, ya que no queremos mostrar la password
        extra_kwargs = {'password': {'write_only': True}}


class UsuarioCompletoSerializer(serializers.ModelSerializer):
    # Usuario completo usa a UserSerializer, esto lo hice asi por que django tiene una tabla por defecto (User)
    # que usa para manejar la autenticacion, sin embargo yo queria añadir mas atributos como dni, rol, etc.
    # Por eso necesito otra tabla con una relacion uno a uno
    usuario = UserSerializer()

    class Meta:
        model = DetalleUsuario
        fields = ('id', 'nombre','apellido', 'usuario', 'dni')

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['usuario']['username'], validated_data['usuario']['email'], validated_data['usuario']['password'])
        #Busco el rol con nombre cliente para guardarselo
        rol = Rol.objects.get(nombre="cliente")
        userCompleto = DetalleUsuario(nombre=validated_data['nombre'], apellido=validated_data['apellido'], dni=validated_data['dni'], usuario=user, rol=rol)
        userCompleto.save()
        return user

class LoguearSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("usuario o contraseña incorrectos")