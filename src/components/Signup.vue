<template>
<button @click="getUsers()">test</button>
<form>
  <div class="form-group">
    <label>Username</label>
    <input v-model="username" type="text" class="form-control" id="exampleInputPassword1" placeholder="Username">
  </div>  
  <div class="form-group">
    <label>Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label>Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label>Repeat Password</label>
    <input v-model="repeatPassword" type="password" class="form-control" id="exampleInputPassword1" placeholder="repeat Password">
  </div>
  <button @click="signUp()" class="btn btn-success">Submit</button>
</form>
    
</template>

<script>

/*
idee: mit axios zu arbeiten mit forms funktioniert das nicht so gut!
*/
import ApiServices from "../../ApiServices/axios.js";

export default {
    name: 'SignupVue',
    data() {
      return {
        username: '',
        password: '',
        email: '',
        repeatPassword: ''
      };
    },
    methods: {
      async signUp() {
        try {
          const credentials = {
          username: this.username,
          password: this.password,
          email: this.email 
          };
          await ApiServices.signUp(credentials);
          this.$router.push('/login')
       } catch(err) {
         console.log(err);
       }
      },
       getUsers() {
         ApiServices.getUsers();
        this.$router.push('/');
      }   
    }
}
</script>

<style scoped>
    form {
        width: 40%;
        margin: auto;
        background-color: rgb(86, 8, 37);  
        padding: 2em;
        margin-top: 2em;
        border: 2px;
        border-style: dotted;
        border-color: blueviolet;
        border-radius: 2em;   
        -moz-border-radius: 2em;
        color: bisque;
    }
    .form-check {
        padding: 2em;
        display: flex;
    }

    @media screen and (max-width:600px) {
      form {
        width: 80%;
      }
    }

</style>
