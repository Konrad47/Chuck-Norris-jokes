<template>
  <div id="app">
    <h1>Chuck Norris Jokes</h1>
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
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
body {
  background: #a9dce3;
}
</style>
