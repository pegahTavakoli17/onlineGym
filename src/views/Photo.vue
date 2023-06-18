<template>
  <div class="pb-10">
    <div class="main-container cardColor">
      <div class="primary bgColor--text infoCard">
        <p class="text--center mx-auto">
          هیچ اجباری به ارسال تصویر نیست و آنالیز محاسباتی سیستم ما برای بررسی
          وضعیت فیزیکی تو با دقت عمل میکنه اما اگر قصد ارسال تصویر داشتی سه عکس
          از روبرو، پشت و نیم‌رخ بدن با پوشش مناسب در حالت آزاد و ریلکس و بدون
          احتباس نفس اینجا اضافه کن و یادت باشه که حجم تصاویر بالا نباشه تا زیاد
          معطل نشی
        </p>
      </div>
<v-row class="mt-2">
 <v-col sm="4" cols="12" class="justify-center text-center ">
   <v-btn class="primary bgColor--text mx-auto">
  <label>
<b>
  بارگذاری عکس از روبرو
  </b>  <input type="file" accept="image/* " style="display:none">
</label> </v-btn> 
<div class="mt-3">
  <img src="/front.png" alt="" height="450">
</div>
 </v-col>
  <v-col sm="4" cols="12" class="justify-center text-center ">
   <v-btn class="primary bgColor--text mx-auto">
  <label>
<b>
  بارگذاری عکس از پشت
  </b>  <input type="file" accept="image/* " style="display:none">
</label> </v-btn> 
<div class="mt-3">
  <img src="/back.png" alt="" height="450">
</div>
 </v-col>

  <v-col cols="12" sm="4" class="justify-center text-center ">
   <v-btn class="primary bgColor--text mx-auto">
  <label>
<b>
  بارگذاری عکس از نیم‌رخ
  </b>  <input type="file" accept="image/* " style="display:none">
</label> </v-btn> 
<div class="mt-3">
  <img src="/side.png" alt="" height="450">
</div>
 </v-col>
</v-row>

  </div>
<div class="text-center">
    <v-btn  class="primary secondary--text font-weight-bold"
        width="120"
        height="48"
         @click="$router.push('/coach')"
       >
<v-icon>
  mdi-chevron-right
</v-icon>
<h3>
  بعدی
</h3>
  </v-btn>
  <v-btn   class="primary secondary--text font-weight-bold ms-3 "
        width="120"
        height="48"
        @click="$router.push('/userinfo')">

<h3>
  قبلی
</h3>
<v-icon>
  mdi-chevron-left
</v-icon>
  </v-btn>
</div>  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" >
    .infoCard{
        border-radius: 12px;
        padding: 10PX;
        text-align: center!important;
        
    }
</style>