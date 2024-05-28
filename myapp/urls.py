from django.urls import path, include
from myapp import views

urlpatterns = [
    path('', views.homepage, name="Home page"),
    path('training', views.training, name="training"),

]
