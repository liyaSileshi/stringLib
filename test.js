const str = require('./index')

test('Test capitalize', () => {
  //test capitalize on prototype
  expect('hello'.capitalize()).toBe('Hello')
  expect(str.capitalize('world')).toBe('World')
})

test('Test allcaps', () => {
  //test allcaps on prototype
  expect('hello'.allcaps()).toBe('HELLO')
  expect(str.allcaps('world')).toBe('WORLD')
})

test('Test capitalizeWords', () => {
  //test capitalizeWords on prototype
  expect('hello world'.capitalizeWords()).toBe('Hello World')
  expect(str.capitalizeWords('i love this course')).toBe('I Love This Course')
})

test('Test removeExtraSpaces', () => {
  //test removeExtraSpaces on prototype
  expect('hello     world'.removeExtraSpaces()).toBe('hello world')
  expect(str.removeExtraSpaces(' i love  this  course')).toBe('i love this course')
})

test('Test kabobCase', () => {
  //test kabobCase on prototype
  expect('hello     world'.kabobCase()).toBe('hello-world')
  expect('HELLO    world'.kabobCase()).toBe('hello-world')
  expect(str.kabobCase(' i love  this  course')).toBe('i-love-this-course')
})

test('Test snakeCase', () => {
  //test snakeCase on prototype
  expect('hello     world'.snakeCase()).toBe('hello_world')
  expect('HELLO    world'.snakeCase()).toBe('hello_world')
  expect(str.snakeCase(' i love  this  course')).toBe('i_love_this_course')
})

test('Test camelCase', () => {
  //test camelCase on prototype
  expect('hello     world'.camelCase()).toBe('helloWorld')
  expect('HELLO    world'.camelCase()).toBe('helloWorld')
  expect(str.camelCase(' i love  this  course')).toBe('iLoveThisCourse')
})

test('Test shift', () => {
  //test shift on prototype
  expect('hello'.shift()).toBe('elloh')
  expect('hello'.shift(num=3)).toBe('lohel')
  expect(str.shift('liya',2)).toBe('yali')
})