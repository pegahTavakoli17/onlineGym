<template>
  <v-app :id="!$vuetify.theme.dark ? 'lightApp' : 'darkApp'">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
// Import Main styles for this application
@import "assets/scss/style";

@font-face {
  font-family: iransans;
  src: url("assets/fonts/IRANSans(FaNum).ttf");
}

body {
  font-family: iransans !important;
}
</style>
<style>
.inputPrice >>> input[type="number"] {
  -moz-appearance: textfield;
}
.inputPrice >>> input::-webkit-outer-spin-button,
.inputPrice >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
#lightApp {
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  max-width: 100% !important;
  background-color: #e8e9ed;
}
#darkApp {
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  max-width: 100% !important;
  background-color: #272727;
}
</style>
