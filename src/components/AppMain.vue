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
    }
  },
  components: {
    AppCard
  }
}
</script>

<template>
    <div class="app-main">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="section-title">Movies</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col" v-for="card in movies">
            <AppCard
              :title="card.title"
              :titleOrigin="card.original_title"
              :language="card.original_language"
              :vote="card.vote_average"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="section-title">Series</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col" v-for="card in series">
            <AppCard
              :item="card"
              :titleOrigin="card.original_name"
              :language="card.original_language"
              :vote="card.vote_average"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  @use '../components/style/partial/varibils' as *;
  .app-main {
    background-color: $bg-main;
    flex-grow: 1;
    padding: $p-base;
    
    .section-title {
        color: red;
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
