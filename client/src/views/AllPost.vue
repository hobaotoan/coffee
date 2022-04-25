<template>
  <v-item-group mandatory class="mt-n1">
    <v-container>
      <v-row justify="start" class="space">
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
                  <v-list-item three-line class="text-center" href="/home">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          src="../DA-XAY-TOFFEE-1.png"
                          max-height="70"
                          max-width="110"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'brown--text' : 'black--text'"
                        class="caption mt-4"
                        >Tất cả</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
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
                  <v-list-item three-line class="text-center" :to="{name: 'group', params:{group : 'Đá Xay'}}">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          src="../Chocolate-đá-xay-2.png"
                          max-height="70"
                          max-width="110"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'brown--text' : 'black--text'"
                        class="caption mt-3"
                        >Đá Xay</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
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
                  <v-list-item three-line class="text-center" :to="{name: 'group', params:{group : 'Trà Nguyên Chất'}}">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          src="../Trà-Oolong-Milkfoam-3.png"
                          max-height="70"
                          max-width="110"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'brown--text' : 'black--text'"
                        class="caption mt-2"
                        >Trà Nguyên Chất</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
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
                  <v-list-item three-line class="text-center" :to="{name: 'group', params:{group : 'Trà Sữa'}}">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          src="../Tra-Sua.png"
                          max-height="70"
                          max-width="110"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'brown--text' : 'black--text'"
                        class="caption mt-2"
                        >Trà Sữa</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
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
                  <v-list-item three-line class="text-center" :to="{name: 'group', params:{group : 'Latte Series'}}">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          src="../Latte.png"
                          max-height="70"
                          max-width="110"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'brown--text' : 'black--text'"
                        class="caption mt-3"
                        >Latte Series</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
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
                  <v-list-item three-line class="text-center" :to="{name: 'group', params:{group : 'Topping'}}">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          src="../布丁-pudding.png"
                          max-height="70"
                          max-width="110"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'brown--text' : 'black--text'"
                        class="caption mt-4"
                        >Topping</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
      <ListPost/>
    </v-container>
  </v-item-group>
</template>

<script>
import API from "../api";
import ListPost from "../views/ListPost.vue";
export default {
  name: "AllPost",
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await API.getAllPost();
  },
  methods: {},
  components: {
      ListPost,
  },  
};
</script>
<style>
.v-card.borderme {
  border: 2px solid #f6efef !important;
}
.v-card.borderout {
  border: 1px solid #bcaaa4 !important;
}
</style>