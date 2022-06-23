<template>
  <div id="demo">
    <div v-if="SizeNow < 600">
      <Vertical />
    </div>
    <div v-else>
      <Horizon />
    </div>
  </div>
</template>
<script>
import Vertical from "../components/Vertical.vue";
import Horizon from "../components/Horizontal.vue";
export default {
  components: { Vertical, Horizon },
  computed: {
    SizeNow() {
      return screen.width;
    },
  },
};
</script>
<style></style>
/
