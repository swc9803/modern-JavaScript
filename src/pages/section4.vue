<template>
    <!-- 프로토타입 상속 -->
    <p>{{ obj1 }}</p>
    <p>{{ obj2 }}</p>
    <p>{{ obj3 }}</p>
</template>

<script setup>
/**
 * @프로토타입상속
 * obj3는 obj2의 부모인 obj1까지 모두 상속을 받는다.
 */
const obj1 = {
  name: '홍길동',
  age: 20,
  greeting: () => {
    console.log(`hi ${this.name}`)
  }
}
const obj2 = {
  name: '이순신'
}
// console.log(obj1.greeting)
// console.log(obj2)
obj2.proto = obj1
console.log(obj2.name)
const obj3 = {}
obj3.proto = obj2
</script>
