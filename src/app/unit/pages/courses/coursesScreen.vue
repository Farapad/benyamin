<template>
   <div class="header">
      <span class="text">مرتب سازی :</span>
        <div class="switch-button">
        <div  @click="getall" class="all text">همه</div>
        <div @click="newest" class="new text">جدیدترین</div>
        <div @click="popularest" class="popular text">محبوب ترین</div>
        <div @click="getinexpensive" class="inexpensive text">ارزان ترین</div>
        <div class="custom"></div>
      </div>
   </div>
 <div class="card">
  <DataView :value="products"  :paginator="true" :layout="layout"  :rows="12" :sortOrder="sortOrder" :sortField="sortField">
      <template #grid="slotProps">
      <div class="m-3 card-controller">
          <img class="card-controller-img" :src="slotProps.data.image" :alt="slotProps.data.name"/>
          <div class="card-controller-bottom">
            <div class="first-child">
              <span class="mx-3 text">{{slotProps.data.name}}</span>
              <Button class="p-button-success mx-3" :label="'آفلاین'"/>
            </div>
            <div class="last-child">
               <span class="last-child-text">اموزش مقدماتی تا پیشرفته زبان های برنامه نویسی</span>
               <div class="last-child-bottom">
                  <Button class=" " :label="'ثبت نام فردی'"/>
                   <Button class=" " :label="'ثبت نام گروهی'"/>
               </div>
            </div>
          </div>
      </div>    	
			</template>
		</DataView>
    </div> 
</template>
<script>
import DataView from 'primevue/dataview';
import {ref} from 'vue';
export default {
    components:{  
    DataView
    },
    setup() {

     const layout = ref('grid');

     function newest () {
          document.querySelector('.custom').style.right = '25%';
          document.querySelector('.new').style.color = '#ffff';
          document.querySelector('.popular').style.color = '#475569';
          document.querySelector('.all').style.color = '#475569';

     }

     function popularest () {
         document.querySelector('.custom').style.right = '48%';
         document.querySelector('.popular').style.color = '#ffff';
         document.querySelector('.new').style.color = '#475569';
         document.querySelector('.all').style.color = '#475569';
         document.querySelector('.inexpensive').style.color = '#475569';
     }

     function getall () {
         document.querySelector('.custom').style.right = '5%';
         document.querySelector('.all').style.color = '#ffff';
         document.querySelector('.new').style.color = '#475569';
         document.querySelector('.popular').style.color = '#475569';
         document.querySelector('.inexpensive').style.color = '#475569';
     }

     function getinexpensive () {
         document.querySelector('.custom').style.right = '72%';
         document.querySelector('.inexpensive').style.color = '#ffff';
         document.querySelector('.new').style.color = '#475569';
         document.querySelector('.popular').style.color = '#475569';
     }

    
      


      const picture = ref(require('../../../../assets/img/svg/png/html.png'));
      const picturee = ref(require('../../../../assets/img/svg/png/js.png'));
      const products = [
        {id:1000,code: "f230fh0g3",name: 'Bamboo Watch',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
      ];
      const sortKey = ref();

      const sortOrder = ref();

      const sortField = ref();

      const sortOptions = ref([
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'},
      ]);

       const onSortChange = (event) => {
            const value = event.value.value;
            const sortValue = event.value;
            if (value.indexOf('!') === 0) {
                sortOrder.value = -1;
                sortField.value = value.substring(1, value.length);
                sortKey.value = sortValue;
            }
            else {
                sortOrder.value = 1;
                sortField.value = value;
                sortKey.value = sortValue;
            }
        };
    return {
      products,
      layout,
      onSortChange,
      sortOrder,sortField,sortKey,sortOptions,newest,popularest,getall,getinexpensive
    };
    },
}
</script>

<style lang="scss" scoped>
::v-deep(.p-grid){
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
::v-deep(.p-dataview .p-dataview-content){
  background:#f2f3f5;
}
::v-deep(.card){
  border: none;
}
::v-deep(.p-button.p-button-success){
  background:  #F3F4F6;
  color: rgba(87, 204, 153, 1);
  border: none;
  font-size: 14px;
  border-radius: 8px;
  font-weight: 600;
  padding: 8px 22px;
}
::v-deep(.p-button){
 border: none;
 font-size: 14px;
 font-weight: 700;
 border: 1px solid rgba(87, 204, 153, 1);
 background: #fff;
 color: rgba(71, 85, 105, 1);
}

::v-deep(.p-button:hover){
   border: none;
 font-size: 14px;
 font-weight: 700;
 border: 1px solid rgba(87, 204, 153, 1);
 background: rgba(87, 204, 153, 1);
 color: rgba(238, 255, 240, 1);
}

::v-deep(.p-paginator .p-paginator-pages .p-paginator-page){
  border-radius: 50%;
  color:rgba(156, 163, 175, 1);
}

::v-deep(.p-paginator .p-paginator-pages .p-paginator-page:hover){
  border-radius: 50%;
  color:rgba(156, 163, 175, 1);
}

::v-deep(.p-paginator .p-paginator-pages .p-paginator-page.p-highlight){
  background: rgba(87, 204, 153, 1);
  border-color: rgba(87, 204, 153, 1);
  color: #fff;
}

::v-deep(.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover){
  color: rgba(71, 85, 105, 1);
}

::v-deep(.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight)){
  color: rgba(71, 85, 105, 1);
}

::v-deep(.p-paginator .p-paginator-prev){
  color: rgba(71, 85, 105, 1);
}

::v-deep(.p-paginator .p-paginator-prev:hover){
  color: rgba(71, 85, 105, 1);
}

::v-deep(.p-paginator .p-paginator-next){
  color: rgba(71, 85, 105, 1) !important;
}

::v-deep(.p-paginator .p-paginator-next:hover){
  color: rgba(71, 85, 105, 1) !important;
}

::v-deeP(.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover){
  color: rgba(71, 85, 105, 1);
}

::v-deeP(.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight)){
  color: rgba(71, 85, 105, 1);
}
::v-deep(.p-paginator .p-paginator-last){
   color: rgba(71, 85, 105, 1);
}

::v-deep(.p-paginator .p-paginator-first){
     color: rgba(71, 85, 105, 1);
}

.card-controller{
  display: flex;
  flex-direction: column;
  background: #fff;
 .card-controller-bottom{
   display: flex;
   flex-direction: column;
   margin-top: 15px;
  .first-child{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
      font-weight: 700;
    }
  }
  .last-child{
    display: flex;
    flex-direction: column;
    .last-child-text{
      font-size: 14px;
      margin-right: 12px;
      margin-top: 10px;
    }
    .last-child-bottom{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 28px;
      margin-bottom: 24px;
    }
  }  
 }
}
.header{
  padding: 10px 57px;
  display: flex;
  align-items: center;
  .text{
    color: rgba(71, 85, 105, 1);
    font-weight: 700;
  }
  .switch-button{
    display:flex;
    justify-content: space-evenly;
    width: 450px;
    border: 2px solid rgba(210, 210, 210, 1);
    color:  #475569;
    height: 50px;
    align-items: center;
    border-radius: 14px;
    position: relative;
    margin: 0px 5px;
    padding: 0px 10px;
    .text{
      z-index: 10;
      cursor: pointer;
      font-size: 12px;
    }
    .custom{
      background: rgba(87, 204, 153, 1);
      width: 80px;
      position: absolute;
      height: 40px;
      right: 5%;
      border-radius: 10px;
      transition: 0.5s ;
    }
  }
}
</style>