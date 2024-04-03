from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models


class ToDoViewSet(viewsets.ModelViewSet):
    queryset = models.ToDo.objects.all()
    serializer_class = serializers.ToDoSerializer
    