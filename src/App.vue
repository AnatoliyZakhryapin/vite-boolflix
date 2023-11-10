<script>

import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default {
    data() {
        return {
          store: store,
        }
    },
    components: { 
      AppMain,
      AppHeader 
    },
    methods: {
      fetchMovies() {
        console.log("go fetch", "/", store.searchText )
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
