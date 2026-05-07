<div v-for="(item,index) in cart.cart">
  {{ item.name }} x {{ item.qty }}

  <button @click="cart.increase(index)">+</button>
  <button @click="cart.decrease(index)">-</button>
  <button @click="cart.remove(index)">X</button>
</div>

<h3>Total: {{ cart.total }} RWF</h3>