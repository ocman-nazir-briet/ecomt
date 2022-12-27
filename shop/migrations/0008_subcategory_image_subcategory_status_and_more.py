# Generated by Django 4.1.3 on 2022-12-26 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0007_category_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='subcategory',
            name='image',
            field=models.ImageField(default=1, upload_to='subCat'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='subcategory',
            name='status',
            field=models.CharField(choices=[('Active', 'Active'), ('InActive', 'InActive')], default=1, max_length=16),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='subcategory',
            name='type',
            field=models.CharField(choices=[('Type1', 'Type1'), ('Type2', 'Type2')], default=1, max_length=16),
            preserve_default=False,
        ),
    ]