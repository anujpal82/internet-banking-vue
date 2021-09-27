<template>
    <div class="mt-10">
    
    <div>
      <div class="mt-10 text-red-500 mt-3 font-bold">
        <marquee scrollamount="10" className=" ">
          Presently our bank's interest for personal loan is 16%
        </marquee>
      </div>
      <h1 class="text-center text-green-600 font semibold text-2xl mt-3">
        Instant Loan
      </h1>
      <form action="" class="w-1/3 mx-auto">
        <input
          v-model="data.CRN"
          type="text"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-8 "
          placeholder="Enter Customer Relationship Number"
        />
        <span
          v-if="submitted && $v.data.CRN.required == false"
          class="block text-xs text-red-500 text-left ml-3"
        >
          CRN is required
        </span>
        <span
          v-if="$v.data.CRN.numeric == false"
          class="block text-xs text-red-500 text-left ml-3"
        >
          CRN should be numeric
        </span>
        <select
          v-model="data.accountNo"
          type="text"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 px-3  mt-8 text-gray-500 "
        >
          <option value="">please select account number</option>
          <option
            :key="account"
            v-for="account in accountNumberList"
            :value="account"
            >{{ account }}</option
          >
        </select>
        <span
          v-if="submitted && $v.data.accountNo.required == false"
          class="block text-xs text-red-500 text-left ml-3"
        >
          Account Number is required
        </span>
        <input
          v-model="data.amount"
          type="text"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-8 "
          placeholder="Enter Amount"
        />
        <span
          v-if="submitted && $v.data.amount.required == false"
          class="block text-xs text-red-500 text-left ml-3"
        >
          Amount is required
        </span>
        <span
          v-if="$v.data.amount.numeric == false"
          class="block text-xs text-red-500 text-left ml-3"
        >
          Amount should be numeric
        </span>
        <span
          v-if="$v.data.amount.minValue == false"
          class="block text-xs text-red-500 text-left ml-3"
        >
          Loan should be greater than 10000
        </span>
        <div class="grid grid-cols-2 gap-6 mb-5">
          <div>
            <select
              v-model="data.duration"
              type="text"
              class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 px-3  mt-5 text-gray-500 "
            >
              <option value=""> select duration for loan</option>
              <option :value="1">1 year </option>
              <option :value="2">2 year </option>
              <option :value="5">5 year </option>
              <option :value="10">10 year </option>
            </select>
            <span
              v-if="submitted && $v.data.duration.required == false"
              class="block text-xs text-red-500 text-left ml-3"
            >
              Duration is required
            </span>
          </div>
          <div class="  w-full  mx-auto">
            <button
              class="mt-5 w-full  bg-green-400  mx-auto h-10 rounded text-white font-semibold hover:bg-green-600 hover:font-bold"
              @click.prevent="calculateEMI"
            >
              Calculate EMI
            </button>
          </div>
        </div>
        <div id="recaptcha-container"></div>
        <div class="mt-7">
          <button
            class="w-full bg-blue-400 h-9 rounded text-white font-semibold hover:bg-blue-600 hover:font-bold  "
            @click.prevent="Apply"
          >
            Apply For Loan
          </button>
        </div>
      </form>
    </div>
    </div>
</template>
<script>
import Service from "./../Services/Service.js";
import FireBase from "./../firebase";
import { required, minValue, numeric } from "vuelidate/lib/validators";

export default {

  data() {
    return {
      data: {
        CRN: "",
        accountNo: "",
        amount: "",
        duration: "",
        loanAmount: "",
        EMI: "",
        monthRemaining: "",
      },
      accountNumberList: [],
      customerData: {},
      submitted: false,
    };
  },
  created() {
    Service.getCustomer(101).then((res) => {
      this.customerData = res.data[0];
      Service.getCustomerByCRN({ CRN: this.customerData.CRN }).then((res) => {
        this.accountNumberList = res.data.map((item) => {
          return item.accountNo;
        });
      });
    });
  },
  validations: {
    data: {
      accountNo: { required },
      CRN: { required, numeric },
      creditAccountNo: { required },
      amount: { required, numeric, minValue: minValue(10000) },
      duration: { required },
    },
  },
  methods: {
    calculateEMI() {
      this.submitted = true;
      // let option = Loan.duration;
      // let amount = parseInt(this.);
      let intrest = 16;
      switch (this.data.duration) {
        case 1:
          for (let index = 0; index < 1; index++) {
            this.data.loanAmount = this.data.amount;
            this.data.loanAmount =
              parseInt(this.data.loanAmount) +
              parseInt((this.data.loanAmount * intrest) / 100);
          }
          this.monthRemaining = 12;
          this.data.EMI = parseInt(this.data.loanAmount / 12);
          alert(`EMI For 1 Year Is :  ` + this.data.EMI);
          break;
        case 2:
          for (let index = 0; index < 2; index++) {
            this.data.loanAmount = this.data.amount;
            this.data.loanAmount =
              parseInt(this.data.loanAmount) +
              parseInt((this.data.loanAmount * intrest) / 100);
          }
          this.monthRemaining = 24;
          this.data.EMI = parseInt(this.data.loanAmount / 24);
          alert(`EMI For 2 Year Is :  ` + this.data.EMI);
          break;
        case 5:
          for (let index = 0; index < 5; index++) {
            this.data.loanAmount = this.data.amount;
            this.data.loanAmount =
              parseInt(this.data.loanAmount) +
              parseInt((this.data.loanAmount * intrest) / 100);
          }
          this.monthRemaining = 60;
          this.data.EMI = parseInt(this.data.loanAmount / 60);
          alert(`EMI For 5 Year Is :  ` + this.data.EMI);
          break;
        case 10:
          for (let index = 0; index < 10; index++) {
            this.data.loanAmount = this.data.amount;
            this.data.loanAmount =
              parseInt(this.data.loanAmount) +
              parseInt((this.data.loanAmount * intrest) / 100);
          }
          this.monthRemaining = 120;
          this.data.EMI = parseInt(this.data.loanAmount / 120);
          alert(`EMI For 10 Year Is :  ` + this.data.EMI);
          break;

        default:
          break;
      }
    },
    async Apply() {
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
            let code = prompt("enter otp", "");
            if (code == null) return;
            res
              .confirm(code)
              .then(() => {
                Service.loanApprove({
                  CRN: this.data.CRN,
                  accountNo: this.data.accountNo,
                  duration: this.data.duration,
                  amount: this.data.amount,
                  EMI: this.data.EMI,
                  monthRemaining: this.data.monthRemaining,
                }).then((res) => {
                  console.log(res.data);
                });
                Service.loanNEFT({
                  accountNo: this.data.accountNo,
                  amount: this.data.amount,
                }).then((res) => {
                  console.log(res.data);
                  alert("Your loan is passed");
                  (this.data.CRN = ""),
                    (this.data.accountNo = ""),
                    (this.data.amount = ""),
                    (this.data.duration = "");
                });
              })
              .catch((err) => {
                alert(err.message);
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