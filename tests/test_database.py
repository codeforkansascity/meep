import pytest

from app import create_app
from database.connect import connect

@pytest.fixture()
def client():
    flask_app = create_app('test')

    # Flask provides a way to test your application by exposing the Werkzeug test Client
    # and handling the context locals for you.
    testing_client = flask_app.test_client()

    # Establish an application context before running the tests.
    ctx = flask_app.app_context()
    ctx.push()

    yield testing_client  # this is where the testing happens!

    ctx.pop()


def test_database_connection():
    connection = connect()
    assert connection is not None
    cursor = connection.cursor()
    assert cursor is not None
    sql = '''
        INSERT INTO project (name, description, photo_url, website_url, year)
        VALUES ('test', 'this is a test', 'www.some0url.com', 'www.another.com', 1999);
    '''
    assert cursor.execute(sql) == 1
    sql = '''
        SELECT * FROM project;
    '''
    assert cursor.execute(sql) == 1
    record = cursor.fetchone()
    assert record['name'] == 'test'
    assert record['description'] == 'this is a test'


def test_get_sql():
    from queries.queries import get_sql
    filepath = 'tests/practice.sql'
    sql = get_sql(filepath)
    assert sql == "SELECT * FROM practice;"
