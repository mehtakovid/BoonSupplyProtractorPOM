var ProductDetailsPage = function(){

    this.AddItemToCart = function(){

        var productName = element(by.xpath("//h1[@class='pv-title']")).getText().then(function(ProductName){
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


};
module.exports = new ProductDetailsPage();