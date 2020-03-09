<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Vue.js Components Tutorial"
    };
  }
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
