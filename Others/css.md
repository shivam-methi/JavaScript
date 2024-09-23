## Custom CSS:


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

