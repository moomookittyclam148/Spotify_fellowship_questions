import calendar
import datetime
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    today = datetime.datetime.now()
    today_month = today.month
    today_day = today.day
    today_year = today.year

    days = return_days(today_year, today_month)
    

    return render_template('calendar.html', days = days)

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
