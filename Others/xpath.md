## Xpath:

### Absolute xpath:
 - It contains the complete path from the root element 
 - Starts with root node – single forward slash (/)
 - Any slight changes in DOM makes xpath invalid 
 - Comparatively slow
 - Ex: Link /html/body/div[1]/div[1]/div[2]/div/div[2]/div/form/div/div/div[1]/input


### Relative xpath:
- Starts with the middle of the DOM
- Begins with double forward slash (//)
- Less chances to become invalid
- Comparatively fast
- Ex: Link //input[@name="customerName"]
