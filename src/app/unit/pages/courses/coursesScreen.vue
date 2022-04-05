<template>
 <div class="card">
  <!-- <carousel :items-to-show="2">
    <slide v-for="slide in products" :key="slide">
      <img class="w-50" :src="slide.image"> 
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel> -->
    <DataView :value="products"  :paginator="true" :layout="layout"  :rows="12" :sortOrder="sortOrder" :sortField="sortField">
    <template #header>
                <div class="grid grid-nogutter">
                    <div class="col-6" style="text-align: left">
                        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
                    </div>
                    <div class="col-6" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout" />
                    </div>
                </div>
	</template>
      <template #grid="slotProps">
			<img :src="slotProps.data.image" :alt="slotProps.data.name"/>	
			</template>
		</DataView>
    </div> 
</template>
<script>
import DataView from 'primevue/dataview';
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import {ref} from 'vue';
export default {
    components:{  
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation
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
// ::v-deep(.grid){
//     display:flex;
//     flex-wrap: wrap;
// }
// .p-dropdown {
//     width: 14rem;
//     font-weight: normal;
// }
// .product-name {
// 	font-size: 1.5rem;
// 	font-weight: 700;
// }
// .product-description {
// 	margin: 0 0 1rem 0;
// }
// .product-category-icon {
// 	vertical-align: middle;
// 	margin-right: .5rem;
// }
// .product-category {
// 	font-weight: 600;
// 	vertical-align: middle;
// }
// ::v-deep(.product-list-item) {
// 	display: flex;
// 	align-items: center;
// 	padding: 1rem;
// 	width: 100%;
// 	img {
// 		width: 150px;
// 		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
// 		margin-right: 2rem;
// 	}
// 	.product-list-detail {
// 		flex: 1 1 0;
// 	}
// 	.p-rating {
// 		margin: 0 0 .5rem 0;
// 	}
// 	.product-price {
// 		font-size: 1.5rem;
// 		font-weight: 600;
// 		margin-bottom: .5rem;
// 		align-self: flex-end;
// 	}
// 	.product-list-action {
// 		display: flex;
// 		flex-direction: column;
// 	}
// 	.p-button {
// 		margin-bottom: .5rem;
// 	}
// }
// ::v-deep(.product-grid-item) {
// 	margin: .5rem;
// 	border: 1px solid var(--surface-border);
// 	.product-grid-item-top,
// 	.product-grid-item-bottom {
// 		display: flex;
// 		align-items: center;
// 		justify-content: space-between;
// 	}
// 	img {
// 		width: 75%;
// 		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
// 		margin: 2rem 0;
// 	}
// 	.product-grid-item-content {
// 		text-align: center;
// 	}
// 	.product-price {
// 		font-size: 1.5rem;
// 		font-weight: 600;
// 	}
// }
// @media screen and (max-width: 576px) {
// 	.product-list-item {
// 		flex-direction: column;
// 		align-items: center;
// 		img {
// 			width: 75%;
// 			margin: 2rem 0;
// 		}
// 		.product-list-detail {
// 			text-align: center;
// 		}
// 		.product-price {
// 			align-self: center;
// 		}
// 		.product-list-action {
// 			display: flex;
// 			flex-direction: column;
// 		}
// 		.product-list-action {
// 			margin-top: 2rem;
// 			flex-direction: row;
// 			justify-content: space-between;
// 			align-items: center;
// 			width: 100%;
// 		}
// 	}
// }
</style>