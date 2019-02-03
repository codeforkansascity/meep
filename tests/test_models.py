import tempfile
from datetime import date, timedelta

import pytest


from meep.models import db
from meep.models import Address, AreaOfEffect, Coordinate, FuelType, Owner
from meep.models import Line, Project, Radius, Site
from meep import create_app
from config import TestingConfig



# test creation of objects without forming relationships

@pytest.fixture(scope='module')
def new_address():
    address = Address(
        id=234243,
        city="Overland Park",
        state="KS",
        zip=66209
    )
    return address


def test_new_address(new_address):
    assert new_address.city == "Overland Park"
    assert new_address.state == "KS"
    assert new_address.zip == 66209


@pytest.fixture(scope='module')
def new_area_of_effect():
    aoe = AreaOfEffect(
        id=44442222
    )
    return aoe


def test_new_area_of_effect(new_area_of_effect):
    assert new_area_of_effect.id == 44442222


@pytest.fixture(scope='module')
def new_coordinate():
    return Coordinate(
        id = 44442222,
        lat = 32.1,
        long = -87.42
    )


def test_new_coordinate(new_coordinate):
    assert new_coordinate.id == 44442222
    assert new_coordinate.lat == 32.1
    assert new_coordinate.long == -87.42


@pytest.fixture(scope='module')
def new_fuel_type():
    return FuelType(
        id = 42,
        fuel = "Diesel"
    )


def test_new_fuel_type(new_fuel_type):
    assert new_fuel_type.id == 42
    assert new_fuel_type.fuel == "Diesel"


@pytest.fixture(scope='module')
def new_owner():
    return Owner(
        id=42,
        name="Howie Mandell",
        summary="American actor and talk show host."
    )

def test_new_owner(new_owner):
    assert new_owner.id == 42
    assert new_owner.name == "Howie Mandell"
    assert new_owner.summary == "American actor and talk show host."


@pytest.fixture(scope='module')
def new_line():
    return Line(
        id=23
    )


def test_new_line(new_line):
    assert new_line.id == 23


@pytest.fixture(scope='module')
def new_project():
    return Project(
        id = 42,
        name = "Clean kitchen",
        start_date = date(1992, 12, 24),
        duration = timedelta(365),
        project_type = "Classified",
        summary = "Go clean the kitchen. It is a mess."
    )


def test_new_project(new_project):
    assert new_project.id == 42
    assert new_project.name == "Clean kitchen"
    assert new_project.start_date == date(1992, 12, 24)
    assert new_project.duration == timedelta(365)
    assert new_project.summary == "Go clean the kitchen. It is a mess."


@pytest.fixture(scope='module')
def new_radius():
    return Radius(
        id=24,
        radius=55.55
    )


def test_new_radius(new_radius):
    assert new_radius.id == 24
    assert new_radius.radius == 55.55


@pytest.fixture(scope='module')
def new_site():
    return Site(
        id=42,
        GHG_reduced=12.0,
        GGE_reduced=34.3
    )


def test_new_site(new_site):
    assert new_site.id == 42
    assert new_site.GHG_reduced == 12.0
    assert new_site.GGE_reduced == 34.3



# @pytest.fixture(scope='module')
# def new_owner():
#     owner = Owner(
#         name="Howie Mandell",
#         summary="American actor and talk show host"
#     )
#     return owner


# def test_new_owner(new_owner):
#         assert new_owner.name == "Howie Mandell"
#         assert new_owner.summary == "American actor and talk show host"


# @pytest.fixture(scope='module')
# def test_client():
#     app = create_app(TestingConfig)
#     client = app.test_client()
#     context = app.app_context()
#     context.push()
#
#     yield client
#
#     context.pop()
