const { multiply } = require('../karatsuba-multiplication')

describe('karatsuba multiplication should works as designed', () => {
  test('karatsuba multiplication (multiply) should exist and be a function', () => {
    expect(multiply).toBeInstanceOf(Function)
  })

  test('multiplication should properly multiply(wow) numbers', () => {
    expect(multiply(1, 2)).toBe(BigInt(2))
    expect(multiply(0, 0)).toBe(BigInt(0))
    expect(multiply(64, 65)).toBe(BigInt(4160))
    expect(multiply(1024, 1024)).toBe(BigInt(1024 * 1024))
  })

  test('multiplication should properly multiply HUGE numbers', () => {
    expect(multiply(78785412, 65451232)).toBe(BigInt(78785412 * 65451232))

    expect(multiply(7878541265451232, 7878541265451232))
      .toBe(BigInt('62071412471417900089380570317824'))

    expect(multiply(BigInt('78785412654512327878541265451232'),
      BigInt('78785412654512327878541265451232')))
      .toBe(BigInt('78785412654512327878541265451232') * BigInt('78785412654512327878541265451232'))

    expect(multiply(BigInt('7878541265451232787854126545123278785412654512327878541265451232'),
      BigInt('7878541265451232787854126545123278785412654512327878541265451232')))
      .toBe(BigInt('7878541265451232787854126545123278785412654512327878541265451232')
        * BigInt('7878541265451232787854126545123278785412654512327878541265451232'))

    // coursera input
    expect(multiply(BigInt('3141592653589793238462643383279502884197169399375105820974944592'),
      BigInt('2718281828459045235360287471352662497757247093699959574966967627')))
      .toBe(BigInt('8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184'))
  })
})
