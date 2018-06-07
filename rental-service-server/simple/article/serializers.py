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
    rental_item_lightshaper = LightShaperSerializer(required=False, many=True)
    rental_item_product = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = RentalItem
        fields = ('rental', 'rental_item_id', 'rentel_item_type', 'rental_item_lightshaper', 'rental_item_bundle', 'rental_item_product', 'rental_item_quantity')
    #
    #
    # def create(self, validated_data):
    #     rental_item_lightshaper_data = validated_data.pop('rental_item_lightshaper')
    #     group = Group.objects.create(**validated_data)
    #     for person in person_data:
    #         d=dict(person)
    #         Membership.objects.create(group=group, person=d['person'])
    #     return group
    #
    #
    #
    # def create(self, validated_data):
    #     rental_item_lightshaper = validated_data.pop('rental_item_lightshaper')
    #     LightShaperItem = LightShaper.objects.create(**validated_data)
    #
    #     for lightShaperItem in rental_item_lightshaper:
    #         lightShaperItem['rental_item_lightshaper'] = LightShaperItem
    #         LightShaper.objects.create(**lightShaperItem)
    #     return LightShaperItem



class RentalSerializer(serializers.ModelSerializer):
    items = RentalItemSerializer(required=True, many=True)


    class Meta:
        model = Rental
        fields = ('user_id', 'user_name', 'user_phone', 'rent_register', 'rent_start', 'rent_end', 'items', 'returned')

    # works
    # def create(self, validated_data):
    #     items = validated_data.pop('items')
    #     rentalItem = Rental.objects.create(**validated_data)
    #
    #     for item in items:
    #         item['items'] = rentalItem
    #         RentalItem.objects.create(**item)
    #     return rentalItem


      #
      # def create(self, validated_data):
      #   person_data = validated_data.pop('memberships')
      #   group = Group.objects.create(**validated_data)
      #   for person in person_data:
      #       d=dict(person)
      #       Membership.objects.create(group=group, person=d['person'])
      #   return group



    def create(self, validated_data):
        items = validated_data.pop('items')
        rentalItem = Rental.objects.create(**validated_data)
        #rentalItem.pop('rental_item_lightshaper')
        #

        for item in items:
            item['items'] = rentalItem
            #rental_item_lightshaper_data = item['rental_item_lightshaper']
            rental_item_lightshaper_data = item.pop('rental_item_lightshaper')
            #print(rental_item_lightshaper_data)
            print(item)
            rItem = RentalItem.objects.create(**item)

            for lshaper in rItem:
                d=dict(lshaper)
                LightShaper.objects.create(rItem=rItem, lshaper=d['lshaper'])
            #item['rental_item_lightshaper'] = rItem

        return rentalItem





#return rItem




    #
    # def create(self, validated_data):
    #     items_data = validated_data.pop('items')
    #     instance = Rental.objects.create(**validated_data)
    #     RentalItem.objects.create(rental=instance, **items_data)
    #     return instance
