<template>
  <div id="app">
    <NewsList />
  </div>
</template>

<script>
import NewsList from "@/views/NewsList.vue";

export default {
  name: 'App',
  components: {NewsList},
};
</script>

<style>
#app {
  font-family: Nunito Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-weight: 200;
}
</style>


