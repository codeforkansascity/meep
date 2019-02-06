import sys
from datetime import date, timedelta
import random

from faker import Faker

from flask import current_app
from meep import create_app
from meep.models import db
from meep.models import Owner, Project
from config import DevelopmentConfig


def clear_db():
    app = create_app(DevelopmentConfig)
    with app.app_context():
        db.drop_all()
        db.session.commit()


def random_project(fake):
    project_types = ['Fleet', 'Fuel Station', 'Building']
    return Project(
        name=fake.company(),
        start_date=fake.date_between(
            start_date="-8y",
            end_date="-1y"
        ),
        duration=fake.time_delta(end_datetime=date.today()),
        project_type=random.choice(project_types),
        summary=fake.paragraph(nb_sentences=3, variable_nb_sentences=True, ext_word_list=None)
    )

def seed_db():


    app = create_app(DevelopmentConfig)
    print(app)
    print(app.config['SQLALCHEMY_DATABASE_URI'])
    fake = Faker()
    fake.seed(42)


    clear_db()

    with app.app_context():
        db.create_all()
        projects = [random_project(fake) for i in range(5)]
        print(projects)
        db.session.bulk_save_objects(projects)
        db.session.commit()

        print(Project.query.all())


if __name__ == '__main__':
    if 'drop' in sys.argv and sys.argv[1] == 'drop':
        clear_db()
    else:
        seed_db()
