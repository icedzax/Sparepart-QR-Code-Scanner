<template>
  <div>
    <div class="my-2 flex items-center justify-center">
      <div class="mx-2 w-full">
        <div
          class="rounded-lg border border-green-500 p-1 text-center shadow-md"
        >
          <span class="text-3xl font-bold"> MATNR</span>
        </div>
        <div class="my-2 mx-auto flex h-3/6 w-3/6">
          <img
            :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'"
            alt=""
            class="w-auto"
          />
        </div>
        <Matdata class="my-3" />
        <Mrp class="my-3" />
      </div>
    </div>
    <div
      class="fixed right-0 bottom-0 m-3 h-14 w-14 rounded-full border border-emerald-500 bg-emerald-50 p-1 text-emerald-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="{2}"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import Matdata from "@/components/Matdata.vue";
import Mrp from "../components/Mrp.vue";
export default { components: { Matdata, Mrp } };
</script>
<style></style>
