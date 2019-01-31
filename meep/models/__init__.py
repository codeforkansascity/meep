from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate(db)


class Address(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(50))
    state = db.Column(db.String(50))
    zip = db.Column(db.Integer)
    owner_id = db.Column(db.Integer, db.ForeignKey('owner.id'))
    site_id = db.Column(db.Integer, db.ForeignKey('site.id'))
    site = db.relationship("Site", back_populates="address")
    coordinate = db.relationship("Coordinate", uselist=False,
                                 backref="address")

    def __repr__(self):
        return f'Address(address={self.address}, zip={self.zip})'


class AreaOfEffect(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    site_id = db.Column(db.Integer, db.ForeignKey('site.id'),
                        nullable=False)
    fuel_type_id = db.Column(db.Integer, db.ForeignKey('fuel_type.id'),
                             nullable=False)
    address_id = db.Column(db.Integer, db.ForeignKey('address.id'))
    address = db.relationship("Address",
                              backref=db.backref("area_of_effect",
                                                 uselist=False))
    fuel_type_id = db.Column(db.Integer, db.ForeignKey('fuel_type.id'))
    fuel_type = db.relationship("FuelType",
                                backref=db.backref("area_of_effect",
                                                   uselist=False))


class Coordinate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lat = db.Column(db.Float)
    long = db.Column(db.Float)
    address_id = db.Column(db.Integer, db.ForeignKey('address.id'))


class FuelType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fuel = db.Column(db.String(50))


class Owner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    summary = db.Column(db.String(1000))
    addresses = db.relationship('Address', backref='owner', lazy=True)
    project_owner = db.relationship('Project', secondary='project_owner',
        lazy='subquery', backref=db.backref('pages', lazy=True)
    )

    def __repr__(self):
        return f'Owner(name={self.name})'


class Line(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    area_of_effect_id = db.Column(db.Integer, db.ForeignKey('area_of_effect.id'),
                       nullable=False)
    area_of_effect = db.relationship(
        'AreaOfEffect',
        backref=db.backref('line', uselist=False)
    )
    end_location_id = db.Column(db.Integer, db.ForeignKey('address.id'),
                                nullable=False)
    end_location = db.relationship('Address', backref=db.backref('line', uselist=False))


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    start_date = db.Column(db.Date)
    duration = db.Column(db.Interval)
    project_type = db.Column(db.String(20))
    summary = db.Column(db.String(1000))
    sites = db.relationship('Site', backref='project', lazy=True)

    def __repr__(self):
        return f'Project(name={self.name}, start_date={self.start_date})'


class Radius(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    area_of_effect_id = db.Column(db.Integer, db.ForeignKey('area_of_effect.id'),
                       nullable=False)
    area_of_effect = db.relationship(
        'AreaOfEffect',
        backref=db.backref("radius", uselist=False)
    )
    radius = db.Column(db.Float)



class Site(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'),
                           nullable=False)
    GHG_reduced = db.Column(db.Float)
    GGE_reduced = db.Column(db.Float)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    address = db.relationship("Address", uselist=False, back_populates="Site")
    areas_of_effect = db.relationship("AreaOfEffect", backref='site',
        lazy=True)

project_owner = db.Table('project_owner',
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'), primary_key=True),
    db.Column('owner_id', db.Integer, db.ForeignKey('owner.id'), primary_key=True)
)
