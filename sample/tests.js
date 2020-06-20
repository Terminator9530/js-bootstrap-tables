var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var url='paste url here';

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get(url);

// input text
driver.findElement(By.css("#tableDiv > div > input")).sendKeys("Test");
// select click
driver.findElement(By.css("#tableDiv > div > div > div:nth-child(1) > form > select")).click();
// select option
driver.findElement(By.css("#tableDiv > div > div > div:nth-child(1) > form > select > option:nth-child(1)")).click();
driver.findElement(By.css("body")).click();
driver.findElement(By.css("#loadMore")).click();
driver.findElement(By.css("#loadMore")).click();
driver.findElement(By.css("#loadMore")).click();
driver.findElement(By.css("#tableDiv > div > div > div:nth-child(1) > form > select > option:nth-child(2)")).click();
driver.findElement(By.css("body")).click();
driver.findElement(By.css("#loadMore")).click();
driver.findElement(By.css("#tableDiv > div > div > div:nth-child(1) > form > select > option:nth-child(3)")).click();
driver.findElement(By.css("body")).click();
driver.findElement(By.css("#loadMore")).click();
driver.findElement(By.css("#tableDiv > div > div > div:nth-child(1) > form > select > option:nth-child(4)")).click();
driver.findElement(By.css("body")).click();
driver.findElement(By.css("#loadMore")).click();