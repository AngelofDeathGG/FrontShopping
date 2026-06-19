<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">Productos</div>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-3">
        <ProductFilter
          :categories="categories"
          @filter="onFilter"
        />
      </div>
      <div class="col-12 col-md-9">
        <div class="text-subtitle1 q-mb-md text-grey">
          {{ filteredProducts.length }} producto(s) encontrado(s)
        </div>
        <ProductList :products="filteredProducts" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import ProductFilter from '@/components/products/ProductFilter.vue'
import ProductList from '@/components/products/ProductList.vue'
import { getCategories } from '@/services/categoryService'
import { getProducts } from '@/services/productService'

const $q = useQuasar()

const categories = ref([])
const products = ref([])
const currentFilter = ref({
  name: '',
  categoryId: null,
  minPrice: null,
  maxPrice: null
})

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const nameMatch = !currentFilter.value.name ||
      p.description.toLowerCase().includes(currentFilter.value.name.toLowerCase())
    const categoryMatch = !currentFilter.value.categoryId ||
      p.categoryId === currentFilter.value.categoryId
    const minPriceMatch = !currentFilter.value.minPrice ||
      p.price >= currentFilter.value.minPrice
    const maxPriceMatch = !currentFilter.value.maxPrice ||
      p.price <= currentFilter.value.maxPrice
    return nameMatch && categoryMatch && minPriceMatch && maxPriceMatch
  })
})

function onFilter(filter) {
  currentFilter.value = filter
}

onMounted(async () => {
  try {
    const [catRes, prodRes] = await Promise.all([
      getCategories(),
      getProducts()
    ])
    categories.value = catRes.data
    products.value = prodRes.data
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Error al cargar datos: ' + (error.response?.data?.message || error.message)
    })
  }
})
</script>
