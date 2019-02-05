from datetime import date, timedelta

from flask import current_app
from models import db
from models import Owner, Project

def seed_db():
    project_1 = Project(
        name="Chargepoint KC Regional Clean Cities Territory",
        start_date=date(year=2016),
        duration=timedelta(days=365),
        project_type="Electric, Hybrid, and Plugin Vehicles",
        summary="""Let all these little things happen. Don't fight them. Learn to use them. Put it in, leave it alone. Let that brush dance around there and play. Just let your mind wander and enjoy. This should make you happy.
Take your time. Speed will come later. Trees get lonely too, so we'll give him a little friend. We'll throw some old gray clouds in here just sneaking around and having fun. Just pretend you are a whisper floating across a mountain."""

    )
    project_2 = Project(
        name="City of Kansas City EV Bus",
        start_date=date(year=2016),
        duration=timedelta(days=365),
        project_type="Electric, Hybrid, and Plugin Vehicles",
        summary="""
        Don't fiddle with it all day. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. That's the way I look when I get home late; black and blue. I like to beat the brush. I want everbody to be happy. That's what it's all about. Let your imagination be your guide.
        """
    )
    
