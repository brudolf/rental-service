# Generated by Django 2.0.5 on 2018-05-21 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0007_auto_20180521_1003'),
    ]

    operations = [
        migrations.AddField(
            model_name='lightshaper',
            name='lightshaper_price',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='lightshaper',
            name='lightshaper_quantity',
            field=models.IntegerField(default=0),
        ),
    ]