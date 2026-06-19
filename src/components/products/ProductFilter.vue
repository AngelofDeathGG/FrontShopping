<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h6 q-mb-md">Filtros</div>
      <q-input
        v-model="filters.name"
        label="Buscar por nombre"
        outlined
        dense
        class="q-mb-md"
        debounce="300"
        @update:model-value="emitFilter"
      />
      <q-select
        v-model="filters.categoryId"
        :options="categoryOptions"
        label="Categoría"
        outlined
        dense
        clearable
        class="q-mb-md"
        emit-value
        map-options
        @update:model-value="emitFilter"
      />
      <div class="row q-col-gutter-sm">
        <div class="col-6">
          <q-input
            v-model.number="filters.minPrice"
            label="Precio mín."
            type="number"
            outlined
            dense
            @update:model-value="emitFilter"
          />
        </div>
        <div class="col-6">
          <q-input
            v-model.number="filters.maxPrice"
            label="Precio máx."
            type="number"
            outlined
            dense
            @update:model-value="emitFilter"
          />
        </div>
      </div>
      <q-btn
        flat
        color="primary"
        label="Limpiar filtros"
        icon="clear"
        class="q-mt-md full-width"
        @click="resetFilters"
      />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['filter'])

const filters = ref({
  name: '',
  categoryId: null,
  minPrice: null,
  maxPrice: null
})

const categoryOptions = computed(() =>
  props.categories.map((cat) => ({
    label: cat.description,
    value: cat.id
  }))
)

function emitFilter() {
  emit('filter', { ...filters.value })
}

function resetFilters() {
  filters.value = {
    name: '',
    categoryId: null,
    minPrice: null,
    maxPrice: null
  }
  emitFilter()
}
</script>
