from django.shortcuts import render, redirect, HttpResponse
from django.db.models import Q
from .models import *
from .forms import * 
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required(login_url='/login')
def home(request):
    return render(request, 'admin-category.html')

@login_required(login_url='/login')
def product(request):
    return render(request, 'add-deal.html')


def loginUser(request):
    page = 'login'
    if request.method=='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username)

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'Invalid Username')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, 'Logged in Successfully')
            return redirect('home')
        else:
            messages.error(request, 'Invalid Credentials')
    return render(request, 'signin-admin.html', {'page':page})
            

def logoutUser(request):
    logout(request)
    return redirect('home')

def registerUser(request):
    form = userForm()
    if request.method == 'POST':
        form = userForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            return redirect('login')
        else:
            messages.error(request, 'Invalid Details........')
    return render(request, 'signin-admin.html', {'form':form})


def addCat(request):
    form1=CategoryForm()
    if request.method=="POST":
        form = CategoryForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
        else:
            messages.error(request, 'Inavlid Input')
    return render(request, 'admin-category.html', {'form1':form1})

def addSubCat(request):
    form2=subCategoryForm()
    if request.method=="POST":
        form = subCategoryForm(request.POST, request.FILES)
        print(form)
        if form.is_valid():
            form.save()
        else:
            messages.error(request, 'Inavlid Input')
    return render(request, 'admin-category.html', {'form2':form2})


def addProduct(request):
    form3=ProductForm()
    if request.method=="POST":
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('product')
        else:
            messages.error(request, 'Inavlid Input')
    return render(request, 'addProduct.html', {'form3':form3})


