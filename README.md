# Arkin
**Just ideas that popped into my head.**

![npm](https://img.shields.io/npm/dt/arkin.svg?label=Downloads)

  [NPM](https://www.npmjs.com/package/arkin)
  <br>
  [GitHub](https://github.com/ArkinSolomon/Arkin)

# Features

* [Sleep](#Sleep)
* [End](#End)
* [Error](#Error)
* [Clear](#Clear)
* [List](#List)
* [GetDate](#GetDate)

# Installation

To install, open your command line and navigate to your project folder. Then run:

`npm install arkin`

At the top of your program add:

`const arkin = require('arkin');`

# Reference

## Sleep

### Information

Pauses the program for a short time.

### Parameters

* `milliseconds`: The amount of time in milliseconds to wait.

### Usage

```javascript
arkin.sleep(1000);
```
*Pauses for 1000 milliseconds or 1 second.*

## End

### Information

Ends the program with exit code 0.

### Parameters

*None*

### Usage

```javascript
arkin.end()
```
*Ends the program with exit code 0.*

## Error

### Information

Ends the program with exit code 1 and logs the error.

### Parameters

* `ERR`: The error that happened.

### Usage

```javascript
var err = "Uh Oh";
arkin.error(err);
```

*Outputs in the console:*

```
There was an error:
Uh Oh
```

*Ends the program with exit code 1.*

## Clear

### Information

Clears the console.

### Parameters

*None*

### Usage

```javascript
arkin.clear();
```
*Clears the console.*

## List

### Information

Takes an array and makes a list from it.

### Parameters

* `list`: An array containing the messages to be displayed.
* `config`: [Optional] A JSON object which determines the starting number and marker.
  - `startingNumber`: [Optional] An integer which determines the first number of the list. Default: '1'.
  - `marker`: [Optional] A string which decides what separates the number and the message. Default: '.'.

### Usage

```javascript
const list = ["Yo", "hi", "hello"]

const config = {
  startingNumber: 1,
  marker: ')'
};

arkin.list(list, config);
```

*Outputs in the console:*

```
1) Yo
2) hi
3) hello
```

## GetDate

### Information

Gets the current date in any format.

### Parameters

* `config`: [Optional] A JSON object which determines the information and the way it is returned.
  - `format`: [Optional] Determines all of the formatting for the date.
    - `order`: [Optional] A string which specifies the order of the day, month, and year. Separated by hyphens. Default 'month-day-year'.
    - `extraZero`: [Optional] A boolean which while true, adds an extra zero to the beginning of both the day and month if it is less then ten. Default: 'true'.
    - `year`: [Optional] A string which determines the length of the year by the amount of 'y's in it. Removes numbers from the left. Default: 'yyyy'.
    - `separator`: [Optional] A string which determines the separator between the day, month, and year. Default: '/'.

### Usage

*Example date is February 23rd, 2064*

```javascript
  const config = {
    format: {
      order: 'year-month-day',
      extraZero: false,
      year: 'yyy',
      separator: ','
    }
  };

  var date = arkin.getDate(config);
  console.log(date);
```

*Outputs in the console:*

```
064,2,23
```
