<template>
   <div>

   </div>
       
</template>
<script>
import { ApiService } from '@/core/repository/api.service';

export default {
  components:{},
  setup() {
      console.log('sdyfusdfgUSD');
      ApiService.getInstance().business({
          mainUrl: 'http://sandbox.farapod.ir',
              params: {hi:"hi"},
          onReceive:() => {
            console.log('where :');
          },
          body: {hello:"hello"}
      })
    return {   };
  },
};
</script>
<style lang="scss"  scoped>
@media  (max-width:450px) {
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
        background-color: rgba(244, 244, 244, 1);
        z-index: 10;
        position: relative;
        top: -80px;
        max-width: 304px;
        right: -100%;
        transition: 0.9s;
        display: none;
        .child{
            display: flex;
            flex-direction: column;
            padding: 25px;
            transition: 0.9s;
        }
    }
    .close{
        position: absolute;
        top: 40px;
        right: 343px;
        width: 36px;
        display: none;
        z-index: 10;
        transition: 0.5s;
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
    align-items: center;
}
.nav-item:hover{
    color:rgba(87, 204, 153, 1);
    transition: 0.7s;
}
/* // .nav-item:hover:before{
//      content: url('../../../../src/assets/img/svg/Arrow.svg');
//      transition: 0.9s;
// } */
.icon{
    width: 20px;
}
.logo-icon{
    width: 93px;
}

::v-deep(.p-treeselect .p-treeselect-trigger)
    {
     background: transparent;
     color: #495057;
     width: 2.357rem;
     border-top-right-radius: 4px;
     border-bottom-right-radius: 4px;
     position: absolute;
     left: 127px;
     top: 15px;
    }
::v-deep(.p-menubar){
    background:none;
    padding: 0px;
    color:blue ;
}
::v-deep(.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text){
    color: #495057;
}
::v-deep(.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link){
    padding: 14px 2px;
    padding-right: 36px;
}
::v-deep(.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus){
    box-shadow: none;
}
::v-deep(.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text){
   color: rgba(87, 204, 153, 1) !important;
}
::v-deep(.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon){
    position: absolute;
    left: 127px;
    top: 19px;
}
::v-deep(.p-menubar .p-submenu-list){
    width: 300px;
}
::v-deep(.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list){
    right: 100%;
    left: 0%;
}
::v-deep(.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon){
    transform: rotate(180deg);
    margin-right: 20px;
}
.icon-about-us-icon:before {
  content: "\e900";
}
</style>
