from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    genderChoice=(
        ('M','Male'),
        ('F','Female'),
        ('O','Other'),
    )
    name = models.CharField(max_length=25)
    email = models.EmailField(max_length=50)
    gender = models.CharField(max_length=25, choices=genderChoice)
    dob = models.DateField(null=True)
    phone = models.CharField(max_length=15)
    address = models.TextField(max_length=125)
    bio = models.TextField(max_length=500)
    avatar = models.ImageField(upload_to='avatars', default='nopic.jpg')
    status = models.BooleanField(default=True)
    

    def __str__(self):
        return self.username

class Category(models.Model):
    st_choice=(('Active', 'Active'),('InActive', 'InActive'))
    name = models.CharField(max_length=64)
    status = models.CharField(max_length=16, choices=st_choice)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = "Product Categories"
        ordering = ['name']

class subCategory(models.Model):
    st_choice=(('Active', 'Active'),('InActive', 'InActive'))
    type_choice=(('Type1', 'Type1'),('Type2', 'Type2'))

    name = models.CharField(max_length=64)
    type = models.CharField(max_length=16)
    status = models.CharField(max_length=16)
    image = models.ImageField(upload_to="subCat")

    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = "Product sub-Categories"
        ordering = ['name']

class Product(models.Model):
    title = models.CharField(max_length=128)
    des = models.TextField()
    price = models.IntegerField()
    image = models.ImageField(upload_to="avatars")
    date = models.DateTimeField(auto_now=True)
    Category = models.ForeignKey("Category", on_delete=models.RESTRICT)
    subCategory = models.ForeignKey("subCategory", on_delete=models.RESTRICT)

    def __str__(self):
        return f"{self.title} -- {self.price}"
    class Meta:
        verbose_name_plural = "List of Products"
        ordering = ['-id']