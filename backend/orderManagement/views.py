from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import C_OrderSerializer, UserSerializer, ProductSerializer, Product_CategorySerializer, PaymentSerializer, Order_LineSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import C_Order, Product, Product_Category, Payment, Order_Line

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
        return C_Order.objects.all()  # Make sure you're filtering correctly

# PRODUCT VIEWS
class ProductListCreate(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    queryset = Product.objects.all()

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