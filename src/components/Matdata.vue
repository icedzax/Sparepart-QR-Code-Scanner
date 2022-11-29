<template>
  <div class="card divide-y">
    <div class="rounded-t-lg bg-emerald-600 p-1 font-bold text-white">
      <span>{{ MAKTX }}</span>
    </div>
    <div class="flex justify-start bg-emerald-100 px-1">
      <button
        v-for="(item, ind) in Allplant"
        :key="ind"
        class="my-1 mx-4 rounded-lg border border-gray-400 bg-emerald-400 px-2 py-1"
        @click="hideData(item)"
        :id="item"
      >
        {{ item }}
      </button>
    </div>
    <div class="flex justify-around bg-emerald-100 px-1 font-bold">
      <span class="w-full text-left">BATCH</span>
      <span class="w-full text-center">PLANT</span>
      <span class="w-full text-right">QTY</span>
    </div>
    <div
      v-for="(item, index) in state.data"
      :key="index"
      class="flex justify-around px-1"
      v-show="newplant.includes(item.WERKS)"
    >
      <span class="w-full text-left">{{ item.CHARG }}</span>
      <span class="w-full text-center">{{ item.WERKS }}</span>
      <span class="w-full text-right">{{ item.STOCK }}</span>
    </div>

    <div class="flex justify-around px-1 font-bold">
      <span class="w-full text-left">Total</span>
      <span></span>
      <span class="w-full text-right">{{ sum }}</span>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue";
  import { state } from "../state";
  const selectPlant = ref();
  const MAKTX = computed(() => {
    return state.data.length > 0 ? state.data[0].MAKTX : "";
  });

  // const sum = state.data.reduce((acc, curr) => {
  //   return parseInt(acc) + parseInt(curr.STOCK);
  // }, 0);

  const sum = ref(0);

  const newplant = ref([]);
  const Allplant = Array();
  function getPlantButton() {
    state.data.filter((x) => {
      if (!Allplant.includes(x.WERKS)) {
        Allplant.push(x.WERKS);
      }

      if (!newplant.value.includes(x.WERKS)) {
        newplant.value.push(x.WERKS);
      }

      sum.value += parseInt(x.STOCK);
    });
  }
  getPlantButton();

  const hideData = (i) => {
    var element = document.getElementById(i);
    if (newplant.value.includes(i)) {
      const searchPlant = newplant.value.findIndex((item) => {
        return item == i;
      });
      newplant.value.splice(searchPlant, 1);
      element.classList.remove("bg-emerald-400");
      element.classList.remove("text-black");
      element.classList.add("bg-gray-200");
      element.classList.add("text-gray-400");
    } else {
      newplant.value.push(i);
      element.classList.add("bg-emerald-400");
      element.classList.add("text-black");
      element.classList.remove("bg-gray-200");
      element.classList.remove("text-gray-400");
    }
    sum.value = 0;
    state.data.map((data) => {
      newplant.value.map((ind) => {
        if (ind == data.WERKS) {
          // console.log("stock::", ind, "-", data.STOCK);
          sum.value += parseInt(data.STOCK);
        }
      });
    });
  };
</script>

<style></style>
