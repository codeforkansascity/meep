import os

basedir = os.path.abspath(os.path.dirname(__file__))


class DefaultConfig:
    DEBUG = False
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(DefaultConfig):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(basedir, 'database', 'dev.db')}"


class TestingConfig(DefaultConfig):
    TESTING = True
    BCRYPT_LOG_ROUNDS = 4
    WTF_CSRF_ENABLED = False
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(basedir, 'database', 'test.db')}"
