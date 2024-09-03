## String Manipulation:
- JavaScript offers a rich set of methods that allow you to manipulate strings with precision. 
- Whether you need to extract a portion of a string, concatenate multiple strings, or replace specific characters,
  these methods are the tools of choice.
- They are powerful tools for processing and handling text data.

### Creating a String:
-  Strings can we created in 2 ways:
   - Literals
     - Single quote
     - Double quotes
     - Template literals
   - Object

```js
    let str1 = 'Hello World'         // Single quote
    let str2 = "Hello World"         // Double quotes
    let str3 = `Hello World`         // Template literals - preferred 
    let str4 = String("Hello World") // Object

    console.log(str3 === str4);
```


### Concatenating Strings:
- You can combine strings using the + operator or the concat() method.

```js
    let str1 = "Hello";
    let str2 = "World";
    let result = str1 + " " + str2; // "Hello World"

    // Or using concat method
    let result2 = str1.concat(" ", str2); // "Hello World"
```


### Extracting Substrings:
- You can extract parts of a string using slice(), substring(), or substr().
- Rules:
    - slice method requires start(inclusive) and end index (end index is not included).
    - You can specify only the start index.
    - You can specific the negative range.
    - 
```js
    let dt = "2022-02-26" 

    // Extract only yy-mm-dd format
    let yymmdd = dt.slice(2)
    console.log(yymmdd);    // 22-02-26

    // Extract year (4 digits) - 0 index
    let year = dt.slice(0,4)
    console.log(year);      // 2022

    // Extract month - 5 index
    let month = dt.slice(5,7)
    console.log(month);     // 02

    // Extract date - 8 index
    let day = dt.slice(-2)  // Negative index
    console.log(day);       // 26

    
    let str = "Hello World";

    // Using slice(start, end)
    let sliceStr = str.slice(0, 5); // "Hello"

    // Using substring(start, end)
    let substringStr = str.substring(0, 5); // "Hello"

    // Using substr(start, length)
    let substrStr = str.substr(0, 5); // "Hello"
```


### Finding the Length of a String:
- Use the .length property to find out the number of characters in a string.

```js
    let str = "Hello World";
    let length = str.length; // 11
```


### Finding the Index of a Substring:
- Use indexOf() or lastIndexOf() to find the position of a substring within a string.
  
```js
    let str = "Hello World";

    // Find the first occurrence
    let index = str.indexOf("World"); // 6

    // Find the last occurrence
    let lastIndex = str.lastIndexOf("l"); // 9
```


### Retrieve the character at a specific index in a String:
 - The charAt() method in JavaScript is used to retrieve the character at a specific index in a string. 
 - The index is zero-based, meaning the first character is at index 0, the second at index 1, and so on.

```js
    let str = "Hello World";

    // Get the character at index 0
    let firstChar = str.charAt(0); // "H"

    // Get the character at index 4
    let fifthChar = str.charAt(4); // "o"

    // Get the character at index 10
    let lastChar = str.charAt(10); // "d"

    // If the index is out of range, it returns an empty string
    let outOfRangeChar = str.charAt(20); // ""
```


### Replacing Parts of a String:
- Use replace() to replace part of a string with another string.
- Rule:
    - replace method can accept a string/regexp as its first arg

```js
    let filename = "invoice_123.pdf";
    let query_template = `SELECT * FROM {{table_name}}`
    let dt = "2022-01-01";

    // 1. Get only the filename 
    let onlyfilename = filename.replace(".pdf", "") 
    console.log(onlyfilename); // invoice_123


    // 2. Rename the file extention from .pdf -> .txt
    let txtfile =  filename.replace("pdf", "txt")
    console.log(txtfile);


    // 3. Replace table_name with Accounts
    let actualQ = query_template.replace("{{table_name}}", "Account")
    console.log(actualQ);


    // 4. Convert the given date format to YYYYMMDD format using regexp
    let modifiedDt = dt.replace(/-/g, "")
    console.log(modifiedDt);
```


### Changing Case:
- Use toUpperCase() and toLowerCase() to change the case of a string.

```js
    let str = "Hello World";

    // Convert to uppercase
    let upperStr = str.toUpperCase(); // "HELLO WORLD"

    // Convert to lowercase
    let lowerStr = str.toLowerCase(); // "hello world"
```


### Splitting a String:
- You can split a string into an array using split().
- Rule: 
    - The separator(string | regexp) is omitted from the returned array
    - If the very first/last char is provided as a separator,it adds an empty string as in the first/last positions
  
```js
    let tstamp = "2022-02-26T10:51:52.207Z";
    let str = "Hello World";
    let filename = "invoice_123.pdf";

    // 1. Get only the date part of the timestamp
    let dtArr = tstamp.split("T");
    console.log(dtArr[0]);


    // 2. Split by space/first or last char
    let arr = str.split("d");
    console.log(arr);


    // 3. Get only the filename
    let fileArr = filename.split(".");
    console.log(fileArr);
```


### Trimming Whitespace:
- Use trim(), trimStart(), and trimEnd() to remove whitespace from a string.

```js
    let str = "   Hello World   ";
    let trimmedStr = str.trim(); // "Hello World"
```


### Compare Strings:
- Use includes(), startsWith(), endsWith() to check if a string contains a particular substring.
- Types:
    - Full match
    - Partial match
        - includes()
        - startsWith()
        - endsWith()
  
```js
let filename = "invoice_123.pdf"

    // Full match
    if(filename.toUpperCase().trim() === "INVOICE_123.PDF"){
        console.log(`>> The filename matches...`);
    }


    // Partial comparison 
    //includes()
    if(filename.includes("123")){
    console.log(`Yes it starts with invoice...`);
    }

    //startsWith()
    if(filename.startsWith("invoice")){
        console.log(`Yes it starts with invoice...`);
    }

    //endsWith()
    if(filename.endsWith(".pdf")){
        console.log(`Yes it ends with .pdf...`);
    }
```


### Repeating a String:
- Use repeat() to repeat a string multiple times.

```js
let str = "Hello";
let repeatedStr = str.repeat(3); // "HelloHelloHello"
```


### Formatting string using template literals:
- Template literals provide an efficient method for embedding variables and expressions within strings.
- It allows you to insert placeholders directly into your strings using the `${}` syntax.

```js
    // Example:
    ABC Bank Statement from 2022-01-01 to 2022-02-01 for account ending 98765

    let stDt = "2022-01-01"
    let endDt = "2022-02-01"
    let acNum = 98765

    let emailSub = `ABC Bank Statement from ${stDt} to ${endDt} for account ending ${acNum}`
    console.log(emailSub); 
    // output: ABC Bank Statement from 2022-01-01 to 2022-02-01 for account ending 98765
```


### Backslash in String: 
- the backslash (\) is used as an escape character.
- This means it is used to escape characters that have a special meaning, allowing you to include them in 
  strings without causing errors or changing the behavior of the string.

```js
    let str = "He said, \"Hello World!\""; // Escapes the double quotes

    let str1 = 'It\'s a beautiful day!'; // Escapes the single quote
    let str2 = "She said, \"JavaScript is awesome!\""; // Escapes the double quote

    let str = "Hello\nWorld"; // "Hello" and "World" will be on separate lines

    let str = "Hello\tWorld"; // "Hello" and "World" will be separated by a tab space

    let path = "C:\\Program Files\\MyApp"; // Correct way to represent a file path

    let str = "Hello\rWorld"; // Depending on the environment, it may overwrite "Hello" with "World"
```

