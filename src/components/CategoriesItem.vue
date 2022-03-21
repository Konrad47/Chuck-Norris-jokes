<template>
  <div>
    <b-list-group v-for="(category, i) in categories" :key="i">
      <b-list-group-item button @click="fetchCategory(category)">
        {{ category }}
      </b-list-group-item>
    </b-list-group>
    <b-modal ref="joke-modal" hide-footer> </b-modal>
  </div>
</template>

<script>
import { HTTP } from "../http-common";
export default {
  name: "CategoriesItem",
  data() {
    return {
      categories: [],
      randomJoke: {},
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await HTTP.get("/categories");
        this.categories = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchCategory(category) {
      try {
        const response = await HTTP.get(`/random?category=${category}`);
        this.randomJoke = response.data;
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style>
</style>