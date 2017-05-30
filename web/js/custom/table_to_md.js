//
var TableToMarkdown = function() {

    var me = this;
    this.rowdata = null



    function row_to_md(row) {
        var col1 = ""
        var col2 = ""

        col1 = row[0].value

        if (row.length == 2) {
            col2 = row[1].value
        }

        return(`|${col1}|${col2}|`)
    }

    this.get_markdown = function() {

        //outputarray will hold the lines of the markdown table
        
        var column_names = OCS_APP.datamanager.column_names

        me.rowdata = OCS_APP.datamanager.get_d3_data();
        
        var outputarray = []

        outputarray.push(`|${column_names[0]}|${column_names[1]}|`)
        outputarray.push("|---|---|")

        _.each(me.rowdata, function(row) {
            this_md = row_to_md(row)
            outputarray.push(this_md)
        })

        return outputarray.join("\n")

    }


    

}