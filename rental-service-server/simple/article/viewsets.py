# -*- coding: utf-8 -*-

from rest_framework import viewsets
from .models import Bundle
from .serializers import BundleSerializer

class BundleViewSet(viewsets.ModelViewSet):
    queryset = Bundle.objects.all()
    serializer_class = BundleSerializer
