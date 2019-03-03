import json
import random

import pytest
import pymysql

from app import create_app
from database import connect


# FIXTURES

@pytest.fixture()
def client():
    app = create_app(config_mode='test')
    client = app.test_client()
    ctx = app.app_context()
    ctx.push()

    yield client

    ctx.pop()


@pytest.fixture()
def create_test_record():

    def _create_test_record(project=None):
        if project is None:
            project = test_project
            project['name'] = random_project_name()
        cxn = connect()
        cur = cxn.cursor()
        cols, vals = zip(*project.items())
        cols = f"({','.join(str(c) for c in cols)})"
        vals = f"({','.join(repr(v) for v in vals)})"
        insert_sql = f"INSERT INTO project {cols} VALUES {vals}"
        cur.execute(insert_sql)
        cxn.commit()
        select_id_sql = (
            f"SELECT id FROM project "
            f"WHERE name = {repr(project.get('name'))}"
        )
        cur.execute(select_id_sql)
        id = cur.fetchone().get('id')
        cxn.close()
        return id
    return _create_test_record


@pytest.fixture()
def delete_test_record():

    def _delete_test_record(project=None):
        if project is None:
            project = test_project

        cxn = connect()
        cur = cxn.cursor()
        del_sql = f"DELETE FROM project WHERE name = {repr(project.get('name'))}"
        cur.execute(del_sql)
        cxn.commit()
        cxn.close()
    return _delete_test_record


@pytest.fixture()
def clear_db():

    def _clear_db():
        cxn = connect()
        cur = cxn.cursor()
        sql = f"DELETE FROM project WHERE 1 = 1"
        cur.execute(sql)
        cxn.commit()
        cxn.close()
    return _clear_db


# TESTS


def test_get_project_by_id(client, create_test_record, delete_test_record):
    id = create_test_record()
    try:
        res = client.get(f'/projects/{id}')
        assert res.status_code == 200
        data = json.loads(res.get_data(as_text=True))[0]
        assert test_project == {k: v for k, v in data.items()
                                if v is not None and k != 'id'}
    finally:
        delete_test_record()


def test_post_project(client, delete_test_record):
    try:
        res = client.post(
            '/projects',
            json=test_project
        )
        assert res.status_code == 200
        # get newly created record from the database
        cxn = connect()
        cur = cxn.cursor()
        select_sql = f"SELECT * FROM project WHERE name = '{test_project.get('name')}'"
        cur.execute(select_sql)
        rec = cur.fetchone()
        assert test_project == {k: v for k, v in rec.items()
                                if v is not None and k != 'id'}
    finally:
        delete_test_record()


def test_delete_project(client, create_test_record, delete_test_record):
    id = create_test_record()
    try:
        # use the route to delete the project
        res = client.delete(f'/projects/{id}')
        assert res.status_code == 200
        # check that the record was deleted
        cxn = connect()
        cur = cxn.cursor()
        sql = "SELECT DISTINCT(name) FROM project"
        cur.execute(sql)
        test_name = test_project.get('name')
        for r in cur:
            assert test_name != r['name']
        cxn.close()
    finally:
        delete_test_record()


def test_update_project(client, create_test_record, delete_test_record):
    id = create_test_record()
    try:
        res = client.put(
                f'/projects/{id}',
                json=test_updates)
        assert res.status_code == 200
        # check the record was updated
        cxn = connect()
        cur = cxn.cursor()
        sql = f"SELECT * FROM project WHERE id = {id}"
        cur.execute(sql)
        rec = cur.fetchone()
        del rec['id']
        rec = {k: rec[k] for k in rec if rec[k] is not None}
        project = test_project.copy()
        updates = test_updates.copy()
        assert rec == {k: updates[k] if k in updates else project[k]
                       for k in set(updates) | set(project)}
    finally:
        delete_test_record()


def test_get_project_list(client, create_test_record, delete_test_record,
                          clear_db):
    clear_db()
    for r in project_list:
        create_test_record(r)
    res = client.get('/projects')
    assert res.status_code == 200
    data = json.loads(res.get_data(as_text=True))
    assert {r.get('name') for r in data} == {r.get('name') for r in project_list}
    for r in project_list:
        delete_test_record(r)



# TEST DATA

def random_project_name():
    return f'TEST_RECORD_{random.randint(100000, 999999)}'

test_project = {
    'name': random_project_name(),
    'description': 'Bacon ipsum dolor amet pig burgdoggen swine venison, t-bone strip steak pork belly ham hock turducken shank alcatra ribeye bacon ground round chicken. ',
    'gge_reduced': 42.0,
    'ghg_reduced': 42.42,
    'address': '123 Faker Lane',
    'city': 'Overland Park',
    'state': 'KS',
    'zip': 66209
}

test_updates = {
    'gge_reduced': 43.0,
    'photo_url': './some-photo.png'
}

project_list = [{'name': random_project_name()} for i in range(3)]
