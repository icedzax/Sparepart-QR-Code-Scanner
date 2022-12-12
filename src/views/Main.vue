<template>
  <div>
    <div v-if="state.cam" class="w-full">
      <Camera />
      <div class="mx-4 w-auto">
        <button
          @click="state.cam = false"
          class="my-2 w-full rounded-lg bg-red-700 p-1 text-2xl font-bold text-white focus:bg-red-600"
        >
          Back
        </button>
      </div>
    </div>

    <div v-else>
      <section v-if="state.data.length == 0">
        <div>
          <div class="rounded-full focus:bg-emerald-700">
            <svg
              @click="state.cam = true"
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
        <div class="mx-5 text-center">
          <button
            @click="state.cam = true"
            class="w-full rounded-lg bg-emerald-700 p-1 text-2xl font-bold text-white focus:bg-emerald-600"
          >
            Scan QR-CODE
          </button>
        </div>
      </section>
      <section v-else>
        <div class="my-2 flex items-center justify-center">
          <div class="mx-2 w-full">
            <Skeletor
              v-if="state.loading"
              class="mb-2 rounded-lg"
              height="45"
            />
            <div
              v-else
              class="rounded-lg border border-green-500 p-1 text-center shadow-md"
            >
              <span class="text-3xl font-bold">{{ mat }}</span>
            </div>
            <Skeletor
              v-if="state.loading"
              class="mx-auto mb-2"
              circle
              size="150"
            />
            <div v-else class="my-2 mx-auto flex h-4/6 w-4/6">
              <img
                :src="`http://picsap.zubbsteel.com/material/getPic.php?mat=${mat}`"
                alt=""
                class="w-auto rounded-lg"
              />
            </div>
            <Skeletor
              v-if="state.loading"
              class="mb-2 rounded-lg"
              height="100"
            />
            <Matdata v-else class="my-3" />
            <!-- <Skeletor
              v-if="state.loading"
              class="mb-2 rounded-lg"
              height="100"
            />
            <Mrp v-else class="my-3" /> -->
          </div>
        </div>
        <div
          class="fixed right-0 bottom-0 m-3 h-14 w-14 rounded-full border border-emerald-500 bg-emerald-50 p-1 text-emerald-500"
        >
          <svg
            @click="state.cam = true"
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
      </section>
    </div>
  </div>
</template>
<script setup>
  import { onMounted, ref, computed } from "vue";
  import { Skeletor } from "vue-skeletor";
  import "vue-skeletor/dist/vue-skeletor.css";
  import Matdata from "@/components/Matdata.vue";
  import Mrp from "../components/Mrp.vue";
  import { state } from "../state";
  import Camera from "../components/Camera.vue";
  import useMat from "../hooks/useMat";

  const { fetchMat } = useMat.useFindMat([]);

  onMounted(() => {
    fetchMat("");
  });

  const mat = computed(() => {
    return state.data.length > 0 ? state.data[0].MATNR : "";
  });
</script>

<style></style>
