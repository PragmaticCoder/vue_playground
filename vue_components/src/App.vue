<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "app",
  data() {
    return {
      title: "Welcome to Vue.js Components Tutorial"
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
