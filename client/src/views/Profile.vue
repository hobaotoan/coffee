<template>
  <v-container >
          <SideBar />
    <v-card class="mt-15">
      <v-row align="center" justify="center">
        <v-col cols="6" sm="6" style="padding:80px">
            <v-card-title>Token: {{token}}</v-card-title>
            <v-card-title>ID: {{id}}</v-card-title>
            <v-card-title>Name: {{name}}</v-card-title>
            <v-card-title>Email: {{email}}</v-card-title>
        </v-col>
        <v-col cols="6" md="6" class="rounded-bl-xl brown darken-2">
          <div style="text-align: center; padding: 225px 0">
            <h1 class="text-center white--text" >Trang cá nhân</h1>
            <v-card-text class="white--text">
              <h5 class="text-center">
                Thông tin của nhân viên
              </h5>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import API from "../api";
import SideBar from "../components/SideBar";

export default {
  name: "Profile",
  data: () => ({
    show1: false,
    step: 1,
    name: "",
    id: "",
    email:"",
    token:""

    // return {
    //   email:'',
    //   password:''
    // }
  }),
    components: {
    SideBar,
  },
  async created() {
    this.posts = await API.getAllPost();
    this.name =  JSON.parse(window.localStorage.getItem('token')).user.username
    this.id =  JSON.parse(window.localStorage.getItem('token')).user.id
    this.email =  JSON.parse(window.localStorage.getItem('token')).user.email
    this.token =  JSON.parse(window.localStorage.getItem('token')).token
  },
 mounted() {
      // let user = localStorage.getItem('token');
      // if(user){
      //   this.$router.push({name:'home'})
      // }
    },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>