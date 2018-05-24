from django.contrib import admin
from django.urls import path, include
from .routers import router
from django.views.generic import TemplateView
from article import views

urlpatterns = [
    path('', views.index, name='index'),
    path('rental/', include('article.urls')),
    path('admin/', admin.site.urls),
]
