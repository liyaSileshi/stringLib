
// Capitalize the first letter
String.prototype.capitalize = function() {
  let first = this[0].toUpperCase()
  return first + this.slice(1)
}

// Capitalize all letters
String.prototype.allcaps = function() {
  return this.toUpperCase()
}
console.log('hello'.allcaps())


// Capitalize the first letter of each word
String.prototype.capitalizeWords = function() {
  //split the string on white space
  let words = this.split(' ')
  let upper = words.map((word) => {
    return word.capitalize()
  })
  return upper.join(' ')
}
console.log('my name is liya'.capitalizeWords())

String.prototype.removeExtraSpaces = function() {
  this.trim() //removes white space from beginning and ending
  const strings = this.split(' ') //array of strings from str
  let tokens = strings.filter((str) => {
    return str !== ''
  })
  return tokens.join(' ') //return the joined string
}
console.log('  ef  my name   is liya'.removeExtraSpaces())

String.prototype.kabobCase = function() {
  let tokens = cleanString(this)
  return tokens.join('-') //return the joined string
}
console.log('  ef  my name   is liya'.kabobCase())


String.prototype.snakeCase = function() {
  let tokens = cleanString(this)
  return tokens.join('_') //return the joined string
}
console.log('  ef  my name   is liya'.snakeCase())

String.prototype.camelCase = function() {
  // lowercase the first character of the word
  this.trim() //remove white spaces from ends
  let first = this[0].toLowerCase() //lowercase the first ch
  let str = first + this.slice(1) //connect with the rest of str
  
  str = str.removeExtraSpaces() //remove any extra spaces
  const strings = str.split(' ') //array of string

  let rest = strings.slice(1)
   //capitalize first letter of each word
  let capitalized = rest.map((str) => {
    return str.capitalize()
  })
  let restWords = capitalized.join('')
  let result = strings[0] + restWords
  return result
}
console.log('  ef  my name   is liya'.camelCase())

/*
this method will take the first character of a 
string and move to the end of a string:
*/
String.prototype.shift = function(num=1) {
  let str = this
  for (let i = 1; i <= num; ++i) {
    let first = str[0]
    let rest = str.slice(1)
    str = rest + first
  }
  return str
}
console.log('liya'.shift(2))

/* clean string : helper function for kabob and snake*/
function cleanString(str) {
  str = str.toLowerCase()
  str.trim() //removes white space from beginning and ending
  const strings = str.split(' ') //array of strings from str
  let tokens = strings.filter((str) => {
    return str !== ''
  })
  return tokens
}
