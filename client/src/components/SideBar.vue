<template>
  <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="90">
      <v-avatar class="d-block text-center mx-auto mt-4" size="40">
          <v-icon color="#704232">fas fa-coffee</v-icon>
      </v-avatar>
      <v-list-item-subtitle align="center" class="textlogo caption">lilCoffee</v-list-item-subtitle>
      <v-list flat class="mt-4">
          <v-list-item-group v-model="selectedItem">
              <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link active-class="border" :ripple="false">
                  <v-list-item-content>
                      <v-icon v-text="item.icon"></v-icon>
                      <v-list-item-subtitle align="center" v-text="item.text" class="mt-3 caption"></v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>
      <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;">
          <v-icon @click="logout">fas fa-sign-out-alt</v-icon><br><span class="caption">Đăng xuất</span>
      </div>
  </v-navigation-drawer>
</template>

<script>
export default {
data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
        {icon: 'fas fa-home', text:'Trang chủ',link: "/home"},
        {icon: 'fas fa-hamburger', text:'Thêm ',link: "/add-post"},
        {icon: 'fas fa-history', text:'Giới thiệu',link: "/about"},
        // {icon: 'fas fa-wallet', text:'Wallet'},
        // {icon: 'fas fa-percent', text:'Promo'},
        // {icon: 'fas fa-cog', text:'Setting'},
    ],
}),
methods:{
    logout(){
        window.localStorage.removeItem('token');
        this.$router.push({ name: "login" });

    }
}
}
</script>

<style>
.border {
    margin-left: 8px;
    margin-right: 8px;
    background: #704232;
    border-radius: 20px;
    text-decoration: none;
}
.v-list-item-group .v-list-item--active {
    color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item .v-list-item__action-text {
    color: white !important;
}
.textlogo{
    color: #704232;
    
}
</style>