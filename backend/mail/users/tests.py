from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from rest_framework.authtoken.models import Token

class AccountsTest(APITestCase):
    # User = get_user_model() 

    def setUp(self):
        User = get_user_model()
        # We want to go ahead and originally create a user. 
        self.test_user = User.objects.create_user('test@example.com', 'testpassword')
        # URL for creating an account.
        self.create_url = reverse('user-create')
    
    def test_create_user(self):
        """
        Ensure we can create a new user and a valid token is created with it.
        """
        User = get_user_model()
        data = {
            'email': 'foobar@example.com',
            'password': 'somepassword'
        }
        response = self.client.post(self.create_url , data, format='json')
        user = User.objects.latest('id')
        # We want to make sure we have two users in the database..
        self.assertEqual(User.objects.count(), 2)
        # And that we're returning a 201 created code.
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # Additionally, we want to return the username and email upon successful creation.
        self.assertEqual(response.data['email'], data['email'])
        self.assertFalse('password' in response.data)

        token = Token.objects.get(user=user)
        self.assertEqual(response.data['token'], token.key)

    def test_create_user_with_short_password(self):
        User = get_user_model()
        """
        Ensure User is not created for password lengths less than 8.
        """
        data = {
            'email': 'foobarbaz@gmail.com',
            'password': 'foo'
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['password']),1)

    def test_create_user_with_no_password(self):
        User = get_user_model()
        """
        Ensure user is not created for password lengths less than 8
        """
        data = {
            'email': 'foobar@example.com',
            'password': ''
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['password']),1)

    def test_create_user_with_preexisting_email(self):
        """
        Ensure no User with preexisting email
        """
        User = get_user_model()
        data = {
            'email': 'test@example.com',
            'password': 'testuser'
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1) ###count how many users in DB have provided email...generating li
        self.assertEqual(len(response.data['email']), 1) ### verify len of list as 1

    def test_create_user_with_invalid_email(self):
        User = get_user_model()
        data = {
            'email':  'testing',
            'passsword': 'foobarbaz'
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['email']), 1)

    def test_create_user_with_no_email(self):
        User = get_user_model()
        data = {
                'email': '',
                'password': 'foobarbaz'
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['email']), 1)


    


    
    
    
    
    
    
    # def __init__(self, User):
    #       self.User = get_user_model()




    # def test_create_superuser(self):
    #     User = get_user_model()
    #     admin_user = User.objects.create_superuser(email='super@user.com', password='foo')
    #     self.assertEqual(admin_user.email, 'super@user.com')
    #     self.assertTrue(admin_user.is_active)
    #     self.assertTrue(admin_user.is_staff)
    #     self.assertTrue(admin_user.is_superuser)
    #     try:
    #         # username is None for the AbstractUser option
    #         # username does not exist for the AbstractBaseUser option
    #         self.assertIsNone(admin_user.username)
    #     except AttributeError:
    #         pass
    #     with self.assertRaises(ValueError):
    #         User.objects.create_superuser(
    #             email='super@user.com', password='foo', is_superuser=False)


    # def test_create_user(self):
    #     User = get_user_model()
    #     # We want to go ahead and originally create a user. 
    #     user = User.objects.create_user(email='normal@user.com', password='foo')
    #     self.assertEqual(user.email, 'normal@user.com')
    #     self.assertTrue(user.is_active)
    #     self.assertFalse(user.is_staff)
    #     self.assertFalse(user.is_superuser)
    #     try:
    #         # username is None for the AbstractUser option
    #         # username does not exist for the AbstractBaseUser option
    #         self.assertIsNone(user.username)
    #     except AttributeError:
    #         pass
    #     with self.assertRaises(TypeError):
    #         User.objects.create_user()
    #     with self.assertRaises(TypeError):
    #         User.objects.create_user(email='')
    #     with self.assertRaises(ValueError):
    #         User.objects.create_user(email='', password="foo")