<template>
<div class="main-controller">
    <div class="first-child">
        <topscreen :label="'کد تایید'"/> 
    </div>
    <div class="second-child">
        <span class="mobile-text">کد تایید برای شماره 0903434549 ارسال گردید</span>
        <InputText placeholder="لطفا کد تایید را وارد کنید" class="my-2" type="text" v-model="username" />
        <div class="text">
            <span>ارسال مجدد کد تایید</span>
        </div>
    </div>
    <div class="third-child">

    </div>
</div>    
</template>
<script>
import topscreen from '@/app/unit/auth/topscreen.vue'
export default {
    components:{
        topscreen
    },
    setup() {
        
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
  .first-child{
      display: flex;
      flex-direction: column;
  }
  .second-child{
      display: flex;
      flex-direction: column;
      ::v-deep(.p-inputtext){
        width: 100%;
        border: none;
        border-radius: 12px;
        font-size: 12px;
        padding: 12px;
      }
      .mobile-text{
        color:rgba(75, 85, 99, 1);
        font-size: 12px;
      }
      .text{
          display: flex;
          justify-content: flex-end;
          color: rgba(59, 130, 246, 1);
          text-decoration: underline rgba(59, 130, 246, 1);
          font-size: 12px;
      }
  }
}
</style>