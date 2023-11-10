<script>

export default {
    data() {
        return {

        }
    },
    props: {
        title: String,
        titleOrigin: String,
        language: String,
        vote: Number
    }
}
</script>


<template>
    <div class="card">
        <ol>
            <li>{{ title }}</li>
            <li>{{ titleOrigin }}</li>
            <li>{{ language }}</li>
            <li>{{ vote }}</li>
        </ol>
    </div>
</template>

<style lang="scss">
    @use './style/partial/varibils' as *;
    .card {
        color: $f-color-base;
        padding: 10px;
        border: 1px solid white;
        flex-grow: 1;
    }
</style>
