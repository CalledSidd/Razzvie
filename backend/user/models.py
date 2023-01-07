from django.db import models
from accounts.models import UserAccount
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
import uuid

# Create your models here.


def posts(instance, filename):
    return 'post/{filename}'.format(filename = filename)

class BaseModel(models.Model):
    id      = models.UUIDField(primary_key=True,editable=False, default=uuid.uuid4)
    class Meta:
        abstract = True



class Post(BaseModel):
    user    = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    image   = ProcessedImageField(upload_to= posts, format = "JPEG", options={"quality":90}, processors=[ResizeToFit(width=1200, height=1200)])
    title   = models.TextField(max_length=80)
    reports = models.IntegerField(default=0)
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

class Follow(models.Model):
    following = models.ForeignKey(UserAccount, related_name='following', on_delete=models.CASCADE)
    follower  = models.ForeignKey(UserAccount,related_name='follower', on_delete=models.CASCADE)
    def __str__(self):
        return self.following.username

class Like(BaseModel):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name = 'likes')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} Like"
    
    class Meta:
        unique_together = (("user","post"),)
        ordering = ["-created_at"]

class Comment(BaseModel):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    comment = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.comment
    
    class Meta:
        ordering = ['-created_at']

