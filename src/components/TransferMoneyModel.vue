<template>
  <div
    class=" mx-auto text-center  
  "
  >
    <!-- <button
      class="bg-gray-500  border text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      v-on:click="toggleModal()"
    >
      Add Beneficiary
    </button> -->
    <button class="w-full text-center" v-on:click="toggleModal()">
      <i class="fas fa-exchange-alt text-3xl text-green-500 font-bold"></i>
    </button>
    <div
      v-if="showModal"
      class="overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex border"
    >
      <div class="relative w-2/6 my-6 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div class="  p-5 border-b -solid border-blueGray-200 rounded-t">
            <h3
              class="text-3xl block font-semibold text-green-700 text-center "
            >
              Transfer Money
            </h3>
          </div>
          <!--body-->
          <div class="relative px-16 py-5 flex-auto">
            <form action="">
              <select
                name=""
                id=""
                class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2  mt-5 "
                v-model="data.debitAccountNo"
              >
                <option value="">Please Select Debit Account Number</option>
                <option
                  :value="accountNo"
                  :key="accountNo"
                  v-for="accountNo in accountNoList"
                  >{{ accountNo }}</option
                >
              </select>
              <span
                v-if="submitted && $v.data.debitAccountNo.required == false"
                class="block text-xs text-red-500 text-left ml-3"
              >
                Debit Account number Required
              </span>
              <select
                name=""
                id=""
                class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2 mt-5 "
                v-model="data.creditAccountNo"
              >
                <option value="">Please Select Credit Account Number</option>
                <option
                  :key="accountNo"
                  :value="accountNo"
                  v-for="accountNo in accountNoListBen"
                  >{{ accountNo }}</option
                >
              </select>
              <span
                v-if="submitted && $v.data.creditAccountNo.required == false"
                class="block text-xs text-red-500 text-left ml-3"
              >
                Credit Account number Required
              </span>
              <div class="mb-7">
                <input
                  name=""
                  id=""
                  class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1  mt-5 p-4  "
                  placeholder="Enter Amount"
                  v-model="data.amount"
                />
                <span
                  v-if="submitted && $v.data.amount.required == false"
                  class="block text-xs text-red-500 text-left ml-3"
                >
                  Amount is required
                </span>
                <span
                  v-if="submitted && $v.data.amount.numeric == false"
                  class="block text-xs text-red-500 text-left ml-3"
                >
                  Amount should be numeric
                </span>
                <span
                  v-if="submitted && $v.data.amount.minValue == false"
                  class="block text-xs text-red-500 text-left ml-3"
                >
                  Amount should be greater than 100.
                </span>
              </div>

              <div id="recaptcha-container"></div>
            </form>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-between px-16 py-4 border-t border-solid border-blueGray-200 rounded-b"
          >
            <button
              class=" bg-transparent border border-solid bg-red-500 text-white border-red-500 hover:bg-transparent  hover:text-red-500 active:bg-red-600 font-bold uppercase text-sm px-14 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Close
            </button>
            <button
              class=" bg-transparent border border-solid bg-blue-500 text-white border-blue-500 hover:bg-transparent  hover:text-blue-500 active:bg-red-600 font-bold uppercase text-sm px-14 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click.prevent="TransferMoney()"
            >
              Pay
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
import FireBase from "./../firebase";
import { required, minValue, numeric } from "vuelidate/lib/validators";
export default {
  name: "regular-modal",
  data() {
    return {
      showModal: false,
      data: {
        debitAccountNo: "",
        creditAccountNo: "",
        amount: "",
      },
      submitted: false,
      customerData: {},
      beneficiary: [],
      accountNoList: [],
      accountNoListBen: [],
    };
  },
  validations: {
    data: {
      debitAccountNo: { required },
      creditAccountNo: { required },
      amount: { required, numeric, minValue: minValue(100) },
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
            this.$emit("clicked", res.data);
            this.showModal = !this.showModal;
            alert("Benificiary Successfully Added");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    TransferMoney() {
      this.submitted = true;
      if (this.$v.$invalid) return;
      else {
        let recaptcha = new FireBase.auth.RecaptchaVerifier(
          "recaptcha-container"
        );
        let number = "+918128501852";
        FireBase.auth()
          .signInWithPhoneNumber(number, recaptcha)
          .then((res) => {
            let code = prompt("enter otp", "");
            if (code == null) return;
            res
              .confirm(code)
              .then(() => {
                Service.NEFT(this.data)
                  .then((res1) => {
                    console.log(res1.data);
                    (this.data.creditAccountNo = ""),
                      (this.debitAccountNo = ""),
                      (this.data.amount = "");
                    alert("succesfully fund transferred !!!!!!!!!");
                    this.toggleModal();
                  })
                  .catch((err) => {
                    console.log(err);
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
  mounted() {
    console.log(this.customerData.CRN);
    Service.getCustomerByCRN({ CRN: this.customerData.CRN }).then((res) => {
      console.log(res);
      this.accountNoList = res.data.map((item) => {
        console.log(item);
        return item.accountNo;
      });
    });
  },
  created() {
    console.log(this.customerData);
    Service.getCustomerByAccountNumber({
      accountNo: this.$store.state.accountNo,
    }).then((res) => {
      // console.log(res.data[0].CRN);
      this.customerData = res.data[0];
      Service.getCustomerByCRN({ CRN: res.data[0].CRN }).then((res) => {
        console.log(res);
        this.accountNoList = res.data.map((item) => {
          console.log(item);
          return item.accountNo;
        });
      });
    });
    Service.getBenificiary()
      .then((res) => {
        this.beneficiary = res.data;
        const list = this.beneficiary.map((item) => {
          return item.accountNo;
        });
        this.accountNoListBen = list;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Hello", this.customerData);
    console.log(this.customerData);
  },
};
</script>
