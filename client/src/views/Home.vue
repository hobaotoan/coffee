<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar />
    <Searching />
    <SideBarRight/>
    <v-alert
      border="left"
      close-text="Close Alert"
      color="green accent-4"
      dark
      dismissible
      v-if="this.$route.params.message"
    >
      {{ this.$route.params.message }}
    </v-alert>
    <AllPost/>
  </v-app>
</template>

<script>
import axios from 'axios'
import API from "../api";
import SideBar from "../components/SideBar";
import Searching from "../components/Searching";
import AllPost from "../views/AllPost.vue";
import SideBarRight from "../components/SideBarRight.vue";
import SideGroup from "../components/SideGroup.vue";

export default {
  name: "home",
  data() {
    return {
      posts: [],
    };
  },
  components: {
    SideBar,
    Searching,
    AllPost,
    SideBarRight,
    SideGroup
  },
  async created() {
    this.posts = await API.getAllPost();
  },
};
</script>
