<template>
  <div class="p-6">

    <!-- SEARCH -->
    <input
      v-model="search"
      type="text"
      placeholder="Search products..."
      class="p-2 border rounded w-full mb-4"
    />

    <!-- PRODUCTS GRID -->
    <div class="grid md:grid-cols-3 gap-6">

      <ProductCard
        v-for="p in filteredProducts"
        :key="p.id"
        :product="p"
        @add="addToCart"
      />

    </div>

  </div>
</template>

<script>
import { products } from "../data/products";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: { ProductCard },

  data() {
    return {
      products,
      search: ""
    };
  },

  computed: {
    filteredProducts() {
      return this.products.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },

  methods: {
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let item = cart.find(i => i.id === product.id);

      if (item) {
        item.qty++;
      } else {
        cart.push({ ...product, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(product.name + " added to cart ✔");
    }
  }
};
</script>