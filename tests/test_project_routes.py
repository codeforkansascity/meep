import json

import pytest
import pymysql

from app import create_app


@pytest.fixture()
def client():
    app = create_app(config_mode='test')
    client = app.test_client()
    ctx = app.app_context()
    ctx.push()

    yield client

    ctx.pop()


def test_get_project_by_id(client):
    res = client.get('/project/35')
    assert res.status_code == 200
    data = json.loads(res.get_data(as_text=True))[0]
    assert data['name'] == 'test'
    assert data['description'] == 'this is a test'
