# Generated by Django 2.0.5 on 2018-05-21 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0010_auto_20180521_1126'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lightshaper',
            name='lightshaper_article',
        ),
        migrations.AddField(
            model_name='article',
            name='article_lightshaper',
            field=models.ManyToManyField(to='article.LightShaper'),
        ),
    ]
