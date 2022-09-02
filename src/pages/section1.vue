<template>
    <p>set</p>
    {{ arr2 }}
</template>

<script setup>
// import { ref } from 'vue'
// const arrValue = ref()

/**
 * @배열
 */
// const arr1 = ['a', 'b', 'c', 'd']
// for (let i = 0; i < arr1.length; i++) {
//   arrValue.value = arr1[i]
//   console.log(arrValue.value)
// }
// // 위와 같다
// arr1.forEach(val => {
//   console.log(val)
// })

/**
 * @set
 * 배열과는 다르게 중복 불가
 */
const arr2 = new Set()
arr2.add('A').add('B')
arr2.add('C')
arr2.add('C')
arr2.add('D')
// // console.log(arr2.size)

// 삭제
arr2.delete('B')

// forEach와 동일
// for (const i of arr2) {
//   console.log(i)
// }
// // spread 연산자 > 이터러블 객체의 요소 리턴
// const setToArray = [...arr2]
// console.log(setToArray[0])

/**
 * @keys메서드
 */
const keyItr = arr2.keys()
console.log(keyItr.next().value)
console.log(keyItr.next().value)
console.log(keyItr.next().value)
console.log('-----------------')

/**
 * @values메서드
 */
const valItr = arr2.values()
console.log(valItr.next().value)
console.log(valItr.next().value)
console.log(valItr.next().value)
// 위와 동일
for (const i of arr2) {
  console.log(i)
}

/**
 * @entries메서드
 * 배열으로 반환
 */
const entries = arr2.entries()
for (const i of entries) {
  console.log(i)
}
</script>

<script setup>

</script>
