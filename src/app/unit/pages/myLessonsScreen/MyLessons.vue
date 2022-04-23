<template>
  <div class="main-controller">
      <div class="top-bar">
          <div class="first-child">
              <h1>درس های من</h1>
          </div>
          <div class="last-child">
              <ul>
                  <li>عنوان درس</li>
                  <li>شناسه درس</li>
                  <li>عنوان دوره </li>
                  <li>عنوان گروه آموزشی</li>
              </ul>
          </div>
      </div>
      <div class="lessons-item">
          <div class="item">
              <ul>
                  <li> معرفی مفاهیم پایه COBIT</li>
                  <li>AHI001</li>
                  <li>COBIT</li>
                  <li>فناوری اطلاعات</li>
              </ul>
          </div>
           <div class="item">
              <ul>
                  <li> معرفی مفاهیم پایه COBIT</li>
                  <li>AHI001</li>
                  <li>COBIT</li>
                  <li>فناوری اطلاعات</li>
              </ul>
          </div>
           <div class="item">
              <ul>
                  <li> معرفی مفاهیم پایه COBIT</li>
                  <li>AHI001</li>
                  <li>COBIT</li>
                  <li>فناوری اطلاعات</li>
              </ul>
          </div>
      </div>
      <div class="between-bar">
          <div class="first-child">
            <Button class="button"  label="مشاهده محتوای درسی"/>
          </div>
          <div class="last-child">
             <Button class="button" label="ورود به محیط کلاس مجازی"/>
          </div>
      </div>
      <div class="teacher-box">
          <div class="first-child">
              <h1>اطلاعات اصلی در رابطه با درس انتخاب شده</h1>
          </div>
          <div class="second-child">
              <ul>
                  <li>شخصیت حقوقی/حقیقی عرضه کننده درس</li>
                  <li>نام مدرس</li>
                  <li>سبک آموزشی </li>
              </ul>
          </div>
          <div class="third-child">
              <ul>
                  <li>انجمن علمی حسابرسی فناوری اطلاعات ایران</li>
                  <li>آقای مهندس محمد محمدی</li>
                  <li>آنلاین وآفلاین،استادمحور</li>
              </ul>
          </div>
      </div>
      <div class="time-box">
          <h1>مدت زمان کلاس</h1>
          <div class="first-child">
              <div>زمان سپری شده</div>
              <div>زمان باقیمانده</div>
          </div>
          <div class="last-child">
               <div>دو هفته</div>
              <div>دو هفته</div>
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
    .top-bar{
        .first-child {
            margin-top: 30px;
            margin-bottom: 16px;
           h1{
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(31, 41, 55, 1);
            font-size: 14px  !important;
            font-weight:bolder;
           } 
        }
        .last-child{
            ul {
                display: flex;
                list-style: none;
                justify-content: center;
                align-items: center;
                padding: 0px !important;
                background: rgba(229, 231, 235, 1);
                height: 49px;
                li{
                    font-size: 12px;
                    padding: 8px 16px;
                    border-left: 1px solid  rgba(209, 213, 219, 1);
                }
                li:last-child{
                    border: none;
                }
            }
        }
    }
    .lessons-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 4px;
        .item {
            ul {
                display: flex;
                list-style: none;
                justify-content: center;
                align-items: center;
                padding: 0px !important;
                border:1px solid rgba(87, 204, 153, 1);
                border-radius: 8px;
                color: rgba(107, 114, 128, 1);
               
                li{
                    font-size: 12px;
                    padding: 18px 16px;
                    cursor:pointer;
                } 
            }  
             ul:hover{
                    background:rgba(87, 204, 153, 1) ;
                    color: #ffff;
                }  

        }
    }
    .between-bar{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 28px 28px;
        .first-child{
            width: 50%;
            display: flex;
            justify-content: flex-start;
            .button{
                font-size:12px;
                color: rgba(71, 85, 105, 1);
                border:2px solid rgba(87, 204, 153, 1);
                background: #ffff;
                padding: 14px 16px;
                width: 172px;
                border-radius:6px;
            }
        }
        .last-child{
            display: flex;
            justify-content: flex-end;
            width: 50%;
            .button{
                font-size:12px;
                color: rgba(71, 85, 105, 1);
                border:2px solid rgba(87, 204, 153, 1);
                background: #ffff;
                padding: 14px 16px;
                width: 172px;
                border-radius:6px;
            }
        }
    }
    .teacher-box{
        .first-child {
            margin-top: 30px;
            margin-bottom: 16px;
           h1{
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(31, 41, 55, 1);
            font-size: 12px  !important;
            font-weight:bolder;
           } 
        }
        .second-child{
            ul {
                display: flex;
                list-style: none;
                justify-content: center;
                align-items: center;
                padding: 0px !important;
                background: rgba(229, 231, 235, 1);
                margin-bottom: 0px;
                li{
                    width: 35%;
                    font-size: 12px;
                    padding: 8px 8px;
                    border-left: 1px solid   rgba(209, 213, 219, 1);
                    text-align: center
;
                }
                li:last-child{
                    border: none;
                }
            }
        }
        .third-child{
            ul {
                display: flex;
                list-style: none;
                justify-content: center;
                align-items: center;
                padding: 0px !important;
                background:#ffff;
                li{
                    color: rgba(107, 114, 128, 1);
                    width: 35%;
                    font-size: 12px;
                    padding: 8px 8px;
                    text-align: center
;
                }
                li:last-child{
                    border: none;
                }
            }
        }
    }
    .time-box{
        display: flex;
        flex-direction: column;
        margin-top: 28px;
        h1{
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(31, 41, 55, 1);
            font-size: 12px  !important;
            font-weight:bolder; 
        }
        .first-child{
            display: flex;
            flex-direction:row;
            background: rgba(229, 231, 235, 1);
            margin-top: 12px;
            div {
                width: 50%;
                display: flex;
                justify-content: center;
                color: rgba(75, 85, 99, 1);
                font-size: 12px;
                padding: 14px 40px;
            }
        }
        .last-child{     
            display: flex;
            flex-direction:row;
            background: #ffff;
            div {
                width: 50%;
                display: flex;
                justify-content: center;
                color: rgba(107, 114, 128, 1);
                font-size: 12px;
                padding: 14px 40px;
            }
        }
    }
}
</style>