<template>
    <!--  -->
    <button @click="printEventInfo2('hello world', $event)">
        inline event handler
    </button>
</template>

<script setup>
console.clear()
const printEventInfo2 = (message, event) => {
  console.log('messsage: ', message)
  console.log(event.target)
  console.log(event.target.tagName)
  event.target.style.background = 'gray'
}
</script>
