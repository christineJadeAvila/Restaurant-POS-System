from django.contrib import admin
from .models import C_Order, Order_Line

# Register your models here.
admin.site.register(C_Order)
admin.site.register(Order_Line)
