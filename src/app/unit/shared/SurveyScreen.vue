<template>
  <div class="main-controller">
    <div class="header">
        <h5>نظر سنجی</h5>
    </div>
    <div class="user-information">
        <div class="first-child">
            <span class="py-2">نام و نام خانوادگی</span>
            <InputText class="user-name"/>
        </div>
        <div class="last-child">
            <span class="py-2">ایمیل</span>
            <InputText class="email"/>
        </div>
    </div>
    <div class="user-rate">
        <div class="first-child">
            <span class="py-2">پیام</span>
            <Textarea v-model="userComment" :autoResize="true" rows="5" cols="30" />
        </div>
        <div class="last-child">
            <!-- <span class="py-2">نام و نام خانوادگی</span> -->
        </div>
    </div>
    <Rating class="star" v-model="val2" :cancel="false" />
  </div>
</template>
<script>
import {ref} from "vue";
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';
export default {
  components:
  {Rating,Textarea},
  setup() {
    const val1 = ref();
    const val2 = ref(0);
    const userComment = ref(null)
    const role = ref([
      {
        name: 'سامانه',
        code: 'SA',},{ name: 'مدرس',
        code: 'MO',},
      { name: 'ادمین',
        code: 'AD',},
      { name: 'مدیریت',
        code: 'MA',}]);
    return {val1, val2 , userComment};
  }}
</script>
<style lang="scss" scoped>

.main-controller{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 100px;
  .header{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .user-information {
    display: flex;
    .first-child {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 20px;
      .user-name{
        border-radius: 8px;
        border:none;
      }
      span {
        color: rgba(75, 85, 99, 1);
      }
    }
    .last-child{
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 20px;
      .email {
        border-radius:8px;
        border: none;
      }
      span{
        color: rgba(75, 85, 99, 1);
      }
    }
  }
  .user-rate {
    display: flex;
    .first-child{
      display: flex;
      flex-direction: column;
      padding: 20px;
      span{
        color: rgba(75, 85, 99, 1);
      }
    }
  }
}

::v-deep(.p-rating .p-rating-icon:first-child){
  margin-left: 4px !important;
}
::v-deep(.p-rating .p-rating-icon){
  font-size: 30px;
}
::v-deep(.pi-star-fill::before){
   content:"\e937"!important;
   color: yellow;
   font-size: 30px;
}
</style>