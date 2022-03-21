<template>
  <div id="app">
    <CategoriesItem />
  </div>
</template>

<script>
import CategoriesItem from "./components/CategoriesItem.vue";

export default {
  name: "App",
  components: {
    CategoriesItem,
  },
};
</script>

<style>
#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
