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
 </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';
import {ref} from 'vue'

export default {
    components : {
        Dropdown
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
</style>