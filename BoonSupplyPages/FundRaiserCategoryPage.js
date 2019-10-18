var FundRaiserCategoryPage = function() {


    this.SearchTheFundRaiser = function() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath
            ("//button[contains(text(),'Search')]/preceding-sibling::div/input[@id='fundCatInput']"))), 5000);

            element(by.xpath("//button[contains(text(),'Search')]/preceding-sibling::div/input[@id='fundCatInput']")).sendKeys("California").then(function(){

                element(by.xpath("//button[contains(text(),'Search')]")).click().then(function(){
                    browser.sleep(5000);
                    element(by.xpath("//header[@class='search-cat__header']")).getText().then(function(text){

                        expect(text).toContain("SEARCH RESULTS FOR");

                    });
                    
                });

        });


    }


}
module.exports= new FundRaiserCategoryPage();