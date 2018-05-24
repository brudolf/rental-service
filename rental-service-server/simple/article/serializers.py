# -*- coding: utf-8 -*-

from rest_framework import serializers
from .models import Bundle, Product, LightShaper, Rental, RentalItem

class LightShaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = LightShaper
        fields = ('lightshaper_id', 'lightshaper_name', 'lightshaper_quantity', 'lightshaper_price')

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('product_id', 'product_name', 'product_type', 'product_type_cat', 'product_quantity', 'product_price')

class BundleSerializer(serializers.ModelSerializer):
    bundle_lightshaper = LightShaperSerializer(many=True)
    bundle_product = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Bundle
        fields = ('bundle_id', 'bundle_title', 'bundle_body', 'bundle_price', 'bundle_lightshaper', 'bundle_product')

    def create(self, validated_data):
        tracks_data = validated_data.pop('lightshaper')
        bundle = Bundle.objects.create(**validated_data)
        for track_data in tracks_data:
            LightShaper.objects.create(bundle=bundle, **track_data)
        return bundle

class RentalItemSerializer(serializers.ModelSerializer):
    rental_item_bundle = BundleSerializer(many=True, read_only=True)
    rental_item_lightshaper = LightShaperSerializer(many=True)
    rental_item_product = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = RentalItem
        fields = ('rental', 'rental_item_id', 'rentel_item_type', 'rental_item_lightshaper', 'rental_item_bundle', 'rental_item_product', 'rental_item_quantity')

class RentalSerializer(serializers.ModelSerializer):
    items = RentalItemSerializer(many=True)
    class Meta:
        model = Rental
        fields = ('user_id', 'user_name', 'user_phone', 'rent_register', 'rent_start', 'rent_end', 'items')
