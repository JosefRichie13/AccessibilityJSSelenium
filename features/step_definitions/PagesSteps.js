import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import configs from '../support/configs.js';
import selectors from '../support/selectors.js';
import { expect, assert } from 'chai';


Given('I open the web page', async function(){
    await this.driver.get(configs.MainURL)
})

Given('I open the web page with many violations', async function(){
    await this.driver.get("https://www.bis.gov.in/career-opportunities/1961-2/")
})


When('I wait for {string} seconds', async function(Time){
    await new Promise(resolve => setTimeout(resolve, Time * 1000))
})


When('I login as a standard user', async function(){
    await this.driver.findElement(By.id(selectors.UserName)).sendKeys(configs.ValidUser)
    await this.driver.findElement(By.id(selectors.Password)).sendKeys(configs.Password)
    await this.driver.findElement(By.id(selectors.LoginButton)).click()
})

When('I open a product page', async function(){
    await this.driver.findElement(By.className(selectors.ProductList)).click()
})

When('I click on the {string} menu', async function(MenuType){
    switch(MenuType){
        case "site":
            await this.driver.findElement(By.id(selectors.Menu)).click()
            break
        case "sort":
            await this.driver.findElement(By.className(selectors.ProductSort)).click()
            break
        default :
            console.log("Incorrect Usertype")         
    }
})

When('I add a product to the cart', async function(){
    await this.driver.findElement(By.css(selectors.AddToCart)).click()
})

When('I go to the cart', async function(){
    await this.driver.findElement(By.className(selectors.Cart)).click()
})

When('I checkout of the cart', async function(){
    await this.driver.findElement(By.id(selectors.Checkout)).click()
})

When('I enter my information to continue', async function(table){

    const UserDetails = table.hashes()

    await this.driver.findElement(By.id(selectors.FirstName)).sendKeys(UserDetails[0]['FirstName'])
    await this.driver.findElement(By.id(selectors.LastName)).sendKeys(UserDetails[0]['LastName'])
    await this.driver.findElement(By.id(selectors.ZipCode)).sendKeys(UserDetails[0]['Zip'])

    await this.driver.findElement(By.id(selectors.ContinueButton)).click()

})

When('I confirm my order', async function(){
    await this.driver.findElement(By.id(selectors.FinishButton)).click()
})
