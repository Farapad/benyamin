<template>
   <div class="main-controller">
      <div class="controller">
        <div class="first-child">
            <p class="header">
                متقاضی عزیز
            </p>
            <p class="text">
با سپاس از ابراز علاقه مندی جنابعالی به بهره‏ گیری از سامانه جامع خدماتی «دانش یاد» با قابلیت کاربری در حوزه آموزش/یادگیری الکترونیکی، انتظار می‏ر‏ود که این سامانه که در نتیجه چندین سال تلاش بی‏ وقفه از جانب عوامل دست ‏اندرکار حاصل گردیده، بتواند گره از بسیاری از مشکلاتی که این صنعت تاکنون از آن رنج می برده، بگشاید؛ چه از منظر قابلیت های فراهم آمده و چه از نقطه نظر میزان اثربخشی و کاهش هزینه ها.  جهت اطلاع بیشتر در خصوص عرضه کنندگان سامانه، توصیه می شود به بخش در باره ما مراجه شود.
            </p>
            <p class="text">
شایان ذکر است که امکانات متعدد و متنوعی به عنوان یک نظام یکپارچه در سامانه به کار گرفته شده است؛ از جمله، امکان  ساخت دروس الکترونیکی، استانداردسازی محتوا، اعمال دستورالعمل های آموزشی، تعریف رویه و جریان تدریس (سکانسینگ) و طیفی از قابلیت های تکمیلی که در مجموع تا حد زیادی به آن جنبه منحصر به فرد داده و این سامانه را از آنچه که تاکنون در مقیاس بین‏المللی در دسترس بوده، متمایز ساخته است.
            </p>
        </div>
        <div class="second-child">
            <span class="text my-2">
                جدول هزینه ها
            </span>
            <div class="second-child-card">
                <div class="child">
                    <div class="font-12 w-50  right-box">
                        <div class="text">به صورت تدریس ترکیبی (آنلاین و آفلاین)</div>
                    </div>
                    <div class="font-12 w-50  left-box">
                        <div class="text">400.000 ریال در ماه به ازای هر درس</div>
                    </div>
                </div>
                <div class="last-child">
                     <div class="text-p">کارمزد نشان داده شده شامل هزینه تعاملات آنلاین تا سقف ده (10) 
ساعت در خصوص هر درس طی یک بازه زمانی یک‏ماهه می‏باشد.</div>
                </div>
            </div>
            <div class="second-child-card my-4">
                <div class="child">
                    <div class="font-12 w-50  right-box">
                        <div class="text">به صورت تدریس ترکیبی (آنلاین و آفلاین)</div>
                    </div>
                    <div class="font-12 w-50  left-box">
                        <div class="text">400.000 ریال در ماه به ازای هر درس</div>
                    </div>
                </div>
                <div class="last-child">
                     <div class="text-p">کارمزد نشان داده شده شامل هزینه تعاملات آنلاین تا سقف ده (10) 
ساعت در خصوص هر درس طی یک بازه زمانی یک‏ماهه می‏باشد.</div>
                </div>
            </div>
            <div class="second-child-card">
                <div class="child">
                    <div class="font-12 w-50  right-box">
                        <div class="text">به صورت تدریس ترکیبی (آنلاین و آفلاین)</div>
                    </div>
                    <div class="font-12 w-50  left-box">
                        <div class="text">400.000 ریال در ماه به ازای هر درس</div>
                    </div>
                </div>
                <div class="last-child">
                     <div class="text-p">کارمزد نشان داده شده شامل هزینه تعاملات آنلاین تا سقف ده (10) 
ساعت در خصوص هر درس طی یک بازه زمانی یک‏ماهه می‏باشد.</div>
                </div>
            </div>
            <div class="bottom-card my-4">
                <div class="top-bar">
                    <span>شروط و ضوابط حاکم بر استفاده از خدمات</span>
                </div>
                <div class="bottom-bar my-3">
                    <div class="w-50 d-flex box">
                        <Button class="bottom-btn">مورد تایید است</Button>
                    </div>
                    <div class="w-50 d-flex box">
                       <Button class="bottom-btn-2">رویت</Button>
                    </div>
                </div>
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
.main-controller{
  padding: 30px;
  .controller{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .first-child{
          display: flex;
          flex-direction: column;
          .header{
              font-size: 14px;
              font-weight:bold;
          }
          .text{
              color: #4B5563;
          }
      }
      .second-child{
          display:flex;
          flex-direction: column;
          .text{
              font-size: 14px;
              font-weight: bold;
              color: rgba(75, 85, 99, 1);
          }
          .second-child-card{
              display: flex;
              flex-direction: column;
              align-items: center;
              border-radius:20px;
              width: 100%;
              background: rgba(255, 255, 255, 1);
              padding: 14px 12px;
              .child{
                  display:flex;
                  justify-content: space-around;
                  .right-box{
                      .text{
                          padding: 12px 30px;
                      }
                  }
                  .left-box{
                      background:rgba(238, 255, 240, 1);
                      border-radius: 12px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      .text{
                         padding: 12px 40px;
                         color: rgba(22, 101, 52, 1);
                         font-weight: 700;
                      }
                  }
              }
              .last-child{
                  .text-p{
                      padding:16px 0px;
                      color:rgba(75, 85, 99, 1);
                      font-size: 12px;
                  }
              }
          }
          .bottom-card{
              display: flex;
              flex-direction: column;
              align-items: center;
              border-radius:20px;
              background: #ffff;
              padding: 20px 50px;
              .top-bar{
                  color: rgba(55, 65, 81, 1);
                  font-weight: bolder;
              }
              .bottom-bar{
                  display: flex;
                  justify-content: space-evenly;
                  width: 100%;
                  .bottom-btn{
                      background: rgba(87, 204, 153, 1);
                      color: #ffff;
                      border: none;
                      border-radius: 6px;
                  }
                  .bottom-btn-2{
                        background: rgba(87, 204, 153, 1);
                      color: #ffff;
                      border: none;
                      border-radius: 6px;
                      padding:0px 45px;
                  }
              }
          }
      }
  }
}
////
.box{
    justify-content: center;
}
</style>