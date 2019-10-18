describe("Validating the Basic Functionalities of BoonSupply", function(){


    var HomePage = require("../BoonSupplyPages/HomePage");
    var FundRaiserCategoryPage = require("../BoonSupplyPages/FundRaiserCategoryPage");
    xit("Searching for a Fundraiser", function(){

        HomePage.clickOnFindAFundRaiser();
        FundRaiserCategoryPage.SearchTheFundRaiser();

    });

    var ProductListPage = require("../BoonSupplyPages/ProductListPage");
    var ProductDetailPage = require("../BoonSupplyPages/ProductDetailsPage");
    xit("Selecting a 25$ Gift Item", function(){

        HomePage.GoTo25$GiftCategory();
        ProductListPage.SelectA25$GiftItem(4);
        ProductDetailPage.AddItemToCart();
        
    });

    xit("Adding Multiple items to Cart", function(){
        HomePage.GoToSportsCollection();
        ProductListPage.SelectSportItems(5);
        ProductDetailPage.addmultipleItemsInCart(6);
    });

    var LoginPage = require("../BoonSupplyPages/LoginPage")
    xit("Login to Boon Supply",function(){
            HomePage.ClickOnLogin();
            LoginPage.EnterCredentials("kovidmehta10@gmail.com","Khardungla@18");


    });

    var CreateAccountPage = require("../BoonSupplyPages/CreateAccountPage");
    it("Create New user Account",function(){
        HomePage.ClickOnLogin();
        LoginPage.ClickOnCreateNewAccount();
        CreateAccountPage.EnterNewUserDetails("kovid","mehta","kovidmehta10@gmail.com","Khardungla@18");

    });

    it("Proceed with a Product Till Checkout Page",function(){
        

    });



});