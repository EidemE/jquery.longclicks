# JQuery LongClicks Plugin

## Installation

JQuery is required to run this plugin, which is an extension of one of its methods.

Use on command line:

```
npm install [-g] jquery.longclicks
```

or download manually **`jquery.longclicks[.min].js`** from **Plugin** folder.

## Usage Examples

The plugin allows to call the JQuery ***on*** method with three new events `shortClick`, `longClick` and `shortClickReached`, as shown below:

```javascript
$('#element').mayTriggerLongClicks({
	shortDelay: 400, longDelay: 800

// Usual JQuery "click" option
}).on('click', function() {
	console.log('The click lasted less than 400ms');

// Is triggered as soon as the short click is reached and can be triggered
}).on('shortClickReached', function() {
	console.log('The click lasted at least 400ms');

// Is triggered if the short delay is reached and the click is released before the long delay is reached
}).on('shortClick', function() {
	console.log('The click lasted between 400ms and 799ms');

// Is triggered as soon as the long delay is reached. This auto cancels the short click trigger
}).on('longClick', function() {
	console.log('The click lasted at least 800ms');

});
```

### Settings

Two optional parameters `shortDelay` and `longDelay` allow to define the delay before each click is triggered.

Note that if the longDelay value **is lower** than shortDelay, shortDelay and shortClickReached will never be triggered.


## Informations

This repo is a fork of the original untill (Till Halbach) plugin that offered one long click which can be found here: https://github.com/untill/jquery.longclick
