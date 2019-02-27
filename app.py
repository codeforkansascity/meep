from flask import Flask
from routes.test import test
from routes.project import project


def create_app(config_mode='test'):

    app = Flask(__name__)

    if config_mode == 'prod':
        pass
    elif config_mode == 'dev':
        app['DEBUG'] = True
    elif config_mode == 'test':
        app['DEBUG'] = True
        app['TESTING'] = True
    else:
        #throw error
        pass


    app.register_blueprint(test)
    app.register_blueprint(project)
