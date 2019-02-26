import json

from flask import Blueprint, request
import pyodbc

from database.connect import connect
from queries.queries import get_sql

connection = connect()
cursor = connection.cursor()

project = Blueprint('project', __name__, url_prefix='/project')


@project.route('/id/<id>', methods=['GET', 'PUT', 'DELETE'])
def project_view(id):
    if request.method == 'GET':
        sql = get_sql('get_project_by_id.sql')
        params = (id)
        result = json.dumps(cursor.execute(sql, params), default=str, indent=2)

    elif request.method == 'PUT':
        pass

    elif request.method == 'DELETE':
        pass


@project.route('/', methods=['POST'])
def post_project():
    if request.method == 'POST':
        pass
