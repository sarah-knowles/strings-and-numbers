function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
  return typeof thing === 'number'
}

function toNumber (str) {
  return parseInt(str)
}

function isStringNumber (str) {
  var num = toNumber(str)
  var isNum = typeof num === 'number'
  var isNotNan = !isNaN(num)
  return isNum && isNotNan 
}

function add (a, b) {
  return a + b
}

function addStrings (a, b) {
  const aNum = toNumber(a)
  const bNum = toNumber(b)
  return String(aNum + bNum)
}

function addStringsOrNumbers (a, b) {
  
}

function isEmail (str) {
}

function countIf (array, fn) {
}

function filter (array, fn) {
}

function map (array, fn) {
}

function filterStringsWithCommas (str) {
}

function splitStringByCommas (str) {
}

module.exports = {
  getType: getType,
  isNumber,
  toNumber,
  isStringNumber,
  add,
  addStrings,
  addStringsOrNumbers
} 