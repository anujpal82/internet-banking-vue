<template>
  <div>
    <HomePageNavbar />
    <div class="mt-32">
      <div class=" text-gray-800 grid md:grid-cols-12 grid-cols-1 ">
        <div class="col-span-6 lg:col-span-8  ">
          <h1 class="text-5xl font-bold text-center mt-14">
            Online Internet Banking Project
          </h1>
          <div class="text-center w-5/6 mx-auto mt-10 text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            natus tempora provident maxime voluptate corrupti, molestiae
            commodi, recusandae earum beatae ullam nulla non sint. Nihil fugiat
            minus praesentium delectus consectetur impedit quas ratione dolorum
            recusandae earum beatae ullam nulla non sint. Nihil fugiat minus
            praesentium delectus consectetur impedit quas ratione dolorum
            recusandae earum beatae ullam nulla non sint. Nihil fugiat minus
            praesentium delectus consectetur impedit quas ratione dolorum
          </div>
        </div>
        <div class="col-span-6  lg:col-span-4 ">
          <div class="w-full ">
            <form action="" class="mt-7 w-3/4 mx-auto md:mx-0 ">
              <div class=" text-center">
                <img
                  :src="require('./../assets/Images/sbi2.png')"
                  class="mx-auto"
                  height="200"
                  width="200"
                  alt=""
                />
              </div>
              <input
                type="text"
                class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
                placeholder="Enter User Name"
                v-model="loginData.userId"
              />
              <input
                type="password"
                class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
                placeholder="Enter PassWord"
                v-model="loginData.pass"
              />
              <div class="grid grid-cols-2 mt-7 ">
                <button
                  class="bg-blue-500 hover:bg-transparent hover:text-blue-800 hover:border hover:border-blue-700 text-white font-bold py-2 px-4 border  rounded mr-3"
                  @click.prevent="HandleLogin"
                >
                  Login
                </button>
                <button
                  class="bg-gray-500 hover:bg-transparent hover:text-gray-800 hover:border hover:border-gray-700 text-white font-bold py-2 px-4 border  rounded ml-3"
                >
                  Register
                </button>
              </div>
              <hr class="mt-4 font-bold text-gray-900" />
              <p class="text-sm text-gray-600 mt-2">
                By clicking Sign up, you agree to the terms of use.
              </p>
            </form>
          </div>
        </div>
      </div>
      <section class="  mt-14 mx-10">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  mx-auto"
        >
          <div class="border border-gray-700 ">
            <div :style="styleObject" class="relative border border-green-900">
              <img
                alt="emote"
                :src="require('./../assets/Images/green_smiley.png')"
                class="mt-0 absolute top-0 left-0 "
              />
              <div class=" mt-2 font-bold text-green-600 text-center ">
                ALWAYS
              </div>
            </div>
            <p class="text-center mt-3 font-semibold text-gray-600">
              keep your computer <br />
              free of malware
            </p>
          </div>
          <div class="border border-gray-700 ">
            <div :style="styleObject" class="relative border border-green-900">
              <img
                alt="emote"
                :src="require('./../assets/Images/green_smiley.png')"
                class="mt-0 absolute top-0 left-0 "
              />
              <div class=" mt-2 font-bold text-green-600 text-center ">
                ALWAYS
              </div>
            </div>
            <p class="text-center mt-3 font-semibold text-gray-600">
              Change Your Password <br />
              Periodically
            </p>
          </div>
          <div class="border border-gray-700">
            <div :style="styleObject" class="relative border border-green-900">
              <img
                alt="emote"
                :src="require('./../assets/Images/red_smiley.png')"
                class="mt-0 absolute top-0 left-0 "
              />
              <div class=" mt-2 font-bold text-red-600 text-center ">
                NEVER
              </div>
            </div>
            <p class="text-center mt-3 font-semibold text-gray-600">
              Respond To Any Communication <br />
              Seeking Your Password
            </p>
          </div>
          <div class="border border-gray-700">
            <div :style="styleObject" class="relative border border-green-900">
              <img
                alt="emote"
                :src="require('./../assets/Images/red_smiley.png')"
                class="mt-0 absolute top-0 left-0 "
              />
              <div class=" mt-2 font-bold text-red-600 text-center ">
                NEVER
              </div>
            </div>
            <p class="text-center mt-3 font-semibold text-gray-600">
              Reveal Your Password Or <br />
              Card Details To Anyone
            </p>
          </div>
        </div>
      </section>
      <section class="mt-10 mx-10 md:mx-20 sm:mx-28">
        <h1 class="text-3xl text-center text-blue-500 font-bold ">
          FOR YOUR OWN SECURITY
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2  gap-16 mt-10">
          <div>
            <h1 class="text-red-500 text-2xl font-semibold">
              Please ensure the following before logging into Online Banking
            </h1>
            <ul class="mt-7 font-medium text-gray-600 list-disc">
              <li class="ml-4">
                The URL in your browser address bar begins with "https".
              </li>
              <li class="ml-4">
                The address or status bar displays the padlock symbol.
              </li>
              <li class="ml-4">
                Click the padlock to view and verify the security certificate.
              </li>
              <li class="ml-4">
                The address bar turns green indicating that the site is secured
                with an SSL Certificate that meets the Extended Validation
                Standard.
              </li>
              <li class="ml-4">
                (SSL is compatible for IE 7.0 and above, Mozilla Firefox 3.1 and
                above, Opera 9.5 and above, Safari 3.5 and above, Google
                Chrome).
              </li>
              <li class="ml-4">
                The address bar turns green indicating that the site is secured
                with an SSL Certificate that meets the Extended Validation
                Standard.
              </li>
            </ul>
          </div>
          <div>
            <h1 class="text-red-500 text-2xl font-semibold">
              Beware of Phishing attacks
            </h1>
            <ul class="mt-7 font-medium text-gray-600 list-disc">
              <li class="ml-4">
                Phishing is a fraudulent attempt, usually made through email,
                phone calls, SMS etc seeking your personal and confidential
                information.
              </li>
              <li class="ml-4">
                State Bank or any of its representative never sends you
                email/SMS or calls you over phone to get your personal
                information,password or one time SMS (high security) password.
                Any such e-mail/SMS or phone call is an attempt to fraudulently
                withdraw money from your account through Internet Banking. Never
                respond to such email/SMS or phone call. Please report
                immediately on report.phishing@sbi.co.in if you receive any such
                email/SMS or Phone call. Please lock your user access
                immediately, if you have accidentally revealed your
                credentials.Click here to lock.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr class="mt-3" />
      <!-- <section class="mt-7 mx-10 ">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div class="">
          <div>
            <h1
              class="text-blue-500 font-semibold text-xl ml-6
            "
            >
              Subscribe to our Newsletter
            </h1>
            <div class=" w-5/6 mx-auto  mt-4">
              <input
                type="text"
                class="border border-gray-300 w-4/6 h-11 rounded-full p-5 focus:outline-none focus:ring-1"
                placeholder="Type Your Email Here"
              />
              <button
                class="bg-green-500 px-7 py-3 rounded-full text-white font-bold -ml-14 hover:border hover:bg-red-400 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div class="">
          <h1 class="text-blue-500 font-semibold text-xl ml-6 md:text-center ">
            Connect With Us
          </h1>
          <div
            class="flex justify-between items-center text-5xl w-3/4 mx-auto mt-4"
          >
            <span class="text-blue-500 border"
              ><i class="fab fa-facebook-square"></i
            ></span>
            <span class="text-red-500"><i class="fab fa-youtube"></i></span>
            <span class="text-gray-700"><i class="fab fa-github"></i></span>
            <span class="text-blue-800"><i class="fab fa-linkedin"></i></span>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-1  justify-between  ">
            <div>
              <h1 class="text-blue-500 font-semibold text-xl  md: text-center">
                Install Mobile Banking App
              </h1>
              <div class="flex justify-between items-center m-5">
                <img
                  alt=""
                  :src="require('./../assets/Images/google-play.png')"
                  height="50"
                  width="150"
                  class="mr-5"
                />
                <img
                  alt=""
                  :src="require('./../assets/Images/apple-store.png')"
                  height="50"
                  width="150"
                />

                <p
                  class="text-xs  text-gray-500 text-center font-bold w-full"
                >
                  Copyright 2021 Internet Banking project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    </div>
  </div>
</template>
<script>
import Service from "../Services/Service.js.js";
import HomePageNavbar from "./../components/HomePageNavbar.vue";
export default {
  components: { HomePageNavbar },
  data() {
    return {
      loginData: {
        userId: "",
        pass: "",
      },
      styleObject: {
        backgroundColor: "#c0c0c0",

        height: "3rem",
      },
      data: [],
    };
  },
  methods: {
    HandleLogin: function() {
      let tempMessage = "";
      Service.login(this.loginData).then((res) => {
        console.log(res.data);
        localStorage.setItem("Token", res.data.token);
        tempMessage = res.data.message;

        // tempAccountNo = res.data.accountNo;
        if (tempMessage === "Invalid userid or Password !!!!!!!!!!!") {
          alert("Invalid userid or Password !!!!!!!!!!!");
        } else {
          this.$store.commit("setAccountNo", res.data.accountNo);
          alert("You Successfully Login To the system");
          this.$router.push({
            path: `home/${res.data.accountNo}`,
            params: {
              items: "Anuj",
            },
          });
        }
      });
    },
  },
  created() {
    console.log(this.$store.state.accountNo);
  },
};
</script>
