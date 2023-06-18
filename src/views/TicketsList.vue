<template>
  <div class="main-container cardColor">
    <h3 class="fs-large">وضعیت تیکت‌ها</h3>
    <v-row class="max-auto mt-3">
      <v-col
        v-for="(item, index) in ticketsType"
        :key="index"
        cols="12"
        md="3"
        class="text-center mx-auto"
      >
        <v-card class="card text-center d-flex flex-column  mx-auto">
          <div class="mt-5 mx-auto">
            <v-icon
              :class="item.color"
              style="font-size: 30px"
              class="text-center"
            >
              mdi-ticket-outline
            </v-icon>
            <span class="ms-2" :class="item.color">{{ item.title }}</span>
          </div>

          <div v-if="item.title == 'در حال بررسی'" class="mx-auto mt-2">
            <span class="fs-xxlarge" :class="item.color">
              {{ ticketsList.length }}
            </span>
          </div>
          <div v-if="item.title == 'کل'" class="mx-auto mt-2">
            <span class="fs-xxlarge" :class="item.color">
              {{ ticketsList.length + 4 }}
            </span>
          </div>

          <div class="mx-auto mt-2" v-if="item.title == 'بسته'">
            <span class="fs-xxlarge" :class="item.color">
              {{ item.number }}
            </span>
          </div>
          <div class="mx-auto mt-2" v-if="item.title == 'پاسخ داده شده'">
            <span class="fs-xxlarge" :class="item.color">
              {{ item.number }}
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex flex--row justify-space-between mt-7">
      <h3 class="fs-xlarge">لیست تیکت‌ها</h3>
      <v-btn class="primary white--text" width="200" @click="submitNewTicket">
        تیکت جدید
      </v-btn>
    </div>
    <v-divider class="mt-2"> </v-divider>
    <div>
      <v-data-table
        :headers="headers"
        :items="ticketsList"
        hide-default-footer
        class="mt-3 pa-4 text-center"
      >
        <!-- no-data -->
        <template slot="no-data">
          <div class="font-weight-bold">موردی برای نمایش وجود ندارد!</div>
        </template>
        <!-- actions -->
        <template v-slot:[`item.actions`]="{ item, index }">
          <v-btn @click="askRemoveTicket(index)" class="red" width="40">
            <v-icon class="white--text">mdi-trash-can</v-icon>
          </v-btn>
          <v-btn class="green ms-2" @click="editTicket(item, index)">
            <v-icon class="white--text">mdi-pen</v-icon>
          </v-btn>
        </template>
        <!-- status -->
        <template v-slot:[`item.status`]="{ item }">
          <v-chip color="purple" class="white--text">
            {{ item.status }}
          </v-chip>
        </template>
      </v-data-table>
    </div>

    <v-dialog v-model="newTicket" fullscreen>
      <v-card>
        <v-card-title>
          <h3 class="fs-large">تیکت جدید</h3>
        </v-card-title>
        <v-card-text>
          <v-row class="mt-3 mb-0 pb-0">
            <v-col class="mb-0 py-0" cols="12" md="6">
              <v-text-field
                label="موضوع تیکت"
                rounded
                outlined
                dense
                v-model="ticketTopic"
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
              >
                ارسال
              </v-btn>
            </v-col>
            <v-col cols="12" md="2" class="text-center">
              <v-btn
                class="black white--text fs-medium"
                width="200 "
                @click="closeTicketDialog"
              >
                بازگشت به لیست تیکت‌ها
              </v-btn></v-col
            >
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editTicketDialog" fullscreen>
      <v-card>
        <v-card-title>
          <h3 class="fs-large">ویرایش تیکت</h3>
        </v-card-title>
        <v-card-text>
          <v-row class="mt-3 mb-0 pb-0">
            <v-col class="mb-0 py-0" cols="12" md="6">
              <v-text-field
                label="موضوع تیکت"
                rounded
                outlined
                dense
                v-model="selectedTicket.ticketTopic"
              >
              </v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <v-select
                label="انتخاب دپارتمان "
                rounded
                outlined
                dense
                v-model="selectedTicket.departman"
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
                v-model="selectedTicket.today"
                disabled
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <v-select
                outlined
                dense
                rounded
                label="اولویت"
                v-model="selectedTicket.priority"
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
                v-model="selectedTicket.ticketText"
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
                @click="doEdit()"
              >
                ویرایش
              </v-btn>
            </v-col>
            <v-col cols="12" md="2" class="text-center">
              <v-btn
                class="black white--text fs-medium"
                width="200 "
                @click="editTicketDialog = false"
              >
                بستن
              </v-btn></v-col
            >
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog width="400" v-model="removeTicketDialog">
      <v-card>
        <v-card-title
          class="secondary--text primary dense mb-4"
          style="height: 48px; vertical-align: center !important"
        >
          <h5 class="pb-4 mb-4 white--text">حذف تیکت</h5>
        </v-card-title>
        <v-card-text>
          <b class="font-weight-bold"> آیا از حذف این تیکت اطمینان دارید؟ </b>
          <div class="text-left mt-3">
            <v-btn @click="removeTicket(index)" class="red white--text me-3">
              بله
            </v-btn>

            <v-btn
              class="grey darken-3 white--text"
              @click="removeTicketDialog = false"
            >
              خیر
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { json } from "body-parser";
import moment from "moment-jalaali";
export default {
  data() {
    return {
      ticketsType: [
        { title: "پاسخ داده شده", color: "green--text", number: "2" },
        { title: "در حال بررسی", color: "purple--text", number: "1" },
        { title: "بسته", color: "blue--text", number: "2" },
        { title: "کل", color: "orange--text", number: "5" },
      ],
      headers: [
        { value: "today", text: "تاریخ" },
        { value: "ticketTopic", text: "موضوع ", sortable: false },
        { value: "departman", text: "دپارتمان", sortable: false },
        { value: "priority", text: "اولویت", sortable: false },
        { value: "status", text: "وضعیت", sortable: false },
        { value: "actions", text: "عملیات", sortable: false },
      ],
      ticketTopic: "",
      departman: "",
      ticketText: "",
      priority: "",
      titleIndex: "",

      today: moment(new Date()).format("jYYYY/jMM/jDD"),
      ticketsData: {
        ticketTopic: "",
        departman: "",
        ticketText: "",
        priority: "",
        status: "در حال بررسی",
        today: moment(new Date()).format("jYYYY/jMM/jDD"),
      },
      departmanItems: ["پشتیبانی ورزشکار", "موارد مالی"],
      priorityItems: ["ضروری", "معمولی", " پایین"],
      newTicket: false,
      ticketsList: [],
      removeTicketDialog: false,
      deleteIndex: "",
      selectedTicket: "", //object for editing an index
      editTicketDialog: false,
      selectedEditIndex: "",
      updatedList: [],
    };
  },
  methods: {
    submitNewTicket() {
      this.newTicket = true;
      this.ticketText = "";
      this.departman = "";
      this.ticketTopic = "";
      this.priority = "";
    },
    send() {
      this.toast(" تیکت با موفقیت ارسال شد", "success");
      this.newTicket = false;
      this.ticketsData.ticketTopic = this.ticketTopic;
      this.ticketsData.priority = this.priority;
      this.ticketsData.departman = this.departman;
      this.ticketsData.ticketText = this.ticketText;
      this.ticketsData.today = this.today;
      this.ticketsList.push(this.ticketsData);
      this.updatedList = JSON.stringify(this.ticketsList);
      localStorage.setItem("ticketsList", this.updatedList);
      this.ticketsData = {};
      this.ticketsData.status = "در حال بررسی";
    },
    closeTicketDialog() {
      this.newTicket = false;
    },
    removeTicket() {
      this.ticketsList.splice(this.deleteIndex, 1);
      this.updatedList = JSON.stringify(this.ticketsList);
      localStorage.setItem("ticketsList", this.updatedList);
      this.deleteIndex = "";
      this.removeTicketDialog = false;
    },
    askRemoveTicket(index) {
      this.removeTicketDialog = true;
      this.deleteIndex = index;
    },
    editTicket(item, index) {
      this.selectedTicket = item;
      this.editTicketDialog = true;
      this.selectedEditIndex = index;
    },
    doEdit() {
      this.ticketsList[this.selectedEditIndex] = this.selectedTicket;
      this.updatedList = JSON.stringify(this.ticketsList);
      localStorage.setItem("ticketsList", this.updatedList);
      this.editTicketDialog = false;
      this.selectedEditIndex = "";
    },
  },
  mounted() {
    this.ticketsList =
      JSON.parse(localStorage.getItem("ticketsList")) != null
        ? JSON.parse(localStorage.getItem("ticketsList"))
        : [];
  },
};
</script>
<style lang="scss">
.card {
  width: 200px;
  height: 120px;
  box-shadow: none !important;
}
.v-sheet.v-card {
  border: 1px solid grey;
}
.v-application .text-start {
  text-align: center !important;
}
</style>
