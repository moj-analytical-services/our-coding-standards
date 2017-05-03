# Optimize for change
* Don’t try to solve every conceivable problem up-front, instead focus on making your code easy to change when needed.
* Don’t prematurely optimize - choose clarity over performance, unless there is a serious performance issue that needs to be addressed.
* Change can come in several forms, including hardware - one day your code might need to work somewhere else.  Without overcomplicating things, write your code with this in mind.  For example, use relative paths (e.g. `./file_in_the_project_directory.R` rather than `/Users/my_username/development/my_project/file_in_the_project_directory.R`)
