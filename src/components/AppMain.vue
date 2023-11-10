<script>
import AppCard from './AppCard.vue'

export default {
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
            <h1 class="hello">Hello i am MAIN</h1>
            <AppCard/>
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
    
    .hello {
        color: red;
    }  
  }
    
</style>
