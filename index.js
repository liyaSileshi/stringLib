
// Capitalize the first letter
String.prototype.capitalize = function() {

  let first = this[0].toUpperCase()
  return first + this.slice(1)
}

// Capitalize all letters
function allcaps(str) {
  return str.toUpperCase()
}

// Capitalize the first letter of each word
function capitalizeWords(str) {
  //split the string on white space
  let words = str.split(' ')
  let upper = words.map((word) => {
    // upperCase(word)
    return upperCase(word)
  })
  return upper.join(' ')
}

function removeExtraSpaces(str) {
  str.trim() //removes white space from beginning and ending
  const strings = str.split(' ') //array of strings from str
  let trimmedStrings = strings.filter((str) => {
    return str !== ''
  })
  return trimmedStrings.join(' ') //return the joined string
}

function kabobCase(str) {
  str = str.toLowerCase()
  str.trim() //removes white space from beginning and ending
  const strings = str.split(' ') //array of strings from str
  let trimmedStrings = strings.filter((str) => {
    return str !== ''
  })
  return trimmedStrings.join('-') //return the joined string
}

function snakeCase(str) {
  str = str.toLowerCase()
  str.trim() //removes white space from beginning and ending
  const strings = str.split(' ') //array of strings from str
  let trimmedStrings = strings.filter((str) => {
    return str !== ''
  })
  return trimmedStrings.join('_') //return the joined string
}

function camelCase(str) {
  // lowercase the first character of the word
  str.trim() //remove white spaces from ends
  let first = str[0].toLowerCase() //lowercase the first ch
  str = first + str.slice(1) //connect with the rest of str
  
  str = removeExtraSpaces(str) //remove any extra spaces
  const strings = str.split(' ') //array of string

  let rest = strings.slice(1)
   //capitalize first letter of each word
  let capitalized = rest.map((str) => {
    return capitalize(str)
  })
  let restWords = capitalized.join('')
  let result = strings[0] + restWords
  return result
}

/*
this method will take the first character of a 
string and move to the end of a string:
*/
function shift(str, num=1) {
  for (let i = 1; i <= num; ++i) {
    let first = str[0]
    let rest = str.slice(1)
    str = rest + first
  }
  return str
}
