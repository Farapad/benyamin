<template>
 <div class="main-controller">
    <div class="header mb-5">درج اطلاعات درباره درس</div> 
    <div class="top-controller"> 
        <div class="first-child">
            <div class="child my-3">
                <span class="my-2">عنوان گروه آموزشی</span>    
                <Dropdown v-model="position" :options="positions" optionLabel="name" optionValue="code" placeholder="فناوری اطلاعات و ارتباطات" />
            </div>
            <div class="child my-3">
                <span class="my-2">عنوان درس</span>    
                <InputText class="input"/>
            </div>
            <div class="child my-3">
                <span class="my-2">مبلغ شهریه</span>    
                <InputText class="input"/>
            </div>
        </div>
        <div class="last-child">
            <div class="child my-3">
                <span class="my-2">عنوان درس</span>    
                <InputText class="input"/>
            </div>
            <div class="child my-3">
                <span class="my-2">مبلغ شهریه</span>    
                <InputText class="input"/>
            </div>
        </div>
    </div>
   <div class="upload-box">
       <div class="header-text mt-5"> بارگذاری عکس</div>
       <FileUpload  :showCancelButton="false" name="demo[]" url="./upload.php"  :multiple="true" accept="image/*" :maxFileSize="1000000">
                      <template #empty>  
                          <img class="img-empty"  src="@/assets/img/svg/upload.svg" />
                      </template>
       </FileUpload>
    </div>  
 </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';
import {ref} from 'vue';
import FileUpload from 'primevue/fileupload';
import {onMounted} from 'vue';
import { usePrimeVue } from "primevue/config";


export default {
    components : {
        Dropdown,
        FileUpload
    },
    setup() {
        const position = ref (null);
        const positions = ref([
            {name: 'فناوری اطلاعات ', code: 'NY'},
            {name: 'امور حقوقی ', code: 'RM'},
            {name: 'ایمنی', code: 'LDN'},
            {name: 'بازاریابی و فروش', code: 'IST'},
            {name: 'زبان', code: 'NY'},
            {name: 'سلامت ', code: 'RM'},
            {name: 'کسب و کار', code: 'LDN'},
            {name: 'فناوری اطلاعات و ارتباطات', code: 'IST'},
            {name: 'مالی', code: 'NY'},
            {name: 'حسابداری ', code: 'RM'},
            {name: 'امنیت', code: 'LDN'},
            {name: 'گروه آموزشی جدید', code: 'IST'},
        ]);

        const changeToSpanish = () => {
            const primevue = usePrimeVue();
            primevue.config.locale.upload = 'بارگذاری';
            primevue.config.locale.choose = 'انتخاب فایل';
        }

        onMounted(() => {
            changeToSpanish();
        });

        return {
            positions,position
        }
        
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
        .last-child {
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

::v-deep(.p-dropdown) {
  width: 100%;
  border: 2px solid rgba(87, 204, 153, 1);
  border-radius: 14px;
}
::v-deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight) {
  width: 50%;
  border: 2px solid rgba(87, 204, 153, 1)
}
::v-deep(.p-dropdown:not(.p-disabled).p-focus){
   border-color: rgba(87, 204, 153, 1);
   box-shadow: none;
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
    width: 650px;
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