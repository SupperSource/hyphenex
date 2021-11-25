// usable functions for functions to work with.

function countWords(str) {
  return str.split("-").length;
}

function countWordsDynamic(str, separator) {
  return str.split(separator).length;
}

function checkHyphenated(string) {
  let wordno = countWords(string);
  let hyphencount = (string.split("-").length - 1);
  let wordnos = wordno - 1;
  
  if (hyphencount == wordnos) {
    return true;
  }
  else {
    return false;
  }
}

function checkDynamicHyphenated(string, separator) {
  let wordno = countWordsDynamic(string, separator);
  let separatorCount = (string.split(separator).length - 1);
  let wordnos = wordno - 1;

  if (separatorCount == wordnos ) {
    return true;
  }
  else {
    return false;
  }
}

// User usable functions.

function hyphenate(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ' ') {
      string = string.replace(' ', '-');
    }
  }
  return string;
}

function deHyphenate(string) {
  let check = checkHyphenated(string);
  if (check == true) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] == '-') {
        string = string.replace('-', ' ');
      }
    }
    return string;
  }
  else {
    console.error("String is not hyphenated");
    throw new Error;
  }
}

function hyphenateDynamically(string, separator) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ' ') {
      string = string.replace(' ', separator);
    }
  }
  return string;
}

function deHyphenateDynamically(string, separator) {
  let check = checkDynamicHyphenated(string, separator);
  if (check == true) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] == separator) {
        string = string.replace(separator, ' ');
      }
    }
    return string;
  }
  else {
    console.error("String is not hyphenated");
    throw new Error;
  }
}

// exporting functions.

module.exports = {
  hyphenate,
  deHyphenate,
  hyphenateDynamically,
  deHyphenateDynamically
}