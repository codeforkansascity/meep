from flask import Flask
from routes.test import test
from routes.project import project

app = Flask(__name__)

app.register_blueprint(test)
app.register_blueprint(project)
