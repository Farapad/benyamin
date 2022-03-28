<template>
  <div class="main-controller">
    <div><topscreen :label="'ورود به سامانه'"/></div>
    <div class="child2">
      <span class="mobile-text">موبایل / ایمیل</span>
      <InputText placeholder="موبایل / ایمیل خود را وارد کنید" class="my-3" type="text" v-model="username" />
      <span class="mobile-text">رمز عبور</span>
      <Password class="my-3 w-100" v-model="password" placeholder="رمز عبور خود را وارد کنید" toggleMask></Password>
      <span class="forgot">رمز عبور خود را فراموش کرده اید؟</span>
    </div>
    <div class="child3">
      <Button label="ورود به سامانه" class="p-button-raised p-button-success" />
      <Button  class="p-button-raised p-button-success google my-3" ><img class="px-2" src="@/assets/img/svg/google.svg" alt="google">با گوگل وارد شوید</Button>
    </div>
    <div class="bottom-text">
      <span>هنوز ثبت نام نکرده اید؟</span><span class="child px-1">ثبت نام</span>
    </div>
  </div>
</template>
<script lang="ts">
import topscreen from '@/app/unit/auth/topscreen.vue'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
export default {
  components:{topscreen,InputText,Password,Button},
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
  padding: 56px;
}
.child2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  margin-top: 15px;
  width: 100%;
}
.mobile-text{
  color: rgba(75, 85, 99, 1);
  font-size: 12px;
}
::v-deep( .p-password-input){
  width: 100%;
  border: none;
  border-radius: 12px;
}
::v-deep(.p-inputtext){
    width: 100%;
    border: none;
    border-radius: 12px;
    font-size: 12px;
    padding: 12px;
}
::v-deep(.p-input-icon-right > i:last-of-type){
  left: 0.75rem !important;
  right: auto  !important;
}
.forgot{
  color: rgba(59, 130, 246, 1);
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  text-decoration: underline rgba(59, 130, 246, 1) 1px;
}
.child3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top: 30px;
}
.p-button-success{
  font-size: 12px;
  background: rgba(87, 204, 153, 1);
  border: none;
  border-radius: 8px;
  padding:13px 50px ;
  width: 254px;

}
.p-button-success:hover{
  font-size: 12px !important;
  background: rgba(87, 204, 153, 1) !important;
  border: none !important;
  border-radius: 8px;
  padding:13px 50px ;
  width: 254px;

}
.google{
  background: #fff;
  font-size: 12px;
  color: rgba(156, 163, 175, 1);
  width: 254px;
}
.google:hover{
  background: #fff !important;
  font-size: 12px !important;
  color: rgba(156, 163, 175, 1) !important;
}
.bottom-text{
  display:flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  margin-top: 15px;
  color: rgba(156, 163, 175, 1);
  .child{
    text-decoration: underline #3b82f6;
    color:#3b82f6;
    cursor: pointer;
  }
}
</style>
