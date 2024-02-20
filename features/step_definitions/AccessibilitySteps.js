import { Given, When, Then } from '@cucumber/cucumber';
import AxeBuilder from '@axe-core/webdriverjs';
import fs from 'fs';

Then('I do an accessibility check for the {string} Page', async function(PageType){

    const result = await new AxeBuilder(this.driver).analyze()
    console.log(result.violations.length)

    if (result.violations.length > 0){
        const ViolationsList = JSON.stringify(result.violations)
        fs.writeFileSync('./features/reports/'+PageType+'PageViolations.json', ViolationsList)
    }
    else{
        fs.writeFileSync('./features/reports/'+PageType+'PageViolations.json', "No Violations Found")
    }
})