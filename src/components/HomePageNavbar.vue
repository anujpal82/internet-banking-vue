<template>
  <nav class="bg-white shadow-lg fixed top-0 w-full z-30 p-4">
    <div class="flex justify-between items-center lg:px-10">
      <div>
        <!-- <img style={{ height: "60px", width: "100px" }} alt="logo" src={Logo} /> -->
        <img :src="logo" class="relative" height="50px" width="110px" />
      </div>
      <div class="flex justify-between hidden md:block  ">
        <a
          href=""
          class="ml-3 lg:mx-5  text-green-700 font-bold hover:text-green-900  "
          >Home</a
        >
        <a
          href=""
          class="ml-3 lg:mx-5 text-green-700 font-semibold hover:text-green-900 "
          >About Us</a
        >
        <a
          href=""
          class="ml-3 lg:mx-5  text-green-700 font-semibold hover:text-green-900 "
          >Why To Choose Us</a
        >
      </div>
      <div class="hidden md:block  ">
        <div class="flex justify-between">
          <div class="">
            <input
              type="text"
              placeholder="Search Something "
              class="h-9 w-24 lg:w-32 xl:w-48  border border-gray-300 placeholder-opacity-50  focus:outline-none focus:ring-1 rounded p-2  "
            />
            <button
              type="button"
              class=" rounded px-3 py-1 ml-2 xl:mr-5 text-green-500 border border-green-700 hover:bg-green-500 hover:text-white "
            >
              Search
            </button>
          </div>
          <div class="mx-3">
            <button
              class=" border border-green-300 hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-3 mr-2  border-blue hover:bg-green-300 rounded"
            >
              Sign In
            </button>
            <button
              class="border border-blue-300 hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-3   border-blue hover:bg-blue-300 rounded"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <span
        class=" md:hidden text-2xl text-gray-600 cursor-pointer"
        @click="toggler"
        ><i class="fas fa-bars"></i
      ></span>
    </div>

    <!-- Mobile Menu -->
    <div
      class="w-full text-green-900 font-semibold  mt-5  "
      :class="isActive ? 'md:hidden' : 'hidden'"
    >
      <div class="w-full text-center my-3 ">
        <a href="" class="block my-3">Home</a
        ><a href="" class="block">About Us</a
        ><a class="block my-3" href="">Why Us</a>
        <div class="my-3 w-full">
          <input
            type="text"
            placeholder="Search Something "
            class="h-9 w-48 sm:w-80  border border-gray-300 placeholder-opacity-50  focus:outline-none focus:ring-1 rounded p-2  "
          />
          <button
            type="button"
            class=" rounded px-3 py-1 mx-3 text-green-500 border border-green-700 hover:bg-green-500 hover:text-white"
          >
            Search
          </button>
        </div>
        <div class=" grid grid-cols-1 sm:grid-cols-2 gap-4 my-7 md:hidden ">
          <div class="mx-auto">
            <button
              class=" border    border-green-300 hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-3 mr-5  border-blue hover:bg-green-300 rounded"
            >
              Sign In
            </button>
            <button
              class="border border-blue-300 hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-3 mr-2   border-blue hover:bg-blue-300 rounded"
            >
              Sign Up
            </button>
          </div>

          <div
            class="flex justify-between w-1/2 text-2xl mt-1 mx-auto md:hidden"
          >
            <span class="text-blue-500"
              ><i class="fab fa-facebook-square"></i
            ></span>
            <span class="text-red-500"><i class="fab fa-youtube"></i></span>
            <span class="text-gray-700"><i class="fab fa-github"></i></span>
            <span class="text-blue-800"><i class="fab fa-linkedin"></i></span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import logo from "./../assets/Images/sbi.png";
export default {
  data() {
    return {
      logo: logo,
      isActive: false,
    };
  },
  methods: {
    toggler() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
