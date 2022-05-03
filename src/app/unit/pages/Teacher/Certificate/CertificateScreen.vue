<template>
  <div class="main-controller">
    <div class="header mb-5">صدور گواهینامه</div> 
    <div class="controller">
     <div class="first-child">
         <div class="child my-3">
                <span class="my-2">عنوان درس</span>    
                <InputText class="input"/>
          </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
    setup() {
        
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
      .first-child {
            width: 50%;
            padding: 10px 20px;
            display: flex;
            flex-direction: column;
            .controller{
                display: flex;
                justify-content: space-between;
                width: 100%;
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
</style>