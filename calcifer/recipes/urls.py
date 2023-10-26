from django.urls import path
from .views import (
    list_recipes, recipe_detail
)
urlpatterns = [
    path("recipes/", list_recipes, name="list_recipes"),
    path("recipes/<int:id>/", recipe_detail, name="recipe_detail")
]
