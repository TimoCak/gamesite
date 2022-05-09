<template>
<form>
  <div class="form-group">
    <label>Username</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username">
  </div>  
  <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label>Repeat Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="repeat Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label id="checkboxLabel" class="form-check-label">accept agreement!</label>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
    
</template>

<script>
export default {
    name: 'SignupVue'
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
    #checkboxLabel {
        margin-left: 2em;
    }
    @media screen and (max-width:600px) {
      form {
        width: 80%;
      }
    }

</style>
