<template>
    <!-- closure2 -->
    <button @click="out2">start count</button>
    {{ cnt }}
</template>

<script setup>
import { ref } from 'vue'
console.clear()
const cnt = ref(0)

const out = () => {
  const internal = () => ++cnt.value
  return internal
}
const out2 = out()

const makeList = (arr) => {
  let el = '<ul>\n'
  for (let i = 0; i < arr.length; i++) {
    el += '<li>' + arr[i] + '</li>\n'
  }
  el += '</ul>'
  return el
}
const animals = ['사자', '호랑이', '개', '고양이']
const liItems = makeList(animals)
console.log(liItems)
document.body.innerHTML = liItems

const li = document.querySelectorAll('li')
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', () => {
    console.log(`${i}번째 요소`)
  })
}
</script>
