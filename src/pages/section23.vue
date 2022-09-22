<template>
    <!-- callback -->
    <div></div>
</template>

<script setup>
console.clear()

class UserStorage {
  loginUser (id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'sung' && password === 'woo') {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  getRoles (user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'sung') {
        onSuccess({ name: 'sung', role: 'admin' })
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}

const userStorage = new UserStorage()
const id = prompt('아이디를 입력하세요')
const password = prompt('비밀번호를 입력하세요')
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(user, userWithRole => {
      alert(`compelete login ${userWithRole.name}, ${userWithRole.role}`)
    }, error => {
      console.log(error)
    })
  },
  error => { console.log(error) }
)
</script>
