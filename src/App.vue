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
      console.log("FETCH MOVIES")
      // get movies date
      axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key: this.API_KEY,
          query: this.query,
        }
      }).then(res => {
        this.store.movies = res.data.results;
      }).finally( () => {
        console.log("MOVIES GENRES");
        this.store.filtrGenresList = [];
        this.updateFiltrGenresList(this.store.movies);
      });

      // get series date 
      axios.get('https://api.themoviedb.org/3/search/tv',{
        params: {
          api_key: this.API_KEY,
          query: this.query,
        }
      }).then(res => {
        this.store.series = res.data.results;
        // this.updateGenresList(this.store.series);
      })
    },
    updateFiltrGenresList(items) {
      items.forEach(item => {
        const genre_ids = item.genre_ids;
        genre_ids.forEach(genre_id => {
          // console.log(genre_id);
          const genre = this.store.moviesGenresList.find(genre => genre.id === genre_id);
          console.log(genre);
          if(genre) {
            if(!this.store.filtrGenresList.includes(genre.name)) {
                this.store.filtrGenresList.push(genre.name);
            }
          }
        })
      })
    },
    fetchGenrs() {
        // get movies genres list
        axios.get('https://api.themoviedb.org/3/genre/movie/list?',{
          params: {
          api_key: this.API_KEY,
          language: "en",
        }
        }).then(res => {
          this.store.moviesGenresList = res.data.genres;
          console.log("movie list", this.store.moviesGenresList)
        });

        // get TV genres list
        axios.get('https://api.themoviedb.org/3/genre/tv/list?',{
          params: {
          api_key: this.API_KEY,
          language: "en",
        }
        }).then(res => {
          this.store.TVGenresList = res.data.genres;
          console.log("TV list", this.store.TVGenresList)
        });
    },
    getNotActiveInput() {
      if(this.searchText.length < 1) {
        console.log("out")
        return this.store.isActiveInput = false;
      }
    }
  },
  created() {
    document.body.addEventListener("click",() => {
      this.getNotActiveInput()
    })
    this.fetchGenrs();
  }
}

</script>

<template >
  <AppHeader 
    @performSearch="fetchMovies"
  />
  <AppMain/>
</template>

<style lang="scss">
  @use './components/style/general.scss' as *;

  .vote-star {
    color: yellow;
  }
</style>
