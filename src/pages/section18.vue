<template>
    <!-- callback -->
    <p>{{  }}</p>
</template>

<script setup>
console.clear()
function getData (callbackFunc) {
  $.get('https://domain.com/products/1', function (response) {
    callbackFunc(response) // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  })
}

getData(function (tableData) {
  console.log(tableData) // $.get()의 response 값이 tableData에 전달됨
})

// 콜백지옥
// $.get('url', function (response) {
//   parseValue(response, function (id) {
//     auth(id, function (result) {
//       display(result, function (text) {
//         console.log(text)
//       })
//     })
//   })
// })

// 해결방법
// function parseValueDone (id) {
//   auth(id, authDone)
// }
// function authDone (result) {
//   display(result, displayDone)
// }
// function displayDone (text) {
//   console.log(text)
// }
// $.get('url', function (response) {
//   parseValue(response, parseValueDone)
// })

</script>
