<template>
  <div class="parent">
  <div class="head">   <h1 style="font-size:24px;color:#1F2937;padding-right: 30px;
">آخرین اخبار و اطلاعیه ها</h1>
    <a href="#" style="color: #475569;text-decoration: none;font-size:20px;">خبر ها و اطلاعیه های گذشته<img src="@/assets/img/svg/LeftArrow.svg"> </a>
   </div>


    <div class="cards">

      <div class="card">
        <img class="imgcard" src="@/assets/img/svg/news1.svg" alt="image">
        <div class="card-content">
          <p class="incard">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/img/svg/news2.svg" alt="image2">
        <div class="card-content">
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>

        </div>
      </div>
    </div>





  </div>
</template>
,<script>
export default {
    setup() {
        
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
  height: 769px;
}

.imgcard{
  width: 100%;
}

.card-content {
  line-height: 1.5rem;
  padding: 15px;
  width: 530px;
  height: 139px;

  p {
    margin: 10px 0;
    color: #475569;
    font-size: 20px;
    padding-right: 15px;
  }
}
</style>