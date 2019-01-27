from flask import Blueprint, Request
from flask_restful import Api, Resource, fields, marshal_with

from meep.models.user import User as UserModel
from meep.resources.project import project_fields

user = Blueprint('user', __name__, url_prefix='/user')
api = Api(user)

user_fields = {
    'username': fields.String,
    'email': fields.String,
    'projects': fields.List(fields.Nested(project_fields))
}

class User(Resource):
    def post(self, _id):
        pass

    @marshal_with(user_fields, envelope='user')
    def get(self, _id):
        user = UserModel.query.get(_id)
        print('*'*100)
        print(user.projects)
        print('*'*100)
        return user

    def put(self, _id):
        pass

    def delete(self, _id):
        pass


api.add_resource(User, '/<int:_id>')
