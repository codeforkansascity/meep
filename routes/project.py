import json

from flask import Blueprint, request
import pyodbc

from database import connect, create_sql_command

connection = connect()
cursor = connection.cursor()

project = Blueprint('project', __name__, url_prefix='/projects')

get_project_by_id = create_sql_command('get_project_by_id')
post_project = create_sql_command('post_project')
delete_project = create_sql_command('delete_project')
update_project = create_sql_command('update_project')
get_projects = create_sql_command('get_projects')


@project.route('', methods=['GET', 'POST'])
def post_project_view():
    if request.method == 'GET':
        res = get_projects('meep')
        return json.dumps(res, default=str), 200
    elif request.method == 'POST':
        data = request.get_json()
        cols = ','.join(str(col) for col in data.keys())
        print(cols)
        vals = ','.join(repr(val) for val in data.values())
        print(vals)
        res = post_project('meep', cols=cols, vals=vals)
        return json.dumps(res, default=str), 200
    else:
        #raise an exception
        pass


@project.route('/<id>', methods=['GET', 'PUT', 'DELETE'])
def project_view(id):
    if request.method == 'GET':
        proj = get_project_by_id('meep', id=id, db='meep')
        return json.dumps(proj, default=str), 200

    elif request.method == 'PUT':
        data = request.get_json()
        updates = data.get('updates')
        updates = ','.join(f"{str(field)}={repr(value)}"
                           for field, value in data.items())
        res = update_project('meep', id=id, updates=updates)
        return json.dumps(res, default=str), 200

    elif request.method == 'DELETE':
        res = delete_project('meep', id=id)
        return json.dumps(res, default=str), 200

    else:
        # raise an exception
        pass
