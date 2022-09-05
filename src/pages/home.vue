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
  { link: 's1' },
  { link: 's2' },
  { link: 's3' },
  { link: 's4' },
  { link: 's5' },
  { link: 's6' },
  { link: 's7' },
  { link: 's8' },
  { link: 's9' },
  { link: 's10' },
  { link: 's11' },
  { link: 's12' },
  { link: 's13' },
  { link: 's14' }
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
