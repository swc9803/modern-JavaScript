<template>
    <!-- 프로토타입 -->
    <p>{{ Animal }}</p>
</template>

<script setup>
/**
 * @프로토타입
 * 함수 선언 후 실행 > 함수 자신, 그리고 자신과 같은 이름의 함수 '프로토타입 객체' 생성
 */
// const fruit = { name: 'apple' }
// console.log(fruit.name)

// fruit.expiration = 20202020
// console.log(fruit.expiration)

// const fruit2 = {
//   name: 'apple',
//   expiration: 20202020,
//   greeting: () => {
//     console.log('hi')
//   }
// }
// fruit2.greeting()

function Animal () {}
const tiger = new Animal()
const lion = new Animal()

console.log(tiger)
console.log(lion)

Animal.prototype.Run = function () {
  return 'Running'
}
console.log(tiger.Run())
console.log(lion.Run())
tiger.Run = function () {
  return 'Tiger Running'
}
console.log('=========================')
console.log(tiger.Run())
console.log(lion.Run())
</script>
