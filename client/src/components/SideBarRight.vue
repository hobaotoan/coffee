<template >
  <v-navigation-drawer app color="white" right width="290"  >
      <v-list subheader two-line class="mt-1" >
          <v-list-item>
              <v-list-item-avatar rounded>
                  <v-img @click="profile" src="https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                  <v-list-item-subtitle>Tôi là thu ngân</v-list-item-subtitle>
                  <v-list-item-title>{{name}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
              </v-list-item-action>
          </v-list-item>
      </v-list>
      <strong class="ml-3">Hóa đơn</strong>
      <v-list subheader two-line class="mt-1" v-for="post in posts" :key="post._id" >
          <v-list-item>
              <v-list-item-avatar rounded color="grey lighten-4">
                  <v-img :src="`/${post.image}`"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                  <v-list-item-title class="subtitle-2">{{ post.title }}</v-list-item-title>
                  <v-list-item-subtitle>X0
                      <v-btn plain color="#704232" small>
                          <v-icon right>mdi-pencil</v-icon>
                      </v-btn>

                  </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="caption">{{ post.category }} VND</v-list-item-action>
          </v-list-item>
      </v-list>
      <v-toolbar color="rgba(0,0,0,0)" flat>
          <strong>Phụ thu</strong><v-spacer></v-spacer><strong>XXX VND</strong>
      </v-toolbar>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n6">
          <span>Thuế(10%)</span><v-spacer></v-spacer><span>XXX VND</span>
      </v-toolbar>
      <v-divider class="mx-4"></v-divider>
      <v-toolbar color="rgba(0,0,0,0)" flat>
          <strong>Tổng</strong><v-spacer></v-spacer><strong>XXX VND</strong>
      </v-toolbar>
      <strong class="ml-5">Phương thức thanh toán</strong>
      <v-item-group mandatory class="mt-n1">
          <v-container>
              <v-row justify="center">
                  <v-col cols="12" md="4">
                      <v-item v-slot="{active, toggle}">
                          <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg"
                          dark height="70" @click="toggle" flat>
                          <v-row>
                              <v-col cols="12" md="12">
                                  <v-list-item three-line class="text-center mt-1">
                                      <v-list-item-content>
                                          <div>
                                              <v-icon :color="active ? '#704232' : 'black'">fas fa-money-bill-wave</v-icon>
                                          </div>
                                          <v-list-item-subtitle
                                          :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">Cach</v-list-item-subtitle>
                                      </v-list-item-content>
                                  </v-list-item>
                              </v-col>
                          </v-row>
                          </v-card>
                      </v-item>
                  </v-col>
                   <v-col cols="12" md="4">
                      <v-item v-slot="{active, toggle}">
                          <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg"
                          dark height="70" @click="toggle" flat>
                          <v-row>
                              <v-col cols="12" md="12">
                                  <v-list-item three-line class="text-center mt-1">
                                      <v-list-item-content>
                                          <div>
                                              <v-icon :color="active ? '#704232' : 'black'">fas fa-credit-card</v-icon>
                                          </div>
                                          <v-list-item-subtitle
                                          :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">debit Card</v-list-item-subtitle>
                                      </v-list-item-content>
                                  </v-list-item>
                              </v-col>
                          </v-row>
                          </v-card>
                      </v-item>
                  </v-col>
                   <v-col cols="12" md="4">
                      <v-item v-slot="{active, toggle}">
                          <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg"
                          dark height="70" @click="toggle" flat>
                          <v-row>
                              <v-col cols="12" md="12">
                                  <v-list-item three-line class="text-center mt-1">
                                      <v-list-item-content>
                                          <div>
                                              <v-icon :color="active ? '#704232' : 'black'">fas fa-qrcode</v-icon>
                                          </div>
                                          <v-list-item-subtitle
                                          :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">E-Wallet</v-list-item-subtitle>
                                      </v-list-item-content>
                                  </v-list-item>
                              </v-col>
                          </v-row>
                          </v-card>
                      </v-item>
                  </v-col>
              </v-row>
          </v-container>
      </v-item-group>
      <div class="mx-3 mt-2">
          <v-btn color="#5D4037" block dark class="widthoutupercase">In hóa đơn</v-btn>
      </div>
  </v-navigation-drawer>
</template>

<script>
import API from "../api";
export default {
  name: "SideBarRight",
  data() {
    return {
      posts: [],
      name:''
    };
  },
  async created() {
    this.posts = await API.getAllPost();
    this.name =  JSON.parse(window.localStorage.getItem('token')).user.username
  },
    mounted() {
    // if (localStorage.getItem('token')) {
    //     this.name = JSON.parse(localStorage.getItem('token'));
    // }
  },
  methods:{
      profile(){
          this.$router.push({ name: "profile" });
      }
  }
};
</script>

<style>
    .v-card.borderme{
        border:2px solid #5D4037 !important;
    }
    .col-12 {
        padding: 5px !important;
    }
    .v-btn.widthoutupercase{
        text-transform: none !important;
    }
</style>