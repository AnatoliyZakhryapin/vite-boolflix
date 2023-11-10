<script>

import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default {
    data() {
        return {
          store: store,
          API_KEY: 'ea170e7a3ae23ecef31df6cf2b986c79'
        }
    },
    components: { 
      AppMain,
      AppHeader 
    },
    computed: {
      query() {
        return this.store.searchText
      }
    },
    methods: {
      fetchMovies() {
        console.log("go fetch", "/", this.query )

      }
    }
}

</script>

<template>
  <AppHeader @performSearch="fetchMovies"/>
  <AppMain/>
</template>

<style lang="scss">
  @use './components/style/general.scss' as *;

</style>
