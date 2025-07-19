# Majority Element

## Task Overview
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

## Goals
Create a function which handles finding the majority element within an array

## Approach
Iterate over an array after turning it into an object to create a frequency counter then use the number of times each letter appears in a string to identify the cooresponding key, which is then returned as the element which shows up the most.