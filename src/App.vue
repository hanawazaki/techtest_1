<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
export default {
  components: {
    Navbar,
    Hero,
  },
};
</script>

<template>
  <Navbar />
  <Hero />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 19px;
}
</style>
