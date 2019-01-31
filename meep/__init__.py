from flask import Flask

from config import DefaultConfig


# factory method for creating app objects
def create_app(config=DefaultConfig()):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(config)

    # initialize database and migrations
    from meep.models import db, migrate
    from meep.models import Address, AreaOfEffect
    from meep.models import Coordinate, FuelType
    from meep.models import Owner, Line, Project
    from meep.models import Radius, Site
    db.init_app(app)
    migrate.init_app(app, db)

    # register blueprints
    from meep.resources import project
    app.register_blueprint(project.project)

    return app
