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

    <div class="header-2">
     <span>
         دسترسی به بخش ورود به سامانه
     </span>
    </div> 
   
    <div @click="getpervasive" class="last-child">
       <span>فراگیر</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div @click="getTeacher" class="last-child">
       <span>مدرس</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div @click="getmanagement" class="last-child">
       <span>مدیریت</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
   <div @click="Applicant" class="last-child">
       <span>متقاضی برگزاری دوره/درس</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
    <div  class="last-child-bottom">
       <span>دسترسی به گزارشات و نمودار های مالی و عملکردی</span>
       <img src="@/assets/img/svg/arrow-icon.svg">
   </div>
    <div @click="GetList" class="last-child-bottom">
       <span>لیست گواهینامه های ارسالی توسط مدرسان</span>
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

        function GetList () {
            router.push('/management/list')
        }

       
        function Applicant(){
            router.push("/Applicant")
        }

        function getTeacher () {
            router.push('/Teacher')
        }

        function getpervasive () {
            router.push('/pervasive')
        }

        function getmanagement () {
            router.push('/management')
        }
        return {
            Step,
            getcourses,
            GetNews,
            GetAboutus,
            GetList,
            getpervasive,
            getTeacher,
            Applicant,
            getmanagement        }
    }
}
</script>
<style lang="scss" scoped>
.main-controller{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 217px;
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

    .header-2 {
        width: 100%; 
        display: flex;
        justify-content: flex-start;
        margin-bottom: 15px;
        margin-top: 20px;
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

    .last-child{
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

    .last-child-bottom {
        margin-top:30px;
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