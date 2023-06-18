<template>
  <div class="place-container">
    <h2 class="text-center primary--text mt-9">محل تمرین</h2>
    <p class="mt-2 fs-xsmall">
      محل موردنظر را جهت انجام تمرین‌های ورزشی انتخاب نمایید:
    </p>

    <div class="d-flex flex-column align-items-center mt-10">
      <v-row class="mx-auto">
        <v-col>
          <v-btn
            width="150"
            height="100"
            @click="gym()"
            :class="selected == 'gym' ? 'secondary' : 'customGrey'"
          >
            باشگاه
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mx-auto">
        <v-col>
          <v-btn
            width="150"
            height="100"
            @click="home()"
            :class="selected == 'home' ? 'secondary' : 'customGrey'"
          >
            خانه
          </v-btn>
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
            @click="submit()"
            class="primary"
            width="145"
            height="48"
            :disabled="!selected"
          >
            <v-icon class="me-1">mdi-arrow-right-circle-outline</v-icon>
            ثبت و ادامه
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    gym() {
      this.selected = "gym";
    },
    home() {
      this.selected = "home";
    },
    submit() {
      this.$emit("getPlaceData", "workoutPlace", this.selected);
      this.$emit("goNext");
    },
    goBack() {
      this.$emit("goBack");
    },
  },
  computed: {
    ...mapGetters(["programInfo"]),
  },
  mounted() {
    setTimeout(() => {
      this.selected = this.programInfo.workoutPlace;
    }, 500);
  },
};
</script>
<style lang="scss">
.place-container {
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
</style>
