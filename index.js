const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map((str) => {
//   str = str.toLowerCase().split(' ');
//   str.map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase())
//   })

//   return tutorials
// })
function titleCased() {
let newAr = []
  newAr = (tutorials.map((str) => {
     const newStr = str.split(' ');
     const newStr2 = newStr.map(function(word) {
        return word.replace(word[0], word[0].toUpperCase())

       })
        return newStr2.join(' ')
    }))

  return newAr;
}