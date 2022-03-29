<template>
    <div class="main-controller">
        <div class="first-child">
            <topscreen :label="'بازیابی رمز عبور'"/>
        </div>
        <div class="second-child">
            <span class="mobile-text">موبایل / ایمیل</span>
            <Password :class=" validation == true ? 'p-invalid' : ''"  class="my-3 w-100" v-model="password" placeholder="رمز عبور خود را وارد کنید" toggleMask></Password>
        </div>
        <div class="third-child">
         <Button @click="apply()" label="بازیابی رمز عبور" class="p-button-raised p-button-success" />
         <span class="bottom-text">بازگشت به صفحه ورود</span>
        </div>
    </div>
</template>
<script>
import topscreen from '@/app/unit/auth/topscreen.vue';
import Password from 'primevue/password';
import {ref} from 'vue';
export default {
    components:{
        topscreen,
        Password
    },
    setup() {
       const validation = ref(null);
       const password = ref(null);
       function apply(){
          if (password.value == null){
              validation.value = true;
          }
          else {
              validation.value = false;
          }
       }  
       return { 
           validation,
           password,
           apply
       }
    },
}
</script>
<style lang="scss" scoped>
.main-controller{
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 56px;
}
.second-child {

      ::v-deep(.p-inputtext){
        width: 100%;
        border-radius: 12px;
        font-size: 12px;
        padding: 12px;
      }

       ::v-deep(.p-input-icon-right > i:last-of-type){
            left: 0.75rem !important;
            right: auto  !important;
        }

       .mobile-text{
        color: rgba(75, 85, 99, 1);
        font-size: 12px;
       }

}
.third-child{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    .p-button-success:hover{
    font-size: 12px !important;
    background: rgba(87, 204, 153, 1) !important;
    border: none !important;
    border-radius: 8px;
    padding:13px 50px ;
    width: 254px;
    }
    .p-button-success{
    font-size: 12px !important;
    background: rgba(87, 204, 153, 1) !important;
    border: none !important;
    border-radius: 8px;
    padding:13px 50px ;
    width: 254px;

    }
    .bottom-text{
        font-size: 12px;
        color: rgba(59, 130, 246, 1);
        text-decoration: underline rgba(59, 130, 246, 1);
        padding: 9px 2px;
        cursor: pointer;
    }
}

</style>