<template>
    <!-- 제너레이터 -->
    <p>{{  }}</p>
</template>

<script setup>
// 무명 표현식
const Person1 = class {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}
const p1 = new Person1('홍길동', 20)
console.log(p1.name)
console.log(Person1.name) // 클래스명이 없으므로 name 속성은 변수명

// 유명 표현식
const Person2 = class namedPerson {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}
const p2 = new Person2('이순신', 20)
console.log(p2.name)
console.log(Person2.name) // 클래스명이 없으므로 name 속성은 클래스의명
</script>
