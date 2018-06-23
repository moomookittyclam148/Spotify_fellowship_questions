from main import db
from sqlalchemy.exc import *

# Model for events table
class event(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    event_title = db.Column(db.String(80), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    event_desc = db.Column(db.String(1000))

    def __init__(self, event_title, start_time, end_time, event_desc):
                 self.event_title = event_title
                 self.start_time = start_time
                 self.end_time = end_time
                 self.event_desc = event_desc

    def __str__(self):
        return self.event_title + '\n' + self.start_time.strftime('%Y-%m-%d %H:%M')

    def get_id(self):
        return str(self.id)

    def add_event(self):
        db.session.add(self)
        return db.session.commit()

    def delete_event(self):
        db.session.delete(self)
        return db.session.commit()
