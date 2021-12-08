# WORK DAY SCHEDULER

 This is a simple calendar application that allows the user to save tasks for each specific hour of the current day.

 The current day is displayed at the top of the calendar and there are time blocks for each hour that a user can fill in. The time blocks are color coded to notate if it is the past, present, or future. The user can select the time block and enter in an event for the day, once they click save, it is saved to local storage.

The user types in the task they would like to complete in the row with the relevant hour and clicks the save button on the far right. All tasks that are saved are stored locally and will remain in the text box until cleared.

The current date and time are dynamically upated at the top using Moment.js. Additionally, each row is dynamically updated by color based on the current time as follows:

Grey: Previous hours of the day no longer available Red: The current hour Green: Future hours


## Author info

Name: Eder Ramirez
Email: Edher.fca@gmail.com
Portafolio: 

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

# Technologies
- HTML
- CSS
- JavaScript

# Screenshots
1.- The photo below is what the Day.







