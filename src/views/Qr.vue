<template>
  <div
    v-for="item in qrData.data"
    :key="item"
    class="grid auto-rows-auto grid-cols-5 gap-2 overflow-hidden"
  >
    <div class="box">
      <VueQrcode
        type="image/jpeg"
        :quality="0.92"
        :color="{ dark: '#000000ff', light: '#ffffffff' }"
        :value="item"
      />{{ item }}
    </div>
  </div>
</template>
<script setup>
import useMat from "@/hooks/useMat";
import VueQrcode from "vue-qrcode";
import qrData from "../data/qr.json";
</script>

<style socped>
.box {
  @apply mx-auto border border-gray-600;
}
</style>
