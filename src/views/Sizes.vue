<template>
  <div class="pb-10">
    <div class="main-container cardColor">
      <div class="primary bgColor--text infoCard">
        <b class="text--center mx-auto">
          سلام ، من مربی تو هستم و میخوام با وضعیت تو آشنا بشم. لطفا در حالت
          ریلکس سایز همه قسمتها رو بگیر و اینجا بنویس
        </b>
      </div>
      <v-row>
        <v-col v-for="(item, index) in sizes" :key="index" sm="4" cols="12">
          <v-text-field
            :label="item.label"
            :v-model="item.model"
            outlined
            dense
            hide-details
          >
          </v-text-field>
        </v-col>
      </v-row>
    </div>
    <div class="text-center">
    <v-btn  class="primary secondary--text font-weight-bold"
        width="120"
        height="48"
         @click="$router.push('/finish')"
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
        @click="$router.push('/coach')">

<h3>
  قبلی
</h3>
<v-icon>
  mdi-chevron-left
</v-icon>
  </v-btn>
</div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: [
        { model: "height", label: "قد" },
        { model: "weight", label: "وزن" },
        // { model: "neck", label: "دور گردن" },
        {model:'shoulder',label:'دور شانه'},
        {model:'arm',label:'دور بازو'},
        // {model:'forearm',label:'دور ساعد'},
        {model:'Wrist',label:'دور مچ'},
        {model:'chest',label:'دور سینه'},
        {model:'stomach',label:'دور شکم'},
        {model:'waist',label:'دور کمر'},
        {model:'hip',label:'دور باسن'},
        {model:'thigh',label:'دور ران'},
        {model:'leg',label:'دور ساق'},
        {model:'ankle',label:'دور مچ پا'},
      ],
    };
  },
};
</script>

<style>
</style>