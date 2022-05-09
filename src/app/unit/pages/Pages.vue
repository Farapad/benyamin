<template>
 <div class="main-controller">
  <div class="controller">
   <carousel :items-to-show="1">
    <slide v-for="slide in products" :key="slide">
      <img class="w-100" :src="slide.image"> 
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
      <div class="card-carousel">
          <!-- <div class="card-1">
         سامانه جامع آموزش و یادگیری الکترونیکی            
      ثمره هم افزایی بین شرکت های فناپ و داده ورزی سامانه            
      آمیزه ای از فناوری ها و قابلیت ها در قالب یک نظام یک پارچه            
          </div> -->
            <img src="@/assets/img/svg/png/pages-text.png">
      </div>    
  </div>
  <div>

    <!-- <img src="@/assets/img/svg/png/pages-text.png"> -->
    <!-- <p class="text-between">
    <br>  <span style="font-weight:700;">سامانه جامع آموزش \ یادگیری الکترونیکی</span> <br>   <br>  
      ثمره هم افزایی بین شرکت های فناپ و داده ورزی سامانه      
      آمیزه ای از فناوری ها و قابلیت ها در قالب یک نظام یک پارچه     
    </p> -->
  </div>   
  <div class="bottom-bar w-100 px-5 mb-3 mt-3 d-flex">
    <Button @click="getlogin" class="child-one" label="ورود به سامانه"/>
    <div class="py-2">
    <span  @click="getpervasive"  class="child-two hover-pointer font-16 font-weight-bold text-color px-3">فراگیر</span>
    <span @click="getTeacher"  class="child-two hover-pointer font-16 font-weight-bold text-color px-3">مدرس</span>
    <span @click="getmanagement" class="child-two  hover-pointer font-16 font-weight-bold text-color px-3">مدیریت</span>
    <span class="child-two hover-pointer font-16 font-weight-bold text-color px-3">ادمین</span>
    <span @click="Applicant" class="hover-pointer child-two font-16 font-weight-bold text-color px-3">متقاضی برگزاری دوره یا درس</span>
     </div>
  </div>
 </div>  
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import {ref} from 'vue';
import Button from 'primevue/button';
import router from '@/core/router/router';
export default {
  components:{  
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Button},
  setup() {
    // function apiCall() {
    //   ApiService.getInstance().business({
    //     onReceive: (res) => {
    //       console.log(res);
    //     },
    //   });
    // }

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

    function getlogin () {
      router.push("/login")
    }

      const picture = ref(require('../../../assets/img/svg/png/main-page.png'));
      const picturee = ref(require('../../../assets/img/svg/png/page.png'));
      const products = [
        {id:1000,code: "f230fh0g3",name: 'Bamboo Watch',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
      ];
    return {
      products,
      Applicant,
      getTeacher,
      getpervasive,
      getmanagement,
      getlogin
    };
  },
};
</script>
<style lang="scss" scoped>
.main-controller{
  padding: 30px;
}
.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
    }

    .product-image {
        width: 50%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
}
.card{
  background: none;
  border: none;
}
::v-deep(.product-item .product-item-content){
  border: none;
}
::v-deep(.p-carousel .p-carousel-indicators){
  display: none;
}
::v-deep(.product-item .product-image){
  width:1100px;
  border-radius: 47px;
}
::v-deep(.p-carousel-prev){
  transform: rotate(180deg);
  cursor: pointer;
}
::v-deep(.p-carousel .p-carousel-content .p-carousel-prev, .p-carousel .p-carousel-content .p-carousel-next){
  background: white;
  position: relative;
  right: 4%;
  z-index: 100;
  padding: 20px;
  border-radius: 11px;
}
::v-deep(.p-carousel .p-carousel-content .p-carousel-next){
  background: white;
  position: relative;
  z-index: 100;
  left: 4%;
  padding: 20px;
  border-radius: 11px;
}
::v-deep(.p-carousel-next){
   transform: rotate(180deg);
   cursor: pointer;
}
@media (max-width:450px){
  ::v-deep(.product-item .product-image){
    width:300px;
    border-radius: 47px;
    }
}
::v-deep(.p-button){
  background: rgba(87, 204, 153, 1);
  border: none;
  border-radius: 12px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
}
::v-deep(.p-button:hover){
  background: rgba(87, 204, 153, 1);
  border: none;
}
.bottom-bar{
  align-items: center;
}
@media (max-width:450px) {
  .bottom-bar{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px !important;
    .child-one{
      font-size: 14px !important;
      padding: 10px 20px;
    }
    .child-two{
      font-size: 14px !important;
    }
  }
  .card-carousel{
    display: none  !important;
  }
}

::v-deep(.carousel__slide){
  width: 100% !important;
}
::v-deep(.carousel__track){
  transform: translateX(-100%); transition: all 0ms ease 0s;
}
::v-deep(.carousel__pagination){
  display: none;
}
::v-deep(.carousel__next){
  color: black;
  background: #fff;
  width: 46px;
  height:46px;
  border-radius: 12px;
  font-size: 26px;
}
::v-deep(.carousel__prev){
   color: black;
   background: #fff;
   width: 46px;
   height:46px;
   border-radius: 12px;
   font-size: 26px;
}
.text-between{
  color: #475569;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  padding: 31px;
  text-align: center;
}
@media (min-width: 450px){
    .text-between{
      display: none;
    }
}
.card-carousel{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -424px;
  .card-1{
    max-width: 528px;
    background: rgba(244, 244, 244, 0.75);
    color: rgba(22, 101, 52, 1);
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
  }
}
.controller{
  height: 700px;
}
@media (max-width: 450px){
  .controller {
    height: 250px;
  }
}
</style>