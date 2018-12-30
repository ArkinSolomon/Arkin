# Arkin
**Shortened Node.Js Functions**

# Features

* [Delays](https://github.com/ArkinSolomon/Arkin#delays)
* [End](https://github.com/ArkinSolomon/Arkin#end)
* Error
* Clear
* List
* Dates

# Installation

To install, open your command line and navigate to your project folder. Then run:

`npm install arkin`

# Reference

## Delays

### Information

Pauses the program for a short time.

### Parameters

* `milliseconds`: The amount of time in milliseconds to wait.

### Usage

`delay(1000)` *Pauses for 1000 milliseconds or 1 second.*

## End

### Information

Ends the program with exit code 0.

### Parameters

*None*

### Usage

`end()` *Ends the program with exit code 0.*

## Error

### Information

Ends the program with exit code 1 and logs the error.

### Parameters

* `ERR` *The error that happened*

### Usage

`var err = "Uh Oh"
error(err)`
