from .email import send_review_email
from celery.utils.log import get_task_logger
from celery import shared_task

logger = get_task_logger(__name__)


@shared_task(name="send_review_email_task")
def mandar_review_email_taks(name, email, review):
    logger.info("Review de email enviado !!")
    return send_review_email(name, email, review)
