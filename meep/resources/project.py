from datetime import strptime, date, timedelta

from flask import Blueprint, request
from flask_restful import Api, Resource, fields, marshal_with
from flask_restful import reqparse

from meep import models


project = Blueprint('project', __name__, url_prefix='/meep/api/projects')
api = Api(project)


project_fields = {
    'name': fields.String,
    'start_date': fields.String,
    'duration': fields.String,
    'project_type': fields.String,
    'summary': fields.String
}


class Project(Resource):
    @marshal_with(project_fields, envelope='project')
    def get(self, id):
        project = models.Project.query.get(id)
        return project

    def put(self, id):
        pass

    def delete(self, id):
        pass


class ProjectList(Resource):
    def get():
        pass

    def post():
        data = request.get_json()
        pass



class ProjectSitesList(Resource):
    def get():
        pass


class ProjectOwnersList(Resource):
    def get():
        pass


api.add_resource(Project, '/<int:id>')
api.add_resource(ProjectList, '/')
api.add_resource(ProjectSitesList, '/<int:id>/sites')
api.add_resource(ProjectOwnersList, '/<int:id>/owners')
