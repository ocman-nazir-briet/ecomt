# Generated by Django 4.1.3 on 2022-12-26 21:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0009_alter_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='status',
        ),
    ]
