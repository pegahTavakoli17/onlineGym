<template>
  <div>
    <ul class="d-flex primary pa-3 flex-row" style="border-radius: 12px">
      <li
        class="secondary--text py-2 me-14 font-weight-bold"
        style="list-style-type: none; cursor: pointer"
        v-for="(item, index) in menuItems"
        :key="index"
        @click="goTo(item.url)"
      >
        <v-icon class="me-1 secondary--text">{{ item.icon }}</v-icon>
        {{ item.title }}
      </li>
    </ul>
    <div class="home-card d-flex justify-center align-center pe-4 ps-4">
     
      <v-card class="white secondary--text home-subCard pa-5 text-center ">
        <h3>به باشگاه آنلاین خوش آمدید</h3>
        <p class="mt-4">
          سه اصل مهم برای ما ورزش در زمان دلخواه ، در مکان دلخواه و بدون نیاز به
          تجهیزات و لوازم ورزشی است. با رعایت این سه اصل مهم شما به راحتی
          می‌توانید ورزش خود را زیر نظر مربیان و در سه سطح مبتدی ، متوسط و
          پیشرفته آغاز کنید.
        </p>
        <img src="/lifter.png" width="200" height="180"
      /></v-card>
     
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "درخواست برنامه شخصی ",
          url: "/UserInfo",
          icon: "mdi-dumbbell",
        },
        { title: "تیکت ", url: "/ticketsList", icon: "mdi-ticket-outline" },
      ],
    };
  },
  methods: {
    goTo(url) {
      this.$router.push(url);
    },
  },
};
</script>
<style>
.home-subCard {
  width: 380px;
  height: 410px;
  border-radius: 15px !important;
}
.home-card {
  width:100%;
  height: calc(100vh - 65px);
  display: flex;
  justify-content: center !important;
  align-items: center !important;
}
</style>
