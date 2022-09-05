<template>
    <!-- new연산자 -->
    <p>{{ newobj }}</p>
</template>

<script setup>
/**
 * @new연산자
 * new연산자로 새로운 객체를 생성하면 새로운 객체의 원형(프로토타입)을 지정
 * 새로운 객체 인스턴스를 생성해 매개 변수 등의 초기화 값을 생성시 편하다.
 */
function Add (a, b) {
  this.a = a
  this.b = b
}
Add.prototype.plus = function () {
  return this.a + this.b
}
// const add = new Add(111, 222)
// console.log(add.plus())

const newobj = {}
newobj.prototype = Add.prototype
Add.apply(newobj, [111, 222])
console.log(newobj.prototype.plus())

</script>
