<template>
    <div class="main-controller">
        <div class="controller">
            <div class="header"> 
                <p>مشخصات متقاضی حقوقی</p>
            </div>
            <div class="child">
                <span class="label">نام متقاضی به فارسی</span>
                <InputText  class="input"/>
            </div>
            <div class="child">
                <span class="label">نام متقاضی به انگلیسی </span>
                <InputText  class="input"/>
            </div>
            <div class="child">
                <span class="label">شماره ثبت</span>
                <InputText  class="input"/>
            </div>
            <div class="child">
                <span class="label">شناسه ملی</span>
                <InputText  class="input"/>
            </div>
            <div class="child">
                <span class="label">نوع فعالیت</span>
                <InputText  class="input"/>
            </div>
            <div class="child">
                <span class="label">نشانی</span>
                <InputText  class="input"/>
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
             <span> بارگزاری فایل منبع تامین کننده جهت انعکاس در سامانه</span>
                 <FileUpload  :showCancelButton="false" name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000">
                      <template #empty>  
                          <img src="@/assets/img/svg/upload.svg" />
                      </template>
                 </FileUpload>
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
::v-deep(.p-fileupload-empty){
    display: flex;
    justify-content: center;
}
::v-deep(.p-fileupload .p-fileupload-buttonbar){
    border: none;
    background: #f2f3f5;
}
</style>