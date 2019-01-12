import { Config } from 'protractor';
import * as JasmineConsoleReporter from 'jasmine-console-reporter';

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

export let config: Config = {
    baseUrl: 'http://www.way2automation.com/angularjs-protractor/registeration/#/login',
    capabilities: {
        'browserName': 'firefox',
    },
    framework: 'jasmine2',
    specs: ['specs/**/example-spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: './test/reports/',
            screenshotsFolder: 'images'
          })
        );
     }
    
};
