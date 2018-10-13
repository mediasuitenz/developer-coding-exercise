from django.urls import path
from . import views

urlpatterns = [
    path('', views.posts, name='posts'),
    path('<slug:slug>/', views.post, name='post'),
]
