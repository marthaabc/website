<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Your Cart</h2>

    <div v-if="cart.length === 0">
      <p>No items in cart</p>
    </div>

    <div v-for="(item, index) in cart" :key="index"
         class="flex justify-between bg-white p-3 mb-2 rounded shadow">

      <div>
        <h3 class="font-bold">{{ item.name }}</h3>
        <p>{{ item.price }} RWF</p>
      </div>

      <div>
        <button @click="decrease(index)">➖</button>
        {{ item.qty }}
        <button @click="increase(index)">➕</button>
      </div>

      <button @click="removeItem(index)" class="text-red-500">X</button>
    </div>

    <h3 class="mt-4 font-bold">Total: {{ total }} RWF</h3>

    <router-link to="/order"
      class="bg-green-600 text-white px-4 py-2 mt-3 inline-block">
      Checkout
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cart: JSON.parse(localStorage.getItem("cart")) || []
    }
  },

  computed:{
    total(){
      return this.cart.reduce((sum, i)=> sum + i.price * i.qty, 0)
    }
  },

  methods:{
    increase(i){
      this.cart[i].qty++
      this.save()
    },
    decrease(i){
      if(this.cart[i].qty > 1){
        this.cart[i].qty--
      }
      this.save()
    },
    removeItem(i){
      this.cart.splice(i,1)
      this.save()
    },
    save(){
      localStorage.setItem("cart", JSON.stringify(this.cart))
    }
  }
}
</script>