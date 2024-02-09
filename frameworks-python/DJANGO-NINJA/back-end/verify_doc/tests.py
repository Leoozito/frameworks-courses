import os.path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from django.test import TestCase
from django.template.loader import render_to_string

documento = os.path.splitext("email_message.txt")[0]
doc_pdf = f'{documento}.pdf'

cnv = canvas.Canvas(doc_pdf)
cnv.save()
