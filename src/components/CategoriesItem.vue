<template>
  <div id="categories">
    <b-list-group v-for="(category, i) in categories" :key="i">
      <b-list-group-item button @click="fetchCategory(category)">
        {{ category }}
      </b-list-group-item>
    </b-list-group>
    <b-modal ref="my-modal" hide-header hide-footer>
      <div class="d-block text-center">
        <h3>{{ randomJoke.value }}</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >Close Me</b-button
      >
    </b-modal>
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
        this.$refs["my-modal"].show();
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style scoped>
#categories {
  margin-right: 10%;
  margin-left: 10%;
  padding-bottom: 20px;
}
</style>