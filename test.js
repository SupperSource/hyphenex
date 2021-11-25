const hyphenex = require('./index.js');

function countWords(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  return str.split(' ').length;
}

function countWords(str) {
  return str.split("-").length;
}

console.log(hyphenex.hyphenate('This is hyphenating stuff'));
console.log(hyphenex.deHyphenate('hyphenating-this-this'));
console.log(hyphenex.hyphenateDynamically("This is dehyphanted string which is phenomenal", "-"))
console.log(hyphenex.deHyphenateDynamically("hyphenated+this+this+that", "+"));


// let text = "this-is-my-text-which-is-phenomenal,-therefore-use-it-carefully-and-cleverly.";
// console.log(countWords(text));

// // console.log(text.match(/([\sx]+)/g).length);

// var spaceCount = (text.split("-").length - 1);
// console.log(countWords(text))