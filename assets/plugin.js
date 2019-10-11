require([
  'gitbook'
], function(gitbook) {
  var init = function () {
    mediumZoom("img");
  }
  gitbook.events.bind('page.change', function(e, config) {
    init();
  });
});