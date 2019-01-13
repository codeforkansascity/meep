from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    projects_submitted = db.relationship(
        'Project',
        backref='submitted_by',
        lazy='dynamic'
    )

    def __repr__(self):
        return '<User {}>'.format(self.username)

class Admin(User):
    projects_approved = db.relationship(
        'Project',
        'backref'='approved_by',
        lazy='dynamic'
    )

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    type = db.Column(db.String(120))
    summary = db.Column(db.String(300))
    address = db.Column(db.String(120))
    city = db.Column(db.String(120))
    state = db.Column(db.String(2))
    zip = db.Column(db.Integer)
    takeaway_fact = db.Column(db.String(300))
    image_url = db.Column(db.String(300))
    ix_submitted_by = db.Column(db.Integer, db.ForeignKey('user.id'))
    ix_approved_by = db.Column(db.Integer, db.ForeignKey('admin.id'))
    submission_datetime = db.Column(db.DateTime)
    approval_datetime = db.Column(db.DateTime)
    emmissions_statistics = db.Relationship(
        'EmmissionsStatistic',
        backref='project_id',
        lazy='dynamic'
    )
    def __repr_(self):
        return '

class Building(Project):
    square_footage = db.Column(db.Float)

class Vehicle(Project):
    fuel_type = db.Column(db.String(30))
    fleet_name = db.Column(db.String(120))

class Infrastructure(Project):

class EmmissionsStatistic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    gges_reduced = db.Column(db.Float)
    ghgs_reduced = db.Column(db.Float)
