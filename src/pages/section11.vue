<template>
    <!-- object.create 상속 -->
    <p>{{  }}</p>
</template>

<script setup>
console.clear()
function ParentClass (name, age) {
  this.name = name
  this.age = age
}
ParentClass.prototype.sayHello = function () {
  console.log(`hello ${this.name}`)
}
function ChildClass () {}

ChildClass.prototype = Object.create(ParentClass.prototype)
ChildClass.prototype.constructor = ChildClass
ChildClass.prototype.move = function () {
  console.log('moving')
}
const c1 = new ChildClass()
console.log(c1)
</script>
