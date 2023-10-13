from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.http import require_http_methods



from json import JSONEncoder

from .models import Recipe
# Create your views here.


class RecipeEncoder(JSONEncoder):
    model = Recipe
    properties = [
        "name",
        "description"
    ]


@require_http_methods(["GET"])
def list_recipes(request):
    if request.method == "GET":
        recipes = Recipe.objects.all()
        recipes_json = serializers.serialize("json", recipes)
        return JsonResponse(
            {"recipes": recipes_json},
        )
    else:
        response = JsonResponse(
            {"message": "unable to retrieve recipes"}
        )
        response.status_code = 400
        return response
