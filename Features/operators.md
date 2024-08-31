## Operators:
- Operators are special symbols or keywords that perform operations on operands (values or variables).

### Assignment Operator:

- `=`: Assigns a value to a variable 
       (e.g. x = 5, let x = y = 1;)

- `+=`: Adds and assigns 
        (e.g. x += 3 is equivalent to x = x + 3)

- `-=`: Subtracts and assigns 
        (e.g. x -= 3 is equivalent to x = x - 3)

- `*=`: Multiplies and assigns 
        (e.g. x *= 3 is equivalent to x = x * 3)

- `/=`: Divides and assigns 
        (e.g. x /= 3 is equivalent to x = x / 3)

- `%=`: Modulus and assigns 
        (e.g. x %= 3 is equivalent to x = x % 3)

```js
    // Use case 1: Basic
    let a = 1

    // Use case 2: Chaining
    let x = y = 1
    console.log(x);
    console.log(y);

    // Use case 3: +=
    let start = 5
    for (let i = 1; i <=5; i++){
        // start = start + i
        start += i
    console.log(start);
    }
```


### Arithmetic Operator:

- `+`: Addition 
       (e.g. 5 + 3 returns 8)

- `-`: Subtraction 
       (e.g. 5 - 3 returns 2)

- `*`: Multiplication 
       (e.g. 5 * 3 returns 15)

- `/`: Division 
       (e.g. 6 / 3 returns 2)

- `%`: Modulus (remainder) 
       (e.g. 5 % 2 returns 1)

- `++`: Increment 
        (e.g. let x = 5; x++ increments x to 6)

- `--`: Decrement 
        (e.g. let x = 5; x-- decrements x to 4)

```js
    // Use case 1: % Find a remainder
    let a = 5
    console.log(5 % 2);

    // Use case 2: Increment and decrement
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }

    for (let i = 10; i >= 0; i--){
        console.log(i);
    }

    // Use cas3: unary plus
    console.log(+"3" + 3); // 6
```


### Comparison Operator:

- rule: 
  - In most cases, if the two operands are not of the same type javascript attempts to convert them to an 
    appropriate type for the conversion. 
  - This behaviour generally results in comparing the operand numerically.

- `==`: Equal to (compares values after type conversion) 
        (e.g. 5 == '5' returns true)

- `===`: Strict equal to (compares both value and type) 
         (e.g. 5 === '5' returns false)

- `!=`: Not equal to (compares values after type conversion) 
        (e.g. 5 != '5' returns false)

- `!==`: Strict not equal to (compares both value and type) 
         (e.g. 5 !== '5' returns true)

- `>`: Greater than 
       (e.g. 5 > 3 returns true)

- `<`: Less than 
       (e.g. 5 < 3 returns false)

- `>=`: Greater than or equal to 
        (e.g. 5 >= 5 returns true)

- `<=`: Less than or equal to 
        (e.g. 5 <= 5 returns true)

```js
    // Use case 1: Strict equality (=== , !==)
    let a = "One"
    let b = 1;

    console.log(a == b); // false
    console.log(a === b); // false

    // Not equal
    console.log(1 !== 2); // true
```


### Logical Operator:

- `&&`: Logical AND (returns true if both operands are true) 
        (e.g. true && false returns false)

- `||`: Logical OR (returns true if at least one operand is true) 
        (e.g. true || false returns true)

- `!`: Logical NOT (inverts the boolean value) 
       (e.g. !true returns false)

```js
    // Use case 1: AND (&&) 
    let val = ""
    if (typeof val === "string" && val.length > 1){
        console.log(`Given value : ${val} is valid string`);
    } else {
        console.log(`Given value : ${val} is NOT valid string`);
    }

    // Use case 2: OR (||) 
    let day = "Saturday"
    if (day === "Saturday" || day === "Sunday") {
    console.log(`Given day: ${day} is a weekend`);
    } else {
    console.log(`Given day: ${day} is NOT a weekend`);
    }

    // Use case 3: NOT (!) 
    let firstname = "Rob"
    let lastname = "Bob"

    if (!firstname || !lastname) {
    console.log(`One of the names: ${firstname} or ${lastname} is not valid`);
    }
```


### Ternary Operator: 
- `condition ? expr1 : expr2`: Ternary (conditional) operator 
                               (e.g., let x = 5; let y = (x > 10) ? 'big' : 'small'; returns 'small') 



### Bitwise Operator:
- `&`: Bitwise AND 
       (e.g. 5 & 1 returns 1)

- `|`: Bitwise OR 
       (e.g. 5 | 1 returns 5)

- `^`: Bitwise XOR 
       (e.g. 5 ^ 1 returns 4)

- `~`: Bitwise NOT (inverts bits) 
       (e.g. ~5 returns -6)

- `<<`: Left shift (shifts bits left) 
        (e.g. 5 << 1 returns 10)

- `>>`: Right shift (shifts bits right) 
        (e.g. 5 >> 1 returns 2)

- `>>>`: Zero-fill right shift (shifts bits right, fills with zeros) 
         (e.g. 5 >>> 1 returns 2)



### String Operator: 
- `+`: Concatenation 
       (e.g., 'Hello' + ' ' + 'World' returns 'Hello World')

- `+=`: Concatenation assignment 
        (e.g., let x = 'Hello'; x += ' World'; returns 'Hello World')



### Type Operator:   
- `typeof`: Returns the type of a variable 
            (e.g. typeof 5 returns 'number')

- `instanceof`: Checks if an object is an instance of a particular class 
                (e.g. x instanceof Array)     



### Other Operator:
- `in`: Checks if a property exists in an object 
        (e.g. 'length' in [1, 2, 3] returns true)

- `delete`: Deletes a property from an object 
            (e.g. delete obj.prop)



|Feature       |Assignment `=`                 |Equality `==`                  | Strict Equality `===`              |
|-------------------------------------------------------------------------------------------------------------------|
|Description   | Assigns a value to a variable |Compares values, ignores type  |Compares both value and type        |
|Comparison    |               -               |Checks if values are equal     |Checks if values and types are equal|
|Example       |let x = 5;                     |5 == "5"                       |5 === "5"                           |
|Result        |x is now 5                     |true                           |false                               |
|-------------------------------------------------------------------------------------------------------------------|