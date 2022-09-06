<template>
    <!-- 정적 메서드 static -->
    <p>{{  }}</p>
</template>

<script setup>
console.clear()
class Animal {
  constructor (name) {
    this.name = name
  }

  getName () {
    return this.name
  }

  sleep () {
    console.log('잠을 자다')
  }

  static sleep2 () {
    console.log('static 잠을 자다')
  }
}
const ani1 = new Animal('호랑이')
ani1.sleep()
console.log(ani1.getName())
Animal.sleep2()
// ani1.sleep2() 에러   인스턴스(객체)를 통해서는 접근 불가
ani1.constructor.sleep2() // constructor를 통해 접근 가능
</script>
