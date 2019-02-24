/* eslint-disable no-unused-vars,no-param-reassign */
// /////////////////////////////////////////////////////////////////////////////////////////////////
// I need to skip tests here, because this is non-deterministic algorithm and its results may vary
// /////////////////////////////////////////////////////////////////////////////////////////////////

const { times, sample, cloneDeep } = require('lodash')
const testData = require('./test-data.json')

const contractEdge = (data, [v1, v2]) => {
  // merging v1 and v2
  data[v1] = [...data[v1], ...data[v2]] // .filter(x => x !== Number(edge[0]))
  delete data[v2]

  // replace all v2 with v1
  Object.keys(data).forEach((key) => {
    data[key] = data[key].map(x => (x === Number(v2) ? Number(v1) : x))
  })

  // remove self-loops
  data[v1] = data[v1].filter(x => x !== Number(v1))

  return data
}

const findMinCut = (data) => {
  const { length } = Object.keys(data)
  const results = times(length / 5).map(() => {
    const newData = cloneDeep(data)

    while (Object.keys(newData).length > 2) {
      const vertices = Object.keys(newData)
      const v1 = sample(vertices)
      const v2 = sample(newData[v1])
      // mutable! operation
      contractEdge(newData, [v1, v2])
    }
    return newData[Object.keys(newData)[0]].length
  })

  return Math.min(...results)
}

// console.log(findMinCut(testData))
