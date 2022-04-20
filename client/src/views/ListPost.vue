<template>
          <v-row no-gutters>
        <v-col sm="6" class="pa-3 mt-5" v-for="post in posts" :key="post._id">
          <v-card>
            <v-card
              flat
              class="rounded-lg"
              :to="{ name: 'post', params: { id: post._id } }"
            >
              <v-list-item three-line>
                <v-list-item-avatar rounded size="120" color="grey lighten-4">
                  <v-img :src="`/${post.image}`"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 font-weight-medium ">
                    {{ post.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="mt-1">{{
                    post.content.substring(0, 200) + "..."
                  }}</v-list-item-subtitle>
                  <v-row>
                    <v-col cols="">
                      <v-btn small outlined color="brown darken-4">{{
                        post.group
                      }}</v-btn>
                    </v-col>
                    <v-col cols="6">
                      <v-btn small outlined color="brown darken-4"
                        >Chỉ {{ post.category }} VND</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <v-card-actions>
              <v-row >
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Mood</strong><br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row class="">
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              dark
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <v-icon dark color="orange">
                                    fas fa-fire
                                  </v-icon>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }" class="">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              dark
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <v-icon dark color="blue">
                                    fab fa-modx
                                  </v-icon>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Size</strong><br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row class="">
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong class="font-weight-black">S</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong class="font-weight-black">M</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong class="font-weight-black">L</strong>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Sugar</strong><br />

                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row class="">
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong
                                    class="overline"
                                    :class="
                                      active ? 'brown--text' : 'red--text'
                                    "
                                    >30%</strong
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong
                                    class="overline"
                                    :class="
                                      active ? 'brown--text' : 'red--text'
                                    "
                                    >50%</strong
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong
                                    class="overline"
                                    :class="
                                      active ? 'brown--text' : 'red--text'
                                    "
                                    >70%</strong
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="12" sm="6" class="mt-1">
                  <strong class="ml-3">Ice</strong><br />
                  <v-item-group mandatory class="mt-n1">
                    <v-container>
                      <v-row class="">
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong
                                    class="overline"
                                    :class="
                                      active ? 'brown--text' : 'red--text'
                                    "
                                    >30%</strong
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong
                                    class="overline"
                                    :class="
                                      active ? 'brown--text' : 'red--text'
                                    "
                                    >50%</strong
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-item v-slot="{ active, toggle }">
                            <v-card
                              color="#F6EFEF"
                              :class="active ? 'borderme' : ''"
                              class="d-flex align-center rounded-circle"
                              height="50"
                              width="50"
                              @click="toggle"
                              flat
                            >
                              <v-list-item class="text-center">
                                <v-list-item-content>
                                  <strong
                                    class="overline"
                                    :class="
                                      active ? 'brown--text' : 'red--text'
                                    "
                                    >70%</strong
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-actions>
              <v-btn color="#704232" block dark class="withoutupercase mb-2"
                >Thêm vào hóa đơn</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
</template>

<script>
import API from "../api";
export default {
  name: "ListPost",
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await API.getAllPost();
  },
  methods: {},
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