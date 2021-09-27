<template>
  <div class="mt-7">
    <h1 class="text-center text-2xl text-green-700 font-semibold">
      Apply For Debit Card
    </h1>
    <form action="" class="w-1/2 mx-auto mt-8 ">
      <div>
        <small class=" text-red-600 mb-1  ">
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
        <small class=" text-red-600 mb-1  ">
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
      <div class="mt-3">
        <small class=" text-red-600 mb-1  ">
          This Name Will Be Printed on Debit Card
        </small>
        <input
          :disabled="true"
          type="text"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2   placeholder-gray-400  "
          :value="this.fullname"
        />
      </div>
      <div class="mt-3">
        <small class=" text-red-600 mb-1  ">
          At This Address Debit Card Will Be Deliverd
        </small>
        <textarea
          :disabled="true"
          :value="customerData.address"
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2   placeholder-gray-400  "
          name=""
          id=""
          cols="80"
          rows="30"
        ></textarea>
      </div>

      <div>
        <small class=" text-red-600 mb-1  ">
          Type of Card
        </small>
        <select
          name=""
          id=""
          class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-2 mb-3   placeholder-gray-400  "
          v-model="typeOfCard"
        >
          <option value="">Select Type Of Card</option>
          <option value="Rupaya">Rupaya</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
        </select>
        <div id="recaptcha-container"></div>
      </div>
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
      typeOfCard: "",
    };
  },
  computed: {
    fullname: function() {
      return `${this.customerData.fname} ${this.customerData.mname} ${this.customerData.lname}`;
    },
  },
  methods: {
    async Apply() {
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
              Services.addDebitCardRequest({
                CRN: this.customerData.CRN,
                accountNo: this.customerData.accountNo,
                address: this.customerData.address,
                cardType: this.typeOfCard,
                name: `${this.customerData.fname} ${this.customerData.mname} ${this.customerData.lname}`,
              }).then((res) => {
                console.log(res.data);
                alert(
                  "Debit Card Will be Deliverd to Your Registered Address Sortly"
                );
              });
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>
