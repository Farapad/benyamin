<template>
 <div>
<h1 class="header1">دسترسی به زیر بخش های واسط کاربری اصلی دانش یاد</h1>
<div class="sec1">
  <PanelMenu class="sec1s" :model="items" style="border:white;background:#FFFFFF;
border-radius: 6px;" />
</div>
<h1 class="header1">دسترسی به بخش ورود به سامانه</h1>
   <div class="sec1">
     <PanelMenu  class="sec1s" :model="items2" />
   </div>
   <h1 class="header1">دسترسی به اطلاعات متفرقه</h1>
   <div class="sec2">
     <PanelMenu class="sec2s" :model="items3" />
   </div>
<div class="sec3">
  <PanelMenu class="sec3s" :model="items4" />
</div>
 </div>
</template>
<script>
import PanelMenu from 'primevue/panelmenu';
import { ref } from 'vue';
export default {
  components:{PanelMenu},
  setup() {   const expandedKeys = ref({});
    const items = ref([
      {
        key: '0',
        label: 'دوره ها',
      },
      {
        key: '1',
        label: 'خبر ها',
      },
      {
        key: '2',
        label: 'اطلاعیه ها',
      },
      {
        key: '3',
        label: 'درباره ی ما',

      }
    ]);

    const items2 = ref([
      {
        key: '0',
        label: 'فراگیر',
      },
      {
        key: '1',
        label: 'مدرس',
      },
      {
        key: '2',
        label: 'مدیریت',
      },
      {
        key: '3',
        label: 'متقاضی برگزاری درس/دوره',

      }
    ]);

    const items3 = ref([
      {
        key: '0',
        label: 'دسترسی به بانک های اطلاعاتی',
      },
      {
        key: '1',
        label: 'دسترسی به اطلاعات مالی',
      }
    ]);

    const items4 = ref([
      {
        key: '0',
        label: 'ارسال پیام به',
      }

    ]);

    return {  items,items2,items3,items4 }
  }


}

</script>
<style lang="scss" scoped>









@media only screen and (max-width: 768px)  {
  .header1{
    font-weight: bolder;
    font-size: 12px;
    color:#4B5563;
    margin-right:20px;
    margin-bottom:10px;
    margin-top:90px;
  }
  .sec1{
    width: 374px;
    height: 138px;
    margin-bottom:20px;
  }
  .sec2{    width: 374px;
    height: 78px;
    margin-bottom:20px;}
  .sec3{    width: 374px;
    height: 56px;
    margin-bottom:20px;
  margin-top: 40px}
}

</style>