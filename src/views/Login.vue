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
        <my-modal v-show="displayShow">{{errContent}}</my-modal>
    </div>
</template>

<script>
import MyModal from '../components/common/MyModal'
export default {
  components:{
      MyModal
  },
  data() {
      return {
        errContent:'',
        displayShow:false,
        listData:[],
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
        if(!this.user.username && !this.user.password) {
          this.displayShow = true;
          this.errContent='content is\'t allowed null'
          setTimeout(()=>{
            this.displayShow = false
          },2000)
        }else{
          this.$axios.post('/user/login',this.user).then((res)=>{
            this.listData = res.data;
            console.log(this.listData);
            if(this.listData.status == 200){
              localStorage.setItem('token',this.listData.data.userList.token)
              this.$router.push('/about')
            }else{
              this.displayShow = true;
              this.errContent='username or password is wrong';
              setTimeout(()=>{
                this.displayShow = false
              },2000)
            }  
          })
        }    
      }
  }
}
</script>

<style scoped>
@import url('../assets/css/style.css');
</style>