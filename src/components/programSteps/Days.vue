<template>
  <div class="days-container">
    <h2 class="text-center primary--text mt-9">روزها</h2>
    <p class="mt-2 fs-xsmall">روزهای موردنظر خود را تعیین کنید:</p>
    <div class="mt-8">
      <v-row v-for="(item, index) in programType" :key="index">
        <v-col class="d-flex flew-row text-right pb-0" @click="selectType(item)"
          ><div class="px-2">
            <v-icon color="primary" v-if="item.titleEn != dayType"
              >mdi-checkbox-blank-outline</v-icon
            >
            <v-icon color="primary" v-else>mdi-checkbox-intermediate</v-icon>
          </div>
          <p class="ms-1 mb-0 fs-small">{{ item.title }}</p></v-col
        >
      </v-row>
    </div>

    <Transition name="fade" mode="in-out">
      <v-card
        key="daysCard"
        v-if="openCard"
        style="
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px !important;
          border: 1px solid #ccc;
          border-radius: 10px;
          width: fit-content !important;
        "
        class="pa-4 pb-5 mt-8 ms-2 cardGrey"
      >
        <v-row>
          <v-col
            v-for="(item, index) in weekDays"
            :key="index"
            cols="6"
            class="px-2 pt-0 pb-1 mt-2 text-right"
            @click="specificDay(item)"
            style="border: none !important"
          >
            <v-icon color="primary" v-if="!selectedDays.includes(item)"
              >mdi-checkbox-blank-outline</v-icon
            >
            <v-icon v-if="selectedDays.includes(item)" color="primary"
              >mdi-checkbox-intermediate</v-icon
            ><span class="ps-2 fs-small">{{ item }}</span>
          </v-col></v-row
        ></v-card
      >
    </Transition>

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
            :disabled="dayType == 'custom' ? !selectedDays.length : !dayType"
          >
            <v-icon class="me-1">mdi-arrow-right-circle-outline</v-icon>
            ثبت و ادامه
          </v-btn>
          <v-btn @click="goBack()" class="secondary" width="145" height="48">
            قبلی
            <v-icon class="ms-1 mb-0">mdi-arrow-left-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      openCard: false,
      programType: [
        { title: "روز‌های زوج (شنبه، دوشنبه، چهارشنبه)", titleEn: "even" },
        { title: "روز‌های فرد (یکشنبه، سه‌شنبه، پنج‌شنبه)", titleEn: "odd" },
        { title: "هر روز", titleEn: "everyday" },
        { title: "روزهای دلخواه", titleEn: "custom" },
      ],
      weekDays: [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه‌شنبه",
        "چهارشنبه",
        "پنج‌شنبه",
        "جمعه",
      ],
      selectedDays: [],
      dayType: "",
    };
  },
  methods: {
    submit() {
      this.$emit("getDaysData", "workoutDays", this.selectedDays);
      this.$emit("getDaysData", "workoutDayType", this.dayType);
      this.$emit("goNext");
    },
    goBack() {
      this.$emit("goBack");
    },
    selectType(item) {
      this.dayType == item.titleEn
        ? (this.dayType = "")
        : (this.dayType = item.titleEn);

      this.selectedDays = [];

      switch (this.dayType) {
        case "odd":
          this.selectedDays = ["یکشنبه", "سه‌شنبه", "پنج‌شنبه"];
          break;
        case "even":
          this.selectedDays = ["شنبه", "دوشنبه", "چهارشنبه"];
          break;
        case "everyday":
          this.selectedDays = [
            "شنبه",
            "یکشنبه",
            "دوشنبه",
            "سه‌شنبه",
            "چهارشنبه",
            "پنج‌شنبه",
            "جمعه",
          ];
          break;
        default:
          break;
      }

      if (this.dayType == "custom") {
        this.openCard = true;
      } else {
        this.openCard = false;
      }
    },
    specificDay(item) {
      let index = this.selectedDays.indexOf(item);
      this.selectedDays.includes(item)
        ? this.selectedDays.splice(index, 1)
        : this.selectedDays.push(item);
    },
  },
  computed: {
    ...mapGetters(["programInfo"]),
  },
  mounted() {
    setTimeout(() => {
      this.dayType = this.programInfo.workoutDayType;
      this.selectedDays = this.programInfo.workoutDays;
      if (this.dayType == "custom") {
        this.openCard = true;
      }
    }, 500);
  },
};
</script>

<style lang="scss">
.days-container {
  width: 80% !important;
  text-align: center;
  margin: 0 auto;
  position: relative;
  min-height: 80vh;
  .buttons {
    margin-right: -40px;
    @media only screen and (max-width: 600px) {
      margin-right: -36px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
