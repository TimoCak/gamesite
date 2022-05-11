<template>
  <form>
      <div class="form-group">
    <label>Username or E-Mail</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username or E-Mail">
  </div>  
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" id="exampleInputEmail1" placeholder="enter password">
  </div>
  <button type="submit" name="submit" class="btn btn-danger">login</button>
  </form>   
</template>

<script>
export default {
    name: "LoginVue"
}
</script>

<style scoped>
    form {
        width: 40%;
        margin: auto;
        background-color: #4B0082;;  
        padding: 2em;
        margin-top: 2em;
        border: 2px;
        border-style: dotted;
        border-color: red;
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