function render_markdown(raw_md) {
    var converter = new showdown.Converter({
        tables: 'true',
        extensions: ["bootstrap-tables"]
    })
    html = converter.makeHtml(raw_md);
    return html
}


//When the page is ready



$(function() {
    var interface,
        checklist,
        dataholder

    $.get("data/markdown1.md", function(raw_md) {
        
        $("#rendermd").html(render_markdown(raw_md))
    })

    $("#scale_select, #language_select, #risk_select").on("change", function() {
        OCS_APP.checklist.redraw()
    })

    $("#download_markdown").on("click", function() {
        OCS_APP.table_to_markdown.get_markdown()
    })

    d3.csv("data/table.csv")
        .row(function(row) {
            row.header_level = +row.header_level
            return row
        })
        .get(function(data) {
            OCS_APP.interface = new Interface()
            OCS_APP.datamanager = new DataManager(data)
            OCS_APP.checklist = new CheckList()
            OCS_APP.table_to_markdown = new TableToMarkdown()
            OCS_APP.checklist.redraw()
        });

})