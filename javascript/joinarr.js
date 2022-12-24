const data = ['1', '2']

const joinData = data.join()

const parseJoin = +(joinData)

const mapJoin = data.map((d) => parseInt(d, 10))

const joinedMap = mapJoin.join()

const toSMap = mapJoin.toString()

// 1, 2, 3

console.log({
  joinData,
  parseJoin,
  mapJoin,
  joinedMap,
  toSMap,
})
