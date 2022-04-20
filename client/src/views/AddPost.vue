<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar/>
    <v-container>
      <v-row no-gutters>
        <v-col sm="10" class="mx-auto">
          <v-card class="pa-5">
            <v-card-title>Thêm sản phẩm mới</v-card-title>
            <v-divider></v-divider>
            <v-form
              ref="form"
              @submit.prevent="submitForm"
              class="pa-5"
              enctype="multipart/form-data"
            >
              <v-text-field
                label="Tên sản phẩm"
                v-model="post.title"
                prepend-icon="mdi-food-fork-drink"
                :rules="rules"
              ></v-text-field>
                      <v-select
                      prepend-icon="mdi-sort-variant"
          :items="items"
          label="Loại sản phẩm"
          :rules="rules"
          v-model="post.group"
        ></v-select>
              <v-text-field
                label="Giá sản phẩm"
                v-model="post.category"
                prepend-icon="mdi-tag"
                :rules="rules"
              ></v-text-field>

              <v-textarea
                label="Mô tả sản phẩm"
                v-model="post.content"
                prepend-icon="mdi-note-plus"
                :rules="rules"
              >
              </v-textarea>

              <v-file-input
                :rules="rules"
                @change="selectFile"
                show-size
                counters
                multiple
                label="Lựa chọn hình ảnh"
              ></v-file-input>

              <v-btn type="submit" class="mt-3" color="white">Thêm sản phẩm</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import API from "../api";
import SideBar from "../components/SideBar";
import Searching from "../components/Searching";
export default {
  data() {
    return {
      rules: [(value) => !!value || "This field is required"],
      items: ['Đá Xay', 'Trà Nguyên Chất', 'Trà Sữa', 'Latte Series','Topping'],
      post: {
        title: "",
        category: "",
        content: "",
        image: "",
        post:"",
      },
      image: "",
    };
  },
  components:{
    SideBar,
    Searching
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("group", this.post.group);
      formData.append("content", this.post.content);
      if (this.$refs.form.validate()) {
        const response = await API.addPost(formData);
        this.$router.push({
          name: "home",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>
