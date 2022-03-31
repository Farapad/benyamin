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
                                <img :src="slotProps.data.image"  :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{products.name}}</h4>
                                <h6 class="mt-0 mb-3">{{products.price}}</h6>
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
  <div class="bottom-bar w-100 px-5 mb-5 d-flex">
    <Button label="ورود به سامانه"/>
    <span  class="font-16 font-weight-bold text-color px-3">فراگیر</span>
    <span class="font-16 font-weight-bold text-color px-3">مدرس</span>
    <span class="font-16 font-weight-bold text-color px-3">مدیریت</span>
    <span class="font-16 font-weight-bold text-color px-3">ادمین</span>
    <span class="font-16 font-weight-bold text-color px-3">متقاضی برگزاری دوره یا درس</span>
  </div>
 </div>  
</template>

<script>
// import { ApiService } from "@/core/repository/api.service";
import Carousel from 'primevue/carousel';
import {ref} from 'vue';
import Button from 'primevue/button';
export default {
  components:{Carousel,Button},
  setup() {
    // function apiCall() {
    //   ApiService.getInstance().business({
    //     onReceive: (res) => {
    //       console.log(res);
    //     },
    //   });
    // }
      const picture = ref(require('../../../assets/img/svg/png/main-page.png'));
      const picturee = ref(require('../../../assets/img/svg/png/page.png'));
      const products = [
        {id:1000,code: "f230fh0g3",name: 'Bamboo Watch',image: picture.value ,description: 'Product Description'},
        {id:1001,code: "cdcdc",name: 'cdcdcd cdc',image: picture.value ,description: 'Product Description'},
      ];
      // const productService = ref(new ProductService());  
      console.log(products[1].image,'sss');
		  const responsiveOptions = ref([
			{
				breakpoint: '1024px',
				numVisible: 1,
				numScroll: 1
			},
			{
				breakpoint: '600px',
				numVisible: 1,
				numScroll: 1
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
::v-deep(.p-carousel .p-carousel-content .p-carousel-prev, .p-carousel .p-carousel-content .p-carousel-next){
  background: white;
  position: relative;
  right: 4%;
  z-index: 100;
  padding: 20px;
  border-radius: 11px;
}
::v-deep(.p-carousel .p-carousel-content .p-carousel-next){
  background: white;
  position: relative;
  z-index: 100;
  left: 4%;
  padding: 20px;
  border-radius: 11px;
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
::v-deep(.p-button){
  background: rgba(87, 204, 153, 1);
  border: none;
  border-radius: 12px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
}
::v-deep(.p-button:hover){
  background: rgba(87, 204, 153, 1);
  border: none;
}
.bottom-bar{
  align-items: center;
}
</style>