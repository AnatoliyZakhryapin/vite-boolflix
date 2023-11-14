<script>
import AppCard from './AppCard.vue'
import { store } from '../store';

export default {
  data() {
    return {
      title: "title",
      titleOrigin: "titleOrigin",
      language: "langu",
      voto: 2
    }
  },
  computed: {
    movies: function() {
      return store.movies
    },
    series: function() {
      return store.series
    },
    searchText() {
      return store.searchText;
    }
  },
  components: {
    AppCard
  }
}
</script>

<template>
    <div class="app-main">
      <section class="search" v-if="searchText">
        <div class="container movies">
          <div class="row">
            <div class="col">
              <h1 class="section-title">Movies</h1>
            </div>
          </div>
          <div class="row">
            <div class="col" v-for="card in movies">
              <AppCard :item="card"/>
            </div>
          </div>
        </div>
        <div class="container series">
          <div class="row">
            <div class="col">
              <h1 class="section-title">Series</h1>
            </div>
          </div>
          <div class="row">
            <div class="col" v-for="card in series">
              <AppCard :item="card"/>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  </template>

<style lang="scss" scoped>
  @use '../components/style/partial/varibils' as *;
  .app-main {
    background-color: $bg-main;
    flex-grow: 1;
    padding: $p-base;
    padding-top: 100px;
    
    .col:has(> .section-title){
      width: 100%;
    }
    .section-title {
        color: $f-color-base;
        margin-top: 40px;
        margin-bottom: 20px;
        flex-grow: 1;
        border-bottom: 1px solid $f-color-base;
    }

    .row {
      row-gap: 20px;
    }
    .col {
      width: 25%;
      display: flex;
    }
  }
    
</style>
