var ProductDetailsPage = function(){

    this.AddItemToCart = function(){

        element(by.xpath("//h1[@class='pv-title']")).getText().then(function(ProductName){
            console.log("Name of the Product is : " +ProductName);

        });
        element(by.xpath("//p[@id='productPrice']")).getText().then(function(ProductPrice){
            console.log("Price of the Product is : " +ProductPrice);
        });
                
        element(by.xpath("//button[@id='btnAddToBag']")).click().then(function(){

            browser.sleep(5000);
            element(by.xpath("//form[@id='bagForm']/descendant::header[@class='bag-item__header']")).getText().then(function(itemincart){
                    expect(itemincart).toContain("Grocery Store Bags");
            });

        });
    }

    this.addmultipleItemsInCart = function(Quantity){
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath("//h1[@class='pv-title']"))),5000);
        for(var i=0; i<Quantity; i++){
            element(by.xpath("//div[@class='pv-action pv-qty']//span[3]")).click().then(function(){
                console.log('here');
            });
        }

            element(by.xpath("//button[@id='btnAddToBag']")).click().then(function(){

                browser.sleep(5000);
                element(by.xpath("//div[@id='bagItems']//input[@name='quantity']")).getText().then(function(cartQuantity){
                console.log(cartQuantity);        
                expect(cartQuantity).toEqual(Quantity+1);

            });
                
            
        });

    }



};
module.exports = new ProductDetailsPage();