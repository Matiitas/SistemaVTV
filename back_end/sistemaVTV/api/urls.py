from rest_framework import routers
from .apiViews import *

router = routers.DefaultRouter()
router.register('usuarios', UsuarioViewSet, 'usuarios')
router.register('auth/registrar', RegistrarEndPoint, 'registrar')
router.register('auth/login', LoguearEndPoint, 'login')
urlpatterns = router.urls
