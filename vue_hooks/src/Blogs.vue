<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
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
  beforeCreate() {
    alert("beforeCreate hook fired!");
  },
  created() {
    alert(
      "created hook fired! At this point, everything has been created but not rendered!. This is where we can fetch some data from external api for example and display it after"
    );
  },
  afterCreate() {
    alert("afterCreate hook fired!");
  }
};
</script>

<style></style>
