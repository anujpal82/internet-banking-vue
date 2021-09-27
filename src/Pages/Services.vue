<template>
  <div class="mt-20">
    <div class="grid grid-cols-1  sm:gap-0 sm:grid-cols-3 cursor-pointer ">
      <div class="text-gray-600 font-semibold text-2xl   text-center mt-5 ">
        Mr {{ customerData.fname }} {{ customerData.mname }}
        {{ customerData.lname }}
      </div>
      <div
        class="text-gray-600 font-semibold flex items-center text-3xl text-center mx-auto "
      >
        <i class="fas fa-wallet mx-2 "></i
        ><span>{{ customerData.balance }}</span>
        <i class="fas fa-rupee-sign mx-2 mt-2"></i>
      </div>
      <div class=" text-center text-gray-600 font-semibold sm:mt-3">
        <div class="">
          <i class="fas fa-sign-out-alt text-4xl "></i> <br /><span
            class="text-xl"
            >Log Out</span
          >
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="mt-20"><Slider /></div>
    <div class="mt-20"><Footer /></div>
  </div>
</template>
<script>
import Service from "./../Services/Service.js";
import FireBase from "./../firebase";
import { required, minValue, numeric } from "vuelidate/lib/validators";
import Slider from "./../components/Corousel.vue";
import Footer from "./../components/Footer.vue";
export default {
  components: { Slider, Footer },
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

