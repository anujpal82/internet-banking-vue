<template>
  <nav class="bg-white shadow-lg fixed top-0 w-full z-30 p-4">
    <div class="flex justify-between items-center  xl:px-10">
      <div>
        <!-- <img style={{ height: "60px", width: "100px" }} alt="logo" src={Logo} /> -->
        <img
          :src="require('./../assets/Images/sbi.png')"
          class="relative"
          height="50px"
          width="110px"
        />
      </div>
      <div class="flex justify-between hidden  h-full lg:block  ">
        <a
          href=""
          class="ml-3 lg:ml-3 xl:mx-4  text-green-700 font-bold hover:text-green-900 relative  "
          >Home</a
        >
        <div class="inline relative dropbtn  ">
          <button
            href=""
            class="ml-3 lg:ml-3 xl:mx-4 text-green-700 font-semibold hover:text-green-900  "
            @click="transferToggler"
          >
            Transfer <i class="fas fa-chevron-circle-down"></i>
          </button>
          <div
            class="dropdown-content  absolute top-10 w-64 ml-10 border-2 p-2 text-center bg-green-100 "
            v-show="isTransfer"
          >
            <!-- <a class="block text-gray-500 font-semibold" href="#"
              >Transfer Within Your Account</a
            > -->
            <router-link
              to="/transfer/withinSameUser"
              custom
              v-slot="{ href, navigate }"
            >
              <a
                class="text-gray-500 font-semibold "
                :href="href"
                @click="navigate"
                >Transfer Within Your Account</a
              ></router-link
            >
            <hr class="text-black font-bold" />
            <router-link
              to="/transfer/toAnotherAccount"
              custom
              v-slot="{ href, navigate }"
            >
              <a
                class="text-gray-500 font-semibold"
                :href="href"
                @click="navigate"
                >Transfer To Another Account</a
              ></router-link
            >
          </div>
        </div>
        <div class="inline relative dropbtn  ">
          <button
            href=""
            class="ml-3 lg:ml-3 xl:mx-4 text-green-700 font-semibold hover:text-green-900  "
            @click="loanToggler"
          >
            Loan <i class="fas fa-chevron-circle-down"></i>
          </button>
          <div
            class="dropdown-content  absolute top-10 w-64 ml-20 border-2 p-2 text-center bg-green-100 "
            v-show="isLoan"
          >
            <a class="block text-gray-500 font-semibold" href="#"
              >Apply For Loan</a
            >
            <hr class="text-black font-bold" />
            <a class="block text-gray-500 font-semibold" href="#">Show Loans</a>
          </div>
        </div>
        <div class="inline relative dropbtn  ">
          <button
            href=""
            class="ml-3 lg:ml-3 xl:mx-4 text-green-700 font-semibold hover:text-green-900  "
            @click="servicesToggler"
          >
            e-Services <i class="fas fa-chevron-circle-down"></i>
          </button>
          <div
            class="dropdown-content  absolute top-10 w-64 ml-48 border-2 p-2 text-center bg-green-100 "
            v-show="isServices"
          >
            <a class="block text-gray-500 font-semibold mt-2" href="#"
              >Apply For CheckBook</a
            >
            <hr class="text-black font-bold" />
            <a class="block text-gray-500 font-semibold mt-2" href="#"
              >Apply For Debit Card</a
            >
            <hr class="text-black font-bold mt-2" />
            <a class="block text-gray-500 font-semibold" href="#"
              >Apply For Fixed-Deposit</a
            >
          </div>
        </div>
        <div class="inline relative dropbtn  ">
          <button
            href=""
            class="ml-3 lg:ml-3 xl:mx-4 text-green-700 font-semibold hover:text-green-900  "
            @click="nomineeToggler"
          >
            Nomination <i class="fas fa-chevron-circle-down"></i>
          </button>
          <div
            class="dropdown-content  absolute top-10 w-64 ml-80 border-2 p-2 text-center bg-green-100 "
            v-show="isNominee"
          >
            <a class="block text-gray-500 font-semibold" href="#"
              >Apply For Nominee</a
            >
            <hr class="text-black font-bold" />
            <a class="block text-gray-500 font-semibold" href="#"
              >View Nominee</a
            >
          </div>
        </div>

        <!-- <a
          href=""
          class="ml-3  lg:ml-3 xl:mx-4  text-green-700 font-semibold hover:text-green-900 "
          >Loan</a
        > -->
        <!-- <a
          href=""
          class="ml-3 lg:ml-3 xl:mx-4  text-green-700 font-semibold hover:text-green-900 "
          >E-services</a
        > -->
        <!-- <a
          href=""
          class="ml-3 lg:ml-3 xl:mx-4  text-green-700 font-semibold hover:text-green-900 "
          >Nomination</a
        > -->
        <a
          href=""
          class="ml-3 lg:ml-3 xl:mx-4  text-green-700 font-semibold hover:text-green-900 "
          >Close A/C</a
        >
        <a
          href=""
          class="ml-3 lg:ml-3 xl:mx-4  text-green-700 font-semibold hover:text-green-900 "
          >About Us</a
        >
        <a
          href=""
          class="ml-3 lg:ml-3 xl:mx-4  text-green-700 font-semibold hover:text-green-900 "
          >FAQ</a
        >
      </div>
      <div class="hidden lg:block  ">
        <div class="flex justify-between items-center">
          <div class="">
            <!-- <button
              class=" border border-green-300 hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-3 mr-2  border-blue hover:bg-green-300 rounded"
            >
             
            </button> -->
            <span
              class="xl:mr-3 mt-10  py-1 px-3 mb-0 cursor-pointer text-gray-600"
              ><i class="fas fa-user-edit text-3xl mb-0"></i
            ></span>
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
        class=" lg:hidden text-2xl text-gray-600 cursor-pointer"
        @click="toggler"
        ><i class="fas fa-bars"></i
      ></span>
    </div>

    <!-- Mobile Menu -->
    <div
      class="w-full text-green-900 font-semibold  mt-5  "
      :class="isActive ? 'lg:hidden' : 'hidden'"
    >
      <div class="w-full text-center my-3 ">
        <a href="" class="block my-3 ">Home</a>
        <a href="" class="block">Transfer</a
        ><a class="block my-3" href="">Loan</a>
        <a class="block my-3" href="">Nominee</a>
        <a class="block my-3" href="">e-services</a>
        <a class="block my-3" href="">Close Account</a>
        <a class="block my-3" href="">About US</a>
        <a class="block my-3" href="">FAQ</a>
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
        <div class=" grid grid-cols-1 sm:grid-cols-2 gap-4 my-7 lg:hidden ">
          <div class="mx-auto ">
            <span
              class="mr-3 mt-10  py-1 px-3 mb-0 cursor-pointer text-gray-600"
              ><i class="fas fa-user-edit text-3xl "></i
            ></span>
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
            class="flex justify-between w-1/2 text-2xl mt-1 mx-auto lg:hidden"
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
      isTransfer: false,
      isLoan: false,
      isServices: false,
      isNominee: false,
    };
  },
  methods: {
    toggler() {
      this.isActive = !this.isActive;
    },
    transferToggler() {
      this.isTransfer = !this.isTransfer;
      this.isServices = false;
      this.isNominee = false;
      this.isLoan = false;
    },
    loanToggler() {
      this.isLoan = !this.isLoan;
      this.isServices = false;
      this.isNominee = false;
      this.isTransfer = false;
    },
    servicesToggler() {
      this.isServices = !this.isServices;
      this.isTransfer = false;
      this.isLoan = false;
      this.isNominee = false;
    },
    nomineeToggler() {
      this.isNominee = !this.isNominee;
      this.isServices = false;
      this.isLoan = false;
      this.isTransfer = false;
    },
  },
};
</script>

<style scoped>
/* .dropdown-content::before{
  content: "s";
  width: 50px;
  border-width: 0px 0px 0px 20px;
  border-color: black;
  border-style: solid;
} */
</style>
