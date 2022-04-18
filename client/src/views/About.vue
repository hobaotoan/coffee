<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        sm="4"
        class="pa-3"
        v-for="university in universities"
        :key="university._id"
      >
        <v-card
          class="pa-1"
          :to="{
            name: 'university',
            params: { name: university.name, web_pages: university.web_pages },
          }"
        >
          <h3>{{ university.name }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import API from "../api";
export default {
  name: "Home",
  data() {
    return {
      universities: [],
    };
  },
  async created() {
    this.universities = await API.getAPIUniversity();
  },
};
</script>
