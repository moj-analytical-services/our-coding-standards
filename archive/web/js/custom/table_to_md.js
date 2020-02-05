//
var TableToMarkdown = function() {

    var me = this;
    this.rowdata = null



    function row_to_md(row) {
        var col1 = ""
        var col2 = ""

        col1 = row[0].value

        if (row[0].colspan == 2) {
            col1 = `**${col1}**`
        }

        if (row[0].colspan == 1) {
            col2 = col2 + "✅❌"
        }

        return(`|${col1}|${col2}||`)
    }

    this.get_markdown = function() {

        //outputarray will hold the lines of the markdown table
        
        var column_names = OCS_APP.datamanager.column_names

        me.rowdata = OCS_APP.datamanager.get_d3_data();
        
        var outputarray = []

        outputarray.push(`|${column_names[0]}|Done (delete as appropriate)| Notes |`)
        outputarray.push("|---|---|---|")

        _.each(me.rowdata, function(row) {
            this_md = row_to_md(row)
            outputarray.push(this_md)
        })

        return outputarray.join("\n")

    }

    this.download = function(animate) {

        var text = me.get_markdown()
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', "my_personalised_checklist.md");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

        //Animate for 30 seconds
        if (animate) {
            OCS_APP.colourtime.run(8000)
        }
    }


    

}