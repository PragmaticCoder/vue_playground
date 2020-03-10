<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "Blog: Vue Hooks API Gotchas",
      posts: []
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(response => {
      this.posts = response.data;
    });
  }
};
</script>

<style></style>
