var ColourTime = function() {

    var me = this;
    me.running = false;
    var speed = 1;
    var topdomain = 50

    this.colourscale = d3.scaleSequential(d3.interpolateRainbow).domain([0,topdomain])

    var bg_c_fn = function(d,i, elapsed) {
        

    }

    this.run = function(delay) {
        me.running = true



        me.t = d3.timer(function(elapsed) {
            d3.selectAll("td")
                .style("background-color", function(d,i) {
                    var colour = me.colourscale(i+elapsed*speed/200)
                    var colour = d3.hsl(colour)
                    if (d.colspan == 1 ) {
                        return colour.brighter(1.5)
                    } else if (d.colspan == 2) {
                        return colour.darker(0.5)
                    }
                })
                .style("color", function(d,i) {
                    var i = i + (topdomain/2)
                    var colour = me.colourscale(i+elapsed*speed/200)
                    var colour = d3.hsl(colour)
                    if (d.colspan == 1 ) {
                        return colour.darker(2)
                    } else if (d.colspan == 2) {
                        return colour.brighter(1)
                    }
                })
                .style("border-color", function(d,i) {
                    var colour = me.colourscale(i+elapsed*speed/300)
                    var colour = d3.hsl(colour)
                    return colour 
                })
            
        }, delay)
    }

    

    this.stop = function() {
        me.running = false
            
            if (me.t != undefined) {
                me.t.stop()
                d3.selectAll("td")
                .style("color", "")
                .style("border-color", "")
            }

    }
}