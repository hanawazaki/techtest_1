<template>
  <section class="category container-custom">
    <h3 class="category__title text-left">
      Browser Our Category <br />
      <span class="text-greenFresh"> Receipt </span>
    </h3>
    <div class="flex category__cards mb-16">
      <div class="category__cards-item category__cards--cupcake">
        <img src="../assets/img/icon-cupcake.png" alt="" />
        <h6>Cupcake</h6>
        <p>22 items</p>
      </div>
      <div class="category__cards-item category__cards--pizza">
        <img src="../assets/img/icon-pizza.png" alt="" />
        <h6>Pizza</h6>
        <p>25 items</p>
      </div>
      <div class="category__cards-item category__cards--kebab">
        <img src="../assets/img/icon-kebab.png" alt="" />
        <h6>Kebab</h6>
        <p>12 items</p>
      </div>
      <div class="category__cards-item category__cards--salmon">
        <img src="../assets/img/icon-salmon.png" alt="" />
        <h6>Salmon</h6>
        <p>12 items</p>
      </div>
      <div class="category__cards-item category__cards--doughnut">
        <img src="../assets/img/icon-donat.png" alt="" />
        <h6>Doughnut</h6>
        <p>11 items</p>
      </div>
    </div>
    <div class="category__navs mb-16 flex justify-end">
      <a href="#" class="category__navs--prev flex items-center mx-5">
        <img src="../assets/img/prev.png" class="w-8" alt="" />
        <span class="ml-2">Prev</span>
      </a>
      <a href="#" class="category__navs--next flex items-center">
        <span class="mr-2">Next</span>
        <img src="../assets/img/next.png" class="w-8" alt="" />
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.category__title {
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 42.78px;
  line-height: 50px;
  color: #333;
}

.category__cards-item {
  width: 230px;
  height: 175px;
  border-radius: 8px;
  margin-right: 11px;
  padding: 30px 48px;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  margin-bottom: 10px;
}

.category__cards-item:hover {
  height: 185px;
  background-image: url("../assets/img/bg-hero.png");
  background-position: center;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: 230px 185px;
}

.category__cards-item img {
  display: inline-block;
  width: 47px;
  height: 52px;
  margin-bottom: 21px;
}

.category__cards-item h6 {
  font-size: 16px;
  font-weight: 500;
}

.category__cards-item p {
  font-size: 14px;
  font-weight: 400;
}

.category__cards--cupcake {
  background-color: #f0feeb;
}

.category__cards--pizza {
  background-color: #e6f3f5;
}

.category__cards--kebab {
  background-color: #eaeefa;
}

.category__cards--salmon {
  background-color: #f9eef3;
}

.category__cards--doughnut {
  background-color: #f3f7d9;
}

.category__navs--prev {
  background-color: #8bac3e;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border-radius: 100px;
  padding: 7px 15px 7px 10px;
}

.category__navs--next {
  background-color: #8bac3e;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border-radius: 100px;
  padding: 7px 10px 7px 15px;
}
</style>