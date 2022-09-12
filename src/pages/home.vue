<template>
    <div>
        <h1>modern javascript</h1>
        <nav>
            <ul>
                <li v-for="(menu, i) in menus" :key="menu.id">
                    <router-link :to="{ path:menus[i] }">
                        {{ menus[i] }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const menus = []
const sectionCount = 19
for (let i = 1; i <= sectionCount; i++) {
  menus.push(`section${i}`)
}
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
