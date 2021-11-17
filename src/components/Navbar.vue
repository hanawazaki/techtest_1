<template>
  <header class="flex justify-between header">
    <div class="header__logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <ul class="header__nav flex items-center">
      <li class="header__item">
        <a href="#">Home</a>
      </li>
      <li class="header__item">
        <a href="#"> About </a>
      </li>
      <li class="header__item">
        <a href="#"> Promotions </a>
      </li>
      <li class="header__item">
        <a href="#"> Blogs </a>
      </li>
      <li class="header__item">
        <a href="#"> Contact Us</a>
      </li>
    </ul>
    <ul class="header__auth flex items-center">
      <li class="header__authitem mx-3 text-black">
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
</template>

<script>
export default {};
</script>

<style scoped>
.header__logo {
  width: 207px;
}

.header__item {
  margin: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(117, 117, 117, 1);
}

.header__authitem {
  color: #000;
  font-size: 14px;
  font-weight: 600;
}

.header__authitem--button {
  background-color: rgba(139, 172, 62, 1);
  color: white;
  font-size: 14px;
  font-weight: 600;
}
</style>