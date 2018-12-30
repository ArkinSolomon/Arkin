# Arkin
**Shortened Node.Js Functions**

# Features

* Sleep
* End
* Error
* Clear
* List
* Dates

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
arkin.delay(1000);
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

## Clear

### Information

Clears the console.

**NOTE:** This has only been tested on a Mac.

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
* `config`: A JSON object which determines the starting number and marker [Optional].
  - `startingNumber`: The number which determines the first number of the list. Default: '1'.
  - `marker`: The separation between the number and the message. Default: '.'.

### Usage

```javascript
const list = ["YO", "hi", "hello"]

const config = {
  startingNumber: 1,
  marker: ')'
}

arkin.list(list, config);
```
*Outputs in the console:*
```
1. YO
2. hi
3. hello
```
