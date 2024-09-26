import { Saucedemo } from "../page/souceDemo";

const saucedemo = new Saucedemo();


describe('Login Test for Saucedemo Website', () => {

  beforeEach(() => {
    saucedemo.navigate();
   
  })
  
   it('test login success', () => {
      
     saucedemo.inputUser('standard_user')
     saucedemo.inputPassword('secret_sauce')
     saucedemo.clickButtonLogin()
     saucedemo.validateLoginSuccess()

   });

   it('test login fail', () => {
      
     saucedemo.inputUser('invalid_user')
     saucedemo.inputPassword('wrong_password')
     saucedemo.clickButtonLogin()
     saucedemo.validateLoginFailed()
   });
});
