#  Minimum AQA Standards for code


This document sets out how to implement existing guidance on AQA for for analytical projects which are written primarily as code (i.e. in a programming langauge).

`\\dom1\data\HQ\102PF\Shared\Group_LCDSHD2\Analytical Services\AQA - guidance-forms etc\Tailoring Quality Assurance`

## Existing guidance

Existing guidance provides a framework for categorising your project into 'small', 'medium' or 'large', based on the impact of the analysis, and therefore the risks associated with errors.

This guidance sets minimum standards associated with these three categories.

Activity | Level
--- | --- | --- | ---
**Structure**|||
Clear separation of parameters, data, and code using a standard directory structure | All
Code passess relevant linter | Medium +
**Development** |
*Github and version control* |
Code is version controlled using Git and checked into Github | All
The project is developed using 'Git flow'. | Medium +
*Code Review* |
All code has been subject to code review | All
All code has been subject to review through pull requests, and this is evidenced in Github | Medium +
The 'Master' branch is protected, and contained only QAed code | Large
**Documentation** |
*Readme* | 
A `README.md` file exists in the repository | All

*Documentation within code* |
Functions are documented using the standard assoc |||
**Unit testing** |||
Unit tests exist that test the overall model, but not individual functions | Must | Must | Must 
Unit tests exist at the function level, which test a range of parameters  | Could | Should | Must

### Advice for re-usable, packages and modules:

These should clearly document the level of QA which they have been subject to.


### Advice on QA for visualisation outputs

 
 

### TODO
How does this apply to d3 projects?  I think we'd struggle 