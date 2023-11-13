<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        }, 
        links: Array,
    }
}
</script>

<template>
    <div>
        <h3 v-if="title"> {{ title }} </h3>
        <ul class="menu">
            <li class="menu-item" v-for="link in links">
                <a :href="link.href">
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
</style>