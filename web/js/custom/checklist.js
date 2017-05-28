var CheckList = function() {

    var transition_duration = 4000

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
            .style("color", "orange")
            .html(function(d) {
                return d.value
            })



        //Deal with new rows and cells 
        var newcells = newrows.selectAll("td")
                                .data(function(d) {return d})

        newcells.enter()
                .append('td')
                .style("color", "green")
                .html(function(d) {
                    return d.value
                })

        
         existingrows.exit()
            .selectAll("td")
            .html("")
            // .style("display", "inline-block")
            .transition()
            .duration(transition_duration)
            .style("color", "red")
            .style("size", 0)
            .style("row-height", "0px")

            

        //Remove rows no longer present in data
        existingrows.exit()
            .style("overflow", "hidden")
            // .style("display", "inline-block")
            .transition(transition_duration)
            .duration(transition_duration)
            .style("row-height", "0px")
            .remove()
        



    }


} 