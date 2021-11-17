<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Category from "./components/Category.vue";

export default {
  components: {
    Navbar,
    Hero,
    Category,
  },
};
</script>

<template>
  <Navbar />
  <Category />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
