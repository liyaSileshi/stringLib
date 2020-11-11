
/**
   * Returns the string with first letter capitalized
   *
   * @return {string} The first letter capitalized
   * @since 2.0.0
   */
function capitalize(str) {
  const first = str[0].toUpperCase()
  return first + str.slice(1)
}

String.prototype.capitalize = function() {
  return capitalize(this)
}

/**
   * Returns the string with all letters capitalized
   *
   * @return {string} All letters capitalized
   * @since 2.0.0
   */
function allcaps(str) {
  return str.toUpperCase()
}

String.prototype.allcaps = function() {
  return allcaps(this)
}

/**
   * Returns the string with first letter of each word capitalized
   *
   * @return {string} The first letter of each word capitalized
   * @since 2.0.0
   */
function capitalizeWords(str) {
  //split the string on white space
  let words = str.split(' ')
  let upper = words.map((word) => {
    return word.capitalize()
  })
  return upper.join(' ')
}

String.prototype.capitalizeWords = function() {
  return capitalizeWords(this)
}

/**
   * Returns the string with all extra spaces removed
   *
   * @return {string} all extra spaces removed
   * @since 2.0.0
   */
function removeExtraSpaces(str) {
  str.trim() //removes white space from beginning and ending
  const strings = str.split(' ') //array of strings from str
  let tokens = strings.filter((str) => {
    return str !== ''
  })
  return tokens.join(' ') //return the joined string
}

String.prototype.removeExtraSpaces = function() {
  return removeExtraSpaces(this)
}

/**
   * Returns the string with removed extra spaces and replaces spaces with the hyphen "-", and makes all character lowercase
   *
   * @return {string} removed extra spaces and replaces spaces with the hyphen "-", and makes all character lowercase
   * @since 2.0.0
   */
function kabobCase(str) {
  let tokens = cleanString(str)
  return tokens.join('-') //return the joined string
}

String.prototype.kabobCase = function() {
  return kabobCase(this)
}

/**
   * Returns the string with removed extra spaces and replaces spaces with the underscore "_", and makes all character lowercase
   *
   * @return {string} removed extra spaces and replaces spaces with the underscore "_", and makes all character lowercase
   * @since 2.0.0
   */
function snakeCase(str) {
  let tokens = cleanString(str)
  return tokens.join('_') //return the joined string
}
String.prototype.snakeCase = function() {
  return snakeCase(this)
}


/**
   * Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
   *
   * @return {string} Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
   * @since 2.0.0
   */
function camelCase(str) {
  // lowercase the first character of the word
  str.trim() //remove white spaces from ends  
  str = str.removeExtraSpaces().toLowerCase() //remove any extra spaces and change string to lowercase
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
String.prototype.camelCase = function() {
  return camelCase(this)
}

/*
this method will take the first character of a 
string and move to the end of a string:
*/
/**
   * this method will take the first character of a string and move to the end of a string:
   *
   * @return {string} this method will take the first character of a string and move to the end of a string:
   * @param {number} num The desired number of characters to shift
   * @since 2.0.0
   */
function shift(str, num=1) {
  for (let i = 1; i <= num; ++i) {
    let first = str[0]
    let rest = str.slice(1)
    str = rest + first
  }
  return str
}
String.prototype.shift = function(num=1) {
  return shift(this,num)
}

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

module.exports.capitalize = capitalize
module.exports.allcaps = allcaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kabobCase = kabobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift