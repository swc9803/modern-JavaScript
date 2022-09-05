<template>
    <!-- 클래스 상속 -->
    <p>{{  }}</p>
</template>

<script setup>
console.clear()
// 상속
class Animal {
  constructor (group) {
    this.group = group
  }

  getGroup () {
    return this.group
  }

  eat () {}
  sleep () {}
  bark () { return '짖다.' }
}
class Mammal extends Animal {
  constructor (name, finger, toe, eyesight) {
    super(Mammal.name) // this보다 먼저 super가 호출되어야 한다.
    this.name = name
    this.finger = finger
    this.toe = toe
    this.eyesight = eyesight
  }

  run () {
    return `${this.name}(${this.group})뛴다.`
  }

  bark () {
    return `${this.name}(${this.group})짖다.`
  }

  move () {
    return `super = ${super.bark()} this = ${this.bark()}`
  }
}
const mam1 = new Mammal('호랑이', 10, 10, 1.6)
console.log(mam1.getGroup())
console.log(mam1.name)
console.log(mam1.run())
console.log(mam1.move())

// 속성 출력
console.log(Object.getOwnPropertyNames(mam1))
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(mam1)))
</script>
