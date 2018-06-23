import calendar
import datetime
from flask import Flask, request, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///event.db'
db = SQLAlchemy(app)
from models import *


today = datetime.datetime.now()
today_day = today.day
current_calendar_month = today.month
current_calendar_year = today.year

@app.route('/')
def index():
    month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    days = return_days(current_calendar_year, current_calendar_month)

    return render_template('calendar.html', days = days, month_name = month_name[current_calendar_month - 1])

@app.route('/events', methods=['POST', 'GET'])
def events():
    if request.method == 'POST':
        event_title = request.form.get('event_title', "")
        start_time = request.form['start_time']
        end_time = request.form['end_time']
        event_desc = request.form.get('event_desc', "")
        event_date = request.form['event_date']
        event_month = request.form['event_month']

        start_time_process = convert_to_24hour(start_time)
        hour,minutes = start_time_process.split(':')
        start_time_process = datetime.datetime(current_calendar_year, current_calendar_month, int(event_date), int(hour), int(minutes))

        end_time_process = convert_to_24hour(end_time)
        hour,minutes = end_time_process.split(':')
        end_time_process = datetime.datetime(current_calendar_year, current_calendar_month, int(event_date), int(hour), int(minutes))



        if event_title != "" and end_time_process > start_time_process:
            new_event = event(event_title, start_time_process, end_time_process, event_desc)
            new_event.add_event()
            return jsonify({'event_title' : event_title, 'start_time' : start_time, 'end_time' : end_time, 'event_desc' : event_desc, 'event_date' : event_date})
        elif end_time_process < start_time_process:
            return jsonify({'error_msg' : 'End time is Before the Start time, Please try again'})
        else:
            return jsonify({'error_msg' : 'Missing Data, Please try again'})

    elif request.method == 'GET':
        events = event.query.all()

        #for items in events:
        #    items.start_time = convert_to_12hour(items.start_time.strftime('%H:%M'))
        #    items.end_time = convert_to_12hour(items.end_time.strftime('%H:%M'))

        return render_template('events.html', events = events)

# Helper Functions ------------------------------------------------------------
def return_days(year, month):
    days_string = calendar.TextCalendar(calendar.SUNDAY)
    count = 0
    days = []
    temp = []
    for i in days_string.itermonthdays(year, month):
        temp.append(i)
        count += 1
        if count == 7:
            days.append(temp)
            temp = []
            count = 0

    return days

# Converts 12 hour format to 24 hour format
def convert_to_24hour(time):
    hour,minutes = time.split(':')
    minutes,period = minutes.split(' ')

    hour = int(hour)

    if period == 'pm' and hour != 12:
        hour = str(hour + 12)
    elif period == 'am' and hour == 12:
        hour = str(0)
    else:
        hour = str(hour)


    new_time = hour + ":" + minutes
    return new_time

# Converts 24 hour format to 12 hour format
def convert_to_12hour(time):
    new_time = ''
    hour,minutes = time.split(':')
    hour = int(hour)

    if hour == 0:
        hour = str(12)
        new_time = hour + ':' + minutes + ' am'
    elif hour > 12:
        hour = str(hour - 12)
        new_time = hour + ':' + minutes + ' pm'
    else:
        new_time = str(hour) + ':' + minutes + ' am'

    return new_time

if __name__ == '__main__':
   app.run(debug=True)
