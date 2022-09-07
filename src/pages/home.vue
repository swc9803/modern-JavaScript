<template>
    <div>
        <h1>modern javascript</h1>
        <nav>
            <ul>
                <li v-for="menu in menus" :key="menu.id">
                    <router-link :to="{ path:menu.link }">
                        {{ menu.link }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const menus = ([
  { link: 'section1' },
  { link: 'section2' },
  { link: 'section3' },
  { link: 'section4' },
  { link: 'section5' },
  { link: 'section6' },
  { link: 'section7' },
  { link: 'section8' },
  { link: 'section9' },
  { link: 'section10' },
  { link: 'section11' },
  { link: 'section12' },
  { link: 'section13' },
  { link: 'section14' },
  { link: 'section15' },
  { link: 'section16' },
  { link: 'section17' },
  { link: 'section18' }
])
</script>

<style scoped>
ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
li {
    font-size: 2em;
    margin: 2%;
    list-style: none;
}
</style>
