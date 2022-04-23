<template>
  <div>
             <div class="header-s">
             <a class="back" href="#"><img src="@/assets/img/svg/RAS.svg" alt="logo"></a>
              <h1>نظرسنجی</h1>
             </div>

    <div class="IR1">
      <div style="display: flex;flex-direction: column">  <span class="mobile-text" >نام و نام خانوادگی</span>
        <InputText  class="Inputtext"  type="text" v-model="name" /></div>


<div style="display: flex;flex-direction: column"> <span class="mobile-text">ایمیل</span>
  <InputText  class="Inputtext" type="Email"  v-model="Email" /></div>

    </div>


    <div style="margin-top:10px"></div>



              <div class="IR2">
                           <div class="IR24">
                           <h5>پیام</h5>
                           <Textarea class="Textarea"   placeholder="پیام خود رابنویسید"  rows="5" cols="30" />
                            </div>

                          <div class="IR5" >
                          <div class="C1">
                          <h5>ارزیابی شما نسبت به:</h5>
                            <TreeSelect class="Select" v-model="selectedRole1" :options="role" placeholder="سامانه" :optionGroupLabel="name"></TreeSelect>
                             </div>
                            <div class="C2"> <Rating class="star" v-model="val2" :cancel="false" /></div>

                          </div>

              </div>






    <button class="newsbtn" >ثبت نظر</button>
  </div>
</template>
<script>

import {ref} from "vue";
import TreeSelect from 'primevue/treeselect';
import Rating from 'primevue/rating';

export default {components:{Rating,TreeSelect},
  setup() {

    const val1 = ref();
    const val2 = ref(0);
    const selectedRole1 = ref();
    const role = ref([
      {
        name: 'سامانه',
        code: 'SA',},{ name: 'مدرس',
        code: 'MO',},
      { name: 'ادمین',
        code: 'AD',},
      { name: 'مدیریت',
        code: 'MA',}]);
    return {val1, val2,role,selectedRole1};
  }}
</script>
<style lang="scss" scoped>

.header-s{;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top:30px;
  margin-bottom:70px;
  margin-left: 400px;
}
.back{
  justify-content: start;
  align-items: center;
  width:46px;
  height:44px;
  display: flex;
  margin-left: 100px;
}
img{
  width:100%;
  height:100%;
}
h1{  display: flex;
  font-weight: 700;
  font-size: 24px;
  align-items: end;
  justify-content: end;

}
.Inputtext{
  width: 570px;height: 78px; margin-top:10px
}
.IR1{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 60px;
  margin-bottom:73px;
}
.IR2{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}
.IR5{width: 570px;height: 207px;display: flex;flex-direction: column;}
.mobile-text{
  color: rgba(75, 85, 99, 1);
  font-weight: 500;
  font-size: 20px;
}

::v-deep(.p-inputtext){
  //width: 100%;
  border: none;
  border-radius: 12px;
  font-size: 12px;

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
  width:395px;height:74px;background-color:#57CC99;color:#F4F4F4;border-radius: 12px;border:#F4F4F4;

}
h5{
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

}

.Textarea{
  width: 570px;height: 207px;background: #FFFFFF;
  border-radius: 18px;border: #F5F5F5;padding: 15px;
}
.Select{
  margin-right:10px;
  width: 208px;
  height: 50px;
  border: 2px solid #57CC99;

}
.IR5{
  width: 570px;
  height: 207px;
  margin-top:40px;
  border: #F5F5F5;
  background: #FFFFFF;
  border-radius: 18px;

}
.C1{
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.C2{
  width: 570px;height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.star{

  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.Select:hover{
  border: 2px solid #57CC99;
}
@media only screen and (max-width: 768px) {

.header-s{
  width:304px;
  height:70px;
}
.back {
  width: 23px;
  height: 23px;

};
  img{
    width:100%;
    height:100%;

  }
  h1{
    font-weight: 700;
    font-size: 16px;

  }
  .Inputtext{
width:350px;
    height: 44px;
    margin-top:10px;
    margin-right:32px;
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
    margin-right:32px;
    margin-top:15px;
  }

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
    margin-left: 284px;

  }
  .Textarea{
    width:350px;
    height:98px;
    margin-right:32px;
  }
  h5{
    font-weight: 500;
    font-size: 12px;
    margin-right:32px;
  }
.IR5{
  margin-top:19px;
  width:350px;
  height:121px;
  margin-right: 32px;
}
.Select{
  width:156px;
  height:36px;
}

.C2{
  margin-right: 20px;
  margin-top: 10px;
  width:350px;
  height:121px;
}
  .star{
    margin-bottom: 40px;
  }

}
</style>