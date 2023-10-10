from django.db import models

# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()


class RecipeStep(models.Model):
    number = models.PositiveSmallIntegerField()
    instruction = models.TextField()
    recipe = models.ForeignKey(
        "Recipe",
        related_name='steps',
        on_delete=models.CASCADE,
    )
    class Meta:
        ordering = ["number"]


class RecipeIngredient(models.Model):
    amount = models.CharField(max_length=150)
    item = models.CharField(max_length=150)
    recipe = models.ForeignKey(
        "Recipe",
        related_name='ingredients',
        on_delete=models.CASCADE,
    )
    class Meta:
        ordering = ["item"]
