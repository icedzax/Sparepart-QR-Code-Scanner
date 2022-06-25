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

function useCounterRt(initial) {
  // reactive composition api
  const counterRt = reactive({ counter: initial });
  function onClickRt() {
    counterRt.counter++;
  }

  return { counterRt, onClickRt };
}
export default { useFindMat, useCounterRt };
