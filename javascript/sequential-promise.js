const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve('promise1'), 500)  
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve('promise2'), 200)  
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve('promise3'), 100)  
})

const listPromise = [promise1, promise2, promise3]

Promise.all(listPromise).then((result) => console.log(result))
