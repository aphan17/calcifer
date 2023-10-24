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


@require_http_methods(["GET"])
def list_recipes(request):
    if request.method == "GET":
        recipes = Recipe.objects.all()
        return JsonResponse(
            {"recipes": recipes},
            encoder=RecipeEncoder,
            safe=False,
        )
    else:
        response = JsonResponse(
            {"message": "unable to retrieve recipes"}
        )
        response.status_code = 400
        return response
