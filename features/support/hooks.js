import { Before, After } from '@cucumber/cucumber';
import { Builder, Capabilities } from 'selenium-webdriver';

// Increases the default timeout to 1 min, default is 30 sec
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 2000);

Before(async function () {
    this.driver = await new Builder()
            .withCapabilities(Capabilities.chrome()).build()
})


After(async function () {

    // For taking a screenshot after scenario execution 
    var buffer = await this.driver.takeScreenshot()
    var world = this
    world.attach(buffer, "base64:image/png")
    
    this.driver.quit()
})