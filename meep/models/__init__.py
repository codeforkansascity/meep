from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate(db)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    start_date = db.Column(db.Date)
    duration = db.Column(db.Interval)
    image_url = db.Column(db.String(200))
    project_type = db.Column(db.String(20))
    summary = db.Column(db.String(1000))

    def __repr__(self):
        return f'Project(name={self.name}, start_date={self.start_date})'


class Address(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(120))
    city = db.Column(db.String(50))
    state = db.Column(db.String(50))
    zip = db.Column(db.Integer)

    def __repr__(self):
        return f'Address(address={self.address}, zip={self.zip})'


class Owner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    address_id = db.Column(db.Integer, db.ForeignKey('address.id'),
                           nullable=False)

    def __repr__(self):
        return f'Owner(name={self.name})'


class Site(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'),
                           nullable=False)
    GHG_reduced = db.Column(db.Float)
    GGE_reduced = db.Column(db.Float)


class AreaOfEffect(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    site_id = db.Column(db.Integer, db.ForeignKey('site.id'),
                        nullable=False)
    fuel_id = db.Column(db.Integer, db.ForeignKey('fuel.id'),
                        nullable=False)


class Radius(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    aoe_id = db.Column(db.Integer, db.ForeignKey('area_of_effect.id'),
                       nullable=False)
    radius = db.Column(db.Float)
    

class Line(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    aoe_id = db.Column(db.Integer, db.ForeignKey('area_of_effect.id'),
                       nullable=False)
    end_location_id = db.Column(db.Integer, db.ForeignKey('address.id'),
                                nullable=False)
