<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <button @click="changeTitle">Change Blog Title</button>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "Blog: Vue Hooks API Gotchas"
    };
  },
  created() {}
};
</script>

<style></style>
