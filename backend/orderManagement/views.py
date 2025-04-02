from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import C_OrderSerializer, UserSerializer, ProductSerializer, Product_CategorySerializer, PaymentSerializer, Order_LineSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import C_Order, Product, Product_Category, Payment, Order_Line

import rembg
import numpy as np
from io import BytesIO
from django.core.files.base import ContentFile
from PIL import Image

# Create your views here.

# ORDER VIEWS
class C_OrderListCreate(generics.ListCreateAPIView):
    serializer_class = C_OrderSerializer
    permission_classes = [IsAuthenticated]
   
    def get_queryset(self):
        return C_Order.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class OrderDelete(generics.DestroyAPIView):
    serializer_class = C_OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return C_Order.objects.all()  

# PRODUCT VIEWS
class ProductListCreate(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    queryset = Product.objects.all()

    def perform_create(self, serializer):
        product = serializer.save()
        
        # BACKGROUND REMOVAL
        img = product.image

        # Load the input image 
        inputImage = Image.open(img)
        inputImage = inputImage.convert('RGBA')  # Ensure it's in RGBA mode
        inputArray = np.array(inputImage)  # Convert to NumPy array

        # Remove background
        outputArray = rembg.remove(inputArray)
        outputImage = Image.fromarray(outputArray)  # Convert back to PIL Image

        # Save outputImage to a byte stream
        image_io = BytesIO()
        outputImage.save(image_io, format="PNG")  # Save as PNG to preserve transparency
        image_content = ContentFile(image_io.getvalue(), name=img.name)

        # Save the processed image back to the model
        product.image.save(img.name, image_content, save=True)
        

class ProductRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

class Order_LineListCreate(generics.ListCreateAPIView):
    queryset = Order_Line.objects.all()
    serializer_class = Order_LineSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

# CATEGORY VIEWS

class Product_CategoryListCreate(generics.ListCreateAPIView):
    serializer_class = Product_CategorySerializer
    permission_classes = [IsAuthenticated]

    queryset = Product_Category.objects.all()

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]