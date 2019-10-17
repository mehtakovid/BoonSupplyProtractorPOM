var homePage = function() {

    
    this.clickOnFindAFundRaiser = function() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath("//nav[@id='hdrNav']//button[text()='Fundraise']"))), 5000);
        element(by.xpath("//nav[@id='hdrNav']//button[text()='Fundraise']")).click().then(function(){
        
            element(by.xpath("//nav[@id='hdrNav']//h3[contains(text(),'Find a Fundraiser')]")).click();

        });

    }

    this.GoTo25$GiftCategory = function(){

        element(by.xpath("//nav[@id='hdrNav']//button[contains(text(),'Shop')]")).click().then(function(){

            element(by.xpath("//ul[@id='menuShopList']//a[contains(text(),'Gifts Under $25')]")).click();   

        });

    }

    this.GoToSportsCollection = function(){
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath("//nav[@id='hdrNav']//button[contains(text(),'Shop')]"))), 5000);

        element(by.xpath("//nav[@id='hdrNav']//button[contains(text(),'Shop')]")).click().then(function(){
            element(by.xpath("//ul[@id='menuShopList']//a[contains(text(),'Sports')]")).click();
        });
    
    }

    this.ClickOnLogin = function(){
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath("//a[@id='hdrSignInHdrUtils']"))),10000);
        element(by.xpath("//a[@id='hdrSignInHdrUtils']")).click().then(function(){
            browser.sleep(3000);
            console.log("Clicked on Login");
        });
    };

}

module.exports = new homePage();