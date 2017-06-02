var CheckList = function() {

    var transition_duration = 1000

    var me = this;
    me.firstrun = true

    var table = d3.select("#checklist")
    table.attr("class", "table table-bordered")

    var thead = table.append('thead')
    var tbody = table.append('tbody')

    var column_names = OCS_APP.datamanager.column_names
    this.rowdata = OCS_APP.datamanager.get_d3_data()

    var tr_head = thead.append('tr')

    tr_head
        .selectAll('th')
        .data(column_names)
        .enter()
        .append('th')
        .html(function(d) {return d})

    this.redraw = function() {

        //Update column names
        var ths = tr_head
            .selectAll('th')
            .data(OCS_APP.datamanager.column_names)

        function update_th_html() {
            ths.enter()
                .append('th')
                .html(function(d) {return d})
        }

        setTimeout(update_th_html, transition_duration)

        ths.exit().remove()

        me.rowdata = OCS_APP.datamanager.get_d3_data()

        var get_key = function(d) {

            return d[0].id
        }

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
                .attr("colspan", function(d) {return d.colspan})
                .style("background-color", function(d) {
                    if (me.firstrun) {
                        return "white"
                    } else {
                        return "#C6EFCC"
                    }

                })
                .style("width", function(d) {
                    if (me.firstrun) {
                        return d.perc_width
                    } else {
                        return d.perc_width
                    }
                })
                
        newtds
            .style("padding-top", "0px")
            .style("padding-bottom", "0px")

        var divs = newtds
            .append("div")
            .style("max-height", "0px")
            .style("overflow", "hidden")
            .style("max-width", "0px")



        updatetds = newtds.merge(tds)
        
        updatetds
            .attr("colspan", function(d) {return d.colspan})
            .transition()
            .duration(transition_duration)
            .ease(d3.easeLinear)
            .style("width", function(d) {
                return d.perc_width
            })
            .style("padding-top", "0.75rem")
            .style("padding-bottom", "0.75rem")
            .style("background-color", function(d) {
                if (d.colspan == OCS_APP.datamanager.get_num_rows()) {
                    return "#eceeef"
                } else {
                    return "white"
                }
            })
            .style("border-bottom", function(d) {
                if (d.colspan == OCS_APP.datamanager.get_num_rows()) {
                    return "2px solid #9D9D9D"
                } else {
                    return ""
                }
            })
            .style("font-weight", function(d) {
                if (d.colspan == OCS_APP.datamanager.get_num_rows()) {
                    return "bold"
                } else {
                    return ""
                }
            })

        updatetds 
            .select("div")
            .html(function(d) {
                return render_markdown(d.value)
            })     
            .transition()
            .duration(transition_duration)
            .style("max-height", function(d) {
                var line_length = 40
                var length = d.value.length
                var lines = Math.ceil(length/line_length)
                return lines * 30 + "px"
            }) 
            .style("max-width", "700px")
           
        tds.exit()
            .style("width", "0px")
            .transition()
            .duration(transition_duration)
            .style("background-color", "#EBCECE")
            .remove()

        tds.exit()
            .select("div")
            .transition()
            .duration(transition_duration)
            .style("max-width", "0px")

         rows.exit()
            .selectAll("td")
            .transition()
            .duration(transition_duration)
            .style("padding-top", "0rem")
            .style("padding-bottom", "0rem")
            .style("background-color", "#EBCECE")

         rows.exit()
            .selectAll("div")
            .transition()
            .duration(transition_duration)
            .style("overflow", "hidden")
            .style("height", "0px")
            .style("max-height", "0px")


        rows.exit()
            .transition(transition_duration)
            .duration(transition_duration)
            .remove()

        me.firstrun = false

    }


} 