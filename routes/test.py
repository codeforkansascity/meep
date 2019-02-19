from flask import Blueprint

test = Blueprint('test', __name__)

@test.route('/test')
def test_route():
    return "It worked!"
