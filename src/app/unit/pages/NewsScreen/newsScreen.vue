<template>
  <div class="parent">
  <div class="head">   <h1 style="font-size:18px;color:#1F2937;padding-right: 30px;
">آخرین اخبار و اطلاعیه ها</h1>
    <a href="#" style="color: #475569;text-decoration: none;font-size:18px;">خبر ها و اطلاعیه های گذشته<img src="@/assets/img/svg/LeftArrow.svg"> </a>
   </div>


    <div class="cards">

      <div class="card">
        <img class="imgcard"  v-lazy="image2"  alt="image">
        <h5 style="color:#1F2937;font-size: 20px;font-weight:500;padding-right:37px;padding-top:18px">شروع دوره برنامه نویسی موبایل IOS از 24 اسفند </h5>
        <div class="card-content">
          <span class="incard">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد</span>
        </div>
         <div class="last-child-bottom">
                  <Button class=" " :label="'فعال سازی'"/>
                  <Button class=" " :label="'غیر فعال سازی'"/>
         </div>
      </div>

      <div class="card">
        <img v-lazy="image"  >
        <h5 style="color:#1F2937;font-size: 20px;font-weight:500;padding-right:37px;padding-top:18px">شروع دوره برنامه نویسی PHP از 20 اسفند </h5>
        <div class="card-content">
          <span class="incard">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </span>
        </div>
         <div class="last-child-bottom">
                  <Button class=" " :label="'فعال سازی'"/>
                  <Button class=" " :label="'غیر فعال سازی'"/>
         </div>
      </div>
      <div class="bottom-btn">
           <Button class=" " :label="'خبر ها و اطلاعیه های گذشته'"/>
      </div>
    </div>


   <!-- <button class="newsbtn" style="width:228px;height:48px;background-color:#57CC99;color:#F4F4F4;border-radius:5px;border:#F4F4F4">خبر ها و اطلاعیه های گذشته</button> -->


  </div>
</template>
<script>
import {ref} from "vue"
export default {
    setup() {
        const image = ref(require("@/assets/img/svg/news2.svg"))
        const image2 = ref(require("@/assets/img/svg/news1.svg"))
        return{
          image,
          image2
        }
    },
}
</script>
<style scoped lang="scss">
.parent{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.head{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
a{

  align-items:flex-end;
  justify-content:flex-end;
  padding-right: 800px;
}

.cards {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  gap: 30px;
  padding: 20px;

}
.card{
  width:638px;
  height: auto;
  border: 1px solid #D2D2D2;
  border-radius: 18px
}

.imgcard{
  width: 100%;
}

.card-content {
  line-height: 1.5rem;
  padding: 15px;
  width: 598px;
  height: auto;

  span {
    margin: 10px 0;
    color: #475569;
    font-size: 20px;
    padding-right: 15px;

  }
}
.newsbtn{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 600px;
  margin-bottom: 30px;
}


@media only screen and (max-width: 768px) {
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 30px;

  }

  .card {
    width: 374px;
    height: auto;
  }
  .card-content {
    line-height: 1.5rem;
    padding: 15px;
    width: 342px;
    height: auto;

    span {
      color: #475569;
      font-size: 12px;
      padding-right: 15px;
    }
  }
  h1 {
    align-items: center;
    justify-content: center;

  }
  .newsbtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
    margin-bottom: 30px;
  }
  a {
    display: none;
  }
  h5 {
    font-size: 14px;
    font-weight: bold;
    text-wrap: normal;
    flex-wrap: wrap;
    padding-left: 10px;
  }
}
 .last-child-bottom{
      display: flex;
      margin-top: 5px;
      justify-content: center;
      margin-bottom: 30px;
      button {
        width: 120px;
        font-size: 12px;
        margin-left: 10px;
      }
    }

::v-deep(.p-button) {
  background: rgba(87, 204, 153, 1);
  border: none;
}   
::v-deep(.p-button:hover) {
  background: rgba(87, 204, 153, 1);
  border: none;
} 
.bottom-btn{
  display: none;
}
@media (max-width : 450px ) {
  .bottom-btn{
    display:flex;
    justify-content: center;
    width: 100%;
    button {
      font-size: 12px;
    }
  }
}
</style>