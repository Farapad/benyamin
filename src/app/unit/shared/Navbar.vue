<template>
   <div class="main-controller">
    <div class="controller">
        <div>
            <img class="w-25" alt="logo" src="@/assets/img/png/logo-daneshyad.png">
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
   </div>
</template>
,<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>
<style>
.controller{
    display: flex;
    flex-direction: row;
}
</style>