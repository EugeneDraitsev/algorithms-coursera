const swap = (array, i, j) => {
  const tmp = array[i]
  // eslint-disable-next-line no-param-reassign
  array[i] = array[j]
  // eslint-disable-next-line no-param-reassign
  array[j] = tmp
  return array
}

const partition = (array, l) => {
  const pivot = array[l]
  let i = l + 1
  for (let j = i; j < array.length; j++) {
    if (array[j] < pivot) {
      swap(array, i, j)
      i++
    }
  }
  swap(array, l, i - 1)
  return i - 1
}

const getPivot1 = () => 0
const getPivot2 = array => array.length - 1
const getPivot3 = (array) => {
  const { length } = array
  if (length < 3) {
    return length - 1
  }

  const first = array[0]
  const mid = array[Math.ceil(length / 2) - 1]
  const last = array[length - 1]

  const median = [first, mid, last].sort((a, b) => a - b)[1]

  return array.indexOf(median)
}

const quickSort = (array, pivotFn = getPivot3, count = array.length - 1) => {
  const { length } = array
  if (length < 2) {
    return { array, count: 0 }
  }

  const pivot = pivotFn(array)
  // console.log(pivot)
  if (pivot !== 0) {
    swap(array, 0, pivot)
  }
  const pivotIndex = partition(array, 0)

  const { array: left, count: countLeft } = quickSort(array.slice(0, pivotIndex), pivotFn)
  const { array: right, count: countRight } = quickSort(array.slice(pivotIndex + 1), pivotFn)

  return {
    array: [...left, array[pivotIndex], ...right],
    count: count + countLeft + countRight,
  }
}

module.exports = { quickSort, getPivot1, getPivot2, getPivot3 }
