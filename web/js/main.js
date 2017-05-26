function render_markdown(raw_md) {
    var converter = new showdown.Converter({
        tables: 'true',
        extensions: ["bootstrap-tables"]
    })
    html = converter.makeHtml(raw_md);
    $("#rendermd").html(html)
}



DataHolder = function(csvdata) {
    
    var me = this;
    this.csvdata = csvdata
    this.column_names = d3.keys(csvdata[0])

    this.dict_to_td_array = function(row) { 
        //It's a standard row so long as header_level == 1
        if (row.header_level == 1) {
            var return_array = me.column_names.map(function (column) {
              return {column: column, value: row[column], colspan: 1};
            });

            return return_array
        }   

        if (row.header_level == 3) {
            var dict = {}
            dict.column = "activity"
            dict.value = row["activity"]
            dict.colspan = 3
            return [dict]
        }
    }

    this.get_d3_data = function() {
        var csvdata = me.csvdata;
        return _.map(csvdata, me.dict_to_td_array);
        
    }
}

function write_table() {

        var table = d3.select("#checklist")

        table.attr("class", "table table-striped table-bordered")

        var thead = table.append('thead')
        var tbody = table.append('tbody')

        var column_names = d3.keys(data[0])

        thead.append('tr')
            .selectAll('th')
            .data(column_names)
            .enter()
            .append('th')
            .html(function(d) {return d})


        //Remember we can get the parent data
        tbody
            .selectAll('tr')
            .data(data)
            .enter()
            .append('tr')
            .selectAll('td')
            .data(row_to_td_array)
            .enter()
            .append('td')
            .html(function(d,i,dp, dp2) {
                var parent_data = this.parentElement.__data__

                
                return d.value})
    }

//When the page is ready
$(function() {

    $.get("data/markdown1.md", function(raw_md) {
        render_markdown(raw_md)

    })



    d3.csv("data/test_data.csv")
        .row(function(row) {
            row.header_level = +row.header_level
            return row
        })
        .get(function(data) {
            var dataholder = new DataHolder(data)

            var d3_data = dataholder.get_d3_data()

            // write_table(dataholder.get_d3_data())

        });






})