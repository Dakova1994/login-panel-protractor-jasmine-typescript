import { HomePage } from "../pages/example-pages";
import { browser } from "protractor";
import * as testData from "./../utils/data";

const homePage: HomePage = new HomePage();


describe('Testing login panel:', () => {
    beforeAll(() => {
        homePage.open()
    })

    it('should login with correct data', ()=> {
        homePage.addUserName(testData.CORRECT_USER_NAME);
        homePage.addUserPassword(testData.CORRECT_USER_PASSWORD);
        homePage.addSpecialUserName(testData.CORRECT_USER_NICKNAME);
        homePage.login();
        expect(browser.getCurrentUrl()).toBe(homePage.logedURL);
    })
   
    it('shouldnt log in with an incorrect data', ()=> {
        homePage.open();
        homePage.addUserName(testData.INCORRECT_USER_NAME);
        homePage.addUserPassword(testData.INCORRECT_USER_PASSWORD);
        homePage.addSpecialUserName(testData.CORRECT_USER_NICKNAME);
        homePage.login();
        expect(homePage.getAuthErrorInfo()).toEqual('Username or password is incorrect');
    })

    it('shouldnt log in with an incorrect password', ()=>{
        homePage.open();
        homePage.addUserName(testData.CORRECT_USER_NAME);
        homePage.addUserPassword(testData.INCORRECT_USER_PASSWORD);
        homePage.addSpecialUserName(testData.CORRECT_USER_NICKNAME);
        homePage.login();
        expect(homePage.getAuthErrorInfo()).toEqual('Username or password is incorrect');
    })

    it('should block login if you do not provide data', ()=>{
        homePage.open();
        expect(homePage.loginButton.isEnabled()).toBe(false);
    })
});