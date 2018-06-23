# Spotify Fellowship Interview assignments

## First Round Interview Questions

### Question 1
sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

### Question 2
decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
#is repeated exactly k times. Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab". For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

### Question 3
changePossibilities(amount,amount): Your quirky boss collects rare, old coins.
#They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given an amount of money and an array of coin denominations, computes the
#number of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

## Calendar

In this section, you'll be building a calendar application. How you build it is up to you, but the application must include the specs outlined below. Please complete the app build either for iOS, Android, or Web, depending on the role that you've indicated your most interested in.

There are two parts to this: a frontend and a backend. Feel free to use whatever frontend or backend framework you'd like (React/Ember/Rails etc.). It would take a long time to build a full featured calendar app, so we're going to focus on a few parts. Feel free to use any JavaScript library or framework, but don’t use something that builds the calendar for you. For example, jQuery or React would be fine; fullcalendar.io would not.

Please upload the answers to these questions in the same GitHub repo and name the folders CalendarFrontEnd and CalendarBackend.

Must Have Specs  
- The UI should have one month hard coded view (Pick any month)
- Ignore users/login, just have one hardcoded user
- Click on a day box, and be able to create a new event on that day which gets sent to the backend on clicking submit.
- The form should have start time, end time, description and submit.
  - Once submit is clicked the form should disappear.
  - Event should now appear in that day’s box.
  - Events cannot span multiple days. Must start and end the same day.
- Show all events the user has on their calendar.
- The UI should have 4 rows of 7 boxes (simple case of a 28 day month).
- The application should communicate with an API backend using JSON. Don’t spend a lot of time on the UI making it look beautiful; just make it functional.

Optional Specs (Not required; bonus points available for inclusion of one or more features)  

- Switch between months
- Week or day view
- Handle events spanning multiple days
- Handle too many events to fit in your box UI on a given day.
- You should be able to update/delete events. How you implement this UX is up to you.
- The UI should have 5 rows of 7 boxes with the correct date on the correct days.

BACK END
Build the backend of the calendar application. The API for the calendar should be the following:
Events (Minimum Required API)
- POST /events
  - Should create an event
- GET /events
  - Should return all events

Events (Optional API. Not required; bonus points available)
- DELETE /events/:id
  - Should delete an event
- PUT /events/:id
  - Should update an existing event

#### Note
Can not rename or change folders structure as that will create issues for the flask back end. The front-end is in static and templates folders. The back end is main.py, models.py, and event.db.

To install, within a new environment run  
`pip install -r Calendar/requirements.txt`  
To run  
`python Calendar/main.py`

Load on any browser at http://localhost:5000
