# Generated by Django 2.0.5 on 2018-05-21 19:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0022_auto_20180521_1939'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rentalitem',
            name='rental_item_name',
        ),
    ]