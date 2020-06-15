from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from boiler_app.models import SiteUser


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteUser
        fields = (
            'email',
            'password',
            'first_name',
            'last_name',
            'city',
            'color',
        )

        extra_kwargs = {
            'email': {
                'validators': [UniqueValidator(queryset=SiteUser.objects.all())],
            }
        }

    def create(self, validated_data):
        new_site_user = SiteUser(**validated_data)
        new_site_user.username = validated_data['email']
        new_site_user.set_password(validated_data['password'])
        new_site_user.save()
        return new_site_user
