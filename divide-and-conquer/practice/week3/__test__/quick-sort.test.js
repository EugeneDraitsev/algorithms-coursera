const { quickSort, getPivot1, getPivot2, getPivot3 } = require('../quick-sort')
const bigArray = require('./test-data.json')

describe('quickSort should works as designed', () => {
  test('quickSort must properly sort arrays', () => {
    expect(quickSort([1, 3, 5, 2, 4], getPivot1).array).toEqual([1, 2, 3, 4, 5])
    expect(quickSort([1, 3, 2, 3, 5, -1, -5, -6], getPivot2).array)
      .toEqual([-6, -5, -1, 1, 2, 3, 3, 5])
    expect(quickSort([42, 9, 17, 54, 602, -3, 54, 999, -11], getPivot3).array)
      .toEqual([-11, -3, 9, 17, 42, 54, 54, 602, 999])
  })
  test('quickSort must properly sort arrays and calculate comparisons ', () => {
    expect(quickSort([1, 3, 5, 2, 4], getPivot3)).toEqual({ array: [1, 2, 3, 4, 5], count: 6 })
    expect(quickSort([1, 3, 2, 3, 5, -1, -5, -6], getPivot3))
      .toEqual({ array: [-6, -5, -1, 1, 2, 3, 3, 5], count: 13 })
  })
  test('quickSort must properly calculate comparisons on big example', async () => {
    expect(quickSort(bigArray.slice(0), getPivot1).count).toBe(162085)
    expect(quickSort(bigArray.slice(0), getPivot2).count).toBe(164123)
    expect(quickSort(bigArray.slice(0), getPivot3).count).toBe(138382)
  })
})
