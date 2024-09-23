## Xpath:

### Absolute xpath:
 - It contains the complete path from the root element 
 - Starts with root node – single forward slash (/)
 - Any slight changes in DOM makes xpath invalid 
 - Comparatively slow
 - Ex: /html/body/div[1]/div[1]/div[2]/div/div[2]/div/form/div/div/div[1]/input


### Relative xpath:
- Starts with the middle of the DOM
- Begins with double forward slash (//)
- Less chances to become invalid
- Comparatively fast
- Ex: //input[@name="customerName"]


### basic:  

    //tagname[@Attribute=’Value’]
    //input[@name="customerName"]
    //input[@id="ap_customer_name"]


### starts-with:  
```js```
    //tagname[starts-with(@Attribute, ’Value’)]
    //input[starts-with(@placeholder, "First and")]


### contains:  
```js```
    //tagname[contains(@Attribute, ’Value’)]
    //input[contains(@placeholder, "and last")]


### text:  
```js```
    //tagname[text()=’ActualText’]
    //label[text()="From"]


### normalize-space:  
```js```
    //tagname[normalize-space()=’ActualText’]
    //label[normalize-space()="From"]


### and/or:  
```js```
    //tagname[@Attribute=’Value’ and/or [@Attribute=’Value’]
    //input[@type="text" and @name="username"]
    //input[@type="test" or @name="username"]


### parent:  
```js```
    //tagname[@Attribute=’Value’]//parent::tagname
    //select[@name="country_id"]//parent::div
    //option[@data-code='AS']//parent::select


### child:  
```js```
    //tagname[@Attribute=’Value’]//child::tagname
    //select[@name="country_id"]//child::option[1]


### self:  
```js```
    //tagname[@Attribute=’Value’]//self::tagname
    //select[@name="country_id"]//self::select


### descendant:  
```js```
    //tagname[@Attribute=’Value’]//descendant::tagname
    //div[@class="container"]//descendant::div
    //*[@class="container"]//descendant-or-self::div
    (//*[@class="container"]//descendant::div[@class="row"])[1]


### descendant-or-self:  
```js```
    //tagname[@Attribute=’Value’]//descendant-or-self::tagname
    //div[@class="container"]//descendant-or-self::div


### ancestor:  
```js```
    //tagname[@Attribute=’Value’]//ancestor::tagname
    //input[@class="sgnpaswrd"]//ancestor::*


### ancestor-or-self:  
```js``` 
    //tagname[@Attribute=’Value’]//ancestor -or-self::tagname
    //input[@class="sgnpaswrd"]//ancestor-or-self::*
    //input[@class="sgnpaswrd"]//ancestor-or-self::form
    //input[@class="sgnpaswrd"]//ancestor-or-self::form//input[@id="namefield"]


### following:  
```js```
    //tagname[@Attribute=’Value’]//follwing::tagname
    //option[@value="pt_BR"]//following::option
    //option[@value="1-5"]//following::option
    //option[@value="plan_to_use"]//following::option


### following-sibling:  
```js```
    //tagname[@Attribute=’Value’]//following-sibling::tagname
    //option[@value="pt_BR"]//following-sibling::option
    //option[@value="1-5"]//following-sibling::option
    //option[@value="plan_to_use"]//following-sibling::option


### preceding:  
```js```
    //tagname[@Attribute=’Value’]//follwing::tagname
    //option[@value="pt_BR"]//preceding::option
    //option[@value="1-5"]//preceding::option
    //option[@value="plan_to_use"]//preceding::option


### preceding-sibling:  
``````js``````
    //tagname[@Attribute=’Value’]//preceding-sibling::tagname
    //option[@value="pt_BR"]//preceding-sibling::option
    //option[@value="1-5"]//preceding-sibling::option
    //option[@value="plan_to_use"]//preceding-sibling::option

