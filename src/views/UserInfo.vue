<template>
  <div class="pb-10">
    <div class="main-container cardColor">
      <div class="mt-4">
        <div class="d-flex">
          <h5>فرم مورد نظر خود را انتخاب کنید:</h5>
          <h5 class="red--text ps-1">*</h5>
        </div>
        <v-radio-group>
          <v-radio
            label="ثبت‌نام ابتدایی"
            value="firstRegistration"
            @click="isFirstRegister()"
          ></v-radio>
          <v-radio
            label="تمدید دوره"
            value="Re-register"
            @click="isSecondRegister()"
          ></v-radio>
        </v-radio-group>
      </div>
      <div v-if="firstRegister">
        <div class="d-flex">
          <h5>روش تمرینی شما چیست؟</h5>
          <h5 class="red--text ps-1">*</h5>
        </div>
        <p class="fs-xsmall mb-0 mt-2">
          لطفا مطابق با پرداخت خود یکی از گزینه های زیر را انتخاب نمایید.
        </p>
        <v-radio-group>
          <v-radio value="privateCoach" label="درخواست مربی خصوصی ورزشی آنلاین">
          </v-radio>
          <v-radio value="exercise" label="درخواست برنامه تمرینی ورزشی آنلاین">
          </v-radio>
        </v-radio-group>
      </div>
      <div v-if="secondRegister">
        <div>
          <div class="d-flex">
            <h5>لطفا میزان رضایت از دوره قبلی را ذکر کنید:</h5>
            <h5 class="red--text ps-1">*</h5>
          </div>
          <v-radio-group>
            <v-radio label="کم" value="low "> </v-radio>
            <v-radio label="متوسط" value="normal "> </v-radio>
            <v-radio label="زیاد" value="high "> </v-radio>
          </v-radio-group>
        </div>
        <div>
          <div class="d-flex">
            <h5>روش تمرینی شما چیست؟</h5>
            <h5 class="red--text ps-1">*</h5>
          </div>
          <p class="fs-xsmall mb-0 mt-2">
            لطفا مطابق با پرداخت خود یکی از گزینه های زیر را انتخاب نمایید.
          </p>
          <v-radio-group>
            <v-radio
              value="rePrivateCoach"
              label="تمدید مربی خصوصی ورزشی آنلاین"
            >
            </v-radio>
            <v-radio
              value="reExercise"
              label="تمدید برنامه تمرینی ورزشی آنلاین"
            >
            </v-radio>
          </v-radio-group>
        </div>
      </div>
      <v-expansion-panels v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header id="panel0" class="py-5">
            <h3>
              <v-icon
                v-if="panel != 0"
                style="font-weight: bold; font-size: 1.4rem"
                class="me-1 primary--text"
                >mdi-plus-box-outline</v-icon
              >
              <v-icon
                v-else
                style="font-weight: bold; font-size: 1.4rem"
                class="me-1 primary--text"
              >
                mdi-minus-box-outline
              </v-icon>
              اطلاعات فردی
            </h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="mt-3">
              <v-col>
                <v-text-field
                  label="نام و نام‌خانواگی"
                  v-model="name"
                  outlined
                  dense
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="شماره موبایل "
                  v-model="mobile"
                  outlined
                  dense
                  type="number"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-3">
              <v-col>
                <v-select
                  label=" جنسیت "
                  v-model="gender"
                  outlined
                  dense
                  :items="genderItems"
                >
                </v-select>
              </v-col>
              <v-col>
                <span id="date">
                  <v-text-field
                    label="تاریخ تولد "
                    v-model="birthDay"
                    outlined
                    dense
                    readonly
                  >
                  </v-text-field>
                </span>
                <date-picker
                  element="date"
                  v-model="birthDay"
                  color="#f1612c"
                  :max="currentDate"
                >
                </date-picker>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="قد"
                  v-model="height"
                  outlined
                  dense
                  type="number"
                  pattern="\d*"
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="وزن  "
                  v-model="weight"
                  outlined
                  dense
                  type="number"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="شغل" v-model="job" outlined dense>
                </v-text-field>
              </v-col>
              <v-col> </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header
            id="panel1"
            style="border-top: 1px solid black"
            class="py-5"
          >
            <h3>
              <v-icon
                v-if="panel != 1"
                class="me-1 primary--text"
                style="font-weight: bold; font-size: 1.4rem"
              >
                mdi-plus-box-outline </v-icon
              ><v-icon v-else class="primary--text me-1">
                mdi-minus-box-outline </v-icon
              >اطلاعات پزشکی
            </h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content
            ><v-row>
              <v-col cols="12">
                <span>
                  آیا تا به‌حال درد یا صدمه‌ای از مچ، زانو، لگن و یا کمر
                  داشته‌اید؟
                </span>
                <v-radio-group class="mt-10" row>
                  <v-radio label="بله" value="hurt" @click="hurt1 = true">
                  </v-radio>
                  <v-radio label="خیر" value="noHurt" @click="hurt1 = false">
                  </v-radio>
                </v-radio-group>
                <v-textarea
                  label="توضیحات بیشتر در صورت نیاز"
                  outlined
                  dense
                  v-if="hurt1"
                  rows="3"
                >
                </v-textarea>
              </v-col>
            
              <v-col cols="12">
                <span>
                  آیا تا به‌حال بیماری مزمنی مثل بیماری قلبی و عروقی، فشار خون،
                  کلسترول بالا، دیابت، کبد چرب، سنگ کلیه و... داشته‌اید؟
                </span>
                <v-radio-group row>
                  <v-radio label="بله" value="diabet" @click="diabet1 = true">
                  </v-radio>
                  <v-radio
                    label="خیر"
                    value="noDiabet"
                    @click="diabet1 = false"
                  >
                  </v-radio>
                </v-radio-group>
                <v-textarea
                  v-if="diabet1"
                  v-model="haveDiabet"
                  label="توضیحات بیشتر در صورت نیاز"
                  outlined
                  dense
                  rows="3"
                >
                </v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <span>
                  آیا تاکنون به دلیل سرگیجه تعادل و یا هوشیاری خود را از دست
                  داده‌اید؟
                </span>
                <v-radio-group row>
                  <v-radio label="بله" value="drug" @click="confusion = true">
                  </v-radio>
                  <v-radio
                    label="خیر"
                    value="noDrug"
                    @click="confusion = false"
                  ></v-radio>
                </v-radio-group>
                <v-textarea
                  v-if="confusion"
                  v-model="haveConfusion"
                  label="توضیحات در صورت نیاز"
                  rows="3"
                  outlined
                >
                </v-textarea>
              </v-col>
              <!-- <v-divider vertical></v-divider> -->
              <v-col cols="12">
                <span>
                  آیا داروی خاصی مصرف می‌کنید؟
                  <v-radio-group row>
                    <v-radio label="بله" value="drug" @click="drug1 = true">
                    </v-radio>
                    <v-radio
                      label="خیر"
                      value="noDrug"
                      @click="drug1 = false"
                    ></v-radio>
                  </v-radio-group>
                </span>
                <v-textarea
                  v-if="drug1"
                  v-model="useDrug"
                  label="توضیحات در صورت نیاز"
                  rows="3"
                  outlined
                >
                </v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <span>
                  آیا مشکل جسمی یا سلامتی قابل قبولی برای عدم دنبال کردن یک
                  برنامه تمرینی با وزنه وجود دارد که نگفته باشید؟

                  <v-radio-group row>
                    <v-radio
                      label="بله"
                      value="problem"
                      @click="problem1 = true"
                    >
                    </v-radio>
                    <v-radio
                      label="خیر"
                      value="noProblem"
                      @click="problem1 = false"
                    ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="problem1"
                    v-model="haveProblem"
                    label="توضیحات در صورت نیاز"
                    rows="3"
                    outlined
                  >
                  </v-textarea>
                </span>
              </v-col>
              <!-- <v-divider vertical></v-divider> -->
              <v-col cols="12">
                <span id="checkUp-date">
                  <v-text-field
                    label="تاریخ آخرین چکاپ"
                    dense
                    outlined
                    v-model="Checkup"
                    readonly
                  >
                  </v-text-field>
                </span>
                <date-picker
                  element="checkUp-date"
                  color="#f1612c"
                  v-model="Checkup"
                  :max="currentDate"
                >
                </date-picker>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header
            id="panel2"
            style="border-top: 1px solid black"
            class="py-5"
          >
            <h3>
              <v-icon
                v-if="panel != 2"
                style="font-weight: bold; font-size: 1.4rem"
                class="me-1 primary--text"
              >
                mdi-plus-box-outline
              </v-icon>
              <v-icon
                v-else
                style="font-weight: bold; font-size: 1.4rem"
                class="me-1 primary--text"
              >
                mdi-minus-box-outline
              </v-icon>
              اطلاعات ورزشی
            </h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="12">
                <span>
                  هدف تمرینی شما چیست؟
                  <v-radio-group row>
                    <v-radio label="افزایش وزن" value="increaseWeight">
                    </v-radio>
                    <v-radio label="کاهش وزن" value="decreaseWeight"></v-radio>
                    <v-radio label="عضله‌سازی " value="muscle"></v-radio>
                    <v-radio label=" قهرمانی" value="champion"></v-radio>
                    <v-radio label=" درمانی" value="treatment"></v-radio>
                  </v-radio-group>
                </span>
              </v-col>
              <!-- <v-divider vertical> </v-divider> -->
              <v-col>
                <span>
                  محل تمرین شما کجاست؟
                  <v-radio-group row>
                    <v-radio label="منزل" value="house" @click="home = true">
                    </v-radio>
                    <v-radio
                      label="باشگاه"
                      value="gym"
                      @click="atGym = true"
                    ></v-radio>
                    <v-radio
                      label=" فضای باز(مانند پارک)"
                      value="park"
                      @click="workOut()"
                    ></v-radio>
                  </v-radio-group>
                </span>
                <v-text-field
                  v-if="home || atGym"
                  placeholder="درصورت داشتن لوازم ورزشی، ذکر نمایید."
                  outlined
                  dense
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <span>
                  آیا سابقه ورزشی دارید؟
                  <v-radio-group row>
                    <v-radio
                      label="بله"
                      value="sportExprience"
                      @click="sportArea = true"
                    >
                    </v-radio>
                    <v-radio
                      label="خیر"
                      value="noSportExprience"
                      @click="sportArea = false"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-if="sportArea"
                    v-model="sportDescription"
                    placeholder="نام ورزش و مدت زمان آن را وارد نمایید."
                    rows="3"
                    outlined
                  >
                  </v-text-field>
                </span>
              </v-col>
              <!-- <v-divider vertical> </v-divider> -->
              <v-col cols="12">
                <span>
                  آیا رشته ورزشی خاصی مد نظر شماست؟
                  <v-radio-group row>
                    <v-radio
                      label="بله"
                      value="special"
                      @click="specialSportArea = true"
                    >
                    </v-radio>
                    <v-radio
                      label="خیر"
                      value="noSpecial"
                      @click="specialSportArea = false"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-if="specialSportArea"
                    v-model="specialSportDescription"
                    placeholder=" نام رشته مورد نظر خود را وارد نمایید.  "
                    rows="3"
                    outlined
                  >
                  </v-text-field>
                </span>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="text-center">
      <v-btn
        class="primary secondary--text font-weight-bold"
        width="160"
        height="48"
        @click="$router.push('/photo')"
      >
        <h3>ثبت اطلاعات</h3>
      </v-btn>
    </div>
  </div>
</template>
<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import moment from "moment-jalaali";
export default {
  components: {
    datePicker: VuePersianDatetimePicker,
  },
  data() {
    return {
      panel: null,
      firstRegister: false,
      secondRegister: false,
      currentDate: moment(new Date()).format("jYYYY/jMM/jDD"),

      name: "",
      mobile: "",
      genderItems: ["زن", "مرد", "تمایلی به مطرح کردن ندارم."],
      gender: "",
      weight: "",
      height: "",
      birthDay: "",
      job: "",
      hurt1: false,
      diabet1: false,
      drug1: false,
      drugData: "",
      Checkup: "",
      confusion: false,
      haveConfusion: "",
      haveDiabet: "",
      haveProblem: "",
      useDrug: "",
      problem1: false,
      sportDescription: "",
      sportArea: false,
      specialSportDescription: "",
      specialSportArea: false,
      home: false,
      atGym: false,
    };
  },
  methods: {
    isFirstRegister() {
      this.firstRegister = true;
      this.secondRegister = false;
    },
    isSecondRegister() {
      this.firstRegister = false;
      this.secondRegister = true;
    },
    workOut() {
      this.atGym = false;
      this.home = false;
    },
  },
};
</script>
<style lang="scss">
.vpd-month-label {
  color: "#f1612c" !important;
  border-color: "#f1612c" !important;
}
.vpd-month-label > span:not(:hover) {
  border-color: rgb(241, 97, 44) !important;
  color: rgb(241, 97, 44) !important;
}
.vpd-actions button {
  border: 1px solid rgb(241, 97, 44) !important;
  border-radius: 5px !important;
}
.vpd-day-text {
  color: #1b1b1b;
}
</style>
