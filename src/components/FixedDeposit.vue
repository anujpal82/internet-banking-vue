<template>
  <div class="mt-7">
    <h1 class="text-center text-2xl text-green-700 font-semibold">
      Apply For Fixed Deposit
    </h1>
    <form action="" class="w-1/2 mx-auto mt-8 ">
      <div>
        <small class=" text-green-600 mb-1  ">
          Account Number
        </small>

        <input
          :disabled="true"
          type="text"
          placeholder="Account Number"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2  placeholder-gray-400  "
          :value="customerData.accountNo"
        />
      </div>
      <div class="mt-3">
        <small class=" text-green-600 mb-1  ">
          CRN
        </small>
        <input
          :disabled="true"
          type="text"
          placeholder="Enter CRN"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2  placeholder-gray-400  "
          :value="customerData.CRN"
        />
      </div>
      <div>
        <small class=" text-green-600 mb-1  ">
          Amount
        </small>
        <input
          type="text"
          placeholder="Amount"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2   placeholder-gray-400  "
          v-model="amount"
        />
      </div>
      <div class="mt-2 grid grid-cols-2 gap-6 mb-3 ">
        <div class="mt-3">
          <select
            name=""
            id=""
            class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2  placeholder-gray-400  "
            v-model="duration"
          >
            <option value="">Select Duration</option>
            <option value="1">1 year</option>
            <option value="3">3 year</option>
            <option value="5">5 year</option>
            <option value="10">10 year</option>
          </select>
        </div>
        <div>
          <button
            class="bg-green-400 w-full mt-4 rounded h-9 text-white font semibold"
            @click.prevent="Calculate"
          >
            Calculate
          </button>
        </div>
      </div>
      <div id="recaptcha-container"></div>
      <div class="mt-5">
        <button
          class="w-full bg-blue-400 text-white font-semibold h-9 hover:bg-blue-600"
          @click.prevent="Apply"
        >
          Apply
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import FireBase from "./../firebase";
import Services from "./../Services/Service.js";
export default {
  created() {
    Services.getCustomer(this.$store.state.accountNo).then((res) => {
      this.customerData = res.data[0];
    });
  },
  data() {
    return {
      customerData: {},
      amount: "",
      duration: "",
    };
  },
  computed: {
    fullname: function() {
      return `${this.customerData.fname} ${this.customerData.mname} ${this.customerData.lname}`;
    },
  },
  methods: {
    async Calculate() {
      let intrest = 6;
      let money = parseInt(this.amount);
      let key = parseInt(this.duration);
      console.log(this.amount);

      switch (key) {
        case 1:
          for (let index = 0; index < 1; index++) {
            money += parseInt((money * intrest) / 100);
          }
          alert(` After ${this.duration} Years You Will be Get ${money} Rs`);
          break;
        case 3:
          for (let index = 0; index < 3; index++) {
            money += parseInt((money * intrest) / 100);
          }
          alert(` After ${this.duration} years You Will be Get ${money} Rs`);
          break;
        case 5:
          for (let index = 0; index < 5; index++) {
            money += parseInt((money * intrest) / 100);
          }
          alert(` After ${this.duration} years You Will be Get ${money} Rs`);
          break;
        case 10:
          for (let index = 0; index < 10; index++) {
            money += parseInt((money * intrest) / 100);
          }
          alert(` After ${this.duration} years  You Will be Get ${money} Rs`);
          break;

        default:
          alert("No case matched");
          break;
      }
    },
   async Apply(){
        let recaptcha = new FireBase.auth.RecaptchaVerifier("recaptcha-container");
    let number = "+918128501852";
    await FireBase.auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((res) => {
        let code = prompt("enter otp", "");
        if (code == null) return;
        res
          .confirm(code)
          .then(() => {
            Services.FDNEFT({
              debitAccountNo: this.$store.state.accountNo,
              creditAccountNo: 110,
              amount: parseInt(this.amount),
            }).then((res) => {
              alert("Successfuly applied for fixed-deposit");
              console.log(res.data);
              (this.amount = ""), (this.duration = "");
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

};
</script>
