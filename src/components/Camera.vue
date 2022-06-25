<template>
  <div>
    <div class="">
      <qr-stream @decode="onDecode" class="mb">
        <div class="z-10 mx-auto h-full w-full border border-red-500"></div>
      </qr-stream>
    </div>
  </div>
  <div v-if="err" class="my-2 w-full text-center text-2xl text-red-500">
    <div>ไม่พบข้อมูล</div>
    <div class="bg-red-100">{{ data }}</div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { QrStream } from "vue3-qr-reader";
import { state } from "../state";
import useMat from "../hooks/useMat";
export default defineComponent({
  name: "QrStreamExample",
  components: {
    QrStream,
  },

  setup() {
    const { fetchMat } = useMat.useFindMat([]);
    const qrs = reactive({
      data: null,
      err: false,
    });
    async function onDecode(data) {
      //   console.log(data);
      qrs.data = data;
      await fetchMat(data);
      if (data && state.data.length > 0) {
        state.cam = false;
        qrs.err = false;
      } else {
        qrs.err = true;
      }
    }
    return {
      ...toRefs(qrs),
      onDecode,
    };
  },
});
</script>
