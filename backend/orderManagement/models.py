from django.db import models

# Create your models here.
class C_Order(models.Model):
    order_ID = models.AutoField(primary_key=True)
    customer_name = models.CharField(max_length=50)
    orderDate = models.DateTimeField(auto_now_add=True)
    totalAmount = models.IntegerField()

    def __str__(self):
        return f"Order id: {self.order_ID}"
        

class Product_Category(models.Model):
    category_ID = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=100)

    def __str__(self):
        return self.category_name

class Product(models.Model):
    product_ID = models.AutoField(primary_key=True)
    category_ID = models.ForeignKey(Product_Category, on_delete=models.CASCADE, related_name='category')
    product_name =models.CharField(max_length=100, unique=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='products/', default='banana.svg')
    is_archived = models.BooleanField(default=False)

    def __str__(self):
        return f"Product id: {self.product_ID}"

class Order_Line(models.Model):
    orderLine_ID = models.AutoField(primary_key=True)
    order_ID = models.ForeignKey(C_Order, on_delete=models.CASCADE, related_name="order_lines")
    product_ID = models.ForeignKey(Product ,on_delete=models.CASCADE, related_name="products")
    product_quantity = models.IntegerField()
    total = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"The order line id is: {self.orderLine_ID}, and the product id is: {self.product_ID}"
    
class Payment(models.Model):
    payment_ID = models.AutoField(primary_key=True)
    order_ID = models.ForeignKey(C_Order, on_delete=models.PROTECT, related_name='orders')
    payment_method = models.CharField(max_length=50)
    payment_status = models.CharField(
        max_length=50
    )
    total_amount_paid = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.payment_method



