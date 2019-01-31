from flask import Blueprint
from flask_restful import Api, Resource, fields, marshal_with

from meep import models


project = Blueprint('project', __name__, url_prefix='/project')
api = Api(project)


project_fields = {
    'name': fields.String,

}


class Project(Resource):
    def post(self, _id):
        pass

    @marshal_with(project_fields, envelope='project')
    def get(self, _id):
        project = models.Project.query.get(_id)
        return project

    def put(self, _id):
        pass

    def delete(self, _id):
        pass


api.add_resource(Project, '/<int:_id>')
