var LoginPage = function(){

    this.EnterCredentials = function(UserEmail,Password){
       
        browser.waitForAngularEnabled = false;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.xpath("//input[@id='email']"))),10000);
        element(by.xpath("//input[@id='email']")).sendKeys(UserEmail);
        element(by.xpath("//input[@id='password']")).sendKeys(Password);
        element(by.xpath("//button[text()='Sign In']")).click();
        browser.sleep(10000);
        element.all(by.xpath("//*[@id='formMessages']/div")).count().then(function(EleCount){
            expect(EleCount).toEqual(0);
        });

    };

    this.ClickOnCreateNewAccount = function(){
        element(by.xpath("//a[text()='create an account here']")).click().then(function(){
                console.log("Clicked");
        });

    };


};
module.exports = new LoginPage();