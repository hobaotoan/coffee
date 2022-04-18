<template>
  <v-container>
    <v-row>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2">
          <h3>{{ university.name }}</h3>
          <h3>{{ university.web_pages }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
export default {
  data() {
    return {
      university: {
        name: {},
        web_pages: {},
      },
    };
  },
  async created() {
    university.name = this.$route.params.name;
    university.web_pages = this.$route.params.web_pages;
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