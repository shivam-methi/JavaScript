## CSS Selectors:
- CSS selectors are type of locators, it follows the string representations of the HTML elements such as 
  tags, attributes, and classes. 
- Similar to XPath, CSS also follows specific syntax for the selector expressions. 
- It also helps to find the elements on the webpage uniquely.


### with id:
```
    #username
    input#username
```

### with class:
```
    .login-email
    .form-control.private-form__control.login-email
    input.login-email
```


### with id & class:
```
    #username.login-email
    input#username.login-email
```


### Single attributes: 
```
    input[id='username']
```


### Multiple attributes: 
```
    input[id='username'][type='email']
```


### contains the text:
```
    input[id*='user']
    input[id*='name']
```


### starting the text: 
```
    input[id^='user']
```


### ending the text:
```
    input[id$='user']
```


### comma separated:
```
    div.private-form__input-wrapper, input#username
```


### first-of-type:
```
    ul#categories>li:first-of-type
```


### last-of-type:
```
    ul#categories>li:last-of-type
```


### nth-of-type:
```
    ul#categories>li:nth-of-type(1)
    ul#categories>li:nth-of-type(n) - all
```


### sibling of element:
```
    div.private-form__input-wrapper+div
    div.private-form__input-wrapper+div.private-form__meta
    ul#categories>li:nth-of-type(3)+li
```


### Not operator:
```
    input.form-control.private-form__control:not(.login-password)
    div.private-form__input-wrapper:not(.private-form__input-wrapper)
```



### Advantages of CSS Selectors over XPath:
- CSS Selectors are faster in comparison with XPath.
- These selectors are more readable and easier to learn.
- CSS selectors are compatible with all modern browsers.
- It works across devices and responsive screens.
- CSS selectors are more reliable as it is mostly tied to single HTML element.


### Disadvantages of CSS Selectors over XPath:
- CSS is unidirectional; it allows node traversal from parent to child only. When there are complex scenarios, 
  it is difficult to construct locators.
- CSS selectors don’t provide methods to handle complex element locators as we have the Axes method in XPath.
- If the application doesn’t include the attributes for the element in the DOM tree, writing a CSS selector will 
  be difficult, and it may become unreliable.
- You cannot construct the selectors based on visible text.

