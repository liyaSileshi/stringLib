
/**
   * Returns the string with first letter capitalized
   *
   * @return {string} The first letter capitalized
   * @since 2.0.0
   */
String.prototype.capitalize = function() {
  let first = this[0].toUpperCase()
  return first + this.slice(1)
}


/**
   * Returns the string with all letters capitalized
   *
   * @return {string} All letters capitalized
   * @since 2.0.0
   */
String.prototype.allcaps = function() {
  return this.toUpperCase()
}
console.log('hello'.allcaps())


/**
   * Returns the string with first letter of each word capitalized
   *
   * @return {string} The first letter of each word capitalized
   * @since 2.0.0
   */
String.prototype.capitalizeWords = function() {
  //split the string on white space
  let words = this.split(' ')
  let upper = words.map((word) => {
    return word.capitalize()
  })
  return upper.join(' ')
}
console.log('my name is liya'.capitalizeWords())

/**
   * Returns the string with all extra spaces removed
   *
   * @return {string} all extra spaces removed
   * @since 2.0.0
   */
String.prototype.removeExtraSpaces = function() {
  this.trim() //removes white space from beginning and ending
  const strings = this.split(' ') //array of strings from str
  let tokens = strings.filter((str) => {
    return str !== ''
  })
  return tokens.join(' ') //return the joined string
}
console.log('  ef  my name   is liya'.removeExtraSpaces())

/**
   * Returns the string with removed extra spaces and replaces spaces with the hyphen "-", and makes all character lowercase
   *
   * @return {string} removed extra spaces and replaces spaces with the hyphen "-", and makes all character lowercase
   * @since 2.0.0
   */
String.prototype.kabobCase = function() {
  let tokens = cleanString(this)
  return tokens.join('-') //return the joined string
}
console.log('  ef  my name   is liya'.kabobCase())


/**
   * Returns the string with removed extra spaces and replaces spaces with the underscore "_", and makes all character lowercase
   *
   * @return {string} removed extra spaces and replaces spaces with the underscore "_", and makes all character lowercase
   * @since 2.0.0
   */
String.prototype.snakeCase = function() {
  let tokens = cleanString(this)
  return tokens.join('_') //return the joined string
}
console.log('  ef  my name   is liya'.snakeCase())

/**
   * Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
   *
   * @return {string} Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
   * @since 2.0.0
   */
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
/**
   * this method will take the first character of a string and move to the end of a string:
   *
   * @return {string} this method will take the first character of a string and move to the end of a string:
   * @param {number} num The desired number of characters to shift
   * @since 2.0.0
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
