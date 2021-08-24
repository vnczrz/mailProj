from django.conf.urls import include, url
from django.urls import path
from . import views

urlpatterns = [
    url(r'api/users', views.UserCreate.as_view(), name='user-create'),
    path('rest-auth/', include('rest_auth.urls'))
]