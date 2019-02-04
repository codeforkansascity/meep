import json
import pytest
from datetime import date, timedelta

from config import TestingConfig
from meep import create_app
from meep.models import db, Project

@pytest.fixture
def app():
    app = create_app(TestingConfig)
    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()


def test_client(app):
    with app.test_client() as client:
        resp = client.get('/meep/api')
        data = resp.get_json()
        assert resp.status_code == 200
        assert data['sound'] == 'MEEP!'


def test_create_project(app):
    with app.test_client as client:
        body = {
            'name': 'Paint a picture',
            'start_date': '2017-02-03',
            'duration': '4 days, 1:23:45',
            'project_type': 'artistic',
            'summary': 'Paint me a picture of a boat.'
        }
        resp = client.post('/meep/api/', data=body)

        p = Project.query.filter_by(name='Paint a picture').first()
        assert p.name == body['name']
        assert p.start_date == date(2017, 2, 3)
        assert p.duration == timedelta(days=4, hours=1, minutes=23, seconds=45)
        assert p.project_type == timedelta['project_type']
        assert p.summary == body['summary']

def test_get_project(app):
    with app.test_client() as client:
        p = Project(
            id=42,
            name='clean bedroom',
            start_date=date(2019,2,3),
            duration=timedelta(7,2),
            project_type='domestic',
            summary='A boring chore that often gets put off for weeks at a time.'
        )
        db.session.add(p)
        db.session.commit()

        resp = client.get('/meep/api/projects/42')
        print(resp)
        data = resp.get_json()['project']
        print(data)
        assert resp.status_code == 200
        assert data['name'] == p.name
        assert data['start_date'] == str(p.start_date)
        assert data['duration'] == str(p.duration)
        assert data['project_type'] == p.project_type
        assert data['summary'] == p.summary

# def test_get_projects(app):
#     with app.test_client() as client:
#         resp = client.get('/meep/api/projects')
