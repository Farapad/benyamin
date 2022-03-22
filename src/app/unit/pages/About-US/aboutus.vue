<template>
  <div class="main-background">
    <h2>درباره محصول دانش یاد</h2>
    <p class="outcard">
      «دانشیاد» درگاهی است برای ورود به فضای عملیاتی و بهره گیری از قابلیت های یک سامانه جامع خدماتی در حوزه «آموزش/یادگیری الکترونیکی»؛متشکل از اعضای یکپارچه ای<br> چون سیستم مدیریت یادگیری
      ("Learning Management System-"LMS) و سیستم مدیریت محتوای یادگیری
      (...Content Management) <a class="text-show" href="#">توضیحات بیشتر</a>
    </p>
    <h2>درباره شرکت «داده ورزی سامانه» و «شرکت فن آپ»</h2>
    <div class="cards">
      <div class="card">
        <img src="@/assets/img/svg/aboutuspic2.svg" alt="image">
        <div class="card-content">
          <h5>«شرکت داده ورزی سامانه»</h5>
          <p class="incard">شرکت «داده ورزی سامانه» با پشتوانه تحلیل،طراحی و پیاده سازی پروژه سیستم جامع اطلاعات در چند شرکت بزرگ تولیدی و انتقال دانش فنی و کارشناسان پروژه مربوطه در سال 1376 تاسیس گردید</p>
          <a href="#" class="buttonlink"><button>دانلود PDF «شرکت داده ورزی سامانه»</button></a>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/img/svg/aboutuspic1.svg" alt="image2">
        <div class="card-content">
          <h5>«شرکت فناپ»</h5>
          <p>شرکت «فناپ» با پشتوانه تحلیل،طراحی و پیاده سازی پروژه سیستم جامع اطلاعات در چند شرکت بزرگ تولیدی و انتقال دانش فنی و کارشناسان پروژه مربوطه در سال 1376 تاسیس گردید
          </p>
          <a href="" class="buttonlink"><button type="button">دانلود PDF «شرکت فناپ»</button></a>

        </div>
      </div>
      </div>
    </div>
</template>
,<script>
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
<style lang="scss" >

:root {
  --bg-color: #f2f3f5;
  // define global variable colors
}

body {
  background: var(--bg-color) !important;
  font-family: IRANSans, serif !important;
  text-align: unset;
}
.cards {
  width: calc(100% - 6rem);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 30px;
  padding: 20px 0;
}

  img{
    width: 100%;
}

  .card-content {
    line-height: 1.5rem;
    padding: 15px;

    p {
      margin: 10px 0;
      color: #475569;
      font-size:20px;
  }
.text-show{
  color: #2F80ED;
  text-decoration: none;
  cursor:pointer;
}

}
  button{
    cursor: pointer;
    color:white;
    border-radius: 18px;
    border-color: #57CC99;
    align-items: center;
    justify-content: center;
    background-color:#57CC99;
  }
h2{
padding: 2px 20px;
  font-size: 24px;
}
.outcard{
  padding: 2px 20px;
}
.buttonlink{
  cursor: pointer;
  color: #57CC99;
  text-decoration: none;
}

</style>
