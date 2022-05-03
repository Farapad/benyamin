<template>
 <div class="main-controller">
    <div class="header mb-5">صدور گواهینامه</div> 
      <div class="top-controller"> 
        <div class="first-child">
            <div class="child my-3">
                <span class="my-2">نام و نام خانوادگی فراگیر</span>    
                <InputText class="input"/>
            </div>
            <div class="child my-3">
                <span class="my-2">شناسه درس</span>    
                <InputText class="input"/>
            </div>
        </div>
        <div class="upload-box">
       <div class="header-text"> بارگذاری عکس</div>
       <FileUpload  :showCancelButton="false" name="demo[]" url="./upload.php"  :multiple="true" accept="image/*" :maxFileSize="1000000">
                      <template #empty>  
                          <img class="img-empty"  src="@/assets/img/svg/upload.svg" />
                      </template>
       </FileUpload>
    </div>
    </div>   
</div>
</template>
<script>
import {ref} from 'vue';
import FileUpload from 'primevue/fileupload';
import {onMounted} from 'vue';
import { usePrimeVue } from "primevue/config";
export default {
    components : {
        FileUpload
    },
    setup() {
        
        const changeToSpanish = () => {
            const primevue = usePrimeVue();
            primevue.config.locale.upload = 'بارگذاری';
            primevue.config.locale.choose = 'انتخاب فایل';
        }

        onMounted(() => {
            changeToSpanish();
        });
    },
}
</script>
<style lang="scss" scoped>
.main-controller {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px;
    .header{
        display: flex;
        width: 100%;
        justify-content: center;
        color: black;
        font-weight: 700;
    }
    .top-controller{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .first-child {
            width: 50%;
            padding: 10px 20px;
            display: flex;
            flex-direction: column;
            .child {
                display:flex;
                flex-direction: column;
                .input{
                    border: none;
                    border-radius: 14px;
                }
            }
        }
    }
}
::v-deep(.p-inputtext:enabled:focus) {
    box-shadow: 0 0 0 0.2rem  rgba(87, 204, 153, 1);
    border-color: rgba(87, 204, 153, 1);
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
    height: 250px;
    width: 100%;
}
::v-deep(.p-button.p-fileupload-choose){
    position: relative;
    overflow: hidden;
    top: 200px;
    z-index: 10;
    background: rgba(253, 175, 59, 1);
    border: none;
    font-size: 14px;
    padding: 7px 25px;
    right: 150px;
 }
::v-deep(.p-button .p-button-icon-left){
    display: none;
}
::v-deep(.p-fileupload-buttonbar .p-button:last-child) {
    position: relative;
    top: 200px;
    z-index: 10;
    margin-right: 70px;
    background: rgba(87, 204, 153, 1);
    border: none;
    font-size: 14px;
    padding: 7px 30px;
    right: 140px;
}
::v-deep(.p-fileupload .p-fileupload-content){
    border-radius: 10px;
    border: none;
}
::v-deep(.p-fileupload-buttonbar) {
    height: 1px;
    // padding: 0px;
}
.upload-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
  .header-text {
      display: flex;
      justify-content: flex-start;
      width: 100%;
  }
}
.img-empty {
  width: 140px;
}
@media (max-width:450px) {
    .top-controller {
        display: flex;
        flex-direction: column;
        width: 100%;
        .first-child {
            width: 100% !important;
        }
        .last-child {
            width: 100% !important;
        }
    }
    .main-controller {
        padding: 20px;
    }

  ::v-deep(.p-fileupload .p-fileupload-content){
    height: 250px;
    width: 380px;
  }
  ::v-deep(.p-button.p-fileupload-choose){
    position: relative;
    overflow: hidden;
    top: 200px;
    z-index: 10;
    background: rgba(253, 175, 59, 1);
    border: none;
    font-size: 14px;
    padding: 7px 25px;
    right: 20px;
 }
  ::v-deep(.p-fileupload-buttonbar .p-button:last-child) {
    position: relative;
    top: 200px;
    z-index: 10;
    margin-right: 70px;
    background: rgba(87, 204, 153, 1);
    border: none;
    font-size: 14px;
    padding: 7px 30px;
    right: 0px;
 }
}
   
</style>