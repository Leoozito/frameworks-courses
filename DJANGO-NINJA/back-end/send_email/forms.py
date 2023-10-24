from django import forms
from .tasks import mandar_review_email_taks
class ReviewFormulario(forms.Form):
    name = forms.CharField(label="Nome", min_length=4, max_length=50, widget=forms.TextInput(
       attrs={'class': 'form-control mb-3', 'placeholder': 'Nome', 'id': 'forms-nome'}
    ))
    email = forms.EmailField(max_length=200, widget=forms.TextInput(
        attrs={'class': 'form-control mb-3', 'placeholder': 'E-mail', 'id': 'forms-email'}
    ))
    review = forms.CharField(label="Review", widget=forms.Textarea(
        attrs={'class': 'form-control', 'rows': '5'}
    ))

    def manda_email(self):
        mandar_review_email_taks.delay(
            self.cleaned_data['name'], self.cleaned_data['email'], self.cleaned_data['review']
        )