<template>
  <v-col cols="12" md="2">
    <v-item v-slot="{ active, toggle }">
      <v-card
        :color="active ? '#F6EFEF' : 'white'"
        :class="active ? 'borderme' : 'borderout'"
        class="d-flex align-center rounded-lg mx-2"
        dark
        height="140"
        @click="toggle"
        flat
      >
        <v-row>
          <v-col cols="12" sm="12">
            <v-list-item
              three-line
              v-for="(item, i) in items"
              :key="i"
              :to="item.link"
              class="text-center"
            >
              <v-list-item-content>
                <div align="center" justify="center">
                  <v-img
                    src="c1.png"
                    max-height="110"
                    max-width="110"
                    contain
                  ></v-img>
                </div>
                <v-list-item-subtitle
                  :class="active ? 'brown--text' : 'black--text'"
                  class="caption mt-4"
                  >{{ item.text }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </v-item>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      { icon: "fas fa-home", text: "ALL", link: "/" },
      { icon: "fas fa-hamburger", text: "Add-Post", link: "/post" },
      { icon: "fas fa-history", text: "About", link: "/about" },
    ],
  }),
};
</script>

<style>
.v-card.borderme {
  border: 2px solid #704232 !important;
}
.v-card.borderout {
  border: 1px solid #bcaaa4 !important;
}
</style>
