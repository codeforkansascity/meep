from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate(db)


project_owner_assoc = db.Table(
    'project_owner',
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'), primary_key=True),
    db.Column('owner_id', db.Integer, db.ForeignKey('owner.id'), primary_key=True)
)


class Address(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(100))
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
    address_id = db.Column(db.Integer, db.ForeignKey('address.id'))
    address = db.relationship("Address", uselist=False)
    fuel_type_id = db.Column(db.Integer, db.ForeignKey('fuel_type.id'))
    radius = db.relationship('Radius', uselist=False)
    line = db.relationship('Line', uselist=False)


class Coordinate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lat = db.Column(db.Float)
    long = db.Column(db.Float)
    address_id = db.Column(db.Integer, db.ForeignKey('address.id'))


class FuelType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fuel = db.Column(db.String(50))
    areas_of_effect = db.relationship('AreaOfEffect', backref='fuel_type')


class Owner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    summary = db.Column(db.String(1000))
    addresses = db.relationship('Address', backref='owner', lazy=True)
    projects = db.relationship('Project', secondary=project_owner_assoc,
        lazy='subquery', backref=db.backref('owners', lazy=True)
    )

    def __repr__(self):
        return f'Owner(name={self.name})'


class Line(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    area_of_effect_id = db.Column(db.Integer, db.ForeignKey('area_of_effect.id'))
    end_location_id = db.Column(db.Integer, db.ForeignKey('address.id'),
                                nullable=False)
    end_location = db.relationship('Address', uselist=False)


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
    area_of_effect_id = db.Column(db.Integer, db.ForeignKey('area_of_effect.id'))
    radius = db.Column(db.Float)


class Site(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    GHG_reduced = db.Column(db.Float)
    GGE_reduced = db.Column(db.Float)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    address = db.relationship("Address", uselist=False, back_populates="site")
    areas_of_effect = db.relationship("AreaOfEffect", backref='site',
        lazy=True)
