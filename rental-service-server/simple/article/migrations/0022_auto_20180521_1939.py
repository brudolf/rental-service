# Generated by Django 2.0.5 on 2018-05-21 19:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0021_auto_20180521_1932'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rental',
            name='rental_item',
        ),
        migrations.AddField(
            model_name='rentalitem',
            name='rental',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='article.Rental'),
        ),
        migrations.AddField(
            model_name='rentalitem',
            name='rental_item_bundle',
            field=models.ManyToManyField(to='article.Bundle'),
        ),
        migrations.AddField(
            model_name='rentalitem',
            name='rental_item_lightshaper',
            field=models.ManyToManyField(to='article.LightShaper'),
        ),
        migrations.AddField(
            model_name='rentalitem',
            name='rental_item_product',
            field=models.ManyToManyField(to='article.Product'),
        ),
    ]
