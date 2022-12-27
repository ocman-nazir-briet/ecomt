# Generated by Django 4.1.3 on 2022-12-27 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0010_remove_category_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='status',
            field=models.CharField(choices=[('Active', 'Active'), ('InActive', 'InActive')], default=1, max_length=16),
            preserve_default=False,
        ),
    ]
