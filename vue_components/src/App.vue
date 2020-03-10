<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllFriends from "./AllFriends";
import OnlineFriends from "./OnlineFriends";

export default {
  name: "app",
  components: {
    Navbar,
    AllFriends,
    OnlineFriends
  },
  data() {
    return {
      title: "Welcome to Vue.js Components Tutorial",
      friends: [
        { name: "Alex", online: true },
        { name: "Bob", online: false },
        { name: "Doe", online: true },
        { name: "George", online: false }
      ]
    };
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload);
    }
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
