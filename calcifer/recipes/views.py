from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.http import require_http_methods
import json


from common.json import ModelEncoder

from .models import Recipe
# Create your views here.


class RecipeEncoder(ModelEncoder):
    model = Recipe
    properties = [
        "name",
        "description"
    ]


@require_http_methods(["GET", "POST"])
def list_recipes(request):
    if request.method == "GET":
        recipes = Recipe.objects.all()
        return JsonResponse(
            {"recipes": recipes},
            encoder=RecipeEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            recipe = Recipe.objects.create(**content)
            return JsonResponse(
                recipe,
                encoder=RecipeEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "unable to create recipe"}
            )
            response.status_code = 400
            return response



@require_http_methods(["GET", "DELETE"])
def show_recipe(request, id):
    if request.method == "GET":
        try:
            recipe = Recipe.objects.get(id=id)
            return JsonResponse(
                recipe,
                encoder=RecipeEncoder,
                safe=False
            )
        except Recipe.DoesNotExist:
            response = JsonResponse(
                {"message": "recipe does not exist"}
            )
            response.status_code = 404
            return response
    else:
        try:
            recipe = Recipe.objects.get(id=id)
            recipe.delete()
            return JsonResponse(
                {"message":"recipe deleted"}
            )
        except Recipe.DoesNotExist:
            response = JsonResponse (
                {"message": "recipe does not exist"}
            )
            response.status_code = 404
            return response
