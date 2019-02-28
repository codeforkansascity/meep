import json

from flask import Blueprint, request
import pyodbc

from database import connect, create_sql_command

connection = connect()
cursor = connection.cursor()

project = Blueprint('project', __name__, url_prefix='/project')

get_project_by_id = create_sql_command('get_project_by_id')


@project.route('/id/<id>', methods=['GET', 'PUT', 'DELETE'])
def project_view(id):
    if request.method == 'GET':
        proj = get_project_by_id('meep', id=id, db='meep')
        return json.dumps(proj, default=str), 200

    elif request.method == 'PUT':
        pass

    elif request.method == 'DELETE':
        pass


@project.route('/', methods=['POST'])
def post_project():
    if request.method == 'POST':
        pass
