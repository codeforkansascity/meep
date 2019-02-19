import os

basedir = os.path.abspath(os.path.dirname(__file__))


class DefaultConfig:
    DEBUG = False
    TESTING = False
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(basedir, 'meep', 'database', 'test.db')}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    REST_URL_PREFIX = "/meep"


class DevelopmentConfig(DefaultConfig):
    DEBUG = True


class TestingConfig(DefaultConfig):
    TESTING = True
    BCRYPT_LOG_ROUNDS = 4
    WTF_CSRF_ENABLED = False
