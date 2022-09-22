<template>
    <!-- promise -->
    <div></div>
</template>

<script setup>
console.clear()

const promise = new Promise((resolve, reject) => {
  console.log('doing something...')
  setTimeout(() => {
    resolve('sung')
    reject(new Error('no network'))
  }, 2000)
})

promise
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('finally')
  })

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1)
      }, 1000)
    })
  })
  .then(num => console.log(num))

console.clear()
// section 23 refactoring

class UserStorage {
  loginUser (id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'sung' && password === 'woo') {
          resolve(id)
        } else {
          reject(new Error('not found'))
        }
      }, 2000)
    })
  }

  getRoles (user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'sung') {
          resolve({ name: 'sung', role: 'admin' })
        } else {
          reject(new Error('no access'))
        }
      }, 1000)
    })
  }
}

// userStorage.loginUser(
//   id,
//   password,
//   user => {
//     userStorage.getRoles(user, userWithRole => {
//       alert(`compelete login ${userWithRole.name}, ${userWithRole.role}`)
//     }, error => {
//       console.log(error)
//     })
//   },
//   error => { console.log(error) }
// )

// 콜백 지옥 해결
const userStorage = new UserStorage()
const id = prompt('아이디를 입력하세요')
const password = prompt('비밀번호를 입력하세요')
userStorage.loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user =>
    alert(`compelete login ${user.name}, ${user.role}`))
  .catch(console.log)

</script>
