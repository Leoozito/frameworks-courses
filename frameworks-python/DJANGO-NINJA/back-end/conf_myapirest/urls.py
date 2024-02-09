from django.contrib import admin
from django.urls import path, include
from .api import api
from send_email.views import ReviewEmailView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", api.urls),
    path("reviews/", ReviewEmailView.as_view(), name="reviews"),
]
