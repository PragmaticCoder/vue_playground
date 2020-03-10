<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <input type="text" v-model="searchTerm" />
    <Cards :posts="filteredPosts" />
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
      posts: [],
      searchTerm: ""
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.title.match(this.searchTerm));
    }
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
