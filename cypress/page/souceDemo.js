export class Saucedemo {
    txtUserName = "[data-test=username]";
    txtPassword = "[data-test=password]";
    btnLogin = "[data-test=login-button]";
    lblError = "[data-test=error]";

    navigate(){
        cy.visit('https://www.saucedemo.com/');
        cy.get(this.txtUserName).should('be.visible', true);
    }

    inputUser(userName){
        cy.get(this.txtUserName).clear().type(userName);
        cy.get(this.txtUserName).should('have.value',userName);
    }

    inputPassword(password){
        cy.get(this.txtPassword).clear().type(password);
        cy.get(this.txtPassword).should('have.value', password);
    }

    clickButtonLogin(){
        cy.get(this.btnLogin).click();
    }

    validateLoginSuccess(){
        cy.url().should('include', '/inventory.html');
    }

    validateLoginFailed(){
        cy.get(this.lblError).should('be.visible', true);
    }
}