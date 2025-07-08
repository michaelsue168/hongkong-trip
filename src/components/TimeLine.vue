<template>
  <div class="py-2 px-4 bg-[transparent]">
    <h1 class="text-2xl font-bold text-yellow-600 mb-4">{{ props.title }}</h1>
    <Timeline :value="props.event">
      <!-- <template #marker="slotProps">
        <span
          :class="[
            'flex w-8 h-8 items-center justify-center rounded-full text-white text-lg shadow-md z-10',
            getMarkerColor(slotProps.item.icon),
          ]"
        >
          {{ slotProps.item.icon }}
        </span>
      </template> -->

      <template #content="slotProps">
        <div
          class="flex flex-col mb-5 p-3 border-gray-300"
          :class="[
            slotProps.item.type != 'step'
              ? 'border-l-4  bg-white rounded-md shadow-sm transition-all'
              : 'border-l-2 border-dashed',
          ]"
        >
          <!-- 時間 -->
          <div
            class="font-bold text-[#ED3500]"
            v-if="slotProps.item.time && slotProps.item.time.trim() !== ''"
          >
            <Tag
              icon="pi pi-clock"
              severity="warn"
              :value="slotProps.item.time"
              class="text-xs"
            ></Tag>
          </div>

          <!-- 標題 -->
          <h2 class="text-lg font-bold mt-1 text-[#212121]">
            {{ slotProps.item.title }}
          </h2>

          <!-- 副標題 -->
          <div v-if="slotProps.item.subtitle" class="text-sm text-[#616161] mt-1">
            {{ slotProps.item.subtitle }}
          </div>

          <!-- 交通說明 -->
          <div v-if="slotProps.item.traffic" class="text-sm mt-2">
            🚇 <span v-html="slotProps.item.traffic"></span>
          </div>

          <!-- 推薦品項 -->
          <div v-if="slotProps.item.recommend" class="text-sm mt-2 text-green-700">
            ✅ 推薦：{{ slotProps.item.recommend }}
          </div>

          <!-- 額外提醒 -->
          <div v-if="slotProps.item.note" class="text-sm mt-2 text-pink-600">
            💡 {{ slotProps.item.note }}
          </div>

          <!-- Google Map 連結按鈕 -->
          <div v-if="slotProps.item.googleMap" class="mt-2">
            <a :href="slotProps.item.googleMap" target="_blank" class="text-sm text-blue-600">
              👉 查看地圖
            </a>
          </div>
        </div>
      </template>
    </Timeline>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  event: {
    type: Object,
  },
});

const getMarkerColor = (icon) => {
  switch (icon) {
    case "📍":
      return "bg-red-500";
    case "🦶":
      return "bg-gray-300";
    case "✈️":
      return "bg-sky-500";
    case "🏨":
      return "bg-purple-500";
    case "🍱":
      return "bg-amber-500";
    case "🛍️":
      return "bg-pink-500";
    case "🍳":
      return "bg-yellow-500";
    case "🥤":
      return "bg-lime-500"; // 新增 飲料點心
    case "🏞️":
      return "bg-emerald-500"; // 新增 景點/拍照點
    case "🚌":
      return "bg-blue-600"; // 新增 體驗/交通
    default:
      return "bg-gray-400";
  }
};
</script>
