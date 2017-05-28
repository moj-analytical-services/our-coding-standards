var CheckList = function() {

    var transition_duration = 1000

    var me = this;

    var table = d3.select("#checklist")
    table.attr("class", "table table-striped table-bordered")

    var thead = table.append('thead')
    var tbody = table.append('tbody')

    var column_names = OCS_APP.datamanager.column_names
    this.rowdata = OCS_APP.datamanager.get_d3_data()

    thead.append('tr')
        .selectAll('th')
        .data(column_names)
        .enter()
        .append('th')
        .html(function(d) {return d})

    this.redraw = function() {

        //TODO add enter exit pattern, nested
        me.rowdata = OCS_APP.datamanager.get_d3_data()

        var get_key = function(d) {return d[0].id}

        //First update existing
        var existingrows = tbody
            .selectAll('tr')
            .data(me.rowdata, get_key)
        
        //Rows should include all entering and all updating rows
        newrows = existingrows
            .enter()
            .append('tr')

            
        //Update existing cells 
        var existingcells = existingrows
                                .selectAll('td')
                                .data(function(d) {return d})
            

        existingcells
            .style("padding-top", "0.75rem")
            .style("padding-bottom", "0.75rem")
            .style("max-height", "200px")
            .html(function(d) {
                return d.value
            })

        //Deal with new rows and cells 
        var newcells = newrows.selectAll("td")
                                .data(function(d) {return d})

        tds = newcells.enter()
                .append('td')

        tds
            .style("padding-top", "0px")
            .style("padding-bottom", "0px")
            .style("width", "33%")
            .transition()
            .duration(transition_duration)
            .style("padding-top", "0.75rem")
            .style("padding-bottom", "0.75rem")

            
        tds
            .append("div")
            .html(function(d) {
                return d.value
            })
            .style("max-height", "0px")
            .style("overflow", "hidden")
            .transition()
            .duration(transition_duration)
            .style("max-height", "200px")
        
         existingrows.exit()
            .selectAll("div")
            .transition()
            .duration(transition_duration)
            .style("overflow", "hidden")
            .style("max-height", "0px")

         existingrows.exit()
            .selectAll("td")
            .transition()
            .duration(transition_duration)
            .style("padding-top", "0px")
            .style("padding-bottom", "0px")


        //Remove rows no longer present in data
        existingrows.exit()
            .transition(transition_duration)
            .duration(transition_duration)
            .remove()
        



    }


} 