const role = {
  USER: {
    VALUE: 'USER',
    ID: 1
  },
  ADMIN: {
    VALUE: 'ADMIN',
    ID: 2
  }
}

for (let r in role) {
  console.log(r)
  console.log(role[r])
}
