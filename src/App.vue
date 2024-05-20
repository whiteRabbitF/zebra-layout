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
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-weight: 200;
  -webkit-tap-highlight-color: transparent;
}

/* Специфические стили для Safari */
@media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-marquee-style:infinite) and (not (-ms-accelerator:true)) {
    #app {
      -webkit-appearance: none;
      -webkit-border-radius: 0;
    }
  }
}
</style>



