<template>
  <div class="description-container">
    <h2 class="text-center primary--text mt-9">توضیحات</h2>
    <div class="mt-10">
      <v-textarea
        v-model="description"
        placeholder="اگر موضوعی در نظر دارید، بنویسید."
        outlined
      >
      </v-textarea>
    </div>
    <div>
      <v-row
        class="buttons bgColor"
        :class="!$vuetify.theme.dark ? 'light-shadow' : 'dark-shadow'"
      >
        <v-col cols="12" class="d-flex justify-space-around pt-1">
          <v-btn @click="submit()" class="primary" width="145" height="48">
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
      description: "",
    };
  },
  methods: {
    submit() {
      this.$emit("getDescriptionData", "description", this.description);
      this.$emit("editProgram");
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
    this.description = this.programInfo.description;
  },
};
</script>
<style lang="scss">
.description-container {
  width: 90% !important;
  text-align: center;
  margin: 0 auto;
  position: relative;
  min-height: 80vh;
  .buttons {
    margin-right: -19px;
    @media only screen and (max-width: 600px) {
      margin-right: -18px;
    }
  }
}
</style>
