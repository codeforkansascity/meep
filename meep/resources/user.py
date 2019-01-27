from flask import Blueprint
from flask_restful import Api, Resource

user = Blueprint('user', __name__, url_prefix='/user')
api = Api(user)


class User(Resource):
    def post(self, _id):
        pass

    def get(self, _id):
        pass

    def put(self, _id):
        pass

    def delete(self, _id):
        pass


api.add_resource(User, '/<id>')
