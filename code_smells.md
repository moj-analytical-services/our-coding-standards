#  Code smells

This note contains a list of ['code smells'](https://en.wikipedia.org/wiki/Code_smell) which we should try to avoid.  Examples in this list should typically be flagged as part of code review.

### Absolute file references

File paths in your code should usually be [relative, not absolute.](http://www.linuxnix.com/abslute-path-vs-relative-path-in-linuxunix/).

Typically, we should see code of the form `~/Documents/myproject/data.csv`, or `/Users/robinlinacre/Documents/myproject/data.csv`.  Instead, this path should be relative to the project folder, so should be simply `data.csv`.  

This is important because relative paths enable the code to be run without modification on others' computers, e.g. after checking the proejct out of Github.

### Rule of three

As a rule of thumb, 
> "code can be copied once, but that when the same code is used three times, it should be extracted into a new procedure" (function or other abstraction) [Wikipedia](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming))

In practice, if similar code is seen repeatedly in a codebase, then this should generally be factored into a function.

### Mixing data and code



### Too many arguments

### Functions that contain too much code

### Reliance on global scope

### 