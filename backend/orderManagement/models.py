from django.db import models

# Create your models here.
class C_Order(models.Model):
    order_ID = models.AutoField(primary_key=True)
    orderDate = models.DateTimeField(auto_now_add=True)
    totalAmount = models.IntegerField()

    def __str__(self):
        return self.totalAmount

class Product_Category(models.Model):
    category_ID = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.description

class Product(models.Model):
    product_ID = models.AutoField(primary_key=True)
    category_ID = models.ForeignKey(Product_Category, on_delete=models.CASCADE, related_name='category')
    product_name =models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    prepTime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name

class Order_Line(models.Model):
    orderLine_ID = models.AutoField(primary_key=True)
    order_ID = models.ForeignKey(C_Order, on_delete=models.CASCADE, related_name="order_lines")
    product_ID = models.ForeignKey(Product_Category,on_delete=models.CASCADE)
    product_quantity = models.IntegerField()
    total = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.product_quantity
    
class Payment(models.Model):
    payment_ID = models.AutoField(primary_key=True)
    order_ID = models.ForeignKey(C_Order, on_delete=models.CASCADE, related_name='orders')
    payment_method = models.CharField(max_length=50)
    payment_status = models.CharField(max_length=50)
    total_amount_paid = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.payment_method



