<template>
  <div id="app">
        <form action="index.html" class="login-form">
            <h1>Login</h1>

            <div class="txtb">
                <input 
                type="text" 
                @focus="isFocus1 = true" 
                @blur="inputBlur1($event)" 
                :class="{focus:isFocus1}"
                v-model="value"
                >
                <span data-placeholder="Username"></span>
            </div>

            <div class="txtb">
                <input 
                type="password" 
                @focus="isFocus2 = true" 
                @blur="inputBlur2($event)" 
                :class="{focus:isFocus2}"
                >
                <span data-placeholder="Password"></span>
            </div>

            <input type="submit" class="logbtn" value="Login">

            <div class="bottom-text">
                Don't have account? <a href="#" >Sign up</a>
            </div>

        </form>
    </div>
</template>

<script>
export default {
  data() {
      return {
        value:null,
        isFocus1: false,
        isFocus2: false,
        user: {
          username:null,
          password:null
      }
      }
  },
  methods: {
      // inputFocus(){
      //     this.isFocus = true
      //     // console.log(e.target)
      //     // console.log(e)
      //     // e.target.className = 'focus'
      // },
      inputBlur1(e){
          if(e.target.value=='')
          this.isFocus1 = false
      },
      inputBlur2(e){
          if(e.target.value=='')
          this.isFocus2 = false
      }
  }
}
</script>

<style>
@import url('./assets/css/style.css');
</style>