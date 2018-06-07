# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from article.models import Bundle, LightShaper, Rental, Product
from article.serializers import BundleSerializer, LightShaperSerializer, RentalSerializer, ProductSerializer

def index(request):
    return HttpResponse('Hello World')


@csrf_exempt
def products_list(request):
    if request.method == 'GET':
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def lightShaper_list(request):
    if request.method == 'GET':
        lightshaper = LightShaper.objects.all()
        serializer = LightShaperSerializer(lightshaper, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = LightShaperSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)



@csrf_exempt
def rental_list(request):

    if request.method == 'GET':
        rental = Rental.objects.all()
        serializer = RentalSerializer(rental, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = RentalSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def bundle_list(request):

    if request.method == 'GET':
        bundles = Bundle.objects.all()
        serializer = BundleSerializer(bundles, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = BundleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def bundle_detail(request, bundle_id):

    try:
        bundle = Bundle.objects.get(pk=bundle_id)
    except Bundle.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = BundleSerializer(instance=bundle)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = BundleSerializer(bundle, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        bundle.delete()
        return HttpResponse(status=204)
