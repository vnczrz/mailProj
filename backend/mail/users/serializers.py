from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer): ##we are inheriting from a ModelSerializer, which automatically generates validators for the serializer based on the model
    
    ##we are stating that the type of this attribute is an EmailField and that 
    # it is required and should be unique amongst all User objects in our database.
    email = serializers.EmailField( 
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
                            validated_data['email'],
                            validated_data['password']
                            )
        return user

    ##This is stating that for our UserSerializer, the corresponding model is User and these 
    # are the fields that it contains. Now that we have our serializer, we’re ready to create the view!
    class Meta:
        model = User
        fields = ('id', 'email', 'password')