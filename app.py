from flask import Flask
from routes.test import test

app = Flask(__name__)

app.register_blueprint(test)
