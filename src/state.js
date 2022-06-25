import { reactive } from "vue";

export const state = reactive({
  error: null,
  loading: false,
  data: [],
  cam: false,
  qr: null,
  isload() {
    this.loading = true;
  },
  unload() {
    this.loading = false;
  },
});
