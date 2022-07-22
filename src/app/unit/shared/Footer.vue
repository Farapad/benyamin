<template>
<div class="main-controller">
    <div class="top-bar">
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/gmp.svg' alt=""></a>
        <span >قابلیت مقیاس پذیری</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/bajvy.svg' alt=""></a>
        <span >برخوردار از <br>جامعیت و یکپارچگی</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/kaa.svg' alt=""></a>
        <span >خدمات ارزش افزوده</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/ape.svg' alt=""></a>
        <span >امکان پرداخت الکترونیک</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/zsjbs.svg' alt=""></a>
        <span >زیر سامانه جامع بانک سوال</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/pasa.svg' alt=""></a>
        <span >پشتیبانی از<br> شیوه های آموزشی</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/avaddbd.svg' alt=""></a>
        <span >آزمون سازی و<br>آزمون گیری در<br> درون/بیرون درس</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/tmmbgvjt.svg' alt=""></a>
        <span >تولید محتوا های <br>مبتنی برقواعد <br>و جریان تدریس</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/tick.svg' alt=""></a>
        <span >تطبیق با آخرین استاندارد <br>اسکرم ورژن 4</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/atovo.svg' alt=""></a>
        <span >امکانات تعاملی <br>آنلاین و آفلاین</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/zsmma.svg' alt=""></a>
        <span >زیر سیستم مدیریت <br>محتوا های آموزشی</span></div>
      <div class="a"><a href="#" class="btn-menu"><img src='@/assets/img/Pages/zsmy.svg' alt=""></a>
        <span >زیر سیستم مدیریت یادگیری</span></div>
    </div>
  <div class="bottom-bar">
    <p class="text">
کلیه حقوق این سامانه متعلق به شرکت داده ورزی سامانه به عنوان شریک راهبردی  شرکت فناپ و طرف تعامل با جامعه هدف است.   
    </p>
    <a class="left" href="#">
      <img src="@/assets/img/phone.png" alt="connect">
    </a>
    <a class="left" href="#">
      <img src="@/assets/img/whatsapp.png" alt="connect">
    </a>
    <a class="left" href="#">
      <img src="@/assets/img/insta.png" alt="connect">
    </a>
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

.a{
  display: flex;
  flex-direction: column;
  width: 100%;
}
span{
  font-weight: 700;
  font-size: 14px;
  color: #3C4976;
}
.main-controller{
  display: flex;
  flex-direction: column;
}
.top-bar{
  .btn-menu{
    img{
      width: 36px;
      height: 36px;
    }
    display: flex;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color:#F3F4F6;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
  background: #F9FAFB;
  display:flex;
  text-align: center;
  padding: 25px 44px;
  font-weight: 600;
}
.bottom-bar{
  background-color: #6B7280;
  padding: 22px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text{
      color: white;
      font-weight: 600;
      width:100%;
  }
  .left{
    img{
      width: 28px;
      height: 28px;
    }
    display:flex;
    width: 60px;
    height: 60px;
    background: #4B5563;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right:10px;
    cursor: pointer;
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
