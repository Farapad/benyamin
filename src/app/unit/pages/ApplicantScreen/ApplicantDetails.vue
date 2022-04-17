<template>
    <div class="main-controller">
        <div class="controller">
            <div class="header">
                <p>مشخصات متقاضی حقوقی</p>
            </div>
            <div class="child">
                <span class="label">نام متقاضی به فارسی</span>
                <InputText  class="input"/>
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
.main-controller{
  padding: 30px;
  .controller{
      display: flex;
      flex-direction:column;
      justify-content: center;
      .child{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-top: 24px;
          margin-bottom: 24px;
          .label{
              font-size: 12px;
              font-weight: 700;
              margin-bottom: 8px;
          }
          .input{
            width: 100% ;
            border-radius: 8px ;
          }
      }
  }
}
</style>