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
      .header{
          display: flex;
          justify-content: center;
          p {
              font-weight: 700;
          }
      }
      .child{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-top: 24px;
          margin-bottom: 24px;
          .label{
              font-size: 12px;
              font-weight: 600;
              margin-bottom: 8px;
              color: rgba(75, 85, 99, 1);
          }
          .input{
            width: 100% ;
            border-radius: 8px ;
          }
      }
  }
}
</style>