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
            <Textarea class="text-area" :placeholder="'پیام خود را بنویسید'" v-model="userComment" :autoResize="true" rows="6" cols="50" />
        </div>
        <div class="last-child">
          <div class="controller">
            <div class="first-child">
              <span>ارزیابی شما نسبت به:</span>
              <Dropdown v-model="position" :options="positions" optionLabel="name" optionValue="code" placeholder="سامانه" />
            </div>
            <div class="last-child">
              <Rating class="star" v-model="val2" :cancel="false" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
export default {
  components:
  {Rating,Textarea,Dropdown},
  setup() {
    const val1 = ref();
    const val2 = ref(0);
    const userComment = ref(null);
    const position = ref (null);
    const positions = ref([
            {name: 'سامانه', code: 'NY'},
            {name: 'مدرس', code: 'RM'},
            {name: 'ادمین', code: 'LDN'},
            {name: 'مدیریت', code: 'IST'}
        ]);
    return {val1, val2 , userComment  , positions , position};
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
      width: 50%;
      span{
        color: rgba(75, 85, 99, 1);
      }
      .text-area{
        border: none;
        border-radius: 8px;
      }
    }
    .last-child{
      width: 50%;
      padding-top: 57px;
      padding-left: 20px;
      padding-right: 20px;
      .controller{
        display: flex;
        flex-direction: column;
        height:162px;
        background: #ffff;
        width: 100%;
        border-radius: 8px;
        .first-child {
          width: 100%;
          display: flex;
          flex-direction: row !important;
          justify-content: space-between;
          align-items: center;
        }
        .last-child{
          width: 100%;
          display: flex;
          justify-content: center;
          padding-top: 10px !important;
        }
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
::v-deep(.p-dropdown) {
  width: 50%;
  border: 2px solid rgba(87, 204, 153, 1)
}
::v-deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight) {
  background: rgba(87, 204, 153, 1) !important;
}
</style>