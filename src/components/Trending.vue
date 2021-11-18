<template>
  <div class="trending container-custom mb-60">
    <h3 class="trending__title text-left">
      Browse Our Trending <br />
      <span class="text-greenFresh"> Receipt </span>
    </h3>
    <div class="trending__list flex flex-wrap">
      <div class="trending__item bg-pizzaColor">
        <div class="trending__item-content">
          <img src="../assets/img/pizza1.png" alt="pizza" />
          <h4>Pizza Paperoni</h4>
          <p class="my-2">Pizza</p>
          <div class="flex trending__stars">
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star-gray.png" alt="" />
          </div>
        </div>
      </div>

      <div class="trending__item bg-pizzaColor">
        <div class="trending__item-content">
          <img src="../assets/img/pizza2.png" alt="pizza" />
          <h4>Pizza Meat</h4>
          <p class="my-2">Pizza</p>
          <div class="flex trending__stars">
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star-gray.png" alt="" />
            <img src="../assets/img/star-gray.png" alt="" />
          </div>
        </div>
      </div>

      <div class="trending__item bg-kebabColor">
        <div class="trending__item-content">
          <img src="../assets/img/kebab1.png" alt="kebab" />
          <h4>Doner Kebab</h4>
          <p class="my-2">Kebab</p>
          <div class="flex trending__stars">
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star-gray.png" alt="" />
          </div>
        </div>
      </div>

      <div class="trending__item bg-salmonColor">
        <div class="trending__item-content">
          <img src="../assets/img/salmon.png" alt="salmon" />
          <h4>Salmon Roll</h4>
          <p class="my-2">Salmon</p>
          <div class="flex trending__stars">
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star-gray.png" alt="" />
          </div>
        </div>
      </div>

      <div class="trending__item bg-cupcakeColor">
        <div class="trending__item-content">
          <img src="../assets/img/choco.png" alt="cupcake" />
          <h4>Cupcake Choco</h4>
          <p class="my-2">Cupcake</p>
          <div class="flex trending__stars">
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star-gray.png" alt="" />
          </div>
        </div>
      </div>

      <div class="trending__item bg-doughnutColor">
        <div class="trending__item-content">
          <img src="../assets/img/donat1.png" alt="dougnut" />
          <h4>Doughnut Milk</h4>
          <p class="my-2">Doughnut</p>
          <div class="flex trending__stars">
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
          </div>
        </div>
      </div>

      <div class="trending__item bg-doughnutColor">
        <div class="trending__item-content">
          <img src="../assets/img/donat2.png" alt="doygnut" />
          <h4>Doughnut Unicorn</h4>
          <p class="my-2">Doughnut</p>
          <div class="flex trending__stars">
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star-gray.png" alt="" />
          </div>
        </div>
      </div>

      <div class="trending__item bg-kebabColor">
        <div class="trending__item-content">
          <img src="../assets/img/kebab1.png" alt="kebab" />
          <h4>Kathi Kebab</h4>
          <p class="my-2">Kebab</p>
          <div class="flex trending__stars">
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star.png" alt="" />
            <img src="../assets/img/star-gray.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="trending__button text-center mt-16">
      <a href="#" class="rounded-full bg-greenFresh py-4 px-6 text-white"
        >ALL Receipt</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.trending__title {
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 42.78px;
  line-height: 50px;
  color: #333;
}

.trending__item {
  border-radius: 17px;
  width: 270.5px;
  height: 306px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 15px;
  margin-bottom: 25px;
  box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
}

.trending__item-content {
  padding: 33px 20px 33px 20px;
}

.trending__item:hover {
  background-image: url("../assets/img/bg-hero.png");
  background-repeat: no-repeat;
  background-size: 306px 287.5px;
  transition: 0.5s;
}

.trending__item img {
  width: 118px;
}

.trending__item h4 {
  font-size: 26px;
  margin-top: 19px;
  line-height: 25px;
}

.trending__item p {
  font-size: 18px;
  color: #8bac3e;
}

.trending__stars {
  width: 10.5px;
}

.trending__stars img {
  margin-right: 4px;
}
</style>