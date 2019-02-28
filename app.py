from flask import Flask, g

import database
from routes.project import project


def create_app(config_mode='test'):

    app = Flask(__name__)

    if config_mode == 'prod':
        app.config['DATABASE'] = 'meep'
    elif config_mode == 'dev':
        app.config['DEBUG'] = True
        app.config['DATABASE'] = 'meep'
    elif config_mode == 'test':
        app.config['DEBUG'] = True
        app.config['TESTING'] = True
        app.config['DATABASE'] = 'meep'
    else:
        raise ValueError(f'Invalid config mode: {config_mode}.')

    # connect to database
    with app.app_context():
        if 'db_conn' not in g:
            g.db_conn = database.connect(app.config['DATABASE'])

    # app.register_blueprint(test)
    app.register_blueprint(project)

    return app
