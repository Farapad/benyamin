<template>
  <div class="main">
    <h2 style="padding-top: 20px;font-size:24px;padding-right:15px">درباره دانش یاد</h2>

    <div class="wrap-collabsible" id="collapse">
      <p  class="outcard">
        «دانشیاد» درگاهی است برای ورود به فضای عملیاتی و بهره گیری از قابلیت های یک سامانه جامع خدماتی در حوزه «آموزش/یادگیری الکترونیکی»؛متشکل از اعضای یکپارچه ای چون سیستم مدیریت یادگیری
        (LMS"-Learning Management System") و سیستم مدیریت محتوای یادگیری
        (LCMS"-Learning Content Management System")
        <a class="text-color" href="#"  v-on:click="isCollapsed=!isCollapsed" style="color: #2F80ED;text-decoration: none ">توضیحات بیشتر</a>
      </p>

      <div v-show='isCollapsed' class="outcard" >
        <p class="outcard">
        ،از یک سو،و ابزار های ارتباطی و تعاملی بر خط و غیر برخط (Online and Offline Communication and Collaboration Tools) و طیفی از امکانات و ویژگی های تکمیلی،از سویی دیگر.
        از جمله امکانات فراهم آماده قابلیت تولید،استاندارد سازی واجرای محتوا های الکترونیکی در تطبیق با آخرین اصلاحیه استاندارد جهانی «اسکرم» (SCORM 2004, 4Th Edition) قابل ذکر است.انتظار میرود این سامانه که به واسطه تشریک مساعی و هم افزایی بین شرکت های «فناوری اطلاعات و ارتباطات پاسارگاد آریان» («شرکت فناپ»،وابسته به «بانک پاسارگاد») و «شرکت داده ورزی سامانه» (به نمایندگی از جانب جمعی از خبرگان کشور)ایجاد و راه اندازی گشته بتواند بر بسیاری ازدغدغه ها،چالش ها و موانع فراوری این صنعت پایدار فائق آید.افزایش میزان اثر بخشی ،کاهش چشمگیر هزینه ها،تسهیل درامر آموزش /یادگیری و مهیا نمودن یک محیط امن و یک پارچه،از جمله ویژگی های بارز این سامانه است.نقش فناپ در تولید سامانه مذکور که مبنی بر فناوری «رایانش ابری یا کلاود» (Cloud Technology) توسعه یافته و ماهیت کاربری آن از نوع «بنگاه به بنگاه» (B2B) قابل توصیف است،به عنوان فراهم کننده سرویس دهنده های زیر ساختی (IaaS"-Infrastructure as a Service") و پلتفرمی (PaaS"-Platform as a Service") مورد نیاز ،و نقش داده ورزی سامانه به عنوان تامین کننده«سرویس دهنده نرم افزاری (SaaS"-Software as a Service") و طرف تعامل با جامعه هدف
        قابل تعریف است.
        </p> </div>

        </div>

    <div class="cards">
      <div class="col"><h1>درباره شرکت داده ورزی سامانه</h1>
        <div class="card">
          <img src="@/assets/img/svg/aboutuspic2.svg" alt="image">
          <div class="card-content">
            <p class="incard">شرکت «داده ورزی سامانه» با پشتوانه تحلیل،طراحی و پیاده سازی پروژه سیستم جامع اطلاعات در چند شرکت بزرگ تولیدی و انتقال دانش فنی و کارشناسان پروژه مربوطه در سال 1376 تاسیس گردید.</p>
            <button v-bind:href="dadevarzi">دانلود فایل PDF معرفی داده ورزی سامانه</button>
          </div>
        </div></div>
<div class="col"><h1 >درباره شرکت فناپ</h1>
  <div class="card">
    <img src="@/assets/img/svg/aboutuspic1.svg" alt="image2">
    <div class="card-content">
      <p>  شرکت فناوری اطلاعات وارتباطات پاسارگادآرین (فناپ) در24 دی ماه سال1384 با سرمایه گذاری گروه ملی پاسارگاد وهمکاری جمعی از نخبگان و فارغ التحصیلان دانشگاه های برتر کشور تاسیس شد.
      </p>
      <button v-bind:href="Fanap" >دانلود فایل PDF معرفی فناپ</button>

    </div></div>

      </div>
      </div>
    </div>
</template>
,<script>
import { useRoute } from "vue-router";
import { usePrimeVue } from "primevue/config";
import FileUpload from 'primevue/fileupload';

export default {
  el:'collapse',
  setup() {
    const route = useRoute();
    const isCollapsed = false
    return {
      isCollapsed,
      Fanap:'',
      dadevarzi:''
    };
  },
};
</script>
<style lang="scss" >

// :root {
//   --bg-color: #f2f3f5;
//   // define global variable colors
// }

body {
  background: var(--bg-color) !important;
  font-family: IRANSans, serif !important;
  text-align: unset;
}
.cards {
  display: flex;
justify-content:flex-start;
  flex-wrap: nowrap;
  margin-top: 64px;
  margin-bottom: 56px;
  margin-right:10px;
}
.card{
  width: 594px;
  height: 703px;
  border: 1px solid #D2D2D2;
  border-radius: 18px
}
h1{
  font-weight: 500;
  font-size: 24px;
}

  img{
    width: 100%;
}

  .card-content {
    line-height: 1.5rem;
    padding: 20px 32px 20px 32px;
    width: 530px;
    height: 139px;

    p {
      margin: 10px 0;
      color: #475569;
      font-size:20px;
      padding-right: 15px;
      font-weight: 500;
  }
.text-show{
  color: #2F80ED;
  text-decoration: none;
  cursor:pointer;
}

}
  button{
    width: 500px;
    height: 100px;
    cursor: pointer;
    color:white;
    border:white;
    background: #57CC99;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    margin-top:25px;
    margin-right:10px;
  }

.outcard{
  padding: 2px 20px;
}
.buttonlink{
  cursor: pointer;
  color: #57CC99;
  text-decoration: none;
}
.col{
  display:flex;
  flex-direction: column;
}
h1{
  margin-bottom:20px;font-weight: 500;
  font-size: 24px;
}
@media only screen and (max-width: 768px) {
  .cards {
    display: flex;
    flex-direction: column;
  margin-left:40px;
gap:20px;
  }
  .card {
    width: 374px;
    height: 463px;
    margin-bottom:20px;
  }
  button {
    width: 250px;
    height: 46px;
    display:flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background: #57CC99;
    border-radius: 6px;
    margin-right: 40px;
    margin-top: 20px;
    font-size: 12px;
    font-weight:Bold;

  }
  .card-content {
    line-height: 1.5rem;
    padding: 15px;
    width: 342px;
    height: 119px;

    p {
      margin: 10px 0;
      color: #475569;
      font-size: 14px;
      padding-right: 15px;
    }
  }
  h2{
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .buttonlink{
    font-size: 12px;
  }
  h1{
    font-weight:500;
    font-size: 16px;
    line-height: 22px;
  }
}

</style>