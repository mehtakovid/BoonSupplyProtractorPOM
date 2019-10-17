var CreateAccountPage = function(){

    this.EnterNewUserDetails = function(FirstName,LastName,Email,Password){
       
        element(by.id("firstname")).sendKeys(FirstName)
        element(by.id("lastname")).sendKeys(LastName)
        element(by.id("email")).sendKeys(Email);
        element(by.id("password")).sendKeys(Password);
        element(by.id("password-confirm")).sendKeys(Password);
       
    };




};
module.exports = new CreateAccountPage();