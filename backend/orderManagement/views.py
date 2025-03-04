from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import C_OrderSerializer, UserSerializer, ProductSerializer, Product_CategorySerializer, PaymentSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import C_Order, Product, Product_Category, Payment, Order_Line

# Create your views here.

# ORDER VIEWS

class C_OrderListCreate(generics.ListCreateAPIView):
    serializer_class = C_OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return user

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(self.request.user)
        else:
            print(serializer.errors)

class OrderDelete(generics.DestroyAPIView):
    serializer_class = C_OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return C_Order.objects.filter(user)


# PRODUCT VIEWS

class ProductListCreate(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    queryset = Product.objects.all()

    # def get_queryset(self):
    #     user = self.request.user
    #     return user

    # def perform_create(self, serializer):
    #     if serializer.is_valid():
    #         serializer.save(self.request.user)
    #     else:
    #         print(serializer.errors)



# CATEGORY VIEWS

class Product_CategoryListCreate(generics.ListCreateAPIView):
    serializer_class = Product_CategorySerializer
    permission_classes = [IsAuthenticated]

    queryset = Product_Category.objects.all()

    # def get_queryset(self):
    #     user = self.request.user
    #     return user

    # def perform_create(self, serializer):
    #     if serializer.is_valid():
    #         serializer.save(self.request.user)
    #     else:
    #         print(serializer.errors)



class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]