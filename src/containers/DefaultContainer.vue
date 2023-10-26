<template>
  <div class="app bgColor">
    <nav
      class="header d-flex primary justify-space-between"
      v-if="$route.name != 'Home'"
    >
      <div class="d-flex flex-row">
        <div class="pt-2" style="cursor: pointer">
          <span class="ms-5" @click="$router.push('/home')">
            <v-icon> $Home </v-icon>
          </span>
        </div>
        <div style="cursor: pointer">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attr }">
              <div :v-bind="attr" v-on="on">
                <v-icon class="mt-3 ms-8"> $Person </v-icon>
              </div>
            </template>
            <v-list>
              <v-list-item @click="goToLogin()" dense>
                <v-list-item-title
                  ><v-icon class="me-2">mdi-logout</v-icon> خروج از حساب
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="mt-3 text-left me-5" style="cursor: pointer">
        <span class="mt-5" @click="changeThemeMode()">
          <v-icon style="font-size: 1.8rem" v-if="$vuetify.theme.dark">
            $Sun
          </v-icon>
          <v-icon style="font-size: 1.8rem" color="secondary" v-else>
            mdi-weather-night</v-icon
          >
        </span>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // data() {},
  methods: {
    changeThemeMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark", this.$vuetify.theme.dark);
    },
    goToLogin() {
      this.$router.push("/login");
      window.localStorage.clear();
    },
  },
  mounted() {
    if (localStorage.getItem("dark")) {
      this.$vuetify.theme.dark = JSON.parse(localStorage.getItem("dark"));
    }
  },
};
</script>
<style lang="scss">
.app {
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  .header {
    widows: 100%;
    height: 50px;
  }
  background-image: url("/gym.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  .sidebar-header {
    background: rgb(110, 157, 94);
    background: linear-gradient(
      333deg,
      rgba(110, 157, 94, 0.6390153473498774) 0%,
      rgba(110, 157, 94, 0.10120022129945727) 100%
    );
  }
}
.v-item--active {
  path,
  circle {
    stroke: #6e9d5e;
  }
}
</style>
