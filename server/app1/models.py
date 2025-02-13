from django.db import models

# Create your models here.
class Corder(models.Model):
    orderID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    totalAmount = models.IntegerField()