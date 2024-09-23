## Xpath:
- XPath stands for XML Path Language. 
- It's a query-based syntax for XML schema & HTML documents that testers use to traverse elements within the document. 
- Expressions refer to the values used in XPath, and an expression typically contains the chaining of multiple 
  elements with a specific syntax or structure.


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
```
    //tagname[@Attribute=’Value’]
    //input[@name="customerName"]
    //input[@id="ap_customer_name"]
```

### starts-with:  
```
    //tagname[starts-with(@Attribute, ’Value’)]
    //input[starts-with(@placeholder, "First and")]
```


### contains:  
```
    //tagname[contains(@Attribute, ’Value’)]
    //input[contains(@placeholder, "and last")]
```


### text:  
```
    //tagname[text()=’ActualText’]
    //label[text()="From"]
```


### normalize-space:  
```
    //tagname[normalize-space()=’ActualText’]
    //label[normalize-space()="From"]
```


### and/or:  
```
    //tagname[@Attribute=’Value’ and/or [@Attribute=’Value’]
    //input[@type="text" and @name="username"]
    //input[@type="test" or @name="username"]
```


### parent:  
```
    //tagname[@Attribute=’Value’]//parent::tagname
    //select[@name="country_id"]//parent::div
    //option[@data-code='AS']//parent::select
```


### child:  
```
    //tagname[@Attribute=’Value’]//child::tagname
    //select[@name="country_id"]//child::option[1]
```


### self:  
```
    //tagname[@Attribute=’Value’]//self::tagname
    //select[@name="country_id"]//self::select
```


### descendant:  
```
    //tagname[@Attribute=’Value’]//descendant::tagname
    //div[@class="container"]//descendant::div
    //*[@class="container"]//descendant-or-self::div
    (//*[@class="container"]//descendant::div[@class="row"])[1]
```


### descendant-or-self:  
```
    //tagname[@Attribute=’Value’]//descendant-or-self::tagname
    //div[@class="container"]//descendant-or-self::div
```


### ancestor:  
```
    //tagname[@Attribute=’Value’]//ancestor::tagname
    //input[@class="sgnpaswrd"]//ancestor::*
```


### ancestor-or-self:  
```
    //tagname[@Attribute=’Value’]//ancestor -or-self::tagname
    //input[@class="sgnpaswrd"]//ancestor-or-self::*
    //input[@class="sgnpaswrd"]//ancestor-or-self::form
    //input[@class="sgnpaswrd"]//ancestor-or-self::form//input[@id="namefield"]
```


### following:  
```
    //tagname[@Attribute=’Value’]//follwing::tagname
    //option[@value="pt_BR"]//following::option
    //option[@value="1-5"]//following::option
    //option[@value="plan_to_use"]//following::option
```


### following-sibling:  
```
    //tagname[@Attribute=’Value’]//following-sibling::tagname
    //option[@value="pt_BR"]//following-sibling::option
    //option[@value="1-5"]//following-sibling::option
    //option[@value="plan_to_use"]//following-sibling::option
```


### preceding:  
```
    //tagname[@Attribute=’Value’]//follwing::tagname
    //option[@value="pt_BR"]//preceding::option
    //option[@value="1-5"]//preceding::option
    //option[@value="plan_to_use"]//preceding::option
```


### preceding-sibling: 
``` 
    //tagname[@Attribute=’Value’]//preceding-sibling::tagname
    //option[@value="pt_BR"]//preceding-sibling::option
    //option[@value="1-5"]//preceding-sibling::option
    //option[@value="plan_to_use"]//preceding-sibling::option
```



### Advantages of XPath:
- XPath supports all major test automation libraries and programming languages.
- It provides bidirectional flow which means traversal can be both ways.
- Supports both XML and HTML documents.
- XPath expression works at any document level, with no restriction to start the traversal at a specific level.
- XPath selector is compatible with old-age browsers as well as modern browsers.
- XPath locator provides Axes and methods. You can use them in XPath expression to solve complex locator problems.


### Disadvantages of XPath:
- The performance of the XPath varies from application to application. XPath locators are comparatively slow, 
  which can affect the overall performance of the test suite.
- XPath is associated with more than one element in the DOM tree, and it tends to break as and when new 
  element-level changes are introduced.
- Usage of indexes (specific nodes with numbers) within the XPath causes high maintenance (Ex: //div[1]).
- If XPath gets complicated more it becomes untidy and readability decreases.

