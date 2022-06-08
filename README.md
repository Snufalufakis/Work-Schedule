# Work Day Scheduler

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
 - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Third-Party APIs Challenge: Work Day Scheduler
Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the Moment.js (Links to an external site.) library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality since Moment.js is considered a "legacy" project. Learn more about some alternative solutions in the Moment.js project status page.

### User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

### Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

### Screenshot

![](assets/screenshots/screenshot-127.0.0.1_5500-2022.06.02-19_29_07.png)

### Links

- Solution URL: [github](https://github.com/Snufalufakis/Work-Schedule)
- Live Site URL: [github live site](https://snufalufakis.github.io/Work-Schedule/)

## My process

### Built with

- HTML
- Javascript

### What I learned
The time function took some time to figure out.


```Js
  //Change colors in text as day passes
  function updater() {
    var currentTime = today.getHours();
    $(".time-slot").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      if (blockTime < currentTime) {
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past").addClass("present");
      } else {
        $(this).removeClass("past", "present").addClass("future");
      }
    });
  }
  updater();
```

### Continued development

Javascript, a daily learning  never going to stop getting better.
I wanted to put the divs into the js but it kept breaking need to get better at js development.

## Author

- Twitter - [@Snufalufakis2](https://twitter.com/Snufalufakis2)


## Acknowledgments

Thanks to my classmate Asha for finding the save icon
