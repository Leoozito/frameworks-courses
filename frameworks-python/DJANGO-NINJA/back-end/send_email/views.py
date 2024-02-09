from django.shortcuts import render
from send_email.forms import ReviewFormulario
from django.views.generic.edit import FormView
from django.forms.models import model_to_dict
from django.http import HttpResponse

class ReviewEmailView(FormView):
    template_name = 'review.html'
    form_class = ReviewFormulario

    def form_valid(self, form):
        form.manda_email()
        msg = "Obrigado, seu email foi recebido"
        return HttpResponse(msg)