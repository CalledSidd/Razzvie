# Generated by Django 4.1.4 on 2023-01-07 09:53

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_follow'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
