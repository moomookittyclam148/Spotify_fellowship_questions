import calendar
import datetime
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    today = datetime.datetime.now()
    today_month = today.month
    today_day = today.day
    today_year = today.year

    days = return_days(today_year, today_month)


    return render_template('calendar.html', days = days)

@app.route('/events', methods=['POST', 'GET'])
def events():
    if request.method == "POST":
        event_tite = request.form['event_tite']
        start_time = request.form['start_time']
        end_time = request.form['end_time']
        event_desc = request.form['event_description']
        event_date = request.form['event_date']

        if event_tite and start_time and end_time:
            return jsonify({'event_tite' : event_tite, 'start_time' : start_time, 'end_time' : end_time, 'event_desc' : event_desc, 'event_date' : event_date})

        return jsonify({'error_msg' : 'Missing Data'})

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

if __name__ == '__main__':
   app.run(debug=True)
