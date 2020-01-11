<template>
  <div class>
    <div id="carouselExampleIndicators" class="carousel slide main-KV for-web" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <a href class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://fakeimg.pl/600x350/?retina=1&text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF&font=noto"
            alt="First slide"
          />
        </a>
        <a href="#" class="carousel-item">
          <img
            class="d-block w-100"
            src="https://fakeimg.pl/600x350/?retina=1&text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF&font=noto"
            alt="Second slide"
          />
        </a>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div
      id="carouselExampleIndicators"
      class="carousel slide main-KV for-mobile"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <a href class="carousel-item active">
          <img
            class="d-block w-100"
            src="~@/assets/img/photos/20191028_bottomsale_w828@2x.png"
            alt="First slide"
          />
        </a>
        <a href="#" class="carousel-item">
          <img
            class="d-block w-100"
            src="~@/assets/img/photos/20191028_bottomsale_w828@2x.png"
            alt="Second slide"
          />
        </a>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
