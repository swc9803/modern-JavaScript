<template>
    <!-- private 접근 방법 -->
    <p>{{  }}</p>
</template>

<script setup>
console.clear()
// method
class Animal2 {
    #age = 4
    bark () {
      return `${this.#age}살 개가 짖는다.`
    }

    #privateMethod () {
      return 'Hello, private Method'
    }

    getPrivateMethod () {
      return this.#privateMethod()
    }
}
const ani2 = new Animal2()
console.log(ani2.getPrivateMethod())

// private static method
class Animal3 {
  static #privateStaticMethod () {
    return 'hello private static method'
  }

  static getPrivateStaticMethod () {
    return this.#privateStaticMethod()
  }
}
console.log(Animal3.getPrivateStaticMethod())
</script>
