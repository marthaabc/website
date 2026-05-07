<template>
  <div class="p-6 max-w-md mx-auto">

    <h2 class="text-2xl font-bold mb-4">Login</h2>

    <input v-model="email" placeholder="Email"
      class="border p-2 w-full mb-2">

    <input v-model="password" type="password"
      placeholder="Password"
      class="border p-2 w-full mb-2">

    <button @click="login"
      class="bg-green-600 text-white p-2 w-full">
      Login
    </button>

  </div>
</template>

<script>
export default {
  data(){
    return{
      email:"",
      password:""
    }
  },

  methods:{
    login(){
      if(this.email && this.password){
        localStorage.setItem("user", this.email);
        alert("Login successful ✔");
        this.$router.push("/");
      }else{
        alert("Enter details!");
      }
    }
  }
}
</script>