<template>
    <!-- 클래스 getter setter -->
    <p>{{  }}</p>
</template>

<script setup>
/**
 * @getter @setter
 * getter 클래스 속성에 값을 가져올 때 사용 끝에() 불필요
 * setter 클래스 속성에 값을 할당할 때 사용
 */
console.clear()
class Person {
  constructor (id, name, email) {
    this._id = id
    this._name = name
    this._email = email
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

  get email () {
    return this._email
  }

  set id (value) {
    this._id = value
  }

  set name (value) {
    this._name = value
  }

  set email (value) {
    this._email = value
  }

  info () {
    return `id = ${this._id}, name = ${this._name}, email = ${this._email}`
  }
}
const p1 = new Person('batman', '배트맨', 'bat@email.com')
console.log(p1.info())
p1.name = '엔트맨'
console.log(p1.info())

</script>
