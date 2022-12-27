from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import *

class userForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'phone', 'password1', 'password2']
        
class updateUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['avatar', 'name', 'email', 'gender', 'dob', 'bio', 'phone', 'address']


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'
        labels = {'name':'name', 'status':'status'}

class subCategoryForm(forms.ModelForm):
    class Meta:
        model = subCategory
        fields = '__all__'
        labels = {'name':'name', 'type':'type', 'status':'status', 'image':'image'}

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = '__all__'
