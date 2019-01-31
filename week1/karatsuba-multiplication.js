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


// /////////////////////////////////
// Strings only version starts here
// /////////////////////////////////

const pow10 = (multiplicand, n) => String(multiplicand) + ''.padEnd(n, 0)

// I stole this function from codewars
function compare(x, y) {
  const a = x.replace(/^0+/, '')
  const b = y.replace(/^0+/, '')
  if (a.length > b.length) return 1
  if (a.length < b.length) return -1
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) return 1
    if (a[i] < b[i]) return -1
  }
  return 0
}

// I stole this function from codewars
function sum(numA, numB) {
  let a = String(numA)
  let b = String(numB)
  const s1 = a[0] === '-'
  const s2 = b[0] === '-'
  a = a.replace(/^-/, '')
  b = b.replace(/^-/, '')
  if (s1 && s2) return `-${sum(a, b)}`
  // eslint-disable-next-line no-use-before-define
  if (s1 && !s2) return subtract(b, a)
  // eslint-disable-next-line no-use-before-define
  if (!s1 && s2) return subtract(a, b)
  let res = ''; let
    c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    // eslint-disable-next-line no-bitwise
    c += ~~a.pop() + ~~b.pop()
    res = (c % 10) + res
    c = c > 9
  }
  return res.replace(/^0+/, '') || '0'
}

// I stole this function from codewars
function subtract(numA, numB) {
  let a = String(numA)
  let b = String(numB)
  const s1 = a[0] === '-'
  const s2 = b[0] === '-'
  a = a.replace(/^-/, '').replace(/^0+/, '')
  b = b.replace(/^-/, '').replace(/^0+/, '')
  if (s1 + s2 === 1) return (s1 ? '-' : '') + sum(a, b)
  const aa = a
  const bb = b
  if (compare(aa, bb) === -1) {
    [a, b] = [b, a]
  }
  a = [...a]
  b = [...b]
  for (let i = a.length - 1; i >= 0; i--) {
    const d = b[b.length - a.length + i] || 0
    // eslint-disable-next-line operator-assignment
    a[i] = a[i] - d
    if (a[i] < 0) {
      a[i] += 10
      a[i - 1]--
    }
  }
  a = a.join('').replace(/^0+/, '')
  if ((s1 && compare(aa, bb) === 1) || (!s1 && compare(aa, bb) === -1)) {
    a = `-${a}`
  }
  return a || '0'
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

  const ac = stringMultiply(a, c)
  const bd = stringMultiply(b, d)
  const abcd = stringMultiply(sum(a, b), sum(c, d))

  // how to properly format this shit?
  return sum(
    sum(
      pow10(ac, n),
      pow10(
        subtract(
          subtract(abcd, ac),
          bd,
        ),
        Math.ceil(n / 2),
      ),
    ),
    bd,
  )
}


module.exports = { multiply, stringMultiply }
