
// Capitalize the first letter
function capitalize(str) {
  let first = str[0].toUpperCase()
  return first + str.slice(1)
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


// kabobCase()

// snakeCase()

// camelCase()

// shift()



