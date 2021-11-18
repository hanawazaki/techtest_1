<template>
  <div class="background">
    <header class="flex justify-between header container-custom">
      <div class="header__logo md:block">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <ul class="header__nav items-center hidden md:flex">
        <li class="header__item">
          <a href="#">Home</a>
        </li>
        <li class="header__item">
          <a href="#"> About </a>
        </li>
        <li class="header__item">
          <a href="#"> Promotions </a><span class="header__hot"> Hot </span>
        </li>
        <li class="header__item">
          <a href="#"> Blogs </a>
        </li>
        <li class="header__item">
          <a href="#"> Contact Us</a>
        </li>
      </ul>
      <ul class="header__auth flex items-center">
        <li class="header__authitem mx-3 text-black hidden md:block">
          <a href="#">Masuk</a>
        </li>
        <li
          class="
            header__authitem header__authitem--button
            mx-3
            rounded-full
            px-3
            py-3
          "
        >
          <a href="#">Daftar Sekarang</a>
        </li>
      </ul>
    </header>
    <section class="hero md:flex container-custom">
      <div class="hero__textcontent md:w-1/2">
        <h1 class="hero__title text-greenFresh font-medium text-left">
          Good Food Us <br />
          Good Mood
        </h1>
        <div class="md:hidden">
          <img src="../assets/img/img-hero2.png" alt="" />
        </div>
        <p class="hero__desc my-8 text-left text-light1">
          I would think that conserving our natural resources <br />should be a
          conservative position: Not to waste food, and <br />not to throw away
          a lot of the food that we buy.
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
      <div class="hero__image hidden md:w-1/2 md:block">
        <div>
          <img src="../assets/img/img-hero.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style >
.background {
  background-image: url("../assets/img/bg-hero.png");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

header {
  padding-top: 19px;
}

.header__logo {
  width: 150px;
}

.header__item {
  margin: 10px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(117, 117, 117, 1);
}

.header__hot {
  position: absolute;
  font-family: "Open Sans", sans-serif;
  font-size: 8px;
  font-weight: 700;
  color: white;
  padding: 3px 9px;
  border-radius: 8px;
  background-color: rgba(231, 70, 45, 1);
  transform: translate(-18px, -15px);
}

.header__authitem {
  color: #000;
  font-size: 14px;
  font-weight: 500;
}

.header__authitem--button {
  background-color: #8bac3e;
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.hero__textcontent {
  margin-top: 64px;
}

.hero__title {
  font-size: 48px;
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