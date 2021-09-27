<template>
  <div class="border-2 w-11/12 md:w-3/4 mx-auto h-80">
    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      class=""
      :nextArrow="'bg-black'"
    >
      <div class="rounded">
        <img
          :src="require('./../assets/Images/24.jpg')"
          alt=""
          class="object-cover h-96 w-full"
        />
      </div>
      <div>
        <img
          :src="require('./../assets/Images/25.jpg')"
          alt=""
          class="object-cover h-96 w-full"
        />
      </div>
      <div>
        <img
          :src="require('./../assets/Images/26.jpg')"
          alt=""
          class="object-cover h-96 w-full"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
};
</script>
<style>
button.slick-prev:before,
button.slick-next:before {
  color: black;
  font-size: 1.5rem;
}
</style>
