<template>
    <!-- map reduce -->
    <p>{{ numbers }}</p>
</template>

<script setup>
import { numbers, students, fluits } from '@/data/data.js'
console.clear()

const result = numbers.map((number) => number * 2) // return 생략 가능
console.log(result)

// foreach와 달리 return 반환
console.log(
  '영어 점수',
  students.map((student) => {
    return student.en
  })
)
console.log(
  '학생 이름',
  students.map((student) => {
    return student.name
  })
)

// some
console.log(
  '과일에 배가 있나요?',
  fluits.some((fluit) => {
    return fluit === '배'
  })
)
console.log(
  '7이상인 수가 있나요?',
  numbers.some((number) => {
    return number >= 7
  })
)
console.log(
  '7이상인 수가 있나요?',
  numbers.some((number) => {
    return number >= 7
  })
)

console.log(
  '숫자가 모두 8이하 인가요?',
  numbers.every((number) => {
    return number <= 8
  })
)

console.log(
  '짝수만 출력',
  numbers.filter((number) => {
    return number % 2 === 0
  })
)

numbers.reduce((acc, cur, idx, src) => {
  console.log(`전체값: ${acc} 현재값: ${cur} 인덱스: ${idx}`)
  return acc
})

const result2 = fluits.reduce((acc, cur) => {
  console.log(`전체값: ${acc} 현재값: ${cur}`)
  if (acc.includes(cur) === false) {
    acc.push(cur)
  }
  return acc
}, [])
console.log(result2)
</script>
