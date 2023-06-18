<template>
  <div v-if="gettingData">
    <Loading />
  </div>
  <div v-else class="exerciseDetails-container">
    <div class="d-flex justify-space-between pt-3">
      <div class="d-flex flex-column">
        <h3 class="text-right secondary--text mt-4 ms-2">
          <span v-if="type == 'programId'"
            >{{ currentExercise.exerciseNumber }}.</span
          >
          حرکت
          {{ currentExercise.title }}
        </h3>
        <div v-if="type == 'programId'">
          <p
            v-if="nextExercise"
            class="grey--text text-right fs-medium mt-2 mb-0"
            style="margin-right: 31px"
          >
            <span class="font-weight-bold"> حرکت بعدی: </span>
            {{ nextExercise }}
          </p>
          <p v-else class="grey--text mt-2 mb-0 ms-2">
            شما به آخرین حرکت رسیدید :)
          </p>
        </div>
      </div>
      <div>
        <v-btn
          style="min-width: 40px"
          width="40"
          height="40"
          class="text-left mt-3 bordered-btn"
          @click="goBack()"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
    </div>
    <v-card
      class="program-card cardGrey mt-5"
      style="border-radius: 15px !important"
    >
      <div class="text-center ps-3 pe-3 pt-4">
        <video controls class="video videoBg">
          <source :src="currentExercise.educationalVideoUrl" type="video/mp4" />
        </video>
      </div>
      <div class="mt-3 fs-small">
        <v-row>
          <v-col class="text-right ps-8 pb-0">
            <v-icon color="secondary">$CheckSquare</v-icon> تعداد ست:
            <span class="secondary--text font-weight-bold"
              >{{ currentExercise.setNumber }} ست</span
            >
          </v-col>
        </v-row>
      </div>
      <div class="mt-0 fs-small mx-auto">
        <v-row>
          <v-col class="text-right ps-8">
            <v-icon color="secondary">$CheckSquare</v-icon> تعداد حرکت هر ست:
            <span class="secondary--text font-weight-bold"
              >{{ currentExercise.perSet }} حرکت</span
            >
          </v-col>
        </v-row>
      </div>
    </v-card>

    <div>
      <h4 class="secondary--text text-right mt-12 ms-1">
        <v-icon color="secondary">mdi-square-medium</v-icon>توضیحات حرکت
      </h4>
      <p class="mt-2 text-right mx-2 fs-small">
        {{ currentExercise.exerciseDescription }}
      </p>
    </div>
    <div>
      <h4 class="secondary--text text-right mt-6 ms-1 d-flex">
        <div class="d-flex flex-column justify-content-start">
          <v-icon color="secondary">mdi-square-medium</v-icon>
        </div>
        توضیحات شخصی مربوط به {{ currentExercise.title }}
      </h4>
      <p class="mt-2 text-right mx-2 fs-small">
        {{ currentExercise.description }}
      </p>
    </div>
    <div v-if="type == 'programId'">
      <v-row
        class="buttons bgColor"
        :class="!$vuetify.theme.dark ? 'light-shadow' : 'dark-shadow'"
      >
        <v-col cols="12" class="d-flex justify-space-around pt-0">
          <v-btn
            :loading="completeLoading"
            @click="doExercise()"
            class="secondary"
            width="145"
            height="48"
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
            <v-icon class="me-1"> mdi-check-circle-outline </v-icon>
            {{ nextExercise ? "انجام" : "انجام و اتمام" }}
          </v-btn>
          <v-btn @click="confirmSkip()" class="error" width="145" height="48">
            <v-icon class="pt-1 me-1"> mdi-debug-step-over </v-icon> رد کردن
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="openSkipConfirmationDialog" width="400">
      <v-card style="border-radius: 12px">
        <v-card-title class="primary--text"
          >رد کردن "{{ currentExercise.title }}"</v-card-title
        >
        <h5 class="pe-6 ps-6 pb-1">
          در صورت رد کردن، قادر به برگشت به این تمرین نیستید. آیا مطمئن هستید؟
        </h5>
        <div class="text-left pe-4 pb-4">
          <v-btn
            :loading="skipLoading"
            color="error"
            class="me-2"
            @click="skipExercise()"
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
            بله
          </v-btn>
          <v-btn
            class="secondary me-3"
            @click="openSkipConfirmationDialog = false"
          >
            خیر
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Axios from "axios";
import Loading from "./../components/Loading.vue";
import { LoopingRhombusesSpinner } from "epic-spinners";
export default {
  components: {
    Loading,
    LoopingRhombusesSpinner,
  },
  props: ["type"],
  data() {
    return {
      gettingData: false,
      skipLoading: false,
      completeLoading: false,
      currentExercise: {},
      nextExercise: {},
      openSkipConfirmationDialog: false,
    };
  },
  methods: {
    getExerciseData() {
      this.gettingData = true;
      Axios.get(
        this.baseUrl +
          "/user/exerciseDay/nextExercise/" +
          this.$route.params.id,
        {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("token"),
          },
        }
      )

        .then((res) => {
          if (res.status == 200) {
            this.currentExercise = res.data;
            this.nextExercise = res.data.nextExerciseTitle;
            this.gettingData = false;
          }
        })
        .catch((err) => {
          this.gettingData = false;
          console.log(err);
          this.toast("خطا: " + err.response.data, "error");
        });
    },
    getProgramInfo() {
      this.gettingData = true;
      Axios.get(
        this.baseUrl + "/user/exercise/getData/" + this.$route.params.id,
        {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("token"),
          },
        }
      )

        .then((res) => {
          if (res.status == 200) {
            this.currentExercise = res.data;
            this.gettingData = false;
          }
        })
        .catch((err) => {
          this.gettingData = false;

          console.log(err);
          this.toast("خطا: " + err.response.data, "error");
        });
    },
    doExercise() {
      if (!this.nextExercise) {
        this.$router.push("/finishedDay/" + this.$route.params.id);
      }
      this.completeLoading = true;
      Axios.patch(
        this.baseUrl + "/user/exercise/complete/" + this.currentExercise.id,
        {},
        {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("token"),
          },
        }
      )

        .then((res) => {
          if (res.status == 200) {
            this.toast(res.data.message, "success");
            this.completeLoading = false;
            this.currentExercise = res.data.nextExercise;
            this.nextExercise = res.data.nextExercise.nextExerciseTitle;

            this.goToTop();
          }
        })
        .catch((err) => {
          this.completeLoading = false;

          console.log(err);
          this.toast("خطا: " + err.response.data, "error");
        });
    },
    confirmSkip() {
      this.openSkipConfirmationDialog = true;
    },
    skipExercise() {
      if (!this.nextExercise) {
        this.$router.push("/finishedDay/" + this.$route.params.id);
      }
      this.skipLoading = true;
      Axios.patch(
        this.baseUrl + "/user/exercise/skip/" + this.currentExercise.id,
        {},
        {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("token"),
          },
        }
      )

        .then((res) => {
          if (res.status == 200) {
            this.skipLoading = false;
            this.toast(res.data.message, "success");
            this.currentExercise = res.data.nextExercise;
            this.nextExercise = res.data.nextExercise.nextExerciseTitle;
            this.openSkipConfirmationDialog = false;

            this.goToTop();
          }
        })
        .catch((err) => {
          this.skipLoading = false;
          (this.openSkipConfirmationDialog = false), console.log(err);
          this.toast("خطا: " + err.response.data, "error");
        });
    },
    goToTop() {
      document.getElementsByTagName("html")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    if (this.type == "programId") {
      this.getExerciseData();
    } else {
      this.getProgramInfo();
    }
  },
};
</script>
<style lang="scss">
.exerciseDetails-container {
  width: 90% !important;
  text-align: center;
  margin: 0 auto;
  position: relative;
  min-height: 80vh;
  padding-bottom: 100px;
  .buttons {
    margin-right: -20px;
  }
}
</style>
