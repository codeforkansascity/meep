import os

basedir = os.path.abspath(os.path.dirname(__file__))

class DefaultConfig:
    DEBUG = False
    TESTING = False
    DATABASE_URI = f"sqlite:///{os.path.join(basedir, 'meep.db')}"

class DevelopmentConfig(DefaultConfig):
    DEBUG = True

class TestingConfig(DefaultConfig):
    TESTING = True
