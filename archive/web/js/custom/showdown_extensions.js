showdown.extension('bootstrap-tables', function () {
  return [{
    type: "output",
    filter: function (html, converter, options) {
      // parse the html string
      var liveHtml = $('<div></div>').html(html);
      $('table', liveHtml).each(function(){ 
      	var table = $(this);
        // table bootstrap classes
        table.addClass('table table-striped table-bordered')
        // make table responsive
        .wrap('<div class="class table-responsive"></div>');
      });
      return liveHtml.html();
    }
  }];
});