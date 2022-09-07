<template>
    <!-- for of, toString -->
    <p>{{  }}</p>
</template>

<script setup>
/**
 * @forof
 * 컬렉션 객체가 symbol.iterator 속성이 있어야한다.
 */
console.clear()
const map1 = new Map([['seoul', 1], ['busan', 2], ['jeju', 3]])
for (const city of map1) {
  console.log(city)
}
for (const [key, value] of map1) {
  console.log(key, value)
}

// toString()
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}
const p1 = new Person('홍길동', 20)
Person.prototype.toString = function () {
  const result = `객체정도 > 이름: ${this.name} 나이: ${this.age}`
  return result
}
console.log(p1)
console.log(p1.toString())
</script>
