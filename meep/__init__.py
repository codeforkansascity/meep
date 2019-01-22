from flask import Flask

# factory method for creating app objects
def create_app(config_object):
    app = Flask(__name__)
    app.config.from_object(config_object) #some possible classes for config_object are defined in config.py

    #initialize database
    from meep.models import db
    db.init_app(app)

    #initialize routing resources
    from meep.resources import api
    api.init_app(app)
