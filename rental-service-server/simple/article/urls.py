# -*- coding: utf-8 -*-

from django.urls import path
from . import views

urlpatterns = [
    path('', views.rental_list),
    path('lightshapers/', views.lightShaper_list),
    path('products/', views.products_list),
    path('bundles/', views.bundle_list),
    path('bundles/<int:bundle_id>/', views.bundle_detail),
]
