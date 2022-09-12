<template>
    <!-- promise -->
    <p>{{  }}</p>
</template>

<script setup>
console.clear()
// no promise
const axios = 'axios'
axios.ajax({
  url: '/posts',
  type: 'GET',
  success: function (result1) {
    const posts = result1.data
    axios.ajax({
      url: '/posts/' + posts[0]._id,
      type: 'GET',
      success: function (result2) {
        const post = result2.data
        axios.ajax({
          url: '/users/' + post.author._id,
          type: 'GET',
          success: function (result3) {
            const user = result3.data
            console.log(user)
            // user로 할일 - 3
          }
        })
        // 그외 post로 할일 - 2
      }
    })
    // 그외 posts로 할일 - 1
  }
})

// promise  가독성 증가
function getPosts () {
  return new Promise(function (resolve, reject) {
    axios.ajax({
      url: '/posts',
      type: 'GET',
      success: function (result) {
        const posts = result.data
        resolve(posts)
        // 그외 posts로 할일
      }
    })
  })
}

function getFirstPost (posts) {
  return new Promise(function (resolve, reject) {
    axios.ajax({
      url: '/post/' + posts[0]._id,
      type: 'GET',
      success: function (result) {
        const post = result.data
        resolve(post)
        // 그외 post로 할일
      }
    })
  })
}

function getPostAuthor (posts) {
  return new Promise(function (resolve, reject) {
    axios.ajax({
      url: '/user/' + posts.author._id,
      type: 'GET',
      success: function (result) {
        const user = result.data
        resolve(user)
        // user로 할일
      }
    })
  })
}

function errorHandler (value) {
  console.log('error: ', value)
}

getPosts()
  .then(getFirstPost)
  .then(getPostAuthor)
  .catch(errorHandler)
</script>
