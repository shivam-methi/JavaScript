## Custom CSS:


### with id:
```js
    #username
    input#username
```


### with class:
```js
    .login-email
    .form-control.private-form__control.login-email
    input.login-email
```


### with id & class:
```js
    #username.login-email
    input#username.login-email
```


### Single attributes: 
```js
    input[id='username']
```


### Multiple attributes: 
```js
    input[id='username'][type='email']
```


### contains the text:
```js
    input[id*='user']
    input[id*='name']
```


### starting the text: 
```js
    input[id^='user']
```


### ending the text:
```js
    input[id$='user']
```


### comma separated:
```js
    div.private-form__input-wrapper, input#username
```


### first-of-type:
```js
    ul#categories>li:first-of-type
```


### last-of-type:
```js
    ul#categories>li:last-of-type
```


### nth-of-type:
```js
    ul#categories>li:nth-of-type(1)
    ul#categories>li:nth-of-type(n) - all
```


### sibling of element:
```js
    div.private-form__input-wrapper+div
    div.private-form__input-wrapper+div.private-form__meta
    ul#categories>li:nth-of-type(3)+li
```


### Not operator:
```js
    input.form-control.private-form__control:not(.login-password)
    div.private-form__input-wrapper:not(.private-form__input-wrapper)
```

