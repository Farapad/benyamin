<template>
 <div class="main-controller">
      <div>
        <div class="card">
            <Carousel :value="products" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions">
                <!-- <template #header>
                    <h5>Basic</h5>
                </template> -->
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="@/assets/img/svg/png/main-page.png" :alt="slotProps.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.name}}</h4>
                                <h6 class="mt-0 mb-3">{{slotProps.price}}</h6>
                                <!-- <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span> -->
                                <!-- <div class="car-buttons mt-5">
                                </div> -->
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
  </div>
 </div>  
</template>

<script>
// import { ApiService } from "@/core/repository/api.service";
import Carousel from 'primevue/carousel';
import {ref} from 'vue'
export default {
  components:{Carousel},
  setup() {
    // function apiCall() {
    //   ApiService.getInstance().business({
    //     onReceive: (res) => {
    //       console.log(res);
    //     },
    //   });
    // }
      const products = [
        {id:1000,code: "f230fh0g3",name: 'Bamboo Watch',description: 'Product Description'},
      ];
      // const productService = ref(new ProductService());  
		  const responsiveOptions = ref([
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1
			}
		]);

    return {
      products,
      // productService,
      responsiveOptions
    };
  },
};
</script>
<style lang="scss" scoped>

.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
    }

    .product-image {
        width: 50%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
}
.card{
  background: none;
  border: none;
}
::v-deep(.product-item .product-item-content){
  border: none;
}
::v-deep(.p-carousel .p-carousel-indicators){
  display: none;
}
::v-deep(.product-item .product-image){
  width:1100px;
  border-radius: 47px;
}
::v-deep(.p-carousel-prev){
  transform: rotate(180deg);
  cursor: pointer;
}
::v-deep(.p-carousel-next){
   transform: rotate(180deg);
   cursor: pointer;
}
@media (max-width:450px){
  ::v-deep(.product-item .product-image){
    width:300px;
    border-radius: 47px;
    }
}
</style>