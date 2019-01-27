import tempfile

import pytest

from meep.models.project import Project
from meep.models.user import User
from meep.models import db
from meep import create_app
from config import TestingConfig


# read in SQL for populating test data
with open(os.path.join(os.path.dirname(__file__), 'data.sql'), 'rb') as f:
    _data_sql = f.read().decode('utf8')


@pytest.fixture
def app():
    db_fd, db_path = tempfile.mkstemp()
    app = create_app(TestingConfig)
    with app.app_context():
        
