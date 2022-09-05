<template>
    <div>
        <h1>modern javascript</h1>
        <nav>
            <ul>
                <li v-for="menu in menus" :key="menu.id">
                    <router-link :to="{ path:menu.link }">
                        {{ menu.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const menus = ([
  { name: 'section1', link: 's1' },
  { name: 'section2', link: 's2' },
  { name: 'section3', link: 's3' },
  { name: 'section4', link: 's4' },
  { name: 'section5', link: 's5' },
  { name: 'section6', link: 's6' }
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
