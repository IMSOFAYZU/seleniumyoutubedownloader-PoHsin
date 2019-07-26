

const DRIVER = "chromedriver"; //chromedriver
const BROWSER = "chrome"; //chrome

var webdriver = require("selenium-webdriver");
require(DRIVER);

async function getElement(driver, locator, timeout){
    await driver.wait(webdriver.until.elementLocated(locator), timeout);
    return await driver.findElement(locator);
}

async function execute() {
    var builder = new webdriver.Builder();
    builder.forBrowser(BROWSER);
    var driver = builder.build();

    await driver.get("https://www.youtube.com/?gl=TW&hl=zh-TW");
    // var soup = new JSSoup(data);
    // soup.findAll(driver)
    var searchBox=await getElement(driver, webdriver.By.name("search_query"), 3000);
    await searchBox.sendKeys("復仇者");
    var searchButton=await getElement(driver, webdriver.By.id("search-icon-legacy"), 3000);
    await searchButton.click();
    let c = await getElement(driver, webdriver.By.className("ytd-video-renderer"), 3000);
    let d = await c.findElement(webdriver.By.tagName("a"));
    var h = await d.getAttribute("href");

    await driver.get("https://www.safetoconvert.com/convert-youtube-video");
    let s = await getElement(driver, webdriver.By.id("search"), 3000);
    await s.sendKeys(h);
    let b = await getElement(driver, webdriver.By.className("fa-search"), 3000);
    await b.click();
    let k = await getElement(driver, webdriver.By.className("btn-success"), 3000);
    await k.click();
    driver.close();
    
}

execute();