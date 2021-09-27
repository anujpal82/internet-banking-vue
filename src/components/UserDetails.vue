<template>
  <div class="grid grid-cols-1  sm:gap-0 sm:grid-cols-3 cursor-pointer ">
    <div class="text-gray-600 font-semibold text-2xl   text-center mt-5 ">
      Mr {{ customerData.fname }} {{ customerData.mname }}
      {{ customerData.lname }}
    </div>
    <div
      class="text-gray-600 font-semibold flex items-center text-3xl text-center mx-auto "
    >
      <i class="fas fa-wallet mx-2 "></i><span>{{ customerData.balance }}</span>
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
</template>
