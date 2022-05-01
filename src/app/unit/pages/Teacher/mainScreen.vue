<template>
 <div v-if="Step==1" class="main-controller">
   <div class="child">
       <span>درج اطلاعات درباره درس</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div class="child">
       <span>درس های من</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div class="child">
       <span>ساخت درس</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div class="child">
       <span>صدور گواهینامه</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div class="child">
       <span>ارسال پیام و اطلاعیه</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div class="child">
       <span>ارسال گزارشات</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
 </div> 
 <details v-if="Step==2"/>   
</template>
<script>
import { ref } from 'vue'
import details from '@/app/unit/pages/Teacher/detailsLesson/DetailsLesson.vue'
export default {
    components : {details},
    setup () {
        const Step = ref(1)
        return {
            Step
        }
    }
}
</script>
<style lang="scss" scoped>
.main-controller{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 112px 217px;
    .child{
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color:#ffff;
        padding: 15px;
        border-radius: 18px;
        margin-top: 30px;
        cursor: pointer;
        span {
            color: rgba(107, 114, 128, 1);
        }
    }
}
</style>