<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold">Checkout</h2>

    <form @submit.prevent="submitOrder" class="mt-4">

      <input v-model="name" placeholder="Your Name"
        class="border p-2 w-full mb-2">

      <input v-model="phone" placeholder="Phone Number"
        class="border p-2 w-full mb-2">

      <textarea v-model="address" placeholder="Address"
        class="border p-2 w-full mb-2"></textarea>

      <h3 class="font-bold mt-4">Order Summary</h3>

      <div v-for="item in cart" :key="item.id">
        {{ item.name }} x {{ item.qty }} = {{ item.price * item.qty }} RWF
      </div>

      <h3 class="mt-3">Total: {{ total }} RWF</h3>

      <button class="bg-green-600 text-white p-2 mt-4 w-full">
        Confirm Order
      </button>

    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:"",
      phone:"",
      address:"",
      cart: JSON.parse(localStorage.getItem("cart")) || []
    }
  },

  computed:{
    total(){
      return this.cart.reduce((sum,i)=>sum+i.price*i.qty,0)
    }
  },

  methods:{
    submitOrder(){
      alert("Order placed successfully ✔");

      localStorage.removeItem("cart");
      this.$router.push("/");
    }
  }
}
</script>