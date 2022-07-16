<template>
<div class="main-controller">
    <div class="top-bar">
      <div class="text-center">نمونه ای از قابلیت فراهم آمده:</div>
      <p>     
      Learning Management System (LMS)    Learning Content Management System (LCMS)
      Pedagogical Support    SCORM-Conformant Content Authoring and Sequencing
      ePayment Services    Value-Added Services    Integration     scalability    Online and
      Offline Communication and Collaboration Tools </p>
    </div>
  <div class="bottom-bar">
    <p class="text">
کلیه حقوق این سامانه متعلق به شرکت داده ورزی سامانه به عنوان شریک راهبردی  شرکت فناپ و طرف تعامل با جامعه هدف است.   
    </p>
    <div class="left">
      <img src="@/assets/img/svg/connect.svg" alt="connect">
      <span class="px-2">تماس با ما</span>
    </div>
  </div>
</div>
</template>
<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>
<style lang="scss"  scoped>
.main-controller{
  display: flex;
  flex-direction: column;
}
.top-bar{
  background-color: rgba(229, 231, 235, 1);
  text-align: left;
  padding: 25px 73px;
  color: rgba(22, 101, 52, 1);
  line-height: 32px;
  font-weight: 600;
}
.bottom-bar{
  background-color: rgba(156, 163, 175, 1);
  padding: 22px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text{
      color: white;
      font-weight: 600;
      width: 450px;
  }
  .left{
    img{
      width: 20px;
    }
    display:flex;
    width: 115px;
    font-size: 14px;
    color: rgba(71, 85, 105, 1);
    background: rgba(244, 244, 244, 1);
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 8px;
    font-weight: 600;
  }
}
@media (max-width:450px) {
  .text{
    font-size: 12px;
    width: 350px !important;
    font-weight: normal !important;
  }
  .left{
    font-size: 12px !important;
    span{
      padding: 0 4px !important;
    }
  }
}
</style>
