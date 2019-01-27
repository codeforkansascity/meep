from flask import Flask

from config import DefaultConfig


# factory method for creating app objects
def create_app(config=DefaultConfig()):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(config)

    # initialize database and migrations
    from meep.models import db, migrate
    import meep.models.project
    import meep.models.user
    db.init_app(app)
    migrate.init_app(app, db)

    # register blueprints
    from meep.resources import project, user
    app.register_blueprint(user.user)
    app.register_blueprint(project.project)

    return app
