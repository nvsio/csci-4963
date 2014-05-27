// include modules
var phantom = require('phantom');

// test
phantom.create(function(venmo) {
  return venmo.createPage(function(page) {
    return page.open("http://venmo.com/#open",
      console.log("opened venmo: "), status);
        var jsonSource = page.plainText;
        var resultObject = JSON.parse(jsonSource);
        phantom.exit();
    });
  });
});

