from django.urls import path
from . import views

urlpatterns = [
    path("orders/", views.C_OrderListCreate.as_view(), name="order-list"),
    path("orders/delete/<int:pk>/", views.OrderDelete.as_view(), name="delete-order"),

    path("products/", views.ProductListCreate.as_view(), name="product-list"),
    path("products/delete/<int:pk>", views.ProductListCreate.as_view(), name="product-list"),

    path("product-category/", views.Product_CategoryListCreate.as_view(), name="product-category-list"),
    path("products/delete/<int:pk>", views.ProductListCreate.as_view(), name="product-category-list"),

    


]