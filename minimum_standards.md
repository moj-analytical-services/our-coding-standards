#  Minimum AQA Standards for code


This document sets out how to implement existing guidance on AQA for for analytical projects which are written primarily as code (i.e. in a programming langauge).

`\\dom1\data\HQ\102PF\Shared\Group_LCDSHD2\Analytical Services\AQA - guidance-forms etc\Tailoring Quality Assurance`

## Existing guidance

Existing guidance provides a framework for categorising your project into 'small', 'medium' or 'large', based on the impact of the analysis, and therefore the risks associated with errors.

This guidance sets minimum standards associated with these three categories.


TODO:  Make this table interactive - user chooses the level of the project and table shows relevant information, making it into a checklist.


Activity | Level | Why
--- | --- | ---
**Structure**||
Clear separation of parameters, data, and code using a standard directory structure.  TODO:  Add project templates for R and Python | All | This separates the logic (the code) from the assumptions.  It should be easy for others to change parameters and data without needing to understand the codebase.  
Code passess relevant linter | Medium + | Our code style will be consistent across projects and makes it easier for others to understand our code.
Appropriate use of abstractions like functions, packages, modules etc, which has been reviewed by language expert. | Medium + | Makes code easier to understand, maintain, and extend.
If using a notebook for write up, functions are factored out to maintain narrative. | Medium + | Makes the logic easier to follow
**Reproducibility** ||
If the output is a report, the write up is fully reproducible in rmarkdown, Jupyter notebooks, or equivalent | Medium + | If we need to review or update the output at a later date, we know how we came to earlier results.
**Development** ||
*Github and version control* ||
Code is version controlled using Git and checked into Github | All | Your work is transparent and discoverable by others and there's a 'single version of the truth' for code.
The project is developed using 'Git flow'. | Medium + | You are able to maintain a continuously quality controlled 'master' version of the code, whilst also being able to test new featurs and functionality
*Code Review* ||
All code has been subject to code review | All | Code review provides additional assurance that code logic is correct, and also the review should provide comments on code and problem structuring.
All code has been subject to review through pull requests, and this is evidenced in Github | Medium + |
The 'Master' branch is protected, and contained only QAed code | Large | A protected master branch guarantees that all pull requests have been reviewed before they are merged.
**Documentation** ||
*Readme* | |
You have tagged your Github repository with appropriate tags | All | This will allow your poject to be discoverable and reusable by others.
A `README.md` file exists in the repository, which contains standard fields TODO: Add standard fields | All | This will allow your poject to be discoverable and reusable by others.
*Documentation within code* ||
Code is appropriately commented.  [Comments are for explaining why something is needed, not how it works.](https://github.com/moj-analytical-services/our-coding-standards/blob/7e751164d577b521e7f62484a68ee1861f8ae4ac/they_are_users_too.md#L4) |
Non trivial functions are documented using the programming language's accepted standard e.g. Roxygen, PEP8.  TODO:  Add guide to commenting | 
**Unit testing** ||
Unit tests exist that test the overall model, but not individual functions | All | Unit tests 
Unit tests exist at the function level, which test a range of parameters  | Medium + | 
You should have reached code coverage of at least 75% | Medium + | Higher code coverage means that more routes through you code have been checked.  Low code coverage is a bad sign, high code coverage is not necessarily a good thing.

### Advice for re-usable, packages and modules:

These should clearly document the level of QA which they have been subject to.


### Advice on QA for visualisation outputs

 
 

### TODO
How does this apply to d3 projects?  I think we'd struggle 