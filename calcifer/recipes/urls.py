from django.urls import path
from .views import (
    list_recipes,
)
urlpatterns = [
    path("recipes/", list_recipes, name="list_recipes"),
]
