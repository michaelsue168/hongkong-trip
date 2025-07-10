<template>
  <div
    v-for="(link, index) in usefulLinks"
    :key="index"
    class="flex items-center border-l-4 border-gray-300 bg-white rounded-lg shadow-sm mb-4 p-4 cursor-pointer hover:bg-gray-50 transition-all"
    @click="openLink(link.url)"
  >
    <div class="text-2xl md:text-3xl font-bold text-gray-400 w-10 mr-4">
      {{ (index + 1).toString().padStart(2, "0") }}
    </div>
    <div class="flex-1">
      <p class="text-base md:text-lg font-semibold text-gray-800">
        {{ link.title }}
      </p>
      <p class="text-sm text-gray-500 hidden sm:block">{{ link.desc }}</p>
    </div>
    <i class="pi pi-external-link text-gray-400 text-xl ml-2"></i>
  </div>
</template>
<script setup>
const usefulLinks = [
  {
    title: "行程 Google Map",
    desc: "整合所有景點位置，快速導航",
    url: "https://maps.app.goo.gl/KRcATBTaRwCqBbAY6",
  },
  {
    title: "行程設計 Canva (v1)",
    desc: "小劉製作の行程表)",
    url: "https://reurl.cc/Om17e7",
  },
  {
    title: "行程設計 Canva (v2海)",
    desc: "小劉製作の行程表",
    url: "https://reurl.cc/axr077",
  },
  {
    title: "港鐵路綫圖",
    desc: "香港地鐵路線圖",
    url: "https://www.mtr.com.hk/ch/customer/services/system_map.html",
  },
];

const openLink = (url) => {
  window.open(url, "_blank");
};
</script>
