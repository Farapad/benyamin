<template>
  <div>
             <div class="header-s">
             <img src="@/assets/img/svg/RAS.svg" alt="logo">
              <h1>نظرسنجی</h1>
             </div>

    <div class="IR1">
      <div style="display: flex;flex-direction: column">  <span class="mobile-text" >نام و نام خانوادگی</span>
        <InputText style="width: 570px;height: 78px"  class="my-5"  type="text" v-model="name" /></div>


<div style="display: flex;flex-direction: column"> <span class="mobile-text">ایمیل</span>
  <InputText style="width: 570px;height: 78px"  type="Email" class="my-5"  v-model="Email" /></div>

    </div>


    <div style="margin-top:10px"></div>



              <div class="IR2">
                           <div >
                           <h5>پیام</h5>
                           <Textarea  style="width: 570px;height: 207px;background: #FFFFFF;
border-radius: 18px;border: #F5F5F5;padding: 15px" placeholder="پیام خود رابنویسید"  rows="5" cols="30" />
                            </div>

                          <div style="width: 570px;height: 207px">
                          <div class="C1">
                          <h5>ارزیابی شما نسبت به:</h5>
                                <TreeSelect v-model="selectedNode" :options="nodes" placeholder="سامانه"></TreeSelect>
                             </div>
                          <Rating :stars="5" v-model="val2" :cancel="false" />
                          </div>

              </div>






    <button class="newsbtn" style="width:395px;height:74px;background-color:#57CC99;color:#F4F4F4;border-radius: 12px;;border:#F4F4F4">ثبت نظر</button>

  </div>
</template>
<script>
export default {
  setup() {

    }}
</script>
<style lang="scss" scoped>

.header-s{
  display: flex;
  flex-direction: row;
  margin-top:30px;
  margin-bottom:96px;
}
img{
  width:46px;
  height:44px;
  margin-right: 70px;
}
h1{
  font-weight: 700;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  margin-right: 500px;
}
.IR1{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 60px;
}
.IR2{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}
.mobile-text{
  color: rgba(75, 85, 99, 1);
  font-weight: 500;
  font-size: 20px;
}

::v-deep(.p-inputtext){
  width: 100%;
  border: none;
  border-radius: 12px;
  font-size: 12px;

}
::v-deep(.p-rating-star){
  color:yellow;
}
::v-deep(.p-rating){
  width:40px;
  height:40px;
  border:2px solid black;
}
.mobile-text{
  font-weight: 500;
  font-size: 20px;

}


.newsbtn{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 500px;
  margin-bottom: 30px;
  margin-top:96px;
}
h5{
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
}
.C1{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 768px) {
  .newsbtn {
    width: 160px;
    height: 40px;
    display:flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background: #57CC99;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    margin-left: 400px;

  }
  InputText{
    width: 350px;
    height: 44px;
  }
img{
  width:22px;
  height:22px;
  margin-left:70px;
}


  .IR1{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 60px;
  }
  .IR2{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

  }

.mobile-text{
  font-weight: 500;
  font-size: 12px;
}






}
</style>