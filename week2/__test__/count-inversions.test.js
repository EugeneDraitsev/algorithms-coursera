const { mergeSort, countInversions } = require('../count-inversions')
const bigArray = require('./test-data.json')

describe('mergeSort should works as designed', () => {
  test('mergeSort must properly sort arrays', () => {
    expect(mergeSort([1, 3, 5, 2, 4])).toEqual([1, 2, 3, 4, 5])
    expect(mergeSort([1, 3, 2, 3, 5, -1, -5, -6])).toEqual([-6, -5, -1, 1, 2, 3, 3, 5])
    expect(mergeSort([42, 9, 17, 54, 602, -3, 54, 999, -11]))
      .toEqual([-11, -3, 9, 17, 42, 54, 54, 602, 999])
  })
  test('countInversions must properly sort arrays and calculate inversions', () => {
    expect(countInversions([1, 3, 5, 2, 4])).toEqual({ array: [1, 2, 3, 4, 5], inversions: 3 })
    expect(countInversions([1, 3, 2, 3, 5, -1, -5, -6]))
      .toEqual({ array: [-6, -5, -1, 1, 2, 3, 3, 5], inversions: 19 })
  })
  test('countInversions must properly calculate inversions on big example', async () => {
    expect(countInversions(bigArray).inversions).toBe(2407905288)
  })
})
