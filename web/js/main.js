function render_markdown(raw_md) {
    var converter = new showdown.Converter({
        tables: 'true',
        extensions: ["bootstrap-tables"]
    })
    html = converter.makeHtml(raw_md);
    $("#rendermd").html(html)
}

var column_names = ["A", "B"]


//When the page is ready
$(function() {

    $.get("data/markdown1.md", function(raw_md) {
        render_markdown(raw_md)

    })



    d3.csv("data/test_data.csv")
        .row(function(row) {
            return row
        })
        .get(function(data) {
            //We want a dataformat of []
            //
        });

    // Template d3 code for table
    var data = [{
        a: 1,
        b: 2
    }, {
        a: 2,
        b: 3
    }, {
        a: 4,
        b: 5
    }]

    var table = d3.select("#checklist")

    table
    	.attr("class", "table table-striped table-bordered")

    var thead = table.append('thead')
    var tbody = table.append('tbody')

    columns = d3.keys(data[0])

    thead.append('tr')
    	.selectAll('th')
    	.data(column_names)
    	.enter()
    	.append('th')
    	.html(function(d) {return d})


    tbody
        .selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .selectAll('td')
        .data(function(row) {
		    return columns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
        })
        .enter()
        .append('td')
        .html(function(d) {return d.value})




})