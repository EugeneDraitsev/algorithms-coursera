const multiply = (multiplicand1, multiplicand2) => {
  const string1 = multiplicand1.toString()
  const string2 = multiplicand2.toString()

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

module.exports = { multiply }
