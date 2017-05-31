var ColourTime = function() {

    var me = this;
    me.running = false;
    var speed = 1;
    var topdomain = 50

    this.colourscale = d3.scaleSequential(d3.interpolateRainbow).domain([0,topdomain])

    var bg_c_fn = function(d,i, elapsed) {

        var colour = me.colourscale(i+elapsed*speed/200)
        var colour = d3.hsl(colour)
        if (d.colspan == 1 ) {
            return colour.brighter(1)
        } else if (d.colspan == 2) {
            return colour.darker(0.5)
        }

    }

    var fnt_c_fn = function(d,i, elapsed ){
        var i = i + (topdomain/2)
        var colour = me.colourscale(i+elapsed*speed/200)
        var colour = d3.hsl(colour)
        if (d.colspan == 1 ) {
            return colour.darker(2.5)
        } else if (d.colspan == 2) {
            return colour.brighter(1)
        }
    }

    var bd_c_fn = function(d,i, elapsed) {
        var colour = me.colourscale(i+elapsed*speed/300)
        var colour = d3.hsl(colour)
        return colour       
    }

    this.run = function(howlong) {
        me.running = true

        d3.selectAll("td")
                .transition()
                .duration(2000)
                .style("background-color", function(d,i) {return bg_c_fn(d,i,0)})
                .style("color", function(d,i) {return fnt_c_fn(d,i, 0)})
                .style("border-color", function(d,i) {return bd_c_fn(d,i, 0)})

        me.t = d3.timer(function(elapsed) {
            d3.selectAll("td")
                .style("background-color", function(d,i) {return bg_c_fn(d,i,elapsed)})
                .style("color", function(d,i) {return fnt_c_fn(d,i, elapsed)})
                .style("border-color", function(d,i) {return bd_c_fn(d,i, elapsed)})

            if (elapsed > howlong) {
                me.stop();

            }
            
        }, 2000)
    }

    

    this.stop = function() {
        me.running = false
            
            if (me.t != undefined) {
                me.t.stop()
                d3.selectAll("td")
                    .style("color", "")
                    .style("border-color", "")


            }
            OCS_APP.checklist.redraw()

    }
}