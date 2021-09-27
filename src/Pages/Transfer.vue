<template>
  <div class=" mt-28">
    <div class="grid grid-cols-1  sm:gap-0 sm:grid-cols-3 cursor-pointer ">
      <div class="text-gray-600 font-semibold text-2xl   text-center mt-5 ">
        Mr {{ customerData.fname }} {{ customerData.mname }}
        {{ customerData.lname }}
      </div>
      <div
        class="text-gray-600 font-semibold flex items-center text-3xl text-center mx-auto "
      >
        <i class="fas fa-wallet mx-2 "></i
        ><span>{{ customerData.balance }}</span>
        <i class="fas fa-rupee-sign mx-2 mt-2"></i>
      </div>
      <div class=" text-center text-gray-600 font-semibold sm:mt-3">
        <div class="">
          <i class="fas fa-sign-out-alt text-4xl "></i> <br /><span
            class="text-xl"
            >Log Out</span
          >
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2  mt-10">
      <router-view></router-view>
      <div class="mt-10 md:mt-0">
        <div class=" ">
          <img
            :src="require('./../assets/Images/bank.jpg')"
            class="w-5/6  h-80 mx-auto md:mx-0 rounded "
            alt=""
          />
          <p
            class="card-text mt-5 w-5/6 mx-auto md:mx-0  text-gray-600 font-semibold"
          >
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. Some quick
            example text to build on the card title and make up the bulk of the
            card's content. Some quick example text to build on the card title
            and make up the bulk of the card's content. Some quick example text
            to build on the card title and make up the bulk of the card's
            content.
          </p>
        </div>
      </div>
    </div>
    <Corousel class="mt-20 md:mt-24 border " />
    <Footer />
  </div>
</template>
<script>
import Corousel from "./../components/Corousel.vue";
import Footer from "./../components/Footer.vue";
import Services from "./../Services/Service.js";
export default {
  data() {
    return {
      customerData: {},
    };
  },
  created() {
    console.log(this.$route.params.id);
    Services.getCustomer(this.$store.state.accountNo).then((res) => {
      this.customerData = res.data[0];
    });
  },
  components: { Corousel, Footer },
};
</script>
