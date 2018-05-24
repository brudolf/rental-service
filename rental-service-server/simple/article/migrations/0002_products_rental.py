# Generated by Django 2.0.5 on 2018-05-19 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False)),
                ('product_name', models.CharField(max_length=250)),
                ('product_type', models.IntegerField(choices=[(0, 'Állvány'), (1, 'Vaku'), (2, 'Fényformáló'), (3, 'Szett')])),
                ('product_type_cat', models.CharField(max_length=250)),
                ('product_quantity', models.IntegerField()),
                ('product_price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Rental',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('user_name', models.CharField(max_length=250)),
                ('user_phone', models.IntegerField()),
                ('rent_register', models.CharField(max_length=250)),
                ('rent_title', models.CharField(max_length=250)),
                ('rent_start', models.DateField()),
                ('rent_end', models.DateField()),
                ('rent_product', models.ManyToManyField(to='article.Products')),
            ],
        ),
    ]
