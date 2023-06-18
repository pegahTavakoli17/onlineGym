<template>
  <div class="pb-10">
    <div class="main-container cardColor">
      <div class="primary bgColor--text infoCard">
        <b class="text--center mx-auto">
          انتخاب کن که دوست داری با کدوم مربی کار کنی؟
        </b>
      </div>
      <v-row class="flex-column flex-sm-row">
        <v-col sm="4" cols="12" v-for="(item, index) in coaches" :key="index">
          <v-tooltip top color="black">
            <template v-slot:activator="{ on, attrs }">
              <v-card
                v-bind="attrs"
                v-on="on"
                class="custom-card"
                @click="selectCoach(item)"
              >
                <div class="image-box2">
                  <img :src="item.url" alt="" class="image" />
                  <div class="d-flex justify-center mt-2">
                    <b class="text-center black--text">
                      {{ item.name }}
                    </b>
                  </div>
                  <div class="d-flex justify-center mt-2">
                    <b class="p-0 black--text"> تعداد شاگردها: </b>
                    <b class="primary--text p-0">
                      {{ item.students }}
                    </b>
                  </div>
                  <div class="d-flex justify-center mt-2">
                    <b class="p-0 black--text"> امتیاز کاربران : </b>
                    <b class="primary--text p-0">
                      {{ item.score }}
                    </b>
                  </div>
                  <div class="d-flex justify-center mt-2">
                    <template v-for="i in item.stars">
                      <v-icon key="star{{ i }}" class="primary--text"
                        >mdi-star</v-icon
                      >
                    </template>
                  </div>
                </div>
              </v-card>
            </template>
            <span>
                {{item.text}}
            </span>
          </v-tooltip>
        </v-col>
      </v-row>
    </div>
    <div class="text-center">
      <v-btn
        class="primary secondary--text font-weight-bold"
        width="120"
        height="48"
        @click="nextPage()"
      >
        <v-icon> mdi-chevron-right </v-icon>
        <h3>بعدی</h3>
      </v-btn>
      <v-btn
        class="primary secondary--text font-weight-bold ms-3"
        width="120"
        height="48"
        @click="$router.push('/photo')"
      >
        <h3>قبلی</h3>
        <v-icon> mdi-chevron-left </v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coaches: [
        {
          url: "/coach.jpg",
          name: "مربی شماره 1",
          score: "9.7",
          stars: 5,
          students: 1002,
          text: "مربی انجمن بین‌المللی قدرت و آمادگی جسمانی آمریکا و مربی رسمی فدراسیون پرورش اندام ایران",
        },
        {
          url: "/coach.jpg",
          name: "مربی شماره 2",
          score: "8.3",
          stars: 3,
          students: 586,
          text:"برترین مربی زن کشور، دارای مدرک مربیگری بدنسازی"
        },
        {
          url: "/coach.jpg",
          name: "مربی شماره 3",
          score: "8.7",
          stars: 4,
          students: 862,
          text:'اولین قهرمان حرفه‌ای فیزیک آسیا و مدرس فیتنس'
        },
      ],
      selectedCoach: "",
    };
  },
  methods: {
    selectCoach(item) {
      this.selectedCoach = item.name;
      let text = item.name + " به عنوان مربی شما انتخاب شد ";
      this.toast(text, "success");
    },
    nextPage() {
      if (!this.selectedCoach) {
        this.toast("لطفا مربی خود را انتخاب نمایید", "error");
      }
      else this.$router.push('/sizes')
    },
  },
};
</script>
<style lang="scss">
.image-box {
  // width: 300px !important;
  height: 300px !important;
}
.image {
  aspect-ratio: 1/1 !important;
  position: center !important;
  background-size: cover !important;
  border-radius: 12px !important;

  width: 100% !important;
  height: 80% !important;
  // height: 200px;;
}
.custom-card {
  background-color: rgb(241, 240, 240) !important;
  width: 380px !important;
  height: 520px;
  box-shadow: none !important;
  border-radius: 12px !important;
  border: 1px solid grey !important;
  padding-bottom: 10px !important;
}
.infoCard {
  border-radius: 12px;
  padding: 10px;
  text-align: center !important;
  margin-bottom: 18px;
}
</style>