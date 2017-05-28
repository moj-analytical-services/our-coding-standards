var CheckList = function() {

    var transition_duration = 1000

    var me = this;

    var table = d3.select("#checklist")
    table.attr("class", "table table-bordered")

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

        //Bind new data
        var rows = tbody
            .selectAll('tr')
            .data(me.rowdata, get_key)
        
        //Rows should include all entering and all updating rows
        newrows = rows
            .enter()
            .append('tr')

        allrows = rows.merge(newrows)

        //Deal with new rows and cells 
        var tds = allrows.selectAll("td")
                                .data(function(d) {return d})

        newtds = tds.enter()
                .append('td')

        newtds
            .style("padding-top", "0px")
            .style("padding-bottom", "0px")
            .style("width", "33%")
            

        newtds
            .append("div")
            .style("max-height", "0px")
            .style("overflow", "hidden")


        updatetds = newtds.merge(tds)
        
        updatetds
            .transition()
            .duration(transition_duration)
            .style("padding-top", "0.75rem")
            .style("padding-bottom", "0.75rem")


        updatetds 
            .select("div")
            .html(function(d) {
                return d.value
            })     
            .transition()
            .duration(transition_duration)
            .style("max-height", function(d) {
                var line_length = 40
                var length = d.value.length
                var lines = Math.ceil(length/line_length)
                return lines * 30 + "px"
            })     



         rows.exit()
            .selectAll("td")
            .transition()
            .duration(transition_duration)
            .style("padding-top", "0rem")
            .style("padding-bottom", "0rem")

         rows.exit()
            .selectAll("div")
            .transition()
            .duration(transition_duration)
            .style("overflow", "hidden")
            .style("height", "0px")
            .style("max-height", "0px")


        //Remove rows no longer present in data
        rows.exit()
            .transition(transition_duration)
            .duration(transition_duration)
            .remove()
        



    }


} 