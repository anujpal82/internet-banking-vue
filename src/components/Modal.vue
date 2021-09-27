<template>
  <div
    class=" mx-auto text-center mt-10 
  "
  >
    <button
      class="bg-gray-500  border text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      v-on:click="toggleModal()"
    >
      Add Beneficiary
    </button>
    <div
      v-if="showModal"
      class="overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex border"
    >
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div class="  p-5 border-b -solid border-blueGray-200 rounded-t">
            <h3
              class="text-3xl block font-semibold text-green-700 text-center "
            >
              Add Beneficiary
            </h3>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <form action="">
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-5 "
                    placeholder="Enter First Name"
                    v-model="data.fname"
                  />
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="submitted && $v.data.fname.required == false"
                    >First Name Required</span
                  >
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="$v.data.fname.alpha == false"
                    >First Name Should contain only Alphabate</span
                  >
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="$v.data.fname.minLength == false"
                    >Minimum 3 Chracters required</span
                  >
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-5 "
                    v-model="data.mname"
                  />
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="submitted && $v.data.mname.required == false"
                    >Middle Name Required</span
                  >
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="$v.data.mname.minLength == false"
                    >Minimum 3 Chracters required</span
                  >
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="$v.data.mname.alpha == false"
                    >Middle Name Should contain only Alphabate</span
                  >
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-5 "
                    v-model="data.lname"
                  />
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="submitted && $v.data.lname.required == false"
                    >Last Name Required</span
                  >
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="$v.data.lname.minLength == false"
                    >Minimum 3 Chracters required</span
                  >
                  <span
                    class="text-red-500 text-xs  block text-left ml-3  "
                    v-if="$v.data.lname.alpha == false"
                    >Last Name Should contain only Alphabate</span
                  >
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter Customer Relation Number"
                class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-5 "
                v-model="data.CRN"
              />
              <span
                class="text-red-500 text-xs  block text-left ml-3  "
                v-if="submitted && $v.data.CRN.required == false"
                >Customer Relationship Number Required</span
              >
              <span
                class="text-red-500 text-xs  block text-left ml-3  "
                v-if="$v.data.CRN.numeric == false"
                >CRN Should be Numeric</span
              >
              <span
                class="text-red-500 text-xs  block text-left ml-3  "
                v-if="$v.data.CRN.minLength == false"
                >Minimum 3 digits Required</span
              >
              <input
                type="text"
                placeholder="Enter Account Number"
                class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-5 "
                v-model="data.accountNo"
              />
              <span
                class="text-red-500 text-xs  block text-left ml-3  "
                v-if="submitted && $v.data.accountNo.required == false"
                >Account Number required</span
              >
              <span
                class="text-red-500 text-xs  block text-left ml-3  "
                v-if="$v.data.accountNo.numeric == false"
                >Account Number Should be Numeric</span
              >
              <span
                class="text-red-500 text-xs  block text-left ml-3  "
                v-if="$v.data.accountNo.minLength == false"
                >Minimum 3 digits Required</span
              >

              <input
                type="text"
                placeholder="Enter IFSC"
                class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-5 "
                v-model="data.IFSC"
              />
              <span
                class="text-red-500 text-xs block text-left ml-3  "
                v-if="submitted && $v.data.IFSC.required == false"
                >IFSC Code Required</span
              >
              <span
                class="text-red-500 text-xs  block text-left ml-3  "
                v-if="$v.data.IFSC.alphaNum == false"
                >IFSC Number Should be Alpha Numeric</span
              >
              <span
                class="text-red-500 text-xsblock text-left ml-3  "
                v-if="$v.data.IFSC.minLength == false"
                >Minimum 3 digits Required</span
              >
            </form>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b"
          >
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Close
            </button>
            <button
              class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click.prevent="AddBenificiary"
            >
              Add Beneficiary
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import Service from "./../Services/Service.js";
import {
  required,
  minLength,
  numeric,
  alphaNum,
  alpha,
} from "vuelidate/lib/validators";
export default {
  
  name: "regular-modal",
  data() {
    return {
      showModal: false,
      data: {
        fname: "",
        mname: "",
        lname: "",
        accountNo: "",
        CRN: "",
        IFSC: "",
      },
      submitted: false,
    };
  },
  validations: {
    data: {
      fname: { required, minLength: minLength(3), alpha },
      mname: { required, minLength: minLength(3), alpha },
      lname: { required, minLength: minLength(3), alpha },
      accountNo: { required, numeric, minLength: minLength(3) },
      CRN: { required, numeric, minLength: minLength(3) },
      IFSC: { required, alphaNum, minLength: minLength(3) },
    },
  },

  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    },
    AddBenificiary: function() {
      this.submitted = true;
      if (this.$v.$invalid) return;
      // console.log(this.data);
      else {
        Service.AddBenificiary(this.data)
          .then((res) => {
            console.log(res.data);
                        (this.data.fname = ""),
              (this.data.mname = ""),
              (this.data.lname = ""),
              (this.data.CRN = ""),
              (this.data.IFSC = ""),
              (this.data.accountNo = "");
              // this.beneficiary.push(res.data)
              this.$emit('clicked',res.data);
              this.showModal=!this.showModal
            alert("Benificiary Successfully Added");

          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
