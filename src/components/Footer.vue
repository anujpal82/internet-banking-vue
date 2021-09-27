<template>
  <div class="mt-32 bg-gray-100">
    <div
      class="mx-10 grid grid-cols-1 md:grid-cols-3 xs:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6"
    >
      <div class=" mx-3 sm:mx-10 mt-5">
        <h5 class="text-xl text-green-900 font-bold">Home</h5>
        <ul
          class="mt-5 font-semibold text-gray-600
          "
        >
          <li>Forex And Rates</li>
          <li>Careers</li>
          <li>Intrest Rates</li>
          <li>Download Forms</li>
          <li>Corporate Social</li>
          <li>Resposibility</li>
          <li>Sustainability and Business</li>
          <li>Responsibility Policy</li>
          <li>Bank Calender</li>
        </ul>
      </div>
      <div class=" mx-3 mt-5 sm:mx-10">
        <h5 class="text-xl text-green-900 font-bold">NRI</h5>
        <ul
          class="mt-5 font-semibold text-gray-600
          "
        >
          <li className="mt-3">Accounts</li>
          <li>Investments</li>
          <li>Loans</li>
          <li>Download Forms</li>
          <li>Corporate Social</li>
          <li>Informations</li>
        </ul>
      </div>
      <div class="mt-5 mx-3 sm:mx-10">
        <h5 class="text-xl text-green-900 font-bold">Personal</h5>
        <ul
          class="mt-5 font-semibold text-gray-600
          "
        >
          <li className="mt-3">Accounts</li>
          <li className="mt-3">Saving Accounts</li>
          <li>Investments And Deposits</li>
          <li>Loans</li>
          <li>Cards</li>
          <li>Digital</li>
          <li>Informations And Services</li>
        </ul>
      </div>
      <div class="mt-5 mx-3 sm:mx-10">
        <h5 class="text-xl text-green-900 font-bold">CAG And MCG</h5>
        <ul
          class="mt-5 font-semibold text-gray-600
          "
        >
          <li className="mt-3">Current Account</li>
          <li>SME Deposits</li>
          <li>SME Loans</li>
          <li>Information</li>
        </ul>
      </div>
      <div class="mt-5 mx-3  sm:mx-10">
        <h5 class="text-xl text-green-900 font-bold">
          International Bankings
        </h5>
        <ul
          class="mt-5 font-semibold text-gray-600
          "
        >
          <li className="mt-3">Banking</li>
          <li>Credit Finance</li>
          <li>Services</li>
        </ul>
      </div>
      <div class="mt-5 mx-3  sm:mx-10">
        <h5 class="text-xl text-green-900 font-bold">Wealth Management</h5>
        <ul
          class="mt-5 font-semibold text-gray-600
          "
        >
          <li className="mt-3">Current Account</li>
          <li className="mt-3">SBI Wealth</li>
          <li>Products</li>
        </ul>
      </div>
    </div>
    <!-- <article className="container mb-5  ">
      <div className="row ">
        <div className="col">
          <small className="ml-3">Last Updated On :</small>
          <small className="ml-2 ">{lastUpdateddate}</small>
          <small className="ml-3 ">|</small>
          <small className="ml-3 ">Visitors : 27591024</small>
        </div>

        <div className="col">
          <small className="float-right mr-3">
            Copyright <AiOutlineCopyright /> {todayDate.getFullYear()}{" "}
            Internet Banking project.All Rights Reserved{" "}
          </small>
        </div>
      </div>
    </article> -->
    <article class="mt-10 mx-10 mb-5">
      <div class="flex justify-between items-center">
        <div class="text-blue-500 font-semibold">
          <small class="ml-3">Last Updated On :</small>
          <small class="ml-2 ">{{ lastUpdatedOn }}</small>
          <small class="ml-3 ">|</small>
          <small class="ml-3 ">Visitors : 27591024</small>
        </div>
        <div class="text-blue-500 font-semibold">
          <small
            >Copyright <i class="far fa-copyright ml-1"> </i> <span>2021</span>
            <span> Internet Banking project.All Rights Reserved</span></small
          >
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  computed: {
    lastUpdatedOn: function() {
      var todayDate = new Date();
      return `${todayDate.getDate()}/${todayDate.getMonth() +
        1}/${todayDate.getFullYear()}`;
    },
  },
};
</script>
