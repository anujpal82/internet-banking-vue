<template>
  <div>
    <HomePageNavbar />
    <div class="mt-32 mb-5 ">
      <form action="" class=" w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 mx-auto">
        <h1 class="text-green-700 font-semibold text-3xl text-center">
          Register Form
        </h1>
        <div class="mt-10">
          <label class=" font-semibold text-gray-700 text-2xl" for=""
            >Basic Details</label
          >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 ">
            <div>
              <input
                type="text"
                class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
                placeholder="Enter First Name"
                v-model="data.fname"
              />
              <span
                class="text-red-500 text-xs ml-3"
                v-if="submitted && $v.data.fname.required == false"
                >First Name Required</span
              >
            </div>
            <div>
              <input
                type="text"
                class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
                placeholder="Enter Middle Name"
                v-model="data.mname"
              />
              <span
                class="text-red-500 text-xs ml-3"
                v-if="submitted && $v.data.mname.required == false"
                >Middle Name Required</span
              >
            </div>
            <div>
              <input
                type="text"
                class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
                placeholder="Enter Last Name"
                v-model="data.lname"
              />
              <span
                class="text-red-500 text-xs ml-3"
                v-if="submitted && $v.data.lname.required == false"
                >Last Name Required</span
              >
            </div>
          </div>
          <div>
            <input
              type="text"
              class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
              placeholder="Enter Customer Relation Number"
              v-model="data.CRN"
            />
            <span
              class="text-red-500 text-xs ml-3"
              v-if="submitted && $v.data.CRN.required == false"
              >Customer Relationship Number Required</span
            >
            <span
              class="text-red-500 text-xs ml-3"
              v-if="$v.data.CRN.numeric == false"
              >Only Numeric Value Accepted</span
            >
          </div>
          <div>
            <input
              type="text"
              class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
              placeholder="Enter E-mail"
              v-model="data.email"
            />
            <span
              class="text-red-500 text-xs ml-3"
              v-if="submitted && $v.data.email.required == false"
              >Email Required</span
            >
            <span
              class="text-red-500 text-xs ml-3"
              v-if="$v.data.email.email == false"
              >Enter Valid E-mail Format</span
            >
          </div>
          <div>
            <input
              type="text"
              class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
              placeholder="Enter User-ID"
              v-model="data.userId"
            />
            <span
              class="text-red-500 text-xs ml-3"
              v-if="submitted && $v.data.userId.required == false"
              >UserID Required</span
            >
            <span
              class="text-red-500 text-xs ml-3"
              v-if="$v.data.userId.minLength == false"
              >UserId should be 3 character long</span
            >
          </div>

          <input
            type="text"
            class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
            placeholder="Enter Phone Number"
            v-model="data.phoneNo"
          />
          <span
            class="text-red-500 text-xs ml-3"
            v-if="submitted && $v.data.phoneNo.required == false"
            >Phone Number Required</span
          >
          <span
            class="text-red-500 text-xs ml-3"
            v-if="$v.data.phoneNo.numeric == false"
            >Enter Valid Number</span
          >
          <span
            class="text-red-500 text-xs ml-3"
            v-if="
              $v.data.phoneNo.minLength == false ||
                $v.data.phoneNo.maxLength == false
            "
            >Number Can Have Exact 10 Digits</span
          >
        </div>
        <div>
          <!-- <input
          type="textarea"
          class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
          placeholder="Enter Address"
          v-model="data.address"
        /> -->
          <textarea
            class="w-full border border-gray-300 h-13 p-2 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
            v-model="data.address"
            placeholder="Enter Address Here"
          ></textarea>
          <span
            class="text-red-500 text-xs ml-3"
            v-if="submitted && $v.data.address.required == false"
            >Address Required</span
          >

          <input
            type="password"
            class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
            placeholder="Enter Password"
            v-model="data.pass"
          />
          <span
            class="text-red-500 text-xs ml-3"
            v-if="$v.data.pass.minLength == false"
            >Password Should Be Aleast 6 character long</span
          >
          <span
            class="text-red-500 text-xs ml-3"
            v-if="submitted && $v.data.pass.required == false"
            >Password Required</span
          >
        </div>
        <div class="mt-5">
          <label class=" font-semibold text-gray-700 text-2xl" for=""
            >Account Details</label
          >
          <input
            type="text"
            class="w-full border border-gray-300 h-10 p-5 mt-8 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
            placeholder="Enter Account Number"
            v-model="data.accountNo"
          />
          <span
            class="text-red-500 text-xs ml-3"
            v-if="submitted && $v.data.accountNo.required == false"
            >Account Number Required</span
          >
          <span
            class="text-red-500 text-xs ml-3"
            v-if="$v.data.accountNo.numeric == false"
            >Account Number Should Be numeric
          </span>
        </div>
        <div>
          <input
            type="text"
            class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
            placeholder="Enter CIF"
            v-model="data.CIF"
          />
          <span
            class="text-red-500 text-xs ml-3"
            v-if="submitted && $v.data.CIF.required == false"
            >CIF Required</span
          >
          <span
            class="text-red-500 text-xs ml-3"
            v-if="$v.data.CIF.numeric == false"
            >CIF Should Be Numeric</span
          >
        </div>
        <div class="mt-5 mb-7">
          <label class=" font-semibold text-gray-700 text-2xl" for=""
            >Branch Details</label
          >
          <select
            v-model="data.branchCity"
            class="w-full border text-black border-gray-300 h-10  mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
          >
            <option value="">Select Branch City</option>
            <option :key="city" :value="city" v-for="city in cities">
              {{ city }}
            </option>
          </select>
          <span
            class="text-red-500 text-xs ml-3"
            v-if="submitted && $v.data.branchCity.required == false"
            >Branch City Required</span
          >

          <select
            v-model="data.branchName"
            class="w-full border text-black border-gray-300 h-10  mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
          >
            <option value=""> Select BranchName</option>
            <option
              :value="branch"
              :key="branch"
              v-for="branch in branches[data.branchCity]"
              >{{ branch }}</option
            >
          </select>
          <span
            class="text-red-500 text-xs ml-3"
            v-if="submitted && $v.data.branchName.required == false"
            >Branch Name Is Required</span
          >

          <input
            type="text"
            class="w-full border border-gray-300 h-10 p-5 mt-5 rounded ring-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-none"
            placeholder="Enter IFSC Code"
            v-model="data.IFSC"
          />
          <span
            class="text-red-500 text-xs ml-3"
            v-if="submitted && $v.data.IFSC.required == false"
            >IFSC Required</span
          >
        </div>
        <div
          className="mt-5"
          id="recaptcha-container"
          data-size="compact"
        ></div>
        <button
          @click.prevent="handleSubmit"
          class="mt-7 w-full border border-blue-400 bg-blue-400 p-2 text-white font-semibold hover:bg-transparent hover:text-gray-800 hover:border-blue-500 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import Service from "./../Services/Service.js";
