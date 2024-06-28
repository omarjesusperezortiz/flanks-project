<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
    <div class="mb-4 flex flex-wrap gap-4 justify-between items-center">
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input v-model="globalSearchTerm" type="search" id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..." required />
      </div>
      <div class="w-full">
        <div class="flex flex-col lg:flex-row gap-4 justify-start">
          <div class="basis-1/4" v-for="col in filterableColumns" :key="col.field">
            <label :for="col.field" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ col.label
              }}</label>
            <select v-model="filters[col.field]" :id="col.field"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">All</option>
              <option v-for="option in col.filterOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="basis-1/4">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white invisible ">.</label>
            <button @click="clearFilters" aria-label="Clear filters" type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Clear filters
            </button>
          </div>
        </div>
      </div>

    </div>
    <ColorScheme>
      <vue-good-table :columns="columns" :rows="filteredPositions" :fixed-header="false" :pagination-options="{
          enabled: true,
          perPageDropdown: [50, 100, 200, 500, 1000]
        }" :search-options="{ enabled: false }" :theme="theme" max-height="600px">
          <template #table-row="props">
            <span v-if="props.column.field == 'actions'">
              <button @click="viewPosition(props.row.id)"
              class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button">
                <Icon name="mdi-magnify"
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </button>
            </span>
            <span v-else>
              {{props.formattedRow[props.column.field]}}
            </span>
          </template>
      </vue-good-table>
    </ColorScheme>
  </div>
</template>

<script setup lang="ts">
import 'vue-good-table-next/dist/vue-good-table-next.css';
import type { Position } from "~/types";

const { getAll } = usePositionsApi()
const positions = ref<Position[] | null>(null)
const error = ref(false)
positions.value = await getAll()
if (positions.value === null) {
    error.value = true
}
const router = useRouter();

const theme = computed(() => useColorMode().value == 'dark' ? 'nocturnal' : 'default');

const globalSearchTerm = ref('');
const filters = ref({
  id: '',
  accrued_interest: '',
  number_of_shares: '',
  balance: '',
  capital_gain: '',
  cost: '',
  currency: '',
  entity: '',
  expiration_date: '',
  initial_date: '',
  interest_rate: '',
  is_nominal: '',
  isin: '',
  market: '',
  name: '',
  portfolio_id: '',
  type: '',
  valuation_date: '',
  rate_to_euro: ''
});

const getUniqueValues = (field : any) => {
  const values = positions.value ? [...new Set(positions.value.map(pos => pos[field]))] : [];
  return values.sort();
};

const columns = ref([
  { label: 'ID', field: 'id', width: '150px' },
  { label: 'Accrued Interest', field: 'accrued_interest', width: '120px' },
  { label: 'Number of Shares', field: 'number_of_shares', width: '150px' },
  { label: 'Balance', field: 'balance', width: '100px' },
  { label: 'Capital Gain', field: 'capital_gain', width: '120px' },
  { label: 'Cost', field: 'cost', width: '100px' },
  { label: 'Currency', field: 'currency', width: '100px' },
  { label: 'Entity', field: 'entity', width: '150px' },
  { label: 'Expiration Date', field: 'expiration_date', width: '150px' },
  { label: 'Initial Date', field: 'initial_date', width: '150px' },
  { label: 'Interest Rate', field: 'interest.rate', width: '120px' },
  { label: 'Is Nominal', field: 'is_nominal', width: '100px' },
  { label: 'ISIN', field: 'isin', width: '150px' },
  { label: 'Market', field: 'market', width: '100px' },
  { label: 'Name', field: 'name', width: '200px' },
  { label: 'Portfolio ID', field: 'portfolio_id', width: '150px' },
  { label: 'Type', field: 'type', width: '100px' },
  { label: 'Valuation Date', field: 'valuation_date', width: '150px' },
  { label: 'Rate to Euro', field: 'rate_to_euro', width: '120px' },
  { label: 'Actions', field: 'actions', width: '120px' },
]);

const filterableColumns = computed(() => [
  { label: 'Currency', field: 'currency', filterType: 'select', filterOptions: getUniqueValues('currency') },
  { label: 'Entity', field: 'entity', filterType: 'select', filterOptions: getUniqueValues('entity') },
  { label: 'Is Nominal', field: 'is_nominal', filterType: 'select', filterOptions: getUniqueValues('is_nominal') },
  { label: 'Portfolio ID', field: 'portfolio_id', filterType: 'select', filterOptions: getUniqueValues('portfolio_id') },
  { label: 'Type', field: 'type', filterType: 'select', filterOptions: getUniqueValues('type') },
]);

const filteredPositions = computed(() => {
  if (!positions.value) return [];

  let filtered = positions.value;

  Object.keys(filters.value).forEach((key : String) => {
    if (filters.value[key]) {
      filtered = filtered.filter((pos) => pos[key]?.toString().toLowerCase().includes(filters.value[key].toLowerCase()));
    }
  });

  if (globalSearchTerm.value) {
    const searchTerm = globalSearchTerm.value.toLowerCase();
    filtered = filtered.filter((pos) =>
      Object.values(pos).some((val) =>
        val?.toString().toLowerCase().includes(searchTerm)
      )
    );
  }

  return filtered;
});

const clearFilters = () => {
  Object.keys(filters.value).forEach((key: String) => {
    filters.value[key] = '';
  });
  globalSearchTerm.value = '';
};

const viewPosition = (id: any) => {
// use router to navigate to position details page set /tables/:id as the route
  router.push({ path: '/tables/' + id })
};
</script>

<style scoped></style>
