<template>
  <v-container >
    <v-card class="mt-15">
      <v-row align="center" justify="center">
        <v-col cols="6" sm="6" style="padding:80px">
          <form>
            <v-text-field
              v-model="email"
              label="Địa chỉ email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Mật khẩu"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn color="#3E2723" dark block tile class="mr-4" @click="login">ĐĂNG NHẬP</v-btn>
          </form>
        </v-col>
        <v-col cols="6" md="6" class="rounded-bl-xl brown darken-4">
          <div style="text-align: center; padding: 150px 0">
            <v-card-text class="white--text">
              <h3 class="text-center">Bạn đã có tài khoản chưa?</h3>
              <h6 class="text-center">
                Hãy bắt đầu tạo tài khoản để có thể đăng nhập nào.
              </h6>
            </v-card-text>
            <div class="text-center">
              <v-btn tile outlined dark @click="signup">ĐĂNG KÍ</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: () => ({
    show1: false,
    step: 1,
    email: "",
    password: "",

    // return {
    //   email:'',
    //   password:''
    // }
  }),
  props: {
    source: String,
  },
  methods: {
    async login() {
      let result = await axios.post("http://localhost:5000/users/login", {
        email: this.email,
        password: this.password,
      });

      localStorage.setItem("token", JSON.stringify(result.data));
      this.$router.push({ name: "home" });

      // if(result.status == 200 && result.data.length>0){
      //     localStorage.setItem("user-info",JSON.stringify(result.data[0]))
      // this.$router.push({name:'home'})
      // }
    },
    async signup(){
      this.$router.push({name:"signup"})
    },
    mounted() {
      // let user = localStorage.getItem('token');
      // if(user){
      //   this.$router.push({name:'home'})
      // }
    },
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>