<template>
  <div id="app-main">
    <MainApp />
  </div>
</template>

<script>
import MainApp from "@/app/unit/shared/MainApp.vue";
import { changeAppDirection } from "@/core/service/utils.service";
import { i18n } from "@/main";

export default {
  components: {
    MainApp,
  },
  mounted() {
    changeAppDirection(i18n.global.locale);
  },
};
</script>

<style scoped>
</style>

