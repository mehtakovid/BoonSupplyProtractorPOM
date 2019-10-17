{
    exports.config = {
        directConnect: true,
        specs: ["BoonSupplyTests/BoonSupplyTest.js"],
        onPrepare: function () {
            browser.ignoreSynchronization = true;
            browser.get("https://www.boonsupply.com/");
            browser.manage().window().maximize();
        },
        jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 300000,
            isVerbose: true,
            includeStackTrace: true,
        }
    };


}