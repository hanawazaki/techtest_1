<script>
import NavHero from "./components/NavHero.vue";
import Category from "./components/Category.vue";
import Trending from "./components/Trending.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavHero,
    Category,
    Trending,
    Footer,
  },
};
</script>

<template>
  <NavHero />
  <Category />
  <Trending />
  <Footer />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
