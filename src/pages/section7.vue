<template>
    <!--  -->
    <p>{{  }}</p>
</template>

<script setup>
// 생성자 함수
function Person1 (name, age) {
  this.name = name
  this.age = age
}
Person1.prototype.say = function () { console.log('hi') }
const p1 = new Person1('홍길동', 20)
p1.say()

// 클래스
class Person2 {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  say () { console.log('hi') }
}
const p2 = new Person2('홍길동', 20)
p2.say()

// 함수가 나타남
for (const i in p1) {
  console.log(i)
}
// 함수가 나타나지 않음
for (const i in p2) {
  console.log(i)
}
</script>
