# Generated by Django 4.1.4 on 2022-12-31 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_remove_useraccount_active_listings_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='gender',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]