var DataManager = function(csvdata) {
    
    var me = this;
    
    //Add id column

    _.each(csvdata, function(d,i) {
        d.id = i
    })

    this.csvdata = csvdata


    this.column_names = ["Activity", "Why", "Checkbox"]

    this.row_to_activity = function(row) {
        var dict = {}
        dict.column = "activity"
        dict.value = row["activity"]

        _.each(["python", "r", "javascript"], function(this_language) {
            if (_.contains(OCS_APP.interface.languages, this_language)) {
                dict.value += row[this_language]
            } 
        })

        return dict
    }

    this.row_to_why = function(row) {
        var dict = {}
        dict.column = "why"
        dict.value = row["why"]
        return dict
    }

    this.row_to_checkbox = function(row) {
        var dict = {}
        dict.column = "checkbox"
        dict.value = "☑"
        return dict
    }

    this.dict_to_td_array = function(row) {
        //This takes the data from the raw csv and turns it into a nested array needed by d3
        //The output should be as follows:
            // Activity (which will include any language specific guidance)
            // Why
            // Checkbox (the value of which is a unicode checkbox)

        //It's a standard row so long as header_level == 1
        if (row.header_level == 1) {
            var activity = me.row_to_activity(row)
            var why = me.row_to_why(row)
            var checkbox = me.row_to_checkbox(row)

            return [activity, why, checkbox]
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
        
        csvdata = _.filter(csvdata, function(row) {
            if (row.min_level == "") {return true}
        
            var b1 = (OCS_APP.interface.overall_level >= row.min_level)
            var b2 = (OCS_APP.interface.overall_level <= row.max_level)
            return (b1 & b2)
        })

        csvdata = _.filter(csvdata, function(row) {
            if (row.language == "") {return true}
            if (_.contains(OCS_APP.interface.languages, row.language.toLowerCase())) {return true}
            return false
        })

        return _.map(csvdata, me.dict_to_td_array); 
    }
}
