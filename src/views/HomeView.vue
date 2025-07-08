<template>
  <div class="">
    <!-- 🧭 Hero 區塊 -->
    <div class="relative h-60 md:h-72 lg:h-80 overflow-hidden">
      <!-- 背景圖 -->
      <img
        src="https://dimg04.c-ctrip.com/images/10020y000000m5j4vCC02_C_1000_500.jpg_.webp?proc=namelogo/d_5"
        alt="Hong Kong Trip"
        class="absolute w-full h-full object-cover"
      />

      <!-- 遮罩（漸層） -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 z-10"
      ></div>

      <!-- Logo & Title -->
      <div
        class="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-10 text-white"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1024px-Flag_of_Hong_Kong.svg.png"
          alt="Trip Logo"
          class="w-16 md:w-20 mb-2 drop-shadow-lg"
        />
        <h1 class="text-2xl md:text-3xl font-bold drop-shadow">Hong Kong 4-Day Trip</h1>
        <p class="text-sm md:text-base opacity-90">2025.07.17 ~ 2025.07.20</p>
        <p class="text-sm md:text-base opacity-90">內容: 小劉 | 網站: 小蘇</p>
      </div>
    </div>

    <Tabs value="0">
      <TabList>
        <Tab value="0">Day 1</Tab>
        <Tab value="1">Day 2</Tab>
        <Tab value="2">Day 3</Tab>
        <Tab value="3">Day 4</Tab>
        <!-- <Tab value="4">海洋公園設施</Tab> -->
      </TabList>
      <TabPanels class="bg-[transparent]">
        <TabPanel value="0">
          <div class="flex flex-col justify-start">
            <TimeLine title="中環 / 上環 / 尖沙咀" :event="day1_events" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col justify-start">
            <TimeLine title="海洋公園 / 灣仔" :event="day2_events" />
            <div class="flex flex-col items-center">
              <p>海洋公園設施 (長按圖片下載)</p>
              <div class="flex gap-5">
                <Image :src="image_1" alt="Image" width="150" />
                <Image :src="image_2" alt="Image" width="150" />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col justify-start">
            <TimeLine title="赤柱 / 旺角" :event="day3_events" />
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div class="flex flex-col justify-start">
            <TimeLine title="尖沙咀" :event="day4_events" />
          </div>
        </TabPanel>
        <!-- <TabPanel value="4">
          <div class="flex justify-start">
            <Image :src="imageUrl" alt="Image" width="250" preview />
          </div>
        </TabPanel> -->
      </TabPanels>
    </Tabs>
    <ScrollTop />
  </div>
</template>

<script setup>
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Image from "primevue/image";

import day1_events from "@/assets/day1_events.json";
import day2_events from "@/assets/day2_events.json";
import day3_events from "@/assets/day3_events.json";
import day4_events from "@/assets/day4_events.json";
import image_1 from "@/assets/day2_1.png";
import image_2 from "@/assets/day2_2.png";

import TimeLine from "@/components/TimeLine.vue";
</script>
