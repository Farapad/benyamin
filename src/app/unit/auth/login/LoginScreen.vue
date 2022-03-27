<template>
  <div class="main-controller">
    <div><topscreen :label="'ورود به سامانه'"/></div>
    <div>
      <InputText type="text" v-model="username" />
      <Password v-model="value1" :feedback="false" />
    </div>
    <div></div>
  </div>
</template>
<script lang="ts">
import topscreen from '@/app/unit/auth/topscreen.vue'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
export default {
  components:{topscreen,InputText,Password},
  setup(){
    const username = null;
    const password = null;
    return {
      username,
      password
    }
  }

};
</script>
<style lang="scss" scoped>
.main-controller{
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>
