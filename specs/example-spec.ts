import { HomePage } from "../pages/example-pages";
import { browser } from "protractor";


const homePage: HomePage = new HomePage();


describe('Testing login panel:', () => {
    beforeAll(() => {
        homePage.open()
    })

    it('Login with correct data', ()=> {
        homePage.addUserName('angular');
        homePage.addUserPassword('password');
        homePage.addSpecialUserName();
        homePage.login();
        expect(browser.getCurrentUrl()).toBe(homePage.logedURL);
    })
   
    it('Login with incorrect data', ()=> {
        homePage.open();
        homePage.addUserName('wronglogin');
        homePage.addUserPassword('wrongpassword');
        homePage.addSpecialUserName();
        homePage.login();
        expect<any>(homePage.getAuthErrorInfo()).toEqual('Username or password is incorrect');
    })
});