from flask import Blueprint
from flask_restful import Api, Resource


project = Blueprint('project', __name__, url_prefix='/project')
api = Api(project)


class Project(Resource):
    def post(self):
        pass

    def get(self):
        pass

    def put(self):
        pass

    def delete(self):
        pass


api.add_resource(Project, '/<id>')
