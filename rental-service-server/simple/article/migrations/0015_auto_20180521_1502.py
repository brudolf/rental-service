# Generated by Django 2.0.5 on 2018-05-21 15:02

from django.db import migrations


class Migration(migrations.Migration):
    atomic = False
    dependencies = [
        ('article', '0014_article_article_product'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Article',
            new_name='Bundle',
        ),
        migrations.RenameField(
            model_name='bundle',
            old_name='article_body',
            new_name='bundle_body',
        ),
        migrations.RenameField(
            model_name='bundle',
            old_name='article_heading',
            new_name='bundle_heading',
        ),
        migrations.RenameField(
            model_name='bundle',
            old_name='article_id',
            new_name='bundle_id',
        ),
        migrations.RenameField(
            model_name='bundle',
            old_name='article_lightshaper',
            new_name='bundle_lightshaper',
        ),
        migrations.RenameField(
            model_name='bundle',
            old_name='article_product',
            new_name='bundle_product',
        ),
    ]
