<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
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

<style scoped>
</style>
