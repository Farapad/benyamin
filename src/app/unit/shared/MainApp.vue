<template>
<div class="controller">
  <Navbar/>
  <div>
    <router-view></router-view>
  </div>
  <FOOTER/>
</div>  
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
.controller{
  overflow-x: hidden;
}
</style>
