exports.config = {
    framework:'jasmine',
    directConnect : true,
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   
    specs: ['Calculator.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 999999
      }
};