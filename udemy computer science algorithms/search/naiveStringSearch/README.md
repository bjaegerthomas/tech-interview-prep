# Naive String Search

## Task Overview
Create a function which takes in a longer string and a shorter string and sees how many times the shorter string appears in the longer string.

## Possible Logic
Create a loop which accepts the longer string and loops over each character in it checking it against the shorter string. Then create a nested loop which loops over every character in the shorter string trying to match it against the longer string. If we do find a full match we increase a counter variable by one. If not we break out to the longer string and move one character ahead in the longer loop. Once we make it all the way through the longer loop we return the count.

## Given Solution
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

## Thoughts after Solution
I was close on my initial attempt with a for loop before i changed it to a while loop, I was missing avital piece of the incrementing which was adding i+j as i moved through the second for loop. For some reason I thought I could use a while loop. Gpt had a similar response to the given solution.
