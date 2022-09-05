<template>
    <!--  -->
    <p>{{  }}</p>
</template>

<script setup>
const p1 = {
  eat () {},
  run () {},
  rest () {}
}
class Person2 {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  eat () {}
  run () {}
  rest () {}
}
const p2 = new Person2('홍길동, 20')
console.log(p1)
console.log(p2)
for (const i in p1) {
  console.log(`p1의 멤버들 = ${i}`)
}
for (const i in p2) {
  console.log(`p2의 멤버들 = ${i}`)
}
console.log(Object.getPrototypeOf(p2))
</script>
