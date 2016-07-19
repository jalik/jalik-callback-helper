# callback-helper

## Introduction

This package provides an easy way to manage callback events in your code.

## Installation

To install the package, execute this command in the root of your project :
```
meteor add jalik:callback-helper
```

If later you want to remove the package :
```
meteor remove jalik:callback-helper
```

## Creating a callback helper

```js
import {CallbackHelper} from 'meteor/jalik:callback-helper';

let helper = new CallbackHelper();
```

## Adding callbacks

You can add as many callbacks as you want.

```js
helper.add(function() {
    console.log('this is callback 1');
});
helper.add(function() {
    console.log('this is callback 2');
});
helper.add(function() {
    console.log('this is callback 3');
});
```

## Executing callbacks

The `call` method uses the same syntax as the standard `call` method.
All registered callbacks will be called with the given context and arguments.

```js
helper.call(this, arg1, arg2, arg3);
```

## Clearing callbacks

```js
helper.clear();
```

