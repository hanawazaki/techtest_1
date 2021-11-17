<template>
  <section class="hero flex">
    <div class="hero__textcontent w-1/2">
      <h1 class="hero__title text-greenFresh font-medium text-left">
        Good Food Us <br />
        Good Mood
      </h1>
      <p class="hero__desc my-8 text-left text-light1">
        I would think that conserving our natural resources <br />should be a
        conservative position: Not to waste food, and <br />not to throw away a
        lot of the food that we buy.
      </p>
      <div class="flex">
        <a
          href="#"
          class="hero__button bg-greenFresh text-white rounded-full mr-4"
          >Daftar Sekarang</a
        >
        <a href="#" class="hero__button--about bg-lightGray2 rounded-full"
          >About Us</a
        >
      </div>
    </div>
    <div class="hero__image w-1/2">
      <div>
        <img src="../assets/img/img-hero.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero__textcontent {
  margin-top: 113.5px;
}

.hero__title {
  font-size: 64px;
  line-height: 64px;
}

.hero__desc {
  font-size: 18px;
  font-weight: 400;
}

.hero__button {
  box-shadow: 0px 8px 32px rgba(102, 107, 226, 0.35);
  padding: 10px 18px;
}

.hero__button--about {
  padding: 10px 18px;
}
</style>