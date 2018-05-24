# -*- coding: utf-8 -*-

from rest_framework import routers
from article.viewsets import BundleViewSet

router = routers.DefaultRouter()
router.register('bundle', BundleViewSet)
