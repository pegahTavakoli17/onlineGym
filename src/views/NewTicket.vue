<template>
  <div class="main-container cardColor">
    <h3 class="fs-large">تیکت جدید</h3>
    <v-row class="mt-3 mb-0 pb-0">
      <v-col class="mb-0 py-0" cols="12" md="6">
        <v-text-field
          label="موضوع تیکت"
          rounded
          outlined
          dense
          v-model="ticketTitle"
        >
        </v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="6">
        <v-select
          label="انتخاب دپارتمان "
          rounded
          outlined
          dense
          v-model="departman"
          :items="departmanItems"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row class="py-0">
      <v-col class="py-0" cols="12" md="6">
        <v-text-field
          outlined
          dense
          rounded
          label="تاریخ"
          v-model="today"
          disabled
        ></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="6">
        <v-select
          outlined
          dense
          rounded
          label="اولویت"
          v-model="priority"
          :items="priorityItems"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row class="mt-7">
      <v-col class="py-0">
        <v-textarea
          placeholder="لطفا متن تیکت خود را وارد نمایید."
          rounded
          dense
          outlined
          v-model="ticketText"
        >
        </v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8" cols="0"> </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-btn
          class="primary white--text fs-medium text-left"
          width="200"
          @click="send"
          :disabled="!(ticketText && departman && ticketTitle && priority)"
        >
          ارسال
        </v-btn>
      </v-col>
      <v-col cols="12" md="2" class="text-center">
        <v-btn class="grey white--text fs-medium" width="200 " @click="goback">
          بازگشت به لیست تیکت‌ها
        </v-btn></v-col
      >
    </v-row>
  </div>
</template>
<script>
import moment from "moment-jalaali";

export default {
  data() {
    return {
      ticketTitle: "",
      departman: "",
      ticketText: "",
      priority: "",
      departmanItems: ["پشتیبانی ورزشکار", "موارد مالی"],
      priorityItems: ["ضروری", "معمولی", " پایین"],
      today: moment(new Date()).format("jYYYY/jMM/jDD"),
    };
  },
  methods: {
    send() {
      this.toast(" تیکت با موفقیت ارسال شد", "success");
    },
    goback() {
      this.$router.push("/ticketsList");
    },
  },
};
</script>
