<template>
  <div>
    <div v-if="products.length === 0" class="text-center q-pa-xl text-grey">
      <q-icon name="search_off" size="64px" />
      <div class="text-h6 q-mt-md">No se encontraron productos</div>
    </div>
    <div v-else class="row q-col-gutter-md">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'

defineProps({
  products: {
    type: Array,
    default: () => []
  }
})
</script>
