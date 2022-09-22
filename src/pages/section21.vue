<template>
    <!-- array -->
    <div></div>
</template>

<script setup>
console.clear()

class Student {
  constructor (name, age, enrolled, score) {
    this.name = name
    this.age = age
    this.enrolled = enrolled
    this.score = score
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 85),
  new Student('E', 18, true, 85)
]

const result1 = students.filter((student) => {
  return student.score === 90
})
console.log(result1)

const result2 = students.map((student) => {
  return student.score
})
console.log(result2)

// some = 하나라도 만족,  every = 모두가 만족
const result3 = students.some((student) => {
  return student.score < 50
})
console.log(result3)

// reduce
const result4 = students.reduce((prev, curr) => {
  console.log(prev)
  return prev + curr.score
}, 0)
console.log(result4 / students.length)

const result5 = students.map((student) => {
  return student.score
}).filter((score) => {
  return score >= 50
}).join()
console.log(result5)

const result6 = students.map((student) => {
  return student.score
}).sort((a, b) => {
  return a - b
})
console.log(result6)
</script>
