<template>
  <div class="">
    <div class="mt-14">
      <h1 class="text-center text-green-800 font-semibold text-2xl">
        NEFT
      </h1>
      <form action="" class=" w-3/4 md:w-5/6 lg:w-4/6 2xl:w-1/2  mx-auto ">
        <select
          v-model="data.debitAccountNo"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2  mt-8 placeholder-gray-700 font-semibold"
        >
          <option value="" selected>Select Debit Account</option>
          <option
            :value="accountNo"
            :key="accountNo"
            v-for="accountNo in accountNumberList"
            >{{ accountNo }}</option
          ></select
        >
        <span
          v-if="submitted && $v.data.debitAccountNo.required == false"
          class="block text-xs text-red-500 text-left ml-3"
        >
          Debit Account Number is required
        </span>

        <select
          v-model="data.creditAccountNo"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2  mt-5 placeholder-gray-700 font-semibold"
        >
          <option value="" selected>Select Credit Account</option>
          <option
            :value="accountNo"
            :key="accountNo"
            v-for="accountNo in accountNumberList"
            >{{ accountNo }}</option
          >
        </select>
        <span
          v-if="submitted && $v.data.creditAccountNo.required == false"
          class="block text-xs text-red-500 text-left ml-3"
        >
          Credit Account Number is required
        </span>
        <div class="mb-5">
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
            v-if="$v.data.amount.minValue == false"
            class="block text-xs text-red-500 text-left ml-3"
          >
            Amount should be greater than 100.
          </span>
          <span
            v-if="data.amount >= customerData.balance"
            class="block text-xs text-red-500 text-left ml-3"
          >
            Insufficient Amount In Your Account
          </span>
        </div>
        <div id="recaptcha-container"></div>
        <button
          @click.prevent="TransferMoney"
          class="bg-blue-400 border border-blue-400 w-full mt-7 rounded p-2 text-white font-semibold hover:bg-transparent hover:text-blue-400 "
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import Service from "./../Services/Service.js";
import { required, minValue, numeric } from "vuelidate/lib/validators";
import FireBase from "./../firebase";
export default {
  data() {
    return {
      accountNumberList: [],
      data: {
        creditAccountNo: "",
        debitAccountNo: "",
        amount: "",
      },
      submitted: false,
      customerData: {},
    };
  },
  validations: {
    data: {
      debitAccountNo: { required },
      creditAccountNo: { required },
      amount: { required, numeric, minValue: minValue(100) },
    },
  },
  created() {
    Service.getCustomer(101).then((res) => {
      this.customerData = res.data[0];
    });
    Service.getCustomerByCRN({ CRN: this.customerData.CRN }).then((res) => {
      this.accountNumberList = res.data.map((item) => {
        return item.accountNo;
      });
    });
  },
  methods: {
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
};
</script>
