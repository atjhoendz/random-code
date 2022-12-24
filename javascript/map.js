const community = [
  {
    name: 'a'
  },
  {
    name: 'b'
  }
]

community.map((value, index) => {
  value.isJoined = false

  community[index] = value
  // return value
})

console.log({community})
