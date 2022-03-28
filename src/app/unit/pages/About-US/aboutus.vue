<template>
  <div class="main">
    <h2 style="padding-top: 20px">درباره دانش یاد</h2>

    <div class="wrap-collabsible" id="collapse">
      <p  class="outcard">
        «دانشیاد» درگاهی است برای ورود به فضای عملیاتی و بهره گیری از قابلیت های یک سامانه جامع خدماتی در حوزه «آموزش/یادگیری الکترونیکی»؛متشکل از اعضای یکپارچه ای چون سیستم مدیریت یادگیری
        ("Learning Management System-"LMS) و سیستم مدیریت محتوای یادگیری
        (Content Management System-"CMS")
        <a class="text-color" href="#"  v-on:click='isCollapsed=!isCollapsed' style="color: #2F80ED;text-decoration: none ">توضیحات بیشتر</a>
      </p>

      <div v-show='isCollapsed' class="outcard" >
        <p class="outcard">
        و سیستم مدیریت محتوای یادگیری ("Learning Content Management System – “LCMS”)،از یک سو،و ابزار های ارتباطی و تعاملی بر خط و غیر برخط ("Online and Offline Communication and Collaboration Tools) و طیفی از امکانات و ویژگی های تکمیلی،از سویی دیگر.
        از جمله امکانات فراهم آماده قابلیت تولید،استاندارد سازی واجرای محتوا های الکترونیکی در تطبیق با آخرین اصلاحیه استاندارد جهانی «اسکرم»("SCORM 2004, 4Th Edition) قابل ذکر است.انتظار میرود این سامانه که به واسطه تشریک مساعی و هم افزایی بین شرکت های «فناوری اطلاعات و ارتباطات پاسارگاد آریان»(«شرکت فناپ»،وابسته به «بانک پاسارگاد»)و«شرکت داده ورزی سامانه»(به نمایندگی از جانب جمعی از خبرگان کشور)ایجاد و راه اندازی گشته بتواند بر بسیاری ازدغدغه ها،چالش ها و موانع فراوری این صنعت پایدار فائق آید.افزایش میزان اثر بخشی ،کاهش چشم گیر هزینه ها،تسهیل درامر آموزش /یادگیری و مهیا نمودن یک محیط امن و یک پارچه،از جمله ویژگی های بارز این سامانه است.نقش فناپ در تولید سامانه مذکور که مبنی بر فناوری «رایانش ابری یا کلاود»("Cloud Technology)توسعه یافته و ماهیت کاربری آن از نوع«بنگاه به بنگاه»(B2B)قابل توصیف است،به عنوان فراهم کننده سرویس دهنده های زیر ساختی(Infrastructure as a Service – “IaaS)و پلتفرمی("Platform as a Service – “PaaS)مورد نیاز ،و نقش داده ورزی سامانه به عنوان تامین کننده«سرویس دهنده نرم افزاری("Software as a Service – “SaaS)و طرف تعامل با جامعه هدف
        قابل تعریف است.
        </p> </div>

        </div>

    <div class="cards">

      <div class="card">
        <img src="@/assets/img/svg/aboutuspic2.svg" alt="image">
        <div class="card-content">
          <p class="incard">شرکت «داده ورزی سامانه» با پشتوانه تحلیل،طراحی و پیاده سازی پروژه سیستم جامع اطلاعات در چند شرکت بزرگ تولیدی و انتقال دانش فنی و کارشناسان پروژه مربوطه در سال 1376 تاسیس گردید</p>
          <a v-bind:href="dadevarzi" class="buttonlink" style="display: flex;align-items: center;justify-content: center;padding-top: 20px;text-decoration: none"><button>دانلود PDF فایل های داده ورزی سامانه</button></a>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/img/svg/aboutuspic1.svg" alt="image2">
        <div class="card-content">
          <p>  شرکت فناوری اطلاعات وارتباطات پاسارگادآرین(فن آپ)در24 دی ماه سال1384 با سرمایه گذاری گروه ملی پاسارگاد وهمکاری جمعی از نخبگان و فارغ التحصیلان دانشگاه های برتر کشور تاسیس شد
          </p>
          <a v-bind:href="Fanap" class="buttonlink" style="display: flex;align-items: center;justify-content: center;padding-top: 20px;text-decoration: none"><button type="button" >دانلود PDF فایل های فن آپ</button></a>

        </div>
      </div>
      </div>
    </div>
</template>
,<script>
import { useRoute } from "vue-router";

export default {
  el:'collapse',
  setup() {
    const route = useRoute();
    return {
      isCollapsed:'false',
      Fanap:'https://www.google.com',
      dadevarzi:'https://www.google.com'
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
justify-content: space-evenly;
  flex-wrap: nowrap;
  gap: 30px;
padding: 20px;
}
.card{
  width:594px;
  height: 703px;
}

  img{
    width: 100%;
}

  .card-content {
    line-height: 1.5rem;
    padding: 15px;
    width: 530px;
    height: 139px;

    p {
      margin: 10px 0;
      color: #475569;
      font-size:20px;
      padding-right: 15px;
  }
.text-show{
  color: #2F80ED;
  text-decoration: none;
  cursor:pointer;
}

}
  button{
    width:464px;
    height:100px;
    cursor: pointer;
    color:white;
    border-radius: 18px;
    border-color: #57CC99;
    align-items: center;
    justify-content: center;
    background-color:#57CC99;
  }

.outcard{
  padding: 2px 20px;
}
.buttonlink{
  cursor: pointer;
  color: #57CC99;
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 30px;
    padding: 20px;
  }
  .card {
    width: 374px;
    height: 473px;
  }
  button {
    width: 228px;
    height: 46px;

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
    padding-right: 10px;
  }
  .buttonlink{
    font-size: 12px;
  }
}

</style>