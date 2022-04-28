<template>
 <div>
<h1 class="header1">دسترسی به زیر بخش های واسط کاربری اصلی دانش یاد</h1>
<div class="sec1">
  <PanelMenu class="sec1s" :model="items" />
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
  setup() {
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
h1{
  font-weight: 500;
  font-size: 20px;
  color:#4B5563;
  margin-right:212px;
  margin-bottom:19px;
  margin-top:36px;
}
.sec1{
  width: 1016px;
  height: 212px;
  margin-right:212px;
  background-color:#f5f5f5;
  border:#f5f5f5;
  border-radius: 18px;
}
.sec2{  width: 1016px;
  height: 326px;
  margin-right:212px;}
.sec3{
  width: 1016px;
  height: 65px;
  margin-right:212px;
  margin-top:36px;
  margin-bottom:36px;
}
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
    margin-right:20px;
  }
  .sec2{    width: 374px;
    height: 78px;
    margin-bottom:20px;    margin-right:20px;}
  .sec3{    width: 374px;
    height: 56px;
    margin-bottom:20px;
  margin-top: 40px;
    margin-right:20px;}
}

</style>