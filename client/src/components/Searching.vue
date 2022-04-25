<template>
  <v-container>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <v-toolbar-title class="mt-n3">Lựa chọn loại nước uống</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        label="Tìm kiếm tên hoặc loại nước uống"
        class="mt-5"
        color="brown"
        filled
        append-icon="mdi-magnify"
        dense
        solo
        flat
        background-color="grey lighten-4"
      ></v-text-field>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      { icon: "fas fa-home", text: "Home", link: "/" },
      { icon: "fas fa-hamburger", text: "Add-Post", link: "/add-post" },
      { icon: "fas fa-history", text: "About", link: "/about" },
      // {icon: 'fas fa-wallet', text:'Wallet'},
      // {icon: 'fas fa-percent', text:'Promo'},
      // {icon: 'fas fa-cog', text:'Setting'},
    ],
    
  }),
};
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
.theme--light.v-list-item--active .v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
  color: white !important;
}
</style>
