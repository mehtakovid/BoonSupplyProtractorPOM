var ProductListPage = function(){

    this.SelectA25$GiftItem = function(number) {

        element.all(by.xpath("//div[@id='ssItems']/article")).count().then(function(ele){
            console.log("Number of Items on Page 1 : " +ele);
            element(by.xpath("//div[@id='ssItems']/article["+number+"]")).click();
        });
    
    }

    this.SelectSportItems = function(number){

        element.all(by.xpath("//div[@id='ssItems']/article")).count().then(function(ele){
            console.log("Number of Items on Page 1 : " +ele);
            element(by.xpath("//div[@id='ssItems']/article["+number+"]")).click();
        });

    }


};

module.exports = new ProductListPage();