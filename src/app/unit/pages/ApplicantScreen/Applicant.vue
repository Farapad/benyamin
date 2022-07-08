<template>
   <div class="main-controller">
      <div class="controller">
        <div class="first-child">
            <p class="header">
                متقاضی عزیز
            </p>
            <p class="text">با سپاس از ابراز علاقه مندی جنابعالی به بهره‏ گیری از سامانه جامع خدماتی آموزش/یادگیری الکترونیکی «دانش یاد»، انتظار می رود که این سامانه که در نتیجه چندین سال تلاش بی‏ وقفه از جانب عوامل دست ‏اندرکار حاصل گردیده، بتواند گره از بسیاری از مشکلاتی که این صنعت تاکنون از آن رنج می برده، بگشاید؛ چه از منظر قابلیت های فراهم آمده و چه از نقطه نظر میزان اثربخشی و کاهش هزینه ها.  جهت اطلاع بیشتر در خصوص عرضه کنندگان سامانه، توصیه می شود به بخش درباره ما مراجه شود.</p>
            <p class="text">شایان ذکر است که امکانات متعدد و متنوعی در قالب یک نظام یکپارچه در سامانه به کار گرفته شده است؛ از جمله، امکان  ساخت دروس الکترونیکی، استانداردسازی محتوا، اعمال دستورالعمل های آموزشی، تعریف رویه و جریان تدریس (سکانسینگ) و طیفی از قابلیت های تکمیلی که در مجموع، این سامانه را تا حد زیادی از آنچه که تاکنون در دسترس بوده، متمایز ساخته است.</p>
        </div>
        <div class="second-child">
            <span class="text my-2">
                جدول هزینه ها
            </span>
            <div class="second-child-card">
                <div class="child">
                    <div class="font-12 w-50  right-box">
                        <div class="text-right">به صورت تدریس ترکیبی (آنلاین و آفلاین)</div>
                    </div>
                    <div class="font-12 w-50  left-box">
                        <div class="text-left">400.000 ریال در ماه به ازای هر درس</div>
                    </div>
                </div>
                <div class="last-child">
                     <div class="text-p">کارمزد نشان داده شده شامل هزینه تعاملات آنلاین تا سقف ده (10) ساعت در خصوص هر درس طی یک بازه زمانی یک ‏ماهه  می‏باشد.</div>
                </div>
            </div>
            <div class="second-child-card my-4">
                <div class="child">
                    <div class="font-12 w-50  right-box">
                        <div class="text-right">تدریس به صورت تمام آنلاین</div>
                    </div>
                    <div class="font-12 w-50  left-box">
                        <div class="text-left">600.000 ریال در
                            ماه به ازای هر درس </div>
                    </div>
                </div>
                <div class="last-child">
                     <div class="text-p">کارمزد نشان داده شده شامل هزینه تعاملات آنلاین تا سقف بیست و چهار (24) ساعت در خصوص هر درس طی یک بازه زمانی یک ‏ماهه  می‏باشد.</div>
                </div>
            </div>
            <div class="second-child-card">
                <div class="child">
                    <div class="font-12 w-50  right-box">
                        <div class="text-right">صرفا جهت برگزاری آزمون</div>
                    </div>
                    <div class="font-12 w-50  left-box">
                        <div class="text-left">50.000 ریال به ازای
هر فرد (آزمون دهنده)</div>
                    </div>
                </div>
                <div class="last-child">
                     <div class="text-p">در این مورد به خصوص تدریس الکترونیکی (چه آنلاین و چه آفلاین) صورت نمی‏ پذیرد، </div>
                </div>
            </div>
        </div>
       <div class="bottom">
                    <div class="bottom-card my-4">
                <div class="top-bar">
                    <div>شروط و ضوابط حاکم بر استفاده از خدمات</div>
                </div>
                <div class="bottom-bar my-3">
                    <div class="w-50 d-flex box">
                        <Button class="bottom-btn">مورد تایید است</Button>
                    </div>
                    <div class="w-50 d-flex box">
                       <Button @click="show" class="bottom-btn-2">رویت</Button>
                    </div>
                </div>
            </div>
            <div v-if="showText" class="text-bar">
              <div class="main-box">
                 <p>
                   زا یریگ‏ هرهب و یتایلمع یاضف هب دورو یارب تسا یهاگرد «دای‏شناد» یریگدای/شزومآ» هزوح رد یتامدخ عماج هناماس کی یاه‏ تیلباق تیریدم متسیس نوچ یا‏هچراپکی یازجا زا لکشتم ؛«یکینورتکلا متسیس و (“LMS” – Learning Management System) یریگ‏دای Learning Content Management) یریگدای یاهاوتحم تیریدم طخرب  یلماعت و یطابترا یاهرازبا و ،وس کی زا ،(“LCMS” – System Online and Offline Communication and) طخرب ریغ و  زا ،یلیمکت یاه‏یگژیو و تاناکما زا یفیط و ( Collaboration Tools  درادناتسا ،دیلوت ‏تیلباق هدمآ مهارف تاناکما هلمج زا  .رگید ییوس هیحالصا نیرخآ اب قیبطت رد یکینورتکلا یاهاوتحم یارجا و یزاس رکذ لباق (4Th Edition ,SCORM 2004) «مرکسا» یناهج درادناتسا  مه و یعاسم کیرشت هطساو هب هک هناماس نیا دور‏ یم راظتنا .تسا
                    «نایرآ داگراساپ  تاطابترا و تاعالطا یروانف» یاه‏ تکرش نیب ییازفا‏  یزرو‏هداد تکرش» و («داگراساپ کناب» هب هتسباو ،«پانف تکرش»)  هار و داجیا (روشک ناگربخ زا یعمج بناج زا یگدنیامن هب) «هناماس  عناوم و اه ‏شلاچ ،اه هغدغد زا یرایسب رب دناوتب هتشگ یزادنا شهاک ،یشخبرثا نازیم شیازفا  .دیآ قئاف رادیاپ تعنص نیا یورارف  ندومن ایهم و یریگدای/شزومآ رما رد لیهست ،اه ‏هنیزه ریگمشچ .تسا هناماس نیا زراب یاه‏ یگژیو هلمج زا ،هچراپکی و نما طیحم کی
یربا شنایار» یروانف رب ینتبم هک روکذم هناماس دیلوت رد پانف شقن زا نآ یربراک تیهام      و هتفای هعسوت  (Cloud Technology) «دوالک ای مهارف ناونع هب ،تسا فیصوت لباق (B2B) «هاگنب هب هاگنب» عون “IaaS”– Infrastructure as) یتخاسریز یاه‏ هدنهد ‏‌سیورس هدننک‏ زاین دروم(“PaaS”– Platform as a Service) یمرفتلپ و (a Service هدنهد ‏سیورس» هدننک‏نیمات ناونع هب هناماس یزرو هداد شقن و ، اب لماعت فرط و (“SaaS” – Software as a Service) «یرازفا‏ مرن .تسا فیرعت لباق فده هعماج
                </p>
              </div>
            </div>
            <div class="bottom-box px-5">
                <Button @click="nextStep" class="btn">تایید</Button>
            </div>
        </div> 
          <div  class="text-bar">
              <div class="main-box">
                <h4 class="tt1">شروط و ضوابط حاکم بر استفاده از خدمات قابل تامین
                  از طریق سامانه جامع خدماتی آموزش الکترونیکی «دانش‏ یاد»
                </h4>
                <br>
                 <p class="tt2">شروط و ضوابط حاکم در این خصوص در زمینه‏ های زیر قابل تعریف است و بر آن اساس، متقاضی با کلیک بر روی پیوند «شروط و ضوابط حاکم بر استفاده از خدمات» (واقع در انتهای این متن)، بدین وسیله موافقت خود را نسبت به پذیرش نکات مورد اشاره اعلام می دارد:<br>
           </p>
                <h4 class="tt1">الف-  در زمینه برقراری مناسبات کاری</h4>
                <p class="tt2">1.	هر شخصیت حقیقی/حقوقی متقاضی استفاده از خدمات قابل تامین از طریق این سامانه (که من بعد اختصاراً در اینجا «مشتری» نامیده می‌ شود) ، واقف از این قضیه است که طرف تعامل با وی، چه از نقطه نظر جوانب مالی خدمات موصوف و چه در رابطه با جوانب فنی و عملیاتی مرتبط با بهره گیری از سامانه که ماهیت آن از نوع «رایانش ابری یا کلاود» (Cloud Technology) قابل تعریف است، شرکت داده ورزی سامانه (سهامی خاص) (که من بعد اختصاراً در اینجا «داده ورزی» نامیده می‌شود) می باشد.  این درحالی است که داده ورزی که نقش آن در فرایند توسعه و ارائه خدمات به عنوان تامین کننده «سرویس دهنده نرم ‏‏افزاری» (Software as a Service – “SaaS”) تعریف گشته، به نوبه خود از سرویس دهنده های زیرساختی (Infrastructure as a Service – “IaaS”) و پلتفرمی (Platform as a Service – “PaaS”) قابل تامین توسط شریک تجاری خود، شرکت‏ فناوری اطلاعات و ارتباطات پاسارگاد آریان (سهامی خاص) (که من بعد اختصاراً در اینجا «فناپ» نامیده می‌شود)، جهت ارائه خدمات مورد نیاز بهره می برد<br>2.	در صورت بروز مشکل در زمینه عملیات اجرایی، لازم است که در مرحله نخست واحد پشتیبانی داده ‏ورزی ‏از طریق تلفن، چت، ایمیل و غیره در جریان نوع و ماهیت مشکل به ‏وقوع پیوسته قرار گیرد. </p>
                <br>
                <h4 class="tt1">ب-   در زمینه برقراری مناسبات مالی فی مابین</h4>
                <br>
                <p class="tt2">1.	مشتری یا می‏تواند از فراگیران خاص خود به هر مبلغی (تابع توافق فی ‏مابین مشتری و فراگیران مربوطه) به صورت الکترونیک یا غیره شهریه مطالبه نماید که در آن‏ صورت، خود رقم شهریه قابل پرداخت توسط فراگیر را طبق اصول متعارف در بازار، مشخص و در سامانه وارد خواهد نمود.  در چنین شرایطی، باتوجه به نوع کاریری مورد نیاز، از مبلغ شهریه که پیشاپیش (پیش از شروع درس مربوطه) توسط فراگیر قابل پرداخت خواهد بود، مبلغ مربوطه طبق جدول هزینه های نشان داده شده به عنوان کارمزد استفاده از خدمات، به صورت الکترونیکی کسر و به حساب داده‏ ورزی و فناپ (تابع توافق فی ‏مابین آنان) و مابقی به حساب مشتری واریز خواهد گشت (مستلزم ارائه مشخصات حساب بانکی توسط مشتری می‏باشد).  از طرفی دیگر، مشتری می ‏تواند با عهده‏ داری الزامات مالی، درس مربوطه را به طور رایگان به فراگیران خاص خویش عرضه نماید.  در چنین حالتی، جهت فعال ‏سازی امکانات سامانه، مشتری موظف خواهد بود که پیش از آغاز ‏درس مربوطه، به تعداد فرگیران ثبت نام نموده، کارمزد مربوطه را به صورت الکترونیکی یا غیره به داده‏ ورزی بپردازد.  فعال ‏سازی سامانه منجر به تعریف هویتی تحت عنوان «مدرس» (خاص مشتری) شده و به تبع آن، امکان بهره ‏گیری از قابلیت‏ های سامانه برای وی فراهم خواهد آمد. <br>2.	درصورت نیاز مشتری به استفاده از سامانه صرفاً جهت برگزاری آزمون به صوت آنلاین، مبلغ نشان داده شده در جدول هزینه ها در آن خصوص ملاک عمل قرار خواهد گرفت. این در حالی است که پرداخت گروهی به صورت پیشاپیش به تعداد آزمون دهنده ‏ها الزامی تلقی می شود.<br>3.	مبلغ قید شده به عنوان کارمزد داده‏ ورزی و فناپ از بابت هر فراگیر شامل هزینه پهنای باند مصرفی خواهد بود.  در صورت تمایل مشتری نسبت به افزودن زمان تعاملات آنلاین، پس از مشخص نمودن زمان مطلوب، کارمزد ناشی از این افزایش توسط سامانه محاسبه و به مشتری اعلام خواهد گشت و با پذیرش آن، مبلغ کارمزد جدید، جایگزین مبلغ قبلی خواهد شد.  لازم به ذکر است که هزینه ارائه خدمات جانبی توسط داده ‏ورزی، مانند درس ‏سازی (شامل ساخت اجزای چندرسانه ‏ای مربوطه)، زمینه ‏های مختلف مشاوره ‏ای و افزودن امکانات و قابلیت ‏های تکمیلی به سامانه بنا به سفارش مشتری، تابع توافقات جداگانه فی ‏مابین داده ‏ورزی و مشتری خواهد بود.<br>4.	داده ورزی در پی اعلام به مشتری، در هر زمان از حق به روز رسانی و افزایش کارمزد‏های مربوط به خود و فناپ برخوردار خواهد بود.  به هر جهت، هرگونه افزایش مبلغ مربوطه، شامل شهریه دروس‏ درحال اجرا نخواهد گشت (به عبارتی دیگر، این افزایش عطف به ماسبق نخواهد گردید). <br>5.	در صورت انصراف مشتری/مشتریان مشتری از گذراندن درس ثبت نام نموده، درصورتیکه درس مربوطه شروع شده باشد، مبلغ پرداخت شده در قبال شهریه غیر قابل برگشت خواهد بود.  در غیر اینصورت، برگشت شهریه پرداخت گردیده قابل مذاکره می‏ باشد.</p>
                <br>
                <h4 class="tt1">ج-   در زمینه مالکیت و صیانت از حریم خصوصی</h4>
                <p class="tt2">1.	مشتری مالک کلیه دروس ساخته شده توسط وی و هرگونه داده تولیدی در زمینه فعالیت ‏های خود یا فعالیت مشتریان خاص خود در سامانه محسوب می‏ شود و بر آن اساس، بدون کسب مجوز مکتوب از مشتری، حق دخل و تصرف و استفاده از آنها از داده ‏ورزی یا فناپ سلب می‏ گردد.<br>2.	داده های مربوط به مشتری بر روی سرورهای فناپ و در محیطی امن و با حفظ حریم خصوصی نگهداری و به صورت محرمانه با آن برخورد خواهد شد.  درعین حال، مشتری می ‌پذیرد که در موارد اضطراری یا برپایه الزامات قانونی، این امکان وجود دارد که داده ورزی یا فناپ این داده ها را جهت بررسی در اختیار مراجع رسمی ذی ربط قرار دهند.  </p>
                <div class="w-50 d-flex box">
                <h4 class="tt3"> شرایط و ضوابط حاکم بر استفاده از خدمات</h4> <Button class="btnnn">مورد تایید است</Button>
                </div> <br> </div>
            </div>
      </div>

       <Button @click="nextStep" class="btnn">تایید</Button>

   </div>
</template>
<script>
import { ref } from 'vue'
import router from '@/core/router/router';
export default {
    setup() {
        const showText = ref(false);

        function show(){
            showText.value = true
        }

        function nextStep () {
            router.push("/Applicant/details")
        }

        return {
            showText,
            nextStep,
            show
        }
    },
}
</script>
<style lang="scss" scoped>
.tt1{font-size: 24px;
font-weight: 700}
.tt2{
  font-style: 20px;font-weight: 700;line-height: 43.1px;
}
.tt3{font-size: 24px;
  font-weight: 500;text-wrap: avoid;}
.btnn{    align-items: center;
  justify-content: center;background: rgba(87, 204, 153, 1);
  color: #ffff;
  border: none;
  border-radius: 12px;
  font-size: 20px;font-weight:500;width: 395px;
  height: 74px;margin-right: 400px}
.btnn:hover{
  background: rgba(87, 204, 153, 1);}
.btnnn{    align-items: center;
  justify-content: center;background: rgba(87, 204, 153, 1);
  color: #ffff;
  border: none;
  border-radius: 6px;
  font-size: 20px;font-weight:500;width: 222px;
  height: 67px;}
  .btnnn:hover{
  background: rgba(87, 204, 153, 1);}










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
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      .text-right{
                          padding: 12px 30px;
                      }
                  }
                  .left-box{
                      background:rgba(238, 255, 240, 1);
                      border-radius: 12px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      .text-left{
                         padding: 12px 25px;
                         color: rgba(22, 101, 52, 1);
                         font-size: 12px;
                         text-align: center !important;
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
       
      }
  }
}
////
.box{
    justify-content: center;
}
//.bottom {
//      .bottom-card{
//              display: flex;
//              flex-direction: column;
//              align-items: center;
//              border-radius:20px;
//              background: #ffff;
//              padding: 20px 30px;
//              .top-bar{
//                  color: rgba(55, 65, 81, 1);
//                  font-weight:700;
//                  width: 100%;
//                  text-align: center;
//              }
//              .bottom-bar{
//                  display: flex;
//                  justify-content: space-evenly;
//                  width: 100%;
//                  .bottom-btn{
//                      background: rgba(87, 204, 153, 1);
//                      color: #ffff;
//                      border: none;
//                      border-radius: 6px;
//                      font-size: 12px;
//                  }
//                  .bottom-btn-2{
//                        background: rgba(87, 204, 153, 1);
//                      color: #ffff;
//                      border: none;
//                      border-radius: 6px;
//                      padding:0px 45px;
//                      font-size: 12px;
//                  }
//              }
//          }
//             .bottom-box{
//              display: flex;
//              justify-content: center;
//              width:100% ;
//              .btn{
//                  width: 100%;
//                  background: rgba(87, 204, 153, 1);
//                  border: none;
//                  display: flex;
//                  justify-content: center;
//                  font-size: 14px;
//                  border-radius: 10px;
//              }
//          }
//}
.text-bar{
  display: flex;  
  background:#fff ;
  max-height: 237px;
  border-radius: 18px;
  border: 1px solid rgba(209, 213, 219, 1);
  font-size: 12px;
  padding: 14px 16px;
  margin-bottom: 20px;
  transition:0.5s;
  .main-box{
       overflow:scroll ;
       padding: 0px 20px;
  }

  }
.text-bar::-webkit-scrollbar {
    width: 10px;
}
@media (min-width:450px) {
    .bottom{
        display: none !important;
    }
    .second-child{
        display: flex !important;
        flex-direction:row !important;
        justify-content: space-around;
        flex-wrap: wrap;
        .text {
            display: none;
        }
    }
    .second-child-card{
        width: 370px !important;
        margin-bottom: 20px !important;
        margin-top:0px !important;
        margin-right: 20px;
    }
}
@media (max-width:450px) {
    .text-bar{
        display: none;
    }
}
</style>