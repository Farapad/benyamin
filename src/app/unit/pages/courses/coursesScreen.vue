<template>
 <div class="card">
  <DataView :value="products"  :paginator="true" :layout="layout"  :rows="12" :sortOrder="sortOrder" :sortField="sortField">
    <!-- <template #header>
                <div class="grid grid-nogutter">
                    <div class="col-6" style="text-align: left">
                        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
                    </div>
                    <div class="col-6" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout" />
                    </div>
                </div>
	  </template> -->
      <template #grid="slotProps">
      <div class="m-3 card-controller">
          <img class="card-controller-img" :src="slotProps.data.image" :alt="slotProps.data.name"/>
          <div class="card-controller-bottom">

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

      const picture = ref(require('../../../../assets/img/svg/png/html.png'));
      const picturee = ref(require('../../../../assets/img/svg/png/html.png'));
      const products = [
        {id:1000,code: "f230fh0g3",name: 'Bamboo Watch',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picturee.value ,description: 'Product Description'},
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
      sortOrder,sortField,sortKey,sortOptions
    };
    },
}
</script>
<style lang="scss" scoped>
::v-deep(.p-grid){
  display: flex;
  flex-wrap: wrap;
}
::v-deep(.p-dataview .p-dataview-content){
  background:#f2f3f5;
}
::v-deep(.card){
  border: none;
}
.card-controller{
  display: flex;
  flex-direction: column;
 .card-controller-bottom{
   display: flex;
   justify-content: space-between;
 }
}
</style>