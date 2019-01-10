import { $, $$, browser, promise, ElementFinder, ElementArrayFinder } from 'protractor';


export class HomePage{
    public url: string;
    public logedURL: string;
    public userNameInput: ElementFinder;
    public userPasswordInput: ElementFinder;
    public specialUserNameInput: ElementFinder;
    public loginButton: ElementFinder;
    public authError: ElementFinder;

    constructor(){
        this.logedURL = 'http://www.way2automation.com/angularjs-protractor/registeration/#/';
        this.url = 'http://www.way2automation.com/angularjs-protractor/registeration/#/login';
        this.userNameInput = $('[ng-model="Auth.user.name"]');
        this.userPasswordInput = $('[ng-model="Auth.user.password"]');
        this.specialUserNameInput = $('[ng-model="model[options.key]"]');
        this.loginButton = $('[ng-click="Auth.login()"]');
        this.authError = $('[ng-if="Auth.error"]');
    }

    public open(): void {
        browser.get(this.url);
    }

    public addUserName(userName): void {
        this.userNameInput.sendKeys(userName);
    }
    
    public addUserPassword(userPassword){
        this.userPasswordInput.sendKeys(userPassword);
    }

    public addSpecialUserName(userNickName){
        this.specialUserNameInput.sendKeys(userNickName);
    }

    public login(){
        this.loginButton.click();
    }

    public getAuthErrorInfo(): promise.Promise<string>{
        return this.authError.getText();
    }

    
}


