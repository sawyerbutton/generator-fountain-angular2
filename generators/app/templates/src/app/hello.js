var ng = require('angular2/core');

module.exports =
  ng.Component({
    selector: 'hello-app',
    template: '<h1>{{ hello }}</h1>'
  })
  .Class({
    constructor: function() {
      this.hello = 'Hello World!';
    }
  });
