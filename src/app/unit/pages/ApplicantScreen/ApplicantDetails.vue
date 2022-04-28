<template>
    <div class="main-controller">
        <div class="controller">
            <div class="header"> 
                <p>مشخصات متقاضی حقوقی</p>
            </div>
            <div class="child-controller">
              <div class="child">
                <span class="label">نام متقاضی به فارسی</span>
                <InputText  class="input"/>
              </div>
              <div class="child">
                <span class="label">نام متقاضی به انگلیسی </span>
                <InputText  class="input"/>
              </div>
            </div>
            <div class="child-controller">
              <div class="child">
                <span class="label">شماره ثبت</span>
                <InputText  class="input"/>
              </div>
              <div class="child">
                <span class="label">شناسه ملی</span>
                <InputText  class="input"/>
              </div>
            </div>
            <div class="child-controller">
              <div class="child">
                <span class="label">نوع فعالیت</span>
                <InputText  class="input"/>
              </div>
              <div class="child">
                <span class="label">نشانی</span>
                <InputText  class="input"/>
              </div>
            </div>
            <div class="child">
                <span class="label">کد پستی</span>
                <InputText  class="input"/>
            </div>
            <div class="child">
                <span class="label">نام و نام خانوادگی مسؤل ارتباطات</span>
                <InputText  class="input"/>
            </div>
            <div class="child">
                <span class="label">شماره تلفن</span>
                <InputText  class="input"/>
            </div>
            <div class="child">
                <span class="label">آدرس ایمیل</span>
                <InputText  class="input"/>
            </div>
            <div class="upload-box">
             <div class="header-text mt-2"> بارگزاری فایل منبع تامین کننده جهت انعکاس در سامانه</div>
                 <FileUpload  :showCancelButton="false" name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000">
                      <template #empty>  
                          <img src="@/assets/img/svg/upload.svg" />
                      </template>
                 </FileUpload>
            </div>
            <div class="bottom-box">
                <img src="@/assets/img/svg/png/video-lab.png" >
            </div>
        </div>
    </div>
</template>
<script>
import { useToast } from 'primevue/usetoast';
import FileUpload from 'primevue/fileupload';
import { ref } from 'vue';
import { usePrimeVue } from "primevue/config";
import { defineComponent, onMounted } from "vue";
export default {
    components : {
        FileUpload
    },
    setup() {
        const toast = useToast();
		const onUpload = () => {
            toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
        }

        const changeToSpanish = () => {
            const primevue = usePrimeVue();
            primevue.config.locale.upload = 'بارگذاری';
            primevue.config.locale.choose = 'انتخاب فایل';
        }

        onMounted(() => {
             changeToSpanish();
        });

        return {
            onUpload
        }
    },
}
</script>
<style lang="scss" scoped>
.main-controller{
  padding: 30px;
  .controller{
      display: flex;
      flex-direction:column;
      justify-content: center;
      .header{
          display: flex;
          justify-content: center;
          p {
              font-weight: 700;
          }
      }
      .child{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-top: 24px;
          margin-bottom: 24px;
          .label{
              font-size: 12px;
              font-weight: 600;
              margin-bottom: 8px;
              color: rgba(75, 85, 99, 1);
          }
          .input{
            width: 100% ;
            border-radius: 8px ;
            border: none;
          }
      }
  }
}

.header-text{
    text-align: right;
    font-size: 12px;
    color: rgba(75, 85, 99, 1);
    margin-bottom: -20px !important;
}

::v-deep(.p-fileupload-empty){
    display: flex;
    justify-content: center;
}
::v-deep(.p-fileupload .p-fileupload-buttonbar){
    border: none;
    background: #f2f3f5;
}
::v-deep(.p-fileupload .p-fileupload-content){
    height: 200px;
}
::v-deep(.p-button.p-fileupload-choose){
    position: relative;
    overflow: hidden;
    top: 144px;
    z-index: 10;
    background: rgba(253, 175, 59, 1);
    border: none;
    font-size: 14px;
    padding: 7px 25px;
 }
::v-deep(.p-button .p-button-icon-left){
    display: none;
}
::v-deep(.p-fileupload-buttonbar .p-button:last-child) {
    position: relative;
    top: 144px;
    z-index: 10;
    margin-right: 70px;
    background: rgba(87, 204, 153, 1);
    border: none;
    font-size: 14px;
    padding: 7px 30px;
}
::v-deep(.p-fileupload .p-fileupload-content){
    border: 2px dashed  rgba(222, 222, 222, 1);
    border-radius: 10px;
}
::v-deep(.p-fileupload-buttonbar) {
    height: 1px;
    // padding: 0px;
}
.bottom-box{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    img{
        width: 100%;
    }
}

@media (min-width:450px){
    .child-controller{
    display: flex;
    .child{
        width: 50%;
        padding: 5px 10px;
    }
}
}
</style>