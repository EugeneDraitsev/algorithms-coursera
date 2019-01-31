const pow10 = (multiplicand, n) => String(multiplicand) + ''.padEnd(n, 0)

// I stole this function from stackoverflow
const sum = (a, b) => {
  const aa = Array.from(String(a), Number)
  const bb = Array.from(String(b), Number)
  const result = []
  let carry = 0
  let i = Math.max(aa.length, bb.length)

  while (i--) {
    carry += (aa.pop() || 0) + (bb.pop() || 0)
    result.unshift(carry % 10)
    carry = Math.floor(carry / 10)
  }
  while (carry) {
    result.unshift(carry % 10)
    carry = Math.floor(carry / 10)
  }
  return result.join('')
}

const substruct = (a, b) => String(BigInt(a) - BigInt(b))

const multiply = (multiplicand1, multiplicand2) => {
  const string1 = String(multiplicand1)
  const string2 = String(multiplicand2)

  const maxSize = Math.max(string1.length, string2.length)
  const n = maxSize % 2 ? maxSize + 1 : maxSize

  if (maxSize === 1) {
    return BigInt(multiplicand1) * BigInt(multiplicand2)
  }

  // naming based on algorithm formulas
  const a = BigInt(string1.padStart(n, 0).slice(0, n / 2))
  const b = BigInt(string1.padStart(n, 0).slice(n / 2))
  const c = BigInt(string2.padStart(n, 0).slice(0, n / 2))
  const d = BigInt(string2.padStart(n, 0).slice(n / 2))

  const ac = multiply(a, c)
  const bd = multiply(b, d)
  const abcd = multiply(a + b, c + d)

  return ((BigInt(10) ** BigInt(n)) * ac)
    + (BigInt(10) ** BigInt(Math.ceil(n / 2))) * (abcd - ac - bd) + bd
}

const stringMultiply = (multiplicand1, multiplicand2) => {
  const string1 = String(multiplicand1)
  const string2 = String(multiplicand2)

  const maxSize = Math.max(string1.length, string2.length)
  const n = maxSize % 2 ? maxSize + 1 : maxSize

  if (maxSize === 1) {
    return Number(multiplicand1) * Number(multiplicand2)
  }

  // naming based on algorithm formulas
  const a = string1.padStart(n, 0).slice(0, n / 2)
  const b = string1.padStart(n, 0).slice(n / 2)
  const c = string2.padStart(n, 0).slice(0, n / 2)
  const d = string2.padStart(n, 0).slice(n / 2)

  const ac = multiply(a, c)
  const bd = multiply(b, d)
  const abcd = multiply(sum(a, b), sum(c, d))

  return sum(sum(pow10(ac, n), pow10(substruct(substruct(abcd, ac), bd), Math.ceil(n / 2))), bd)
}


module.exports = { multiply, stringMultiply }
