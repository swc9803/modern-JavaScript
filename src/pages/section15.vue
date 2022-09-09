<template>
    <!-- closure -->
    <p>{{  }}</p>
</template>

<script setup>
console.clear()

// const external2 = () => {
//   let number = 65
//   const internal = () => {
//     const char_ = String.fromCharCode(number)
//     return `${char_} : ${number++}`
//   }
//   return internal()
// }
// console.log(external2())
// console.log(external2()) 65 위와 같은 값이 나온다.

const out = () => {
  let number = 65
  const internal = () => {
    const char_ = String.fromCharCode(number)
    return `${char_} : ${number++}`
  }
  return internal // 함수 실행 결과가 아닌 함수 자체를 반환해 가비지 컬렉션 x
}
console.log(out())
console.log(out())

const out2 = out() // out 외부함수가 internal 내부함수를 반환
console.log(out2())
console.log(out2())
console.log(out2())
</script>
