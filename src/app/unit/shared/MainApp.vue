<template>
  <Navbar/>
  <div>
    <router-view></router-view>
  </div>
  <FOOTER/>
</template>

<script>
import { useRoute } from "vue-router";
import Navbar from '@/app/unit/shared/Navbar'
import FOOTER from '@/app/unit/shared/Footer.vue'

export default {
  components:{Navbar,FOOTER},
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
