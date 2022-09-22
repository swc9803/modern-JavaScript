<template>
    <!-- json -->
    <div></div>
</template>

<script setup>
console.clear()
// object를 JSON으로
let json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
  name: 'tokki',
  color: 'white',
  size: null,
  birth: new Date(),
  jump: () => {
    console.log(`${name} jump!`)
  }
}
json = JSON.stringify(rabbit)
console.log(json)
json = JSON.stringify(rabbit, ['name', 'color'])
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'name' ? 'hi' : value
})
console.log(json)

// JSON을 object로
console.log('JSON to object')

const obj = JSON.parse(json)
console.log(obj)
</script>
