# Use sensible defaults

There are often many ways of tackling a given problem.  As a team, it makes sense to standardise our approach, not because one approach is necessarily better than all others, but because collaboration is easier if there is less diversity in our approaches.

This section sets out sensible defaults which you are expected to follow.  They are not strict rules, but you will be expected to explain the benefits of alternative approaches if you want to do something different.

## General
* You should target [tidy](http://vita.had.co.nz/papers/tidy-data.html) data structures as part of your work.  You should attempt to convert incoming data into tidy format as quickly as possible, and any data that is output that may be used in other projects should be in tidy format.
* If there is a standardised directory structure for your type of project, using it will help people find things. [TODO: Add examples]

## R
* Default to packages from the [Tidyverse](http://tidyverse.org/), because they have been carefully designed to work together effectively as part of a modern data analysis workflow.  More info can be found here: [R for Data Science by Hadley Wickham](http://r4ds.had.co.nz).  For example:
     * Prefer tibbles to data.frames
     * Use ggplot2 rather than base graphics
     * Use the pipe `%>%` appropriately, but not always e.g. see [here](https://twitter.com/hadleywickham/status/603883121197514752).  
* Use [Packrat](https://rstudio.github.io/packrat/) for R dependencies - it's required by the Analytical Platform if you need to deploy your work.
* R Packages are the [fundamental unit of reproducable R code.](http://r-pkgs.had.co.nz/) 

## Python
* Use Python 3
* Use pandas for data analysis
* Use `loc` and `iloc` to write to data frames
* Use Altair for basic data visualisation
* Use Scikit Learn for machine learning
* Use SQLAlchemy and pandas for database interactions, rather than writing your own SQL

## Encoding and CSVs
Use unicode.  This means you should convert inputs that include non-ASCII characters to unicode as early as possible in your data processing workflow. If you are outputting to text files, these should be encoded in utf-8. Your output csvs should pass [this](https://csvlint.io/) csv linter.

## SQL
* Use Postgres or SQLite where possible, rather than other SQL database backends.

## GIS
* Use PostGIS as your GIS backend
* Prefer conducting your GIS analysis in code, e.g. using SQL, rather than point and click in a GUI
* Use QGIS if you need a GUI.

## Javascript
* Use Vega or Vega-lite for pre-constructed charting
* Use d3.js for custom charting
* Use leaflet.js for mapping.
* Use Bootstrap as a style template
* Use underscore.js for data manipulation

## Finally
* If you think of something else we should be doing or using by default, please clone the repo and submit a pull request featuring that addition :)
