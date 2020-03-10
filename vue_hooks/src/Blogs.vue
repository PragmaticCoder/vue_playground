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
      blogTitle: "Blog: Vue Hooks Gotchas"
    };
  },
  methods: {
    changeTitle() {
      this.blogTitle =
        "Blog Title Changed! Should fire before Update before rendering the changes!";
    }
  },
  beforeCreate() {
    alert("beforeCreate hook fired!");
  },
  created() {
    alert(
      "created hook fired! At this point, everything has been created but not rendered!. This is where we can fetch some data from external api for example and display it after"
    );
  },
  beforeUpdate() {
    alert(
      "beforeUpdate hook fired! This will be fired before updating the Data"
    );
  }
};
</script>

<style></style>
