///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import 'reflect-metadata';

import { bootstrap } from 'angular2/bootstrap';

<% if (modules === 'webpack') { -%>
import './index.<%- css %>';

<% } -%>
import { Hello } from './app/hello';

bootstrap(Hello);