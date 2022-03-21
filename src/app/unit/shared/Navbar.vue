<template>
   <div class="main-controller">
    <div class="controller">
        <div>
            <img class="logo" alt="logo" src="@/assets/img/svg/png/logo-daneshyad.png">
        </div>
        <div class="d-flex box-navbar">
          <div>
            <span class="text-color font-16 hover-pointer nav-item">دوره ها / درس ها</span>
          </div>
          <div>
             <span class="text-color font-16 hover-pointer nav-item">خبر ها</span>
          </div>
          <div>
             <span class="text-color font-16 hover-pointer nav-item">اطلاعیه ها</span>
          </div>
          <div>
             <span class="text-color font-16 hover-pointer nav-item">درباره ما</span>
          </div>
        </div>  
        <div>
           <div></div>
           <div>
                  <span  class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText type="text" v-model="Search" placeholder="جستجو کنید..." />
                  </span>
           </div>
        </div>
     </div>
     <div class="controller-responsive">
        <div>
            <img @click="hamburgerbar" class="res-ham hover-pointer" alt="logo" src="@/assets/img/svg/hamburger.svg">
        </div> 
        <div>
            <img class="res-logo" alt="logo" src="@/assets/img/svg/png/logo-daneshyad.png">
        </div>
        <div>
            <i id="search" class="pi text-color pi-search" />
        </div>
     </div>
         <div id="hamberger" class="box-responsive-controller">
       
        </div>
        <img @click="closehamburger" id="close" class="close" src="@/assets/img/svg/close.svg" alt="close">
   </div>
</template>
<script>

import { ref } from 'vue';
import { useRoute } from "vue-router";

export default {
  components:{},
  setup() {
    const route = useRoute();
    const Search = ref()

    function hamburgerbar(){
        document.getElementById("hamberger").style.right = "-12%";
        document.getElementById("close").style.display = "block";
        document.getElementById("search").style.display = "none";
    }
    function closehamburger(){
        document.getElementById("hamberger").style.right = "-100%";
        document.getElementById("close").style.display = "none";
        document.getElementById("search").style.display = "block";
    }

    return {
      route,
      Search,
      hamburgerbar,
      closehamburger
    };
  },
};
</script>
<style lang="scss" scoped>
@media only screen and  (max-width:450px) {
    .controller{
        display: none !important;
    }
    .res-ham{
        width:20px !important;
    }
    .res-logo{
        width:100px !important;
    }
     .pi-search{
        color: rgba(55, 65, 81, 1) !important;
        background: rgba(246, 246, 246, 1) !important;
        padding: 8px !important;
        border-radius: 50%;
        top: 30% !important;
        left: 2%  !important;
    }
    .box-responsive-controller{
        background-color: rgba(244, 244, 244, 1)red;
        height: 1000px;
        z-index: 10;
        position: relative;
        top: -80px;
        max-width: 304px;
        right: -100%;
        transition: 0.9s;
    }
    .close{
        position: absolute;
        top: 40px;
        right: 343px;
        width: 36px;
        display: none;
        z-index: 10;
    }
}

@media only screen and  (min-width:450px) {
        .controller-responsive{
            display: none  !important;
        }
    .box-responsive-controller{
            display: none;
        }
    .close{
        position: absolute;
        top: 40px;
        right: 343px;
        width: 36px;
        display: none;
        z-index: 10;
    }
}

.controller-responsive{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

::v-deep(.p-inputtext){
    border-radius: 30px;
    height: 40px;
    font-size: 14px;
}

.main-controller{
    width: 100%;
    padding:40px;
}
.controller{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.logo{
    width:135px;
}
.p-input-icon-left{
    display: flex;
    justify-content: center;
    align-items: center;
    .pi-search{
        color: rgba(87, 204, 153, 1) !important;
        background: rgba(246, 246, 246, 1) !important;
        padding: 8px !important;
        border-radius: 50%;
        top: 30% !important;
        left: 2%  !important;
    }
}
.box-navbar{
    width: 50%;
    justify-content: space-evenly;
}
.nav-item:hover{
    color:rgba(87, 204, 153, 1);
    transition: 0.7s;
}
.nav-item:hover:before{
     content: url('../../../../src/assets/img/svg/Arrow.svg');
     transition: 0.9s;
}
</style>