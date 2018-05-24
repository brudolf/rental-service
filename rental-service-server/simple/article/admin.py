# -*- coding: utf-8 -*-

from django.contrib import admin

from .models import Bundle, Product, Rental, LightShaper, RentalItem

@admin.register(RentalItem)
class RentalItemAdmin(admin.ModelAdmin):
    list_display = ('rental_item_id',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'product_type')

@admin.register(Bundle)
class BundleAdmin(admin.ModelAdmin):
    list_display = ('bundle_title',)

@admin.register(LightShaper)
class LightShaperAdmin(admin.ModelAdmin):
    list_display = ('lightshaper_name', 'lightshaper_quantity')
    ordering = ['lightshaper_name']


class RentalInstanceInline(admin.StackedInline):
    model = RentalItem
    extra = 1

@admin.register(Rental)
class RentalAdmin(admin.ModelAdmin):
    list_display = ('user_name', 'rent_start', 'rent_end', 'rent_register')
    inlines = [RentalInstanceInline]
    class Media:
        js = ('/static/scripts/custom.js', )
