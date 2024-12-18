from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def home_page(request):
    return JsonResponse({"message": "Welcome to the E-Learning Home Page"})