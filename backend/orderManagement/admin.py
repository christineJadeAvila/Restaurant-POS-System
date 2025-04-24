from django.contrib import admin
from .models import C_Order, Order_Line, Product, Product_Category

# Register your models here.
admin.site.register(C_Order)
admin.site.register(Order_Line)
admin.site.register(Product)
admin.site.register(Product_Category)
