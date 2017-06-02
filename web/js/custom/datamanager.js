var DataManager = function(csvdata) {
    
    var me = this;
    
    //Add id column
    _.each(csvdata, function(d,i) {
        d.id = i
    })

    this.csvdata = csvdata

    this.get_num_rows = function() {
        var numrows = 2
        if (OCS_APP.interface.getting_started_toggle) {
            numrows +=1
        }
        return numrows
    }

    this.get_perc_width = function(dict) {
        var numrows = me.get_num_rows()
        var perc = 1/numrows 
        return d3.format(".0%")(perc)
    }

    this.get_col_span = function() {
        return OCS_APP.datamanager.get_num_rows()
    }

    this.row_to_activity = function(row) {
        var dict = {}

        dict.column = "activity"
        dict.value = row["activity"]
        if (OCS_APP.interface.detail_toggle) {
         dict.value += ` <span class="detail_text">${row["before_start"]}</span>`   
        }
        dict.id = row["id"]
        dict.colspan = 1

        _.each(["python", "r", "javascript"], function(this_language) {

            if (_.contains(OCS_APP.interface.language_array, this_language)) {
                if (row[this_language] != "") {
                    dict.value += " " +  row[this_language]
                }
            } 
        })

        dict.perc_width = me.get_perc_width()

        return dict
    }

    this.row_to_why = function(row) {
        var dict = {}
        dict.column = "why"
        dict.value = row["why"]
        dict.id = row["id"]
        dict.colspan = 1
        dict.perc_width = me.get_perc_width()
        return dict
    }

    this.row_to_before_start = function(row) {
        var dict = {}
        dict.column = "before_start"
        dict.value = row["before_start"]
        dict.id = row["id"]
        dict.colspan = 1
        dict.perc_width = me.get_perc_width()
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
            var before_start = me.row_to_before_start(row)


            return_array =  [activity, why]

            if (OCS_APP.interface.getting_started_toggle) {
                return_array.push(before_start)
            }

        

            return return_array
        }   

        if (row.header_level == 3) {
            var dict = {}
            dict.column = "activity"
            dict.value = row["activity"]
            dict.colspan = me.get_col_span()
            dict.id = row["id"]
            dict["perc_width"] = "100%"


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
            if (_.contains(OCS_APP.interface.language_array, row.language.toLowerCase())) {return true}
            return false
        })

        return _.map(csvdata, me.dict_to_td_array); 
    }
}

DataManager.prototype = {

    get column_names() {

        if (OCS_APP.interface.getting_started_toggle) {
            return ["Activity", "Why", "Before getting started..."]
        } else {
            return ["Activity", "Why"]
        }

    }
}