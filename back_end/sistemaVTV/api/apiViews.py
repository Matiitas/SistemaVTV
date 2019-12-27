from django.contrib.auth.models import User
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import *

#Usuario Viewset
#GenericViewSet no define acciones (endpoints) pero si define permisos, serializador y queryset
class UsuarioViewSet(viewsets.GenericViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.turnos.all()

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class RegistrarEndPoint(viewsets.GenericViewSet):
    serializer_class = UsuarioCompletoSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class RegistrarEndPoint(viewsets.GenericViewSet):
    serializer_class = UsuarioCompletoSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class LoguearEndPoint(viewsets.GenericViewSet):
    serializer_class = LoguearSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        usuario_completo = DetalleUsuario.objects.filter(usuario__id=user.id)
        return Response({
            "user": UsuarioCompletoSerializer(usuario_completo.first(), context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })