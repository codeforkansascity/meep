from flask import Blueprint
from flask_restful import Api, Resource, fields, marshal_with

from meep.models.project import Project as ProjectModel


project = Blueprint('project', __name__, url_prefix='/project')
api = Api(project)


project_fields = {
    'name': fields.String,
    'address': fields.String,
    'year': fields.Integer,
    'GGE_reduced': fields.Float,
    'GHG_reduced': fields.Float
}


class Project(Resource):
    def post(self, _id):
        pass

    @marshal_with(project_fields, envelope='project')
    def get(self, _id):
        project = ProjectModel.query.get(_id)
        return project

    def put(self, _id):
        pass

    def delete(self, _id):
        pass


api.add_resource(Project, '/<int:_id>')
