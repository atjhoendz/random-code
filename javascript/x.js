let obj = {
  get: "haluw"
}

obj = null

const res = obj != null && obj.get

console.log(res)
