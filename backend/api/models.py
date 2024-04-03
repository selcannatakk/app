from django.db import models


class ToDo(models.Model):
    body = models.CharField(max_length=500)
    completed = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body
