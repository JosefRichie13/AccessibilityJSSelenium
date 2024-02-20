import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import configs from '../support/configs.js';
import selectors from '../support/selectors.js';
import { expect, assert } from 'chai';


Given('I open the web page', async function(){
    await this.driver.get(configs.MainURL)
})


When('I wait for {string} seconds', async function(Time){
    await new Promise(resolve => setTimeout(resolve, Time * 1000))
})



When('I login as a standard user', async function(){
    await this.driver.findElement(By.id(selectors.UserName)).sendKeys(configs.ValidUser)
    await this.driver.findElement(By.id(selectors.Password)).sendKeys(configs.Password)
    await this.driver.findElement(By.id(selectors.LoginButton)).click()
})
