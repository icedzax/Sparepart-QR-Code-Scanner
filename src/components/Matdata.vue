<template>
  <div class="card divide-y">
    <div class="rounded-t-lg bg-emerald-600 p-1 font-bold text-white">
      <span>{{ MAKTX }}</span>
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
import { computed } from "vue";
import { state } from "../state";

const MAKTX = computed(() => {
  return state.data.length > 0 ? state.data[0].MAKTX : "";
});

const sum = state.data.reduce((acc, curr) => {
  return parseInt(acc) + parseInt(curr.STOCK);
}, 0);
</script>

<style></style>
