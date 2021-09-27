<template>
  <div class="mt-10">
    <h1 class="text-2xl text-green-700 font-semibold text-center">
      Loan Status
    </h1>
    <form action="" class="w-1/2 mx-auto ">
      <input
        :disabled="true"
        v-model="data.CRN"
        type="text"
        placeholder="Enter CRN"
        class=" border border-gray-300  h-10 w-full focus:outline-none focus:ring-1 p-4 mt-8 "
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
      <div class="  mt-5">
        <button
          class=" w-full h-9 text-white font-semibold  bg-blue-400 rounded hover:bg-blue-600"
          @click.prevent="Find()"
        >
          Find
        </button>
      </div>
    </form>
    <div v-if="this.show">
      <table class="mt-14 border w-5/6 mx-auto">
        <thead class="font-semibold text-green-700 text-center">
          <td>Loan No</td>
          <td>CRN</td>
          <td>Account No</td>
          <td>Amount</td>
          <td>Duration</td>
          <td>Month Remaining</td>
          <td>EMI</td>
        </thead>
        <tr
          :key="loan.loanNo"
          v-for="loan in loanData"
          class="text-center text-green-700 m-2 border-t
      "
        >
          <td>{{ loan.loanNo }}</td>
          <td>{{ loan.CRN }}</td>
          <td>{{ loan.creditAccountNo }}</td>
          <td>{{ loan.amount }}</td>
          <td>{{ loan.duration }}</td>
          <td>{{ loan.monthRemaining }}</td>
          <td>{{ loan.EMI }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { required, numeric } from "vuelidate/lib/validators";
import Service from "./../Services/Service.js";
export default {
  data() {
    return {
      data: {
        CRN: "",
      },
      submitted: false,
      loanData: [],
      customerData: {},
      show: false,
    };
  },
  created() {
    Service.getCustomer(101).then((res) => {
      this.customerData = res.data[0];
      this.data.CRN = this.customerData.CRN;
      Service.GetLoans({ CRN: this.data.CRN }).then((res) => {
        this.loanData = res.data;
        console.log(this.loanData);
      });
    });
  },
  validations: {
    data: {
      CRN: { required, numeric },
    },
  },
  methods: {
    Find() {
      this.show = !this.show;
    },
  },
};
</script>
