<template>
  <div>
    <Navbar />
    <div class="mt-24">
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
      <div class="text-red-500 font-bold mt-5">
        <marquee scrollamount="15">
          Our Bank Never Ask For Confidencial Information Such As PIN and OTP
          from customers.Only any such call can be made by only
          fraudsters.Please do not share personal Information.
        </marquee>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2  mt-7">
        <div class="mt-14">
          <h1 class="text-center text-green-800 font-semibold text-2xl">
            Statements
          </h1>
          <form action="" class=" w-3/4 md:w-5/6 lg:w-4/6 2xl:w-1/2  mx-auto ">
            <input
              type="date"
              class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-8 "
            />
            <input
              type="date"
              class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-5 "
            />
            <button
              class="bg-blue-400 border border-blue-400 w-full mt-5 rounded p-2 text-white font-semibold hover:bg-transparent hover:text-blue-400 "
            >
              Find
            </button>
          </form>
        </div>
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
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content. Some
              quick example text to build on the card title and make up the bulk
              of the card's content. Some quick example text to build on the
              card title and make up the bulk of the card's content. Some quick
              example text to build on the card title and make up the bulk of
              the card's content.
            </p>
          </div>
        </div>
      </div>
      <Corousel class="mt-20 md:mt-24 border " />
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "./../components/navbar.vue";
import Services from "./../Services/Service.js";
import Corousel from "./../components/Corousel.vue";
import Footer from "./../components/Footer.vue";
export default {
  props: ["items"],
  data() {
    return {
      customerData: {},
    };
  },
  components: { Navbar, Corousel, Footer },
  created() {
    console.log(this.$route.params.id);
    Services.getCustomer(this.$route.params.id).then((res) => {
      console.log(res.data);
      this.customerData = res.data[0];
    });
  },
};
</script>
