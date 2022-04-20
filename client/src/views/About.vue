<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>
      <SideBar />
      <v-row no-gutters>
        <v-col sm="10" class=" mx-auto">
          <v-card class="pa-2 d-flex flex-row">
            <v-img src="../Latte.png" max-height="250" max-width="250"></v-img>
            <div>
              <v-card-actions>
                <v-row class="mt-1 mx-1">
                  <v-col sm="2">
                    <v-btn small outlined color="brown darken-4"
                      >lilCoffee</v-btn
                    >
                  </v-col>
                  <v-col sm="10" class="d-flex justify-end">
                    <!-- <v-btn
                      color="success"
                      text
                      :to="{ name: 'edit-post' }"
                      >Chỉnh sửa</v-btn
                    >
                    <v-btn color="red" text @click="removePost(post._id)"
                      >Xóa</v-btn
                    > -->
                  </v-col>
                </v-row>
              </v-card-actions>
              <v-card-subtitle class="headline">
                <h3>CÂU CHUYỆN THƯƠNG HIỆU</h3>
              </v-card-subtitle>
              <v-card-text class="grey-text">
                <p>
                  Tên gọi lilCoffee xuất phát từ ý nghĩa trong tiếng Hoa là Trà
                  cung đình. Thời xưa, các loại trà tốt nhất thường được các vị
                  hoàng thân quý tộc ngự dùng. Ngày nay, lilCoffee mong muốn phục
                  vụ các loại trà tốt nhất cho thực khách, cũng như chính tên
                  gọi của thương hiệu. Kể từ khi được thành lập vào năm 2006 tại
                  Đài Loan, chuỗi cửa hàng lilCoffee đã mở rộng trên khắp 19 quốc
                  gia với 1.500 cửa hàng và con số này vẫn tiếp tục tăng trưởng
                  không ngừng. Qua nhiều năm nỗ lực phát triển, lilCoffee đã trở
                  nên phổ biến với khách hàng từ nhiều quốc gia và trở thành một
                  trong những thương hiệu trà đáng tin cậy hàng đầu trên thế
                  giới.
                </p>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import API from "../api";
import SideBar from "../components/SideBar.vue";
export default {
  name: "About",
  data() {
    return {
      universities: [],
    };
  },
  // async created() {
  //   this.universities = await API.getAPIUniversity();
  // },
  components: {
    SideBar,
  },
};
</script>
