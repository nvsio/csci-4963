var casper = require('casper').create();

casper.start('http://venmo.com/#public', function() {
  this.echo(this.getTitle());
});

casper.thenOpen('http://venmo.com/#public', funcition() {
  this.echo(this.getTitle());

});

casper.run();