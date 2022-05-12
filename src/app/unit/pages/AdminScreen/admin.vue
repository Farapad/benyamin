<template>
<div class="main-controller">
 <div>
   <a class="aimage" href="#"> <img class="adminimage" src="@/assets/img/svg/Adminicon.svg"></a>
 <h1 class="header1">دسترسی به زیر بخش های واسط کاربری اصلی دانش یاد</h1>
<!--  <MegaMenu  class="sec1s" :model="items" orientation="vertical"/>-->
<div class="sec1s">
  <div class="insidediv1">  <a href="#" class="text">دوره ها</a>
    <img class="img11" src="@/assets/img/svg/Ladmin.svg"></div>
  <div class="insidediv2">  <a href="#" class="text">خبر ها</a>
    <img class="img12" src="@/assets/img/svg/Ladmin.svg"></div>
  <div class="insidediv2">  <a href="#" class="text">اطلاعیه ها</a>
    <img class="img13" src="@/assets/img/svg/Ladmin.svg"></div>
  <div class="insidediv2">  <a href="#" class="text">درباره ی ما</a>
    <img class="img14" src="@/assets/img/svg/Ladmin.svg"></div>
</div>
<h1 class="header1">دسترسی به بخش ورود به سامانه</h1>

<!--     <MegaMenu   class="sec1s" :model="items2" orientation="vertical" />-->
   <div class="sec1s">
     <div class="insidediv1">  <a href="#" class="text">فراگیر</a>
       <img class="img21" src="@/assets/img/svg/Ladmin.svg"></div>
     <div class="insidediv2">  <a href="#" class="text">مدرس</a>
       <img class="img22" src="@/assets/img/svg/Ladmin.svg"></div>
     <div class="insidediv2">  <a href="#" class="text">مدیریت</a>
       <img class="img23" src="@/assets/img/svg/Ladmin.svg"></div>
     <div class="insidediv2">  <a href="#" class="text">درباره ی ما</a>
       <img class="img24" src="@/assets/img/svg/Ladmin.svg"></div>
   </div>

   <h1 class="header1">دسترسی به اطلاعات متفرقه</h1>

     <PanelMenu style="direction: ltr" class="sec2s" :model="items3" orientation="vertical" />

<!--  <MegaMenu  class="sec3s" :model="items4"  orientation="vertical"/>-->
   <div class="sec3s">
       <div class="insidediv1">  <a href="#" class="text">ارسال پیام به</a>
         <img class="imgicon"  src="@/assets/img/svg/Ladmin.svg"></div>
   </div>
 </div>
</div> 
</template>
<script>
import PanelMenu from 'primevue/panelmenu';
import MegaMenu from 'primevue/megamenu';
import { ref } from 'vue';
export default {
  components:{PanelMenu,MegaMenu},
  setup() {
    const items = ref([
      {
        key: '0',
        label: 'دوره ها',items: []
      },
      {
        key: '1',
        label: 'خبر ها',items: []
      },
      {
        key: '2',
        label: 'اطلاعیه ها',items: []
      },
      {
        key: '3',
        label: 'درباره ی ما',items: []

      }
    ]);

    const items2 = ref([
      {
        key: '0',
        label: 'فراگیر',items: []
      },
      {
        key: '1',
        label: 'مدرس',items: []
      },
      {
        key: '2',
        label: 'مدیریت',items: []
      },
      {
        key: '3',
        label: 'متقاضی برگزاری درس/دوره',items: []

      }
    ]);

    const items3 = ref([
      {
        key: '0',
        label: 'دسترسی به بانک های اطلاعاتی',
        items: [{
          key: '0_0',
          label: 'لیست مدرسان',
         },
          {
            key: '1_1',
            label: 'لیست فراگیران',
          },
          {
            key: '1_2',
            label: 'لیست منابع عرضه کننده دوره/درس', items: [{
              key: '0_0_0',
              label: 'انجمن علمی حسابرسی فناوری اطلاعات ایران',
            },

            ]
          },]
      },
    ]);

    const items4 = ref([
      {
        key: '0',
        label: 'ارسال پیام به',items: []
      }

    ]);

    return {  items,items2,items3,items4}
  }


}

</script>
<style lang="scss" scoped>
.main-controller {
  padding: 100px;
}
h1{
  font-weight: 500;
  font-size: 20px;
  color:#4B5563;
  margin-right:212px;
  margin-bottom:19px;
  margin-top:36px;
}
.adminimage{
  margin-right: 116px;
  margin-top: 40px;
}
.sec1s{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 212px;
  background-color:#f5f5f5;
  border:#f5f5f5;
  border-radius: 18px;
}

.sec2s{  
  width:100%;
  height:324px;
  margin-right:212px;
  border:#f5f5f5;
  background-color:#F5F5F5;
  border-radius: 18px;
  margin-top:36px;
  direction: ltr;
}

.sec3s{
  width:100%;
  height: 65px;
  margin-top:36px;
  background-color:#f5f5f5;
  border:#f5f5f5;
  border-radius: 18px;
}
.insidediv1{margin-top: 20px;
margin-bottom:24px;
margin-right: 20px;}
.insidediv2{
  margin-bottom: 24px;
  margin-right: 20px;
}
// .img11{
//   margin-right: 906px;
// }.img12{margin-right: 912px;}
// .img13{margin-right: 886px;}
// .img14{margin-right: 880px;}
// .img21{margin-right: 918px;}
// .img22{margin-right: 910px;}
// .img23{margin-right: 898px;}
// .img24{margin-right: 880px;}
// .imgicon{margin-right: 944px;}
.text{
  font-weight: 500;
  font-size: 18px;
  color: #6B7280;
cursor: pointer;
  text-decoration: none;
}
.text:hover{
  color:#57CC99;
  cursor: pointer;
  text-decoration: none;

}

::v-deep(.sec2s) {
  .p-menuitem-text {
    font-weight: 500;
    font-size: 18px;
    color: #6B7280;
    margin-left: 720px;
  }
  .p-panelmenu-content{
    direction: rtl;
  }

  .p-menuitem-icon {
    width: 16px;
    height: 8px;
    direction: rtl;
  }
}


::v-deep(.sec2s:hover){
  .p-menuitem-text{

    color:#57CC99;
  }
  .p-panelmenu-icon{
    color:#57CC99;
  }
}

@media only screen and (max-width: 768px) {
  .adminimage {
    width: 22px;
    height: 22px;
    margin-right:20px;
  }
  .header1 {
    font-weight: bolder;
    font-size: 12px;
    color: #4B5563;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .sec1s {
    width: 374px;
    height: 138px;
    margin-bottom: 90px;
    margin-right: 20px;
  }
  .sec2s {
    width: 374px;
    height: 270px;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  .sec3s {
    width: 374px;
    height: 56px;
    margin-bottom: 20px;
    margin-top: 40px;
    margin-right: 20px;
  }
  .text {
    font-weight: 500;
    font-size: 12px;
    color: #6B7280;
    cursor: pointer;
    text-decoration: none;

  }
  .insidediv1 {
    margin-top: 12px;
    margin-bottom: 3px;
    margin-right: 16px;
  }
  .insidediv2 {
    margin-bottom: 3px;
    margin-right: 16px
  }
  .img11 {
    width: 10px;
    height: 10px;
    margin-right: 297px;
  }
  .img12 {
    margin-right: 302px;
    width: 10px;
    height: 10px
  }
  .img13 {
    margin-right: 284px;
    width: 10px;
    height: 10px
  }
  .img14 {
    margin-right: 280px;
    width: 10px;
    height: 10px
  }
  .img21 {
    margin-right: 300px;
    width: 10px;
    height: 10px
  }
  .img22 {
    margin-right: 295px;
    width: 10px;
    height: 10px
  }
  .img23 {
    margin-right: 288px;
    width: 10px;
    height: 10px
  }
  .img24 {
    margin-right: 274px;
    width: 10px;
    height: 10px
  }
  .imgicon {
    width: 10px;
    height: 10px
  }
  .imgicon {
    margin-right: 270px;
  }

  .text:hover {
    color: #57CC99;
    cursor: pointer;
    text-decoration: none;
  }
  ::v-deep(.sec2s) {
    .p-menuitem-text {
      font-weight: 500;
      font-size: 12px;
      color: #6B7280;
      margin-left: 195px;
    }
    .p-panelmenu-content{
      direction: rtl;
    }

    .p-menuitem-icon {
      width: 8px;
      height: 4px;
      direction: rtl;
    }
  }
::v-deep(.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-panelmenu-icon) {
    margin-right: 0.5rem;
    position: absolute;
    left: 4%;
}
}</style>