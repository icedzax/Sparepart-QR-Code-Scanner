import { reactive } from "vue";
import axios from "axios";
import { state } from "@/state";
const useFindMat = (init) => {
  const getMat = reactive({ data: init, err: null });
  const fetchMat = async (qr) => {
    state.loading = true;
    try {
      const response = await axios.post(
        "https://hook.zubbsteel.com/line-ci/qt/v1/store",
        { matnr: qr }
      );
      getMat.data = response.data;
      state.data = getMat.data;
    } catch (error) {
      getMat.data = error;
    }
    state.loading = false;
  };
  return { getMat, fetchMat };
};

function useQrMat(init) {
  // reactive composition api
  const QrMat = reactive({ data: init });
  const fetchQr = async () => {
    try {
      const response = await axios.post(
        "https://hook.zubbsteel.com/line-ci/qt/v1/qr"
      );
      QrMat.data = response.data;
    } catch (error) {
      QrMat.data = error;
    }
  };

  return { QrMat, fetchQr };
}
export default { useFindMat, useQrMat };
