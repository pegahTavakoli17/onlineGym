<template>
  <div class="login d-flex justify-center align-center bgColor">
    <v-card class="login-card pa-4 d-flex flex-column">
      <div class="me-15 d-flex justify-center mb-16">
        <span class="text-center mx-auto">
          <v-icon> $LoginPic </v-icon>
        </span>
      </div>

      <div class="mt-16">
        <v-text-field
          outlined
          dense
          label="شماره موبایل"
          dir="ltr"
          :suffix="dialCode + '+'"
          v-model="mobile"
          :disabled="activationCode"
          @keyup.enter="sendCode()"
        >
          <template v-slot:append>
            <vue-country-code
              v-model="code"
              @onSelect="onSelect"
              :preferredCountries="['ir']"
              
            >
            </vue-country-code>
            <v-icon> mdi-phone </v-icon>
          </template></v-text-field
        >
      </div>
      <div class="mx-auto">
        <v-btn
          width="150"
          height="48"
          class="primary secondary--text"
          @click="sendCode()"
          :disabled="activationCode"
        >
          <b>ارسال کد تایید</b>
        </v-btn>
      </div>
      <div v-if="activationCode " class="mx-auto mt-5">
        <div class="pinCode">
          <PincodeInput v-model="code" placeholder="" :length="4" @input="login" />
        </div>
        <div class="d-flex mt-2">
            <div class="primary--text">
                تا ارسال مجدد کد تایید:
            </div>
            <span class="js-timeout" >
                2:00
            </span>
        </div>
        <div>
          <v-btn
            class="primary secondary--text ms-8 mt-5 mb-5"
            @click="activationCode = false"
            width="150"
            height="48"
          >
            <b> ویرایش شماره موبایل</b>
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>



<script>
import PincodeInput from "vue-pincode-input";
import $ from "jquery"
export default {
  components: {
    PincodeInput,
  },
  data() {
    return {
      dialCode: "",
      mobile: "",
      activationCode: false,
      code: "",
      showTimer:false,
    
      
    };
  },
  methods: {
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
      this.dialCode = dialCode;
    },
    sendCode() {
      if (this.mobile.length < 10) {
        this.toast("شماره موبایل نادرست است", "error");
      } else {
        this.toast('کد با موفقیت ارسال شد','success');
        this.activationCode = true;
        $('.js-timeout').text("2:00");
        this.countDownTimer();
        
      }
    },
    login() {
    if(this.code.length==4){  if (this.code == "1234") {
       setTimeout(() => {
        this.$router.push("/home");
       }, 300);
      }
      else{
        this.toast('کد وارد شده اشتباه است','error');
        this.code="";
      }}
    },
     countDownTimer() {
        var interval;
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0 && seconds<0) {
        this.activationCode=false;
      }
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && seconds.length != 2) seconds = '0' + seconds;

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) {
        clearInterval(interval);
      
      }
  }, 1000);
}

}
};
</script>
<style lang="scss" >
.login {
  width: 100%;
  height: 100%;
}
.login-card {
  width: 400px;
  min-height: 400px;
  height: fit-content;
  border-radius: 12px !important;
}
.vue-country-select {
  border: none !important;
  direction: ltr !important;
}
.vti__flag {
  display: none !important;
}
.pinCode {
  direction: ltr;
}
.vue-pincode-input {
  margin: 7px !important;
  width: 48px !important;
  box-shadow: none !important;
  border: 1px solid #ccc !important ;
}
</style>