<template>
  <div class="equipment-container">
    <h2 class="text-center primary--text mt-9">وسایل موجود در خانه</h2>
    <p class="mt-3 fs-small">وسیله‌های ورزشی موجود در خانه را مشخص نمایید:</p>

    <div class="mt-10">
      <v-row>
        <v-col
          v-for="(item, index) in equiptments"
          :key="index"
          cols="4"
          class="px-1"
        >
          <v-btn
            style="width: 100% !important; height: 50px"
            :class="selected.includes(item) ? 'secondary' : 'customGrey'"
            @click="
              selected.includes(item) ? cancelSelect(item) : doSelect(item)
            "
            >{{ item }}</v-btn
          >
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
      selected: [],
      equiptments: [
        "هالتر",
        "دوچرخه ثابت",
        "تردمیل",
        "کش دور زانو",
        "طناب",
        "فوم رولر",
        "وزنه مچ پا",
        "جیم بال",
        "دمبل",
        "کش لوپ بزرگ",
      ],
    };
  },
  methods: {
    doSelect(item) {
      this.selected.push(item);
    },
    cancelSelect(item) {
      let index = this.selected.indexOf(item);
      this.selected.splice(index, 1);
    },
    submit() {
      this.$emit("getEquipmentsData", "equipments", this.selected);
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
      this.selected = this.programInfo.equipments;
    }, 500);
  },
};
</script>
<style lang="scss">
.equipment-container {
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
