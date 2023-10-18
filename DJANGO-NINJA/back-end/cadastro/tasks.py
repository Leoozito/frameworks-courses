from celery import shared_task

@shared_task
def initial(x, y):
    return x + y