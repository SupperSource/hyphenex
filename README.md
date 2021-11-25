## hyphenex

Separate words from a string and convert them into a single string using hyphens. work in progress.

### You can hyphenate and dehyphanate strings dynamically also!

```javascript
const hyphenex = require('hyphenex');

console.log(hyphenex.hyphenate('This is hyphenating stuff'));
console.log(hyphenex.deHyphenate('hyphenating-this-this'));
console.log(hyphenex.hyphenateDynamically("This is dehyphanted string which is phenomenal", "-"))
console.log(hyphenex.deHyphenateDynamically("hyphenated+this+this+that", "+"));
```

the results must be:

```
This-is-hyphenating-stuff
hyphenating this this
This-is-dehyphanted-string-which-is-phenomenal
hyphenated this this that
```

### pretty cool ha!

## Documentation

<br>

Welcome to the documentation of hyphenex! After having a glance at this, you will be able to hyphenate strings like a pro!

### Method 1 - hyphenate

This method will hyphenate your string using normal hyphens.

Example:

```javascript
hyphenex.hyphenate("This is a long string");

// The results must be 'This-is-a-long-string'
```

## Method 2 - hyphenateDynamically

Using this method you can hyphenate rather separate your strings with a custom separator!

Example: 

```javascript
hyphenex.hyphenateDynamically('This string will be hyphenated dynamically');

// The results must be 'This_string_will_be_hyphenated_dynamically'
```

## Method 3 - deHyphenate

This will allow you to dehyphenate any string with ease.

Example:

```javascript
hyphenex.deHyphenate("dehyphenate-this-string");

// The result must be 'dehyphenate this string'
```

## Method 4 - deHyphenateDynamically

Remove custom separators from a string.

Example: 

```js
hyphenex.deHyphenateDynamically("This+string+will+be+dehyphenated+dynamically", "+")

// Expect result to be 'This string will be dehyphenated dynamically'
```

### If you face any issues or have any comeplaints about this, kindly report an issue or to resolve and existing issue, please make a pull request.

