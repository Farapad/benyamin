<template>
  <div>
    <h4 class="text-center p-5">first screen</h4>
    <h4 class="text-center p-5">
      <button class="btn btn-success" @click="apiCall()">Call Api</button>
    </h4>
  </div>
</template>

<script>
import { ApiService } from "@/core/repository/api.service";
export default {
  setup() {
    function apiCall() {
      ApiService.getInstance().business({
        onReceive: (res) => {
          console.log(res);
        },
      });
    }

    return {
      apiCall,
    };
  },
};
</script>