<template>
   <div class="main-controller">
    <div class="controller">
        <div>   
            <img @click="getpage" class="logo hover-pointer" alt="logo" src="@/assets/img/svg/png/logo-daneshyad.png">
        </div>
        <div class="d-flex box-navbar">
          <div>   
            <span class="text-color font-16 hover-pointer nav-item">
                <template class="d-flex">
		        	<div>
		        		<Menubar class="text-color" :model="items">
		        		</Menubar>
		        	</div>
		        </template>
            </span>
          </div>
        </div>  
        <div>
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
        <div  @click="openSearch">
            <i id="search-icon-res" class="pi text-color pi-search" />
        </div>
        <div class="hidden res-search">
                <img @click="closeSearch"  class="hover-pointer px-2" src="@/assets/img/svg/close.svg" alt="close">
                <span  class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText type="text" v-model="Search" placeholder="جستجو کنید..." />
                </span>
        </div>
     </div>
         <div id="hamberger" class="box-responsive-controller">
             <div class="child">
                    <div>
                        <img class="logo-icon" alt="logo" src="@/assets/img/svg/png/logo-daneshyad.png">
                    </div>
                    <!-- <div class="mt-3">
                        <img class="icon"  alt="logo" src="@/assets/img/svg/letters-icon.svg">
                        <span class="text-color font-16 hover-pointer px-2">دوره ها / درس ها</span>
                    </div>
                    <div class="mt-3">
                        <img class="icon" alt="logo" src="@/assets/img/svg/news-icon.svg">
                        <span class="text-color font-16 hover-pointer px-2">خبر ها</span>
                    </div>
                    <div class="mt-3">
                        <img class="icon" alt="logo" src="@/assets/img/svg/etelaye-icon.svg">
                        <span class="text-color font-16 hover-pointer px-2">اطلاعیه ها</span>
                    </div>
                    <div class="mt-3 d-flex">
                        <img class="icon" alt="logo" src="@/assets/img/svg/about-us-icon.svg">
                        <span class="text-color font-16 hover-pointer px-1">درباره ما</span>
                    </div> -->
                    <div class="mt-3 d-flex">
                        <PanelMenu :model="items" />
                    </div>
             </div>
        </div>
        <img @click="closehamburger()" id="close" class="close hover-pointer" src="@/assets/img/svg/close.svg" alt="close">
   </div>
</template>
<script>

import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import Menu from 'primevue/menu';
import PanelMenu from 'primevue/panelmenu';
import Menubar from 'primevue/menubar';
import router from '@/core/router/router';
``
export default {
  components:{Menubar,Menu,PanelMenu},
  setup() {
    const route = useRoute();
    const Search = ref();

    function getpage () {
        router.push('/pages')
    }

    function closeSearch () {
        document.querySelector('.res-ham').classList.remove('hidden');
        document.querySelector('.res-logo').classList.remove('hidden');
        document.getElementById('search-icon-res').classList.remove('hidden');
        document.querySelector('.res-search').classList.add('hidden');
    }

    function hamburgerbar(){
        document.getElementById("hamberger").style.right = "-12%";
        document.getElementById("close").style.display = "block";
        document.getElementById("search-icon-res").style.display = "none";
        document.getElementById("hamberger").style.display = "block";
    }

    function openSearch() {
        document.querySelector('.res-ham').classList.add('hidden');
        document.querySelector('.res-logo').classList.add('hidden');
        document.getElementById('search-icon-res').classList.add('hidden');
        document.querySelector('.res-search').classList.remove('hidden');
    }


    function closehamburger(){
        document.getElementById("hamberger").style.right = "-100%";
        document.getElementById("close").style.display = "none";
        document.getElementById("search-icon-res").style.display = "block";
        document.getElementById("hamberger").style.display = "none";
    }
        const items = ref([
               
					{   
						label:'دوره ها و درس ها',
						items:[
							{
								label:'امور حقوقی ',
								// icon:'pi pi-fw pi-user-plus',
                                 command: () => {
                                    router.push('/news')
                                    closehamburger();
                                }
							},
                            	{
								label:'ایمنی',
								// icon:'pi pi-fw pi-user-plus',
							},
                            	{
								label:'بازاریابی و فروش',
								// icon:'pi pi-fw pi-user-plus',
							},
                            	{
								label:'زبان',
								// icon:'pi pi-fw pi-user-plus',
							},
                            	{
								label:'سلامت',
								// icon:'pi pi-fw pi-user-plus',
							},
                            	{
								label:'کسب و کار',
								// icon:'pi pi-fw pi-user-plus',
							},
							{
								label:'فناوری اطلاعات و ارتباطات',
								// icon:'pi pi-fw pi-users',
								items:[
									{
										label:'نرم افزار',
										// icon:'pi pi-fw pi-filter',
									},
									{
										// icon:'pi pi-fw pi-bars',
										label:'سخت افزار'
									},
									{
										// icon:'pi pi-fw pi-bars',
										label:'شبکه'
									},
									{
										// icon:'pi pi-fw pi-bars',
										label:'علوم داده'
									},
									{
										// icon:'pi pi-fw pi-bars',
										label:'امنیت'
									},
									{
										// icon:'pi pi-fw pi-bars',
										label:'طراحی وب',
                                        command: () => {
                                            router.push('/courses');
                                            closehamburger();
                                        }
									},
									{
										// icon:'pi pi-fw pi-bars',
										label:'انیمیشن'
									}
								]
							},
                            	{
								label:'مالی و حسابداری',
								// icon:'pi pi-fw pi-user-plus',
							},
                            	{
								label:'مدیریت',
								// icon:'pi pi-fw pi-user-plus',
							},
                            	{
								label:'مهندسی',
								// icon:'pi pi-fw pi-user-plus',
							}
						]
					},      
                    {label:"خبر ها",
                         command: () => {
                                    router.push('/news')
                                    closehamburger();
                                }
                     },
                    {label:"اطلاعیه ها",
                     command: () => {
                                    router.push('/news')
                                    closehamburger();
                                }
                    },
                      {label:"درباره ما",
                     command: () => {
                                    router.push('/about')
                                    closehamburger();
                                }
                    },
				]);
    

    return {
      route,
      Search,
      hamburgerbar,
      closehamburger,
      items,
      openSearch,
      closeSearch,
      getpage
    };
  },
};
</script>
<style lang="scss"  scoped>
.hidden{
    display: none !important;
}
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
::v-deep(.p-panelmenu .p-panelmenu-panel:first-child .p-panelmenu-header > a) {
    border:none;
    background: #f4f4f4;
}
::v-deep(.p-panelmenu .p-panelmenu-header > a) {
    background:#f4f4f4;
    border: none;
}
::v-deep(.p-panelmenu .p-panelmenu-panel .p-panelmenu-content) {
    background: #f4f4f4;
    border: none;
}
::v-deep(.p-panelmenu .p-panelmenu-header > a .p-panelmenu-icon) {
    position:absolute;
    margin:0px;
    left: -40%;
    display: none;
}
.res-search{
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>
