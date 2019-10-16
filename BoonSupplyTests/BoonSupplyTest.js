describe("Validating the Basic Functionalities of BoonSupplu", function(){


    var HomePage = require("../BoonSupplyPages/HomePage");
    var FundRaiserCategoryPage = require("../BoonSupplyPages/FundRaiserCategoryPage");
    it("Searching for a Fundraiser", function(){

        HomePage.clickOnFindAFundRaiser();
        FundRaiserCategoryPage.SearchTheFundRaiser();

    });

    var ProductListPage = require("../BoonSupplyPages/ProductListPage");
    var ProductDetailPage = require("../BoonSupplyPages/ProductDetailsPage");
    it("Selecting a 25$ Gift Item", function(){

        HomePage.GoTo25$GiftCategory();
        ProductListPage.SelectA25$GiftItem(4);
        ProductDetailPage.AddItemToCart();
        
    });


});