# -*- coding: utf-8 -*-

from django.db import models

class LightShaper(models.Model):
    lightshaper_id = models.AutoField(primary_key=True)
    lightshaper_name = models.CharField('Fényformáló neve', max_length=250)
    lightshaper_quantity = models.IntegerField('Fényformáló darab', default=0)
    lightshaper_price = models.IntegerField('Fényformáló ár', default=0)

    def __str__(self):
        return self.lightshaper_name + ' ' + str(self.lightshaper_quantity) + 'db'


class Product(models.Model):
    PRODUCT_TYPES = (
        ( 'Állvány', 'Állvány'),
        ( 'Vaku', 'Vaku'),
        ( 'Slider', 'Slider'),
        ( 'Szett', 'Szett'),
        ( 'Fénymérő', 'Fénymérő')
    )

    #lightshaper = LightShaper.objects.all()
    #lightShaperList = [(val.lightshaper_id, val.lightshaper_name) for val in lightshaper]
    #lightShaperTuple = tuple(lightShaperList)

    PRODUCT_TYPES_CAT = (
        ('Állvány', (
                ('Földi', 'Földi'),
                ('Basic', 'Basic'),
                ('Boom', 'Boom'),
            )
        ),
        ('Vaku', (
                ('Canon', 'Canon'),
                ('Nikon', 'Nikon'),
            )
        ),
        #('Fényformáló', lightShaperTuple),
    )

    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField('Termék neve', max_length=250)
    product_type = models.CharField('Termék típusa', max_length=250, choices=PRODUCT_TYPES, default='Állvány')
    product_type_cat = models.CharField('Termék típus kategória', max_length=250, choices=PRODUCT_TYPES_CAT, blank=True)
    product_quantity = models.IntegerField('Termék darabszám')
    product_price = models.IntegerField('Termék ár')

    def __str__(self):
        return self.product_name + ' ' + str(self.product_quantity) + 'db'


class Bundle(models.Model):
    bundle_id = models.AutoField(primary_key=True)
    bundle_title = models.CharField('Szett neve', max_length=250)
    bundle_body = models.TextField('Szett tartalma', default=None)
    bundle_price = models.IntegerField('Szett ár', default=0)
    bundle_lightshaper = models.ManyToManyField(LightShaper)
    bundle_product = models.ManyToManyField(Product)

    def __str__(self):
        return self.bundle_title


class Rental(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField('Bérlő neve', max_length=250)
    user_phone = models.IntegerField('Bérlő telefonszáma')
    rent_register = models.CharField('Bérlést felvette', max_length=250)
    rent_start = models.DateField('Bérlés kezdete')
    rent_end = models.DateField('Bérlés vége')
    returned = models.BooleanField('Visszahozva', default=False)
    #rental_item = models.ManyToManyField(RentalItem)

class RentalItem(models.Model):
    ITEM_TYPES = (
        ( '-------', '-------'),
        ( 'Fényformáló', 'Fényformáló'),
        ( 'Szett', 'Szett'),
        ( 'Termék', 'Termék'),
    )

    rental = models.ForeignKey(Rental, related_name='items', on_delete=models.CASCADE, default=0)
    rental_item_id = models.AutoField(primary_key=True)
    rentel_item_type = models.CharField('Termék típusa', max_length=250, choices=ITEM_TYPES, default="-------")
    rental_item_lightshaper = models.ManyToManyField(LightShaper, blank=True)
    rental_item_bundle = models.ManyToManyField(Bundle, blank=True)
    rental_item_product = models.ManyToManyField(Product, blank=True)
    rental_item_quantity = models.IntegerField('darabszám')


    class Meta:
        unique_together = ('rental', 'rental_item_id')
