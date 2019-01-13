from app import app, db
from app.models import User, Admin, Project, Vehicle, Building, Infrastructure
from app.models import EmmissionsStatistic

@app.shell_context_processor
def make_shell_context():
    return {
        'db': db,
        'User': User,
        'Admin': Admin,
        'Project': Project,
        'Vehicle': Vehicle,
        'Building': Building,
        'Infrastructure': Infrastructure,
        'EmmissionsStatistic': EmmissionsStatistic
    }
