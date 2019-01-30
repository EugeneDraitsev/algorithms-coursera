/* eslint-disable no-undef,no-mixed-operators */
const { take, takeRight } = require('lodash')

const multiply = (multiplicand1, multiplicand2) => {
  const array1 = multiplicand1.toString().split('')
  const array2 = multiplicand2.toString().split('')
  const size = array1.length

  if (size === 1 || array1.length !== array2.length || size % 2) {
    return BigInt(multiplicand1) * BigInt(multiplicand2)
  }

  // naming based on algorithm formulas
  const a = BigInt(take(array1, size / 2).join(''))
  const b = BigInt(takeRight(array1, size / 2).join(''))
  const c = BigInt(take(array2, size / 2).join(''))
  const d = BigInt(takeRight(array2, size / 2).join(''))

  const ac = multiply(a, c)
  const bd = multiply(b, d)
  const abcd = multiply(a + b, c + d)

  return BigInt(10) ** BigInt(size) * ac
    + BigInt(10) ** BigInt(size / 2) * (abcd - ac - bd) + bd
}

module.exports = { multiply }
