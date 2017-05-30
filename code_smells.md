#  Code smells

This note contains a list of ['code smells'](https://en.wikipedia.org/wiki/Code_smell) which we should try to avoid.  Examples in this list should typically be flagged as part of code review.

### Absolute file references

File paths in your code should usually be [relative, not absolute.](http://www.linuxnix.com/abslute-path-vs-relative-path-in-linuxunix/).

Typically, we should see code of the form `~/Documents/myproject/data.csv`, or `/Users/robinlinacre/Documents/myproject/data.csv`.  Instead, this path should be relative to the project folder, so should be simply `data.csv`.  

This is important because relative paths enable the code to be run without modification on others' computers, e.g. after checking the proejct out of Github.

### Rule of three/Do not repeat yourself

As a rule of thumb, 
> "code can be copied once, but that when the same code is used three times, it should be extracted into a new procedure" (function or other abstraction) [Wikipedia](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming))

In practice, if similar code is seen repeatedly in a codebase, then this should generally be factored into a function.

### Mixing data and code

### Too many arguments

### Functions that contain too much code

### Reliance on global scope


### Rolling your own solution 

### Long functions

Functions should be short and have a single purpose. If you find yourself writing a function that’s over [around 50 lines of code](https://softwareengineering.stackexchange.com/questions/27798/what-should-be-the-maximum-length-of-a-function), then you should consider splitting it into a number of different functions. 

### Magic numbers

Don't have magic numbers - they are parameters.  

-- Code review as a sanity check vs. as QA.  

Sense check of language and packages used - coming near the start of a project.  Focussed around 'is it fit to go the customer'.  'Sensible defaults'.

'Structure - model map before you start'.  



