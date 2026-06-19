<template>
  <q-card flat bordered class="column items-center">
    <q-img
      :src="product.imageUrl"
      height="200px"
      fit="cover"
      class="full-width"
    >
      <template v-slot:error>
        <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
          <q-icon name="image" size="64px" />
        </div>
      </template>
      <div v-if="product.discount > 0" class="absolute-top-left q-ma-sm">
        <q-badge color="negative" class="q-pa-xs">
          -{{ product.discount }}%
        </q-badge>
      </div>
    </q-img>
    <q-card-section class="full-width">
      <div class="text-subtitle2 text-weight-bold text-center q-mb-sm">
        {{ product.description }}
      </div>
      <div class="text-center">
        <span v-if="product.discount > 0" class="text-strikethrough text-grey text-caption">
          S/ {{ originalPrice }}
        </span>
        <div class="text-h6 text-primary text-weight-bold">
          S/ {{ finalPrice }}
        </div>
      </div>
      <div class="text-center q-mt-sm">
        <q-badge :color="product.stock > 0 ? 'positive' : 'negative'">
          {{ product.stock > 0 ? `${product.stock} en stock` : 'Agotado' }}
        </q-badge>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const originalPrice = computed(() =>
  props.product.price.toFixed(2)
)

const finalPrice = computed(() => {
  if (props.product.discount > 0) {
    return (props.product.price * (1 - props.product.discount / 100)).toFixed(2)
  }
  return props.product.price.toFixed(2)
})
</script>