import HomePageNavbar from "./../components/HomePageNavbar.vue";
import {
  required,
  email,
  minLength,
  numeric,
  maxLength,
  alphaNum,
} from "vuelidate/lib/validators";
import FireBase from "./../firebase";
export default {
  components: { HomePageNavbar },
  data() {
    return {
      cities: ["Ahmedabad", "Surat", "Vadodara", "Bhavnagar", "Bhuj"],
      branches: {
        pleaseSelect: ["Select Branch Name"],
        Ahmedabad: ["Vatva I.E.", "Maninagar", "Raneep", "Satelite", "Isanpur"],
        Surat: ["Shree Shakti Tower", "Gaurav Path", "Dhumas Road"],
        Vadodara: [
          "Gotri Road",
          "Manjalpur Road",
          "Raopura Branch",
          "Abhilas Chokdi",
        ],
        Bhavnagar: ["HJ Law College", "Waghwadi Road", "Amba Chowk"],
        Bhuj: ["Adi Road", "Air-Force Station Naliya", "Baladiya Kutch"],
      },
      data: {
        fname: "",
        mname: "",
        lname: "",
        email: "",
        phoneNo: "",
        pass: "",
        userId: "",
        accountNo: "",
        CIF: "",
        branchName: "",
        IFSC: "",
        branchCity: "",
        CRN: "",
        address: "",
      },
      submitted: false,
    };
  },
  validations: {
    data: {
      fname: { required },
      mname: { required },
      lname: { required },
      email: { required, email },
      CRN: { required, numeric },
      pass: { required, minLength: minLength(6) },
      phoneNo: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      address: { required },
      accountNo: { required, numeric },
      CIF: { required, numeric },
      IFSC: { required, alphaNum },
      userId: { required, minLength: minLength(3) },
      branchCity: { required },
      branchName: { required },
    },
  },
  methods: {
    async handleSubmit() {
      this.submitted = true;
      if (this.$v.$invalid) return;
      else {
        let recaptcha = new FireBase.auth.RecaptchaVerifier(
          "recaptcha-container"
        );
        let number = "+918128501852";
        await FireBase.auth()
          .signInWithPhoneNumber(number, recaptcha)
          .then((res) => {
            console.log(recaptcha);
            let code = prompt("enter otp", "");
            if (code == null) return;
            res
              .confirm(code)
              .then(() => {
                Service.signUp(this.data).then((res1) => {
                  console.log(res1.data);
                  alert("You Successfully Registered");
                  this.$router.push("/");
                });
              })
              .catch((err) => {
                console.log(err.message);
              });
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    },
  },

  watch: {
    "data.branchCity": function() {
      this.data.branchName = "";
    },
  },
};
</script>
