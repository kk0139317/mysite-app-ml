from django.shortcuts import render

# Create your views here.


def homepage(request):
    return render(request, 'home/layout.html')

def training(request):
    return render(request, 'dreambooth/training.html')