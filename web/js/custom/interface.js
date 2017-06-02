var Interface = function() {

	

}

Interface.prototype = {
    get risk_level() {
        return +d3.select("#risk_select").property("value")
    },
    get scale_level() {
        return +d3.select("#scale_select").property("value")
    },
    get overall_level() {
        return this.risk_level + this.scale_level - 1
    },
    get language_array() {
    	return $("#language_select").val()
    },
    get detail_toggle() {
        return $("#details_toggle").is(":checked")
    },
    get getting_started_toggle() {
        return $("#getting_started_toggle").is(":checked")
    },

}