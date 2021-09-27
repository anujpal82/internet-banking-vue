<template>
  <div>
    <div class=" mt-7">
      <h1 class="text-green-800 font-semibold text-center text-2xl">
        Beneficiary
      </h1>
      <div
        class="text-green-500 font-semibold text-xl block text-center mt-10"
        v-if="beneficiary.length <= 0"
      >
        No Beneficiary Added Till Now !!!!!!!!!!!!!!!!
      </div>
      <div v-else class="">
        <table
          class=" mx-auto mt-7 w-4/6 m-5 bg-gray-100 
        "
        >
          <thead class="text-center text-gray-700 font-semibold mb-10 h-14  ">
            <td class="w-1/6 ">Account Number</td>
            <td class="w-2/6 ">Name</td>
            <td class=" w-1/6">IFSC</td>

            <td class="w-2/6">Action</td>
          </thead>
          <tbody
            :key="ben._id"
            class="text-center text-gray-700 mt-10  m-5"
            v-for="ben in beneficiary"
          >
            <tr class="border-t gap-6 h-12">
              <td>{{ ben.accountNo }}</td>
              <td>{{ ben.fname }} {{ ben.mname }} {{ ben.lname }}</td>
              <td>{{ ben.IFSC }}</td>
              <td>
                <div class="grid grid-cols-2 text-center">
                  <!-- <button class="w-full text-center">
                    <i
                      class="fas fa-exchange-alt text-3xl text-green-500 font-bold"
                    ></i></button -->
                  <TransferMoneyModal class="" />
                  <button
                    class="w-full text-center"
                    @click="deleteBeneficiary(ben._id)"
                  >
                    <i class="fas fa-times text-3xl text-red-500 font-bold"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class=" w-4/12  mx-auto  mt-5"></div>
    </div>
    <div class="mt-5"><Modal @clicked="addBenificiary" /></div>
  </div>
</template>
<script>
import Modal from "./Modal.vue";
import TransferMoneyModal from "./TransferMoneyModel.vue";
import Service from "./../Services/Service.js";

export default {
  components: { Modal, TransferMoneyModal },
  data() {
    return {
      beneficiary: [],
      accountNoListBen: [],
      accountNoList: [],
    };
  },
  created() {
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
    console.log(this.customerData);
    // Service.getCustomerByCRN({ CRN: this.customerData.CRN }).then((res) => {
    //   this.accountNoList = res.data.map((item) => {
    //     return item.accountNo;
    //   });
    // });
  },
  methods: {
    addBenificiary(value) {
      console.log(value);
      this.beneficiary.push(value);
    },

    deleteBeneficiary(id) {
      alert("Are You Sure To Delete Beneficiary");
      Service.deleteBenificiary({ _id: id })
        .then((res) => {
          console.log(res.data);

          const arr = this.beneficiary.filter((item) => {
            return item._id != id;
          });
          this.beneficiary = arr;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
