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
        id=87,
        address="1882 133 Pl.",
        city="Overland Park",
        state="KS",
        zip=66209
    )
    return address


def test_new_address(new_address):
    assert new_address.id == 87
    print(new_address.id)
    assert new_address.address == "1882 133 Pl."
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
        id=42,
        name="Clean kitchen",
        start_date=date(1992, 12, 24),
        duration=timedelta(365),
        project_type="Classified",
        summary="Go clean the kitchen. It is a mess."
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


# test relationships


def test_owner_addresses():
    '''
    one owner to many addresses, one address to one owner
    '''
    owner = Owner()
    address_1 = Address(owner=owner)
    address_2 = Address()
    owner.addresses.append(address_2)
    assert address_1 in owner.addresses
    assert address_2 in owner.addresses
    assert address_1.owner is owner


def test_owner_projects():
    '''
    one owner has many projects, one project has many owners
    '''
    owner_1 = Owner()
    owner_2 = Owner()
    project_1 = Project()
    project_2 = Project()
    owner_1.projects += [project_1, project_2]
    owner_2.projects.append(project_1)
    assert project_1 in owner_1.projects
    assert project_2 in owner_1.projects
    assert owner_1 in project_1.owners
    assert owner_2 in project_1.owners


def test_project_sites():
    '''
    one project has many sites, one site has one project
    '''
    project = Project(name="meep")
    site_1 = Site()
    project.sites.append(site_1)
    site_2 = Site(project=project)
    assert site_1 in project.sites
    assert site_2 in project.sites
    assert site_1.project is project


def test_site_aoes():
    '''
    one site has many areas of effect,
    one area of effect has one site
    '''
    site = Site()
    aoe_1 = AreaOfEffect()
    site.areas_of_effect.append(aoe_1)
    aoe_2 = AreaOfEffect(site=site)
    assert aoe_1 in site.areas_of_effect
    assert aoe_2 in site.areas_of_effect
    assert aoe_1.site is site


def test_aoe_radius():
    '''
    one area of effect has one Radius
    radius has no area of effect attribute
    '''
    radius = Radius(radius=3.14)
    aoe = AreaOfEffect(radius=radius)
    assert aoe.radius is radius
    assert aoe.radius.radius == 3.14
    with pytest.raises(AttributeError):
        assert radius.area_of_effect == aoe


def test_aoe_line():
    '''
    one area of effect has one line,
    line has no area of effect attribute
    '''
    line = Line()
    aoe = AreaOfEffect(line=line)
    assert aoe.line is line
    with pytest.raises(AttributeError):
        assert line.area_of_effect is aoe


def test_line_end_address():
    '''
    one line has one end address
    address has no reference to line
    '''
    address = Address()
    line = Line(end_location=address)
    assert line.end_location is address
    with pytest.raises(AttributeError):
        assert address.line is line


def test_aoe_fuel_type():
    '''
    one area of effect has one fuel fuel type
    one fuel type has many areas of effect
    '''
    fuel = FuelType(fuel="ethanol")
    aoe_1 = AreaOfEffect(fuel_type=fuel)
    aoe_2 = AreaOfEffect(fuel_type=fuel)
    assert aoe_1.fuel_type is fuel
    assert aoe_2.fuel_type is fuel
    assert aoe_1 in fuel.areas_of_effect
    assert aoe_2 in fuel.areas_of_effect


def test_aoe_address():
    '''
    one area of effect has one address
    address doesn't necessarily have an area of effect
    '''
    address = Address()
    aoe = AreaOfEffect(address=address)
    assert aoe.address is address
    with pytest.raises(AttributeError):
        assert address.area_of_effect is aoe


def test_address_coordinates():
    '''
    one address has one set of coordinates,
    one set of coordinates has one address
    '''
    c = Coordinate(lat=12.2, long=-42.3)
    a = Address(coordinate=c)
    assert c.address is a
    assert a.coordinate is c


def test_site_address():
    '''
    one site has one address
    one address doesn't necessarily correspond to a site
    '''
    address = Address()
    site = Site(address=address)
    assert site.address is address
    with pytest.raises(AttributeError):
        assert address.site is site
