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
}
</style>