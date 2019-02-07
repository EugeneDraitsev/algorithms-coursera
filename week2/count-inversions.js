const mergeSort = (array) => {
  const { length } = array

  if (length < 2) {
    return array
  }

  const left = mergeSort(array.slice(0, length / 2))
  const right = mergeSort(array.slice(length / 2))

  let leftIndex = 0
  let rightIndex = 0
  return new Array(length).fill(0).map(() => {
    if (left[leftIndex] < right[rightIndex] || rightIndex === right.length) {
      leftIndex++
      return left[leftIndex - 1]
    }
    rightIndex++
    return right[rightIndex - 1]
  })
}

const countInversions = (array, inversions = 0) => {
  const { length } = array

  if (length < 2) {
    return { array, inversions }
  }

  const { array: left, inversions: leftInversions } = countInversions(array.slice(0, length / 2))
  const { array: right, inversions: rightInversions } = countInversions(array.slice(length / 2))
  // eslint-disable-next-line no-param-reassign
  inversions += leftInversions + rightInversions

  let leftIndex = 0
  let rightIndex = 0
  const result = new Array(length).fill(0).map(() => {
    if (left[leftIndex] <= right[rightIndex] || rightIndex === right.length) {
      leftIndex++
      return left[leftIndex - 1]
    }
    rightIndex++
    // eslint-disable-next-line no-param-reassign
    inversions += (left.length - leftIndex) // + 1
    return right[rightIndex - 1]
  })

  return { array: result, inversions }
}

module.exports = { mergeSort, countInversions }
