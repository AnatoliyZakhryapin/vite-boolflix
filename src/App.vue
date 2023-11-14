<script>

import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

import axios from 'axios'

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
      return this.store.searchText;
    },
    searchText() {
      return this.store.searchText;
    }
  },
  methods: {
    fetchMovies() {
      // get movies date
      axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key: this.API_KEY,
          query: this.query,
        }
      }).then(res => {
        this.store.movies = res.data.results;
      });

      // get series date 
      axios.get('https://api.themoviedb.org/3/search/tv',{
        params: {
          api_key: this.API_KEY,
          query: this.query,
        }
      }).then(res => {
        this.store.series = res.data.results;
      })
    },
    getNotActiveInput() {
      if(this.searchText.length < 1) {
        console.log("out")
        return this.store.isActiveInput = false;
      }
    }
  }
}

</script>

<template >
  <AppHeader 
    @performSearch="fetchMovies"
    @click.stop="getNotActiveInput()"
  />
  <AppMain @click.stop="getNotActiveInput()"/>
</template>

<style lang="scss">
  @use './components/style/general.scss' as *;

  .vote-star {
    color: yellow;
  }
</style>
