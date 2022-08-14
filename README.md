# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compare two arrays and pring out a message telling us if they match or not.
* `assertEqual`: Compare two values and print out a message telling us if they match or not.
* `assertObjectsEqual`: Compare two objects and print out a message telling us if they match or not.
* `countLetters`: Take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: Takes in an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArrays`: Take in two arrays and returns true or false, based on a perfect match. 
* `eqObjects`: Take in two objects and returns true or false, based on a perfect match. 
* `findKey`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
* `findKeyByValue`: Takes in an object and a value. It should scan the object and return the first key which contains the given value.
* `head`:  Retrieve the first element from the array.
* `letterPositions`: Take in a string and return all the indices (zero-based positions) in the string where each character is found.
* `map`: Take in an array and a callback function and return a new array based on the results of the callback function.
* `middle`: Take in an array and return the middle-most element(s) of the given array.
* `tail`: Take in an array and return everything except for the first item (head) of the provided array.
* `takeUntil`: Return a slice of the array with elements taken from the beginning until the callback returns a truthy value.
* `without`: Return a subset of a given array, removing unwanted elements.