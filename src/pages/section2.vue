<template>
    <!-- symbol -->
    <p>{{ arr.length }}</p>
    <p>{{ arr[length] }}</p>
</template>

<script setup>
/**
 * @symbol
 * 객체 속성 추가 시 덮어지는 것을 방지하기 위해 심볼 사용
 * new 연산자를 사용하지 않는다.
 * 심볼은 호출 시 매번 새로운 심볼 값을 생성
 * 심볼값은 문자열 형태로 출력 불가
 * 배열 객체의 속성이 보이지 않게하려면 심볼을 써야한다.
 */
const arr = [1, 2, 3, 4, 5]
const length = Symbol('length')
arr[length] = 50 // arr 배열의 length 속성에 50 할당

const symbolsame1 = Symbol('isThisSame?')
const symbolsame2 = Symbol('isThisSame?')
console.log(symbolsame1 === symbolsame2)

const someProperty = Symbol('someProperty')
arr[someProperty] = 10
for (const i in arr) {
  console.log(i)
}
console.log(arr[someProperty])
</script>
