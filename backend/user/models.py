from django.db import models
from accounts.models import UserAccount
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
import uuid

# Create your models here.


def posts(instance, filename):
    return 'post/{filename}'.format(filename = filename)


class Post(models.Model):
    id      = models.UUIDField(primary_key=True,editable=False, default=uuid.uuid4)
    user    = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    image   = ProcessedImageField(upload_to= posts, format = "JPEG", options={"quality":90}, processors=[ResizeToFit(width=1200, height=1200)])
    title   = models.TextField(max_length=80)
    likes   = models.IntegerField(default=0)
    reports = models.IntegerField(default=0)
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

class Follow(models.Model):
    following = models.ForeignKey(UserAccount, related_name='following', on_delete=models.CASCADE)
    follower  = models.ForeignKey(UserAccount,related_name='follower', on_delete=models.CASCADE)
    def __str__(self):
        return self.following.username
    