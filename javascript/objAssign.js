const user = {
  name: 'atjhoendz',
  gender: 'Male'
}

const newUser = user;

newUser.name = 'maman'

const anotherUser = {}
Object.assign(anotherUser, user)

anotherUser.name = 'another'

console.log({user, newUser, anotherUser})
