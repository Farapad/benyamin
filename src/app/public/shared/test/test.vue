<template>
  <div>
    

  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { translateToEnglish } from '@/core/service/utils.service'
export default {
 
  setup () {
    onMounted(() => {
      translateToEnglish('سلام' , (translated)=> {
        console.log(translated);
      });
    })

    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>