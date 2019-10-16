var FundRaiserCategoryPage = function() {


    this.SearchTheFundRaiser = function() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath
            ("//button[contains(text(),'Search')]/preceding-sibling::div/input[@id='fundCatInput']"))), 5000);

            element(by.xpath("//button[contains(text(),'Search')]/preceding-sibling::div/input[@id='fundCatInput']")).sendKeys("California").then(function(){

                element(by.xpath("//button[contains(text(),'Search')]")).click().then(function(){

                    element(by.xpath("//header[@class='search-cat__header']")).getText().then(function(text){

                        expect(text).toContain("SEARCH RESULTS FOR");

                    });
                    
                });

        });


    }


    this.GoTo25$GiftCategory = function(){

        element(by.xpath("//nav[@id='hdrNav']//button[contains(text(),'Shop')]")).click().then(function(){

            element(by.xpath("//ul[@id='menuShopList']//a[contains(text(),'Gifts Under $25')]")).click();

        });

    }

}
module.exports= new FundRaiserCategoryPage();