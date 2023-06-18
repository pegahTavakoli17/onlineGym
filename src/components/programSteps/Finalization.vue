<template>
  <div class="finalization-container" v-if="programInfo.goal">
    <p class="mt-6 fs-small">
      <v-icon color="primary">mdi-flare</v-icon>
      اطلاعات برنامه درخواستی به شرح زیر می‌باشد. اطلاعات وارد شده را بررسی کرده
      و در صورت صحت اطلاعات جهت ثبت نهایی درخواست اقدام به پرداخت نمایید.
    </p>

    <div class="info-card fs-small">
      <div class="card-title bgColor fs-large secondary--text">
        اطلاعات برنامه
      </div>

      <!-- Goal -->
      <v-row>
        <v-col class="d-flex justify-space-between">
          <div class="d-flex pe-2">
            <div class="d-flex flex-column justify-content-start">
              <v-icon color="secondary" class="pe-1">$CheckSquare</v-icon>
            </div>
            <div>
              <b class="secondary--text">هدف برنامه:</b>
              <span class="pe-2">
                <span class="ps-1">{{
                  options.filter((x) => x.titleEn == programInfo.goal)[0]
                    ? options.filter((x) => x.titleEn == programInfo.goal)[0]
                        .title
                    : ""
                }}</span
                ><span v-if="programInfo.goal == 'specialSportPreparation'"
                  >({{ programInfo.sport }})</span
                >
              </span>
            </div>
          </div>
          <span @click="goStep(1)"
            ><v-icon :class="$vuetify.theme.dark ? 'dark-icon' : 'light-icon'"
              >$EditSquare</v-icon
            ></span
          >
        </v-col>
      </v-row>

      <!-- Diet -->
      <v-row>
        <v-col>
          <div class="d-flex justify-space-between">
            <div>
              <v-icon color="secondary" class="pe-1">$CheckSquare</v-icon>
              <span class="ps-1"
                >مایل به دریافت رژیم غذایی
                <b class="secondary--text">{{
                  programInfo.diet == "workout-diet" ? "هستم" : "نیستم"
                }}</b
                >.</span
              >
            </div>
            <span @click="goStep(1)"
              ><v-icon
                class="ms-2"
                :class="$vuetify.theme.dark ? 'dark-icon' : 'light-icon'"
                >$EditSquare</v-icon
              ></span
            >
          </div>
        </v-col>
      </v-row>
      <!-- Days -->
      <v-row>
        <v-col>
          <div class="d-flex justify-space-between">
            <div class="d-flex pe-2">
              <div class="d-flex flex-column justify-content-start">
                <v-icon color="secondary" class="pe-1">$CheckSquare</v-icon>
              </div>
              <div>
                <b class="secondary--text">روزهای انتخابی:</b>

                <span class="ps-1 pe-2">{{
                  programInfo.workoutDays.join("، ")
                }}</span>
              </div>
            </div>
            <span @click="goStep(2)"
              ><v-icon :class="$vuetify.theme.dark ? 'dark-icon' : 'light-icon'"
                >$EditSquare</v-icon
              ></span
            >
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="d-flex justify-space-between">
            <div>
              <v-icon color="secondary" class="pe-1">$CheckSquare</v-icon
              ><b class="secondary--text">محل تمرین:</b>
              <span class="ps-1">{{
                programInfo.workoutPlace == "home" ? "خانه" : "باشگاه"
              }}</span>
            </div>
            <span @click="goStep(3)"
              ><v-icon
                class="ms-2"
                :class="$vuetify.theme.dark ? 'dark-icon' : 'light-icon'"
                >$EditSquare</v-icon
              ></span
            >
          </div>
        </v-col>
      </v-row>
      <!-- Equipments -->
      <v-row v-if="programInfo.workoutPlace == 'home'">
        <v-col>
          <div class="d-flex justify-space-between">
            <div class="d-flex pe-2">
              <div class="d-flex flex-column justify-content-start">
                <v-icon color="secondary" class="pe-1">$CheckSquare</v-icon>
              </div>
              <div>
                <b class="secondary--text">وسایل موجود در خانه:</b>
                <span class="ps-1 pe-2">{{
                  programInfo.equipments.join("، ")
                }}</span>
              </div>
            </div>
            <span @click="goStep(4)"
              ><v-icon :class="$vuetify.theme.dark ? 'dark-icon' : 'light-icon'"
                >$EditSquare</v-icon
              ></span
            >
          </div>
        </v-col>
      </v-row>
      <!-- description -->
      <v-row>
        <v-col>
          <div class="d-flex justify-space-between">
            <div class="d-flex pe-2">
              <div class="d-flex flex-column justify-content-start">
                <v-icon color="secondary" class="pe-1">$CheckSquare</v-icon>
              </div>
              <div>
                <b class="secondary--text">توضیحات:</b>
                <span class="ps-1 pe-2">{{
                  programInfo.description ? programInfo.description : "--"
                }}</span>
              </div>
            </div>
            <span @click="goStep(5)"
              ><v-icon :class="$vuetify.theme.dark ? 'dark-icon' : 'light-icon'"
                >$EditSquare</v-icon
              ></span
            >
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row
        class="buttons bgColor"
        :class="!$vuetify.theme.dark ? 'light-shadow' : 'dark-shadow'"
      >
        <v-col cols="12" class="d-flex justify-space-around pt-1">
          <v-btn
            @click="createAndPayment()"
            class="primary"
            width="145"
            height="48"
            :loading="loading"
          >
            <template v-slot:loader>
              <div>
                <looping-rhombuses-spinner
                  :animation-duration="2500"
                  :rhombus-size="10"
                  color="#fff"
                />
              </div>
            </template>
            <v-icon class="me-1">mdi-arrow-right-circle-outline</v-icon>
            پرداخت
          </v-btn>
          <v-btn @click="goBack()" class="secondary" width="145" height="48">
            قبلی <v-icon class="ms-1">mdi-arrow-left-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { LoopingRhombusesSpinner } from "epic-spinners";
import Axios from "axios";
export default {
  components: {
    LoopingRhombusesSpinner,
  },
  data() {
    return {
      options: [
        { title: "افزایش وزن ", titleEn: "gainingWeight" },
        {
          title: "کاهش وزن",
          titleEn: "reducingWeight",
        },

        {
          title: " عضله‌سازی",
          titleEn: "gainingMuscle",
        },
        {
          title: " خشک کردن",
          titleEn: "dry",
        },
        {
          title: "بدنسازی برای ورزش خاص",
          titleEn: "specialSportPreparation",
        },
      ],
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["setProgramInfo"]),
    goBack() {
      this.$emit("goBack");
    },
    goStep(stepNum) {
      this.$emit("goStep", stepNum);
    },
    createAndPayment() {
      this.loading = true;
      Axios.post(
        this.baseUrl + "/user/program/new",
        {
          goal: this.programInfo.goal,
          type: this.programInfo.diet,
          sport: this.programInfo.sport,
          workoutDayType: this.programInfo.workoutDayType,
          workoutDays: this.programInfo.workoutDays,
          workoutPlace: this.programInfo.workoutPlace,
          equipments: this.programInfo.equipments,
          description: this.programInfo.description,
        },
        {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("token"),
          },
        }
      )

        .then((res) => {
          this.loading = false;
          if (res.status == 200) {
            this.toast(res.data.message, "success");
            this.$router.push("/success");
            this.setProgramInfo({
              goal: "",
              diet: "workout",
              workoutDayType: "",
              workoutDays: [],
              workoutPlace: "",
              equipments: [],
              description: "",
              sport: "",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
          this.toast("خطا: " + err.response.data, "error");
        });
    },
  },
  computed: {
    ...mapGetters(["programInfo"]),
  },
  mounted() {},
};
</script>

<style lang="scss">
.finalization-container {
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow: auto;
  .info-card {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 25px 15px 20px;
    position: relative;
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    .card-title {
      position: absolute;
      top: -14px;
      padding: 0 10px;
    }
  }
  .buttons {
    margin-right: -19px;
    @media only screen and (max-width: 600px) {
      margin-right: -18px;
    }
  }
}
</style>
