<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>
      <v-row no-gutters>
        <v-col sm="10" class="pa-4 mx-auto">
          <v-card class="pa-2 d-flex flex-row">
            <v-img
              :src="`/${post.image}`"
              max-height="250"
              max-width="250"
            ></v-img>
            <div>
              <v-card-actions>
                <v-row class="mt-1 mx-1">
                  <v-col sm="2">
                    <v-btn small outlined color="light-green darken-4">Chỉ {{
                      post.category
                    }} VND</v-btn>
                  </v-col>
                  <v-col sm="10" class="d-flex justify-end">
                    <v-btn
                      color="success"
                      text
                      :to="{ name: 'edit-post' }"
                      >Chỉnh sửa</v-btn
                    >
                    <v-btn color="red" text @click="removePost(post._id)"
                      >Xóa</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-actions>
              <v-card-subtitle class="headline">
                <h3>{{ post.title }}</h3>
              </v-card-subtitle>
              <v-card-text class="grey-text">
                <p>{{ post.group }}</p>
                <p>{{ post.content }}</p>
                <p>{{ post.created }}</p>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import API from "../api";

export default {
  name: "Post",
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const response = await API.getPostById(this.$route.params.id);
    this.post = response;
  },
  methods: {
    async removePost(id) {
      const response = await API.deletePost(id);
      this.$router.push({
        name: "home",
        params: { message: response.message },
      });
    },
  },
};
</script>