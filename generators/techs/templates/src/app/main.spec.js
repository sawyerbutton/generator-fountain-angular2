<% if (modules === 'webpack') { -%>
require('zone.js/dist/zone');
<% } -%>
require('zone.js/dist/async-test');
var ng = require('@angular/core');
var Main = require('./main');
var Techs = require('./techs/techs');
var Footer = require('./footer');
var Header = require('./header');
var Title = require('./title');
var ngTest = require('@angular/core/testing');
var ngCompilerTest = require('@angular/compiler/testing');
var ngPlatformDynamic = require('@angular/platform-browser-dynamic/testing');

var MockTechs = ng.Component({
  selector: 'Techs',
  template: ''
})
.Class({
  constructor: function () {}
});
var MockFooter = ng.Component({
  selector: 'Footer',
  template: ''
})
.Class({
  constructor: function () {}
});
var MockHeader = ng.Component({
  selector: 'Header',
  template: ''
})
.Class({
  constructor: function () {}
});
var MockTitle = ng.Component({
  selector: 'Title',
  template: ''
})
.Class({
  constructor: function () {}
});

ngTest.setBaseTestProviders(ngPlatformDynamic.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, ngPlatformDynamic.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

ngTest.describe('main component', function () {
  ngTest.it('should render the header, title, techs and footer', ngTest.async(ngTest.inject([ngCompilerTest.TestComponentBuilder], function (tcb) {
    tcb
      .overrideDirective(Main, Techs, MockTechs)
      .overrideDirective(Main, Footer, MockFooter)
      .overrideDirective(Main, Header, MockHeader)
      .overrideDirective(Main, Title, MockTitle)
      .createAsync(Main)
      .then(function (fixture) {
        fixture.detectChanges();
        var main = fixture.nativeElement;
        ngTest.expect(main.querySelector('Header')).toBeDefined();
        ngTest.expect(main.querySelector('TitleComponent')).toBeDefined();
        ngTest.expect(main.querySelector('Techs')).toBeDefined();
        ngTest.expect(main.querySelector('Footer')).toBeDefined();
      });
  })));
});
