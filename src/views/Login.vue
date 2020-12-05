<template>
  <div id="vueLogin">
        <div class="login-form">
            <h1>Login</h1>

            <div class="txtb">
                <input 
                type="text" 
                @focus="isFocus1 = true" 
                @blur="inputBlur1($event)" 
                :class="{focus:isFocus1}"
                v-model="valueName"
                >
                <span data-placeholder="Username"></span>
            </div>

            <div class="txtb">
                <input 
                type="password" 
                @focus="isFocus2 = true" 
                @blur="inputBlur2($event)" 
                :class="{focus:isFocus2}"
                v-model="valuePassword"
                >
                <span data-placeholder="Password"></span>
            </div>

            <input 
            type="submit" 
            class="logbtn" 
            value="Login"
            @click="submitBtn"
            >

            <div class="bottom-text">
                Don't have account? <a href="#" >Sign up</a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
        value:null,
        isFocus1: false,
        isFocus2: false,
        valueName: '',
        valuePassword:'',
        user: {
          username:null,
          password:null
      }
    }
  },
  methods: {
      inputBlur1(e){
          if(e.target.value=='')
          this.isFocus1 = false
      },
      inputBlur2(e){
          if(e.target.value=='')
          this.isFocus2 = false
      },
      submitBtn(){
        this.user.username = this.valueName;
        this.user.password = this.valuePassword;
        this.$axios.post('/user/login',this.user).then((res)=>{
          console.log(res);
        //   this.$router.push('/about')
        })
      }
  }
}
</script>

<style scoped>
@import url('../assets/css/style.css');
</style>