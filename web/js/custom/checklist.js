var CheckList = function() {

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
        this.rowdata = OCS_APP.datamanager.get_d3_data()

        //enter rows
        //update rows

        //enter cells
        //update cells
        //delete cells

        //delete rows

        var rows = tbody
            .selectAll('tr')
            .data(this.rowdata)

        
        //Rows should include all entering and all updating rows
        rowsmerge = rows
            .enter()
            .append('tr')
            .merge(rows)
            

        var cells = rowsmerge.selectAll('td')
            .data(function(d) {return d})
            
        var cellsenter = cells.enter()
            .append('td')

        cells
            .merge(cellsenter)
            .html(function(d) {
                return d.value
            })

        cells.exit().remove()

        rows.exit().remove()

        

        


    }

    

}