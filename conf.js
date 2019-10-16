{
    exports.config = {
        directConnect: true,
        specs: ["BoonSupplyTests/BoonSupplyTest.js"],
        onPrepare: function () {
            browser.get("https://www.boonsupply.com/");
            browser.manage().window().maximize();
            browser.ignoreSynchronization = true;
        },
        jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 300000,
            isVerbose: true,
            includeStackTrace: true,
        }
    };


}