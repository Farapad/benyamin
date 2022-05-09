<template>
 <div class="main-controller">
   <div class="header">
     <span>
         دسترسی به زیربخش های واسط کاربری اصلی دانش یاد
     </span>
    </div>  
   <div @click="getcourses" class="first-child">
       <span>دوره ها</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div @click="GetNews" class="first-child">
       <span>خبرها</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div class="first-child">
       <span>اطلاعیه ها</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div @click="GetAboutus" class="first-child">
       <span>درباره ما</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>

    <div class="header">
     <span>
         دسترسی به زیربخش های واسط کاربری اصلی دانش یاد
     </span>
    </div> 
   
    <div @click="getcourses" class="last-child">
       <span>دوره ها</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div @click="GetNews" class="last-child">
       <span>خبرها</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div class="last-child">
       <span>اطلاعیه ها</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div @click="GetAboutus" class="last-child">
       <span>درباره ما</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
 </div> 
 <!-- <details v-if="Step==2"/>    -->
</template>
<script>
import { ref } from 'vue'
import details from '@/app/unit/pages/Teacher/detailsLesson/DetailsLesson.vue'
import router from '@/core/router/router';
export default {
    components : {details},
    setup () {
        const Step = ref(1);

        function getcourses () {
            router.push('/courses')
        }

        function GetNews () {
            router.push ('/news');
        }

        function GetAboutus () {
            router.push('/about')
        }
        return {
            Step,
            getcourses,
            GetNews,
            GetAboutus        }
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
    .header {
        width: 100%; 
        display: flex;
        justify-content: flex-start;
        margin-bottom: 15px;
        span {
            color: rgba(75, 85, 99, 1);
            font-size: 20px;
        }
    }
    .first-child{
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color:#ffff;
        padding: 15px;
        border-radius: 18px;
        cursor: pointer;
        span {
            color: rgba(107, 114, 128, 1);
        }
    }
}
@media (max-width:450px) {
    .main-controller {
        padding: 10px;
    }
}
</style>