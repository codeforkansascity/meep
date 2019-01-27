from flask import jsonify, Response

from meep.models import db


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(256), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    GGE_reduced = db.Column(db.Float)
    GHG_reduced = db.Column(db.Float)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('projects', lazy=True))

    def __repr__(self):
        return f'<Project {self.name}>'
