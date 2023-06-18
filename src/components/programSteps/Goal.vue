<template>
  <div class="goal-container">
    <h2 class="text-center primary--text mt-9">هدف</h2>
    <p class="mt-2 fs-xsmall">هدف خود را جهت دریافت برنامه ورزشی مشخص کنید:</p>

    <div class="mt-6">
      <v-row>
        <v-col v-for="(item, index) in options" :key="index" cols="6"
          ><v-btn
            width="140"
            height="100"
            @click="
              item.titleEn == 'specialSportPreparation'
                ? specialSportDialog(item)
                : otherSelect(item)
            "
            :class="
              selected == item.titleEn
                ? item.titleEn != 'specialSportPreparation'
                  ? 'secondary '
                  : sport
                  ? 'secondary'
                  : 'customGrey'
                : 'customGrey'
            "
          >
            <div class="d-flex flex-column pe-5 ps-5" style="width: 140px">
              <p class="mb-0 text-wrap">
                {{ item.title }}
              </p>
              <div v-if="sport && item.titleEn == 'specialSportPreparation'">
                ({{ sport }})
              </div>
            </div>
          </v-btn>
        </v-col>
      </v-row>
      <div class="text-right mt-9 px-1" @click="check()">
        <v-icon v-if="diet == 'workout'" color="secondary"
          >mdi-checkbox-blank-outline</v-icon
        >
        <v-icon v-else color="secondary">mdi-checkbox-intermediate</v-icon>
        <span class="ms-1 fs-small pt-1">مایل به دریافت رژیم غذایی هستم.</span>
      </div>
    </div>
    <div>
      <v-row
        class="buttons bgColor"
        :class="!$vuetify.theme.dark ? 'light-shadow' : 'dark-shadow'"
      >
        <v-col cols="12" class="d-flex justify-space-around pt-1">
          <v-btn
            @click="submit()"
            class="primary"
            width="145"
            height="48"
            :disabled="
              selected == 'specialSportPreparation' ? !sport : !selected
            "
          >
            <v-icon class="me-1">mdi-arrow-right-circle-outline</v-icon>
            ثبت و ادامه
          </v-btn>
          <v-btn @click="goBack()" class="secondary" width="145" height="48">
            خروج <v-icon class="ms-1">mdi-arrow-left-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="openSpecialDialog" width="400">
      <v-card style="border-radius: 12px">
        <v-card-title class="primary--text">
          بدنسازی برای ورزش خاص</v-card-title
        >
        <v-text-field
          v-model="specialSport"
          outlined
          dense
          class="mx-6 mt-3"
          placeholder="نام ورزش مورد نظر خود را وارد کنید."
          @keyup.enter="specialSport ? confirmSpecialSport() : ''"
        >
        </v-text-field>
        <div class="text-left pe-4 pb-4">
          <v-btn class="secondary me-2" @click="confirmSpecialSport()">
            تایید
          </v-btn>
          <v-btn color="error" class="me-3" @click="cancelSpecialSport()">
            بستن
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { LoopingRhombusesSpinner } from "epic-spinners";
import { mapGetters } from "vuex";
export default {
  components: {
    LoopingRhombusesSpinner,
  },
  data() {
    return {
      loading: false,
      openSpecialDialog: false,
      specialSport: "",
      sport: "",
      selected: "",
      diet: "workout",
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
          title: "بدنسازی برای ورزش خاص",
          titleEn: "specialSportPreparation",
        },
      ],
    };
  },
  methods: {
    check() {
      if (this.diet == "workout") {
        this.diet = "workout-diet";
      } else {
        this.diet = "workout";
      }
    },
    specialSportDialog(item) {
      this.selected = item.titleEn;
      this.specialSport = "";
      this.sport = "";
      this.openSpecialDialog = true;
    },
    otherSelect(item) {
      this.sport = "";
      this.selected = item.titleEn;
    },
    cancelSpecialSport() {
      this.openSpecialDialog = false;
    },
    confirmSpecialSport() {
      this.sport = this.specialSport;
      this.openSpecialDialog = false;
    },
    goBack() {
      this.$router.push("/programs");
    },
    submit() {
      this.$emit("getGoalData", "goal", this.selected);
      this.$emit("getGoalData", "sport", this.sport);
      this.$emit("getGoalData", "diet", this.diet);
      this.$emit("goNext");
    },
  },
  computed: {
    ...mapGetters(["programInfo"]),
  },
  mounted() {
    this.selected = this.programInfo.goal;
    this.sport = this.programInfo.sport;
    this.diet = this.programInfo.diet;
  },
};
</script>
<style lang="scss">
.goal-container {
  width: 80% !important;
  text-align: center;
  margin: 0 auto;
  position: relative;
  min-height: 80vh;
  padding-bottom: 100px;
  .buttons {
    margin-right: -40px;
    @media only screen and (max-width: 600px) {
      margin-right: -36px;
    }
  }
}
</style>
