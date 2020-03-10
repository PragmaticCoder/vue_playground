<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <Cards :posts="posts" />
  </div>
</template>

<script>
import axios from "axios";
import Cards from "./Cards";

export default {
  name: "Blogs",
  components: {
    Cards
  },
  data() {
    return {
      blogTitle: "Blog: Vue Hooks API Gotchas",
      posts: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        this.posts = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
