<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <div class="card" v-for="post in posts" :key="post.id">
      <div class="container">
        <h4>
          <b>{{ post.title }}</b>
        </h4>
        <p>{{ post.body }}</p>
      </div>
    </div>
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

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>
