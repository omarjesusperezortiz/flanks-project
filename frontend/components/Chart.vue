<template>
    <div class="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-3">
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="bg-white rounded-lg dark:bg-gray-800">
          <div class="flex justify-between mb-2">
            <div>
              <h4 class="text-2xl font-semibold text-gray-900 dark:text-white pb-1">Total Invested Amount</h4>
              <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{{ '€' + parseFloat(totalInvestment).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="bg-white rounded-lg dark:bg-gray-800">
          <div class="flex justify-between mb-2">
            <div>
              <h4 class="text-2xl font-semibold text-gray-900 dark:text-white pb-1">Number of Investments</h4>
              <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{{ totalNumberOfInvestments }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="bg-white rounded-lg dark:bg-gray-800">
          <div class="flex justify-between mb-2">
            <div>
              <h4 class="text-2xl font-semibold text-gray-900 dark:text-white pb-1">Rate of Return</h4>
              <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{{ rateOfReturn }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-3">
          <!-- Main widget -->
          <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm xl:col-span-2 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div class="bg-white rounded-lg dark:bg-gray-800">
            <div class="flex justify-between mb-5">
              <div>
                <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Total Investment</h5>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Assets Class</p>
              </div>
            </div>
            <div style="height:535px ; position:relative">
              <Bar v-if="ratingGroupChartData" :data="ratingGroupChartData" :options="chartOptions" />
            <p v-else>Loading...</p>
          </div>
            <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-end mt-5">
              <div class="flex justify-end items-center pt-5">
                <NuxtLink to="/tables" class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                View All
                <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
              </NuxtLink>
              </div>
            </div>
          </div>
      </div>
          <!--Tabs widget -->
          <div
              class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <h3 class="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Positions gainings
                  <!-- <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button"><svg
                          class="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"></path>
                      </svg><span class="sr-only">Show information</span></button> -->
              </h3>
              <div data-popover="" id="popover-description" role="tooltip"
                  class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                  data-popper-placement="bottom-end"
                  style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-355px, 81px, 0px);">
                  <div class="p-3 space-y-2">
                      <h3 class="font-semibold text-gray-900 dark:text-white">Positions gainings</h3>
                      <p>Here you can see the statistics of your positions gainings.</p>
                  </div>
                  <div data-popper-arrow=""
                      style="position: absolute; left: 0px; transform: translate3d(271px, 0px, 0px);"></div>
              </div>
              <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
                  id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                  <li class="w-full">
                      <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="true"
                          class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">
                          Top gainings
                        </button>
                  </li>
                  <li class="w-full">
                      <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false"
                          class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">
                          Worst gainings
                        </button>
                  </li>
              </ul>
              <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
                  <div class="pt-4" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                          <li class="py-2 sm:py-3" v-for="bestGain in bestGains" :key="bestGain.index">
                              <div class="flex items-center justify-between">
                                <p class="ml-3 pb-1 font-medium text-gray-900 truncate dark:text-white text-ellipsis overflow-hidden w-1/2">
                                  {{ bestGain.name }}
                                </p>
                              </div>  
                              <div class="flex items-center justify-between">
                                  <div class="flex items-center min-w-0">
                                      <div class="ml-3">
                                          <div
                                              class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                  <path clip-rule="evenodd" fill-rule="evenodd"
                                                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z">
                                                  </path>
                                              </svg>
                                              {{ `${((bestGain.capital_gain / bestGain.cost)).toFixed(3)}%` }}
                                          </div>
                                      </div>
                                  </div>
                                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                      {{ '€' + parseFloat(bestGain.capital_gain).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}
                                  </div>
                              </div>
                              <div class="flex items-center justify-between">
                                <span class="ml-5 text-gray-500">{{ bestGain.entity }}</span>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="hidden pt-4" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                          <li class="py-2 sm:py-3" v-for="gain in worstGains" :key="gain.index">
                              <div class="flex items-center justify-between">
                                <p class="ml-3 pb-1 font-medium text-gray-900 truncate dark:text-white text-ellipsis overflow-hidden w-1/2">
                                  {{ gain.name }}
                                </p>
                              </div>  
                              <div class="flex items-center justify-between">
                                  <div class="flex items-center min-w-0">
                                      <div class="ml-3">
                                          <div
                                              class="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                  <path clip-rule="evenodd" fill-rule="evenodd"
                                                      d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z">
                                                  </path>
                                              </svg>
                                              {{ `${((gain.capital_gain / gain.cost)).toFixed(3)}%` }}
                                          </div>
                                      </div>
                                  </div>
                                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                      {{ '€' + parseFloat(gain.capital_gain).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}
                                  </div>
                              </div>
                              <div class="flex items-center justify-between">
                                <span class="ml-5 text-gray-500">{{ gain.entity }}</span>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <!-- Card Footer -->
              <div
                  class="flex items-center justify-end pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                  <div class="flex-shrink-0">
                    <NuxtLink to="/tables" class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                View All
                <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
              </NuxtLink>
                  </div>
              </div>
          </div>
    </div>
    <div class="grid gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-2">
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="bg-white rounded-lg dark:bg-gray-800">
          <div class="flex justify-between mb-5">
            <div>
              <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Total Investment</h5>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Assets Class</p>
            </div>
          </div>
          <div class="chart-container">
            <Pie v-if="assetsClassChartData" :data="assetsClassChartData" :options="chartOptions" />
            <p v-else>Loading...</p>
          </div>
          <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-end mt-5">
            <div class="flex justify-end items-center pt-5">
              <NuxtLink to="/tables" class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                View All
                <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="bg-white rounded-lg dark:bg-gray-800">
          <div class="flex justify-between mb-5">
            <div>
              <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Distribution</h5>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Portfolio ID</p>
            </div>
          </div>
          <div class="chart-container">
            <Pie v-if="portfolioDistributionChartData" :data="portfolioDistributionChartData" :options="chartOptions" />
            <p v-else>Loading...</p>
          </div>
          <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-end mt-5">
            <div class="flex justify-end items-center pt-5">
              <NuxtLink to="/tables" class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                View All
                <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { Pie, Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Filler
} from 'chart.js'
import type { Position } from "~/types";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Filler
)

const { getAll } = usePositionsApi()
const positions = ref<Position[] | null>(null)
const error = ref(false)
positions.value = await getAll()
if (positions.value === null) {
    error.value = true
}

const totalNumberOfInvestments = computed(() => {
  if (!positions.value) return null
  return positions.value.length
})
const totalGains = computed(() => {
  if (!positions.value) return null
  return positions.value
    .map((pos: { capital_gain: string }) => parseFloat(pos.capital_gain))
    .reduce((sum: number, gain: number) => { return sum + (gain ? gain : 0) }, 0)
}
)
const totalInvestment = computed(() => {
  if (!positions.value) return null
  return positions.value
    .map((pos: { cost: string }) => parseFloat(pos.cost))
    .reduce((sum: number, cost: number) => { return sum + (cost ? cost : 0) }, 0)
})
const rateOfReturn = computed(() => {
  if (!positions.value) return null

  return `${((totalGains.value) / totalInvestment.value * 100).toFixed(2)}%`
})

const getUniqueValues = (field: string) => {
    return computed(() => {
        if (!positions.value) return [];
        const unique = [...new Set(positions.value.map(pos => pos[field]))];
        return unique.sort();
    });
};

const ratingGroupChartData = computed(() => {
  if (!positions.value) return null

  // Assuming ratings are categorized in some way
  const assetsClasses = [...new Set(positions.value.map((pos: { type: string }) => pos.type))]
  const distribution = assetsClasses.map(assetClass => {
    return positions.value
      .filter((pos: { type: string }) => pos.type === assetClass)
      .reduce((sum: number, pos: { balance: string }) => sum + parseFloat(pos.balance), 0)
  })

  return {
    labels: assetsClasses,
    datasets: [
      {
        label: 'Total Investment by Rating Group',
        backgroundColor: '#42A5F5',
        borderColor: '#42A5F5',
        data: distribution
      }
    ]
  }
})
const assetsClassChartData = computed(() => {
  if (!positions.value) return null

  const assetsClasses = [...new Set(positions.value.map((pos: { type: string }) => pos.type))]
  const distribution = assetsClasses.map(assetClass => {
    return positions.value
      .filter((pos: { type: string }) => pos.type === assetClass)
      .reduce((sum: number, pos: { balance: string }) => sum + parseFloat(pos.balance), 0)
  })

  return {
    labels: assetsClasses,
    datasets: [
      {
        label: 'Total Investment by Assets Class',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        data: distribution
      }
    ]
  }
})
const marketValueChartData = computed(() => {
  if (!positions.value) return null

  const scatterData = positions.value.map((pos: { balance: string, cost: string }) => ({
    x: parseFloat(pos.cost),
    y: parseFloat(pos.balance)
  }))

  return {
    datasets: [
      {
        label: 'Market Value by Book Value',
        backgroundColor: '#42A5F5',
        borderColor: '#42A5F5',
        data: scatterData
      }
    ]
  }
})
const capitalGainsChartData = computed(() => {
  if (!positions.value) return null

  const portfolioIds = [...new Set(positions.value.map((pos: { portfolio_id: string }) => pos.portfolio_id))]
  const capitalGainsByPortfolio = portfolioIds.map(portfolioId => {
    return positions.value
      .filter((pos: { portfolio_id: string }) => pos.portfolio_id === portfolioId)
      .reduce((sum: number, pos: { capital_gain: string }) => sum + parseFloat(pos.capital_gain), 0)
  })

  return {
    labels: portfolioIds,
    datasets: [
      {
        label: 'Capital Gains by Portfolio ID',
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        data: capitalGainsByPortfolio
      }
    ]
  }
})
const portfolioDistributionChartData = computed(() => {
  if (!positions.value) return null

  const portfolioIds = [...new Set(positions.value.map((pos: { portfolio_id: string }) => pos.portfolio_id))]
  const distributionByPortfolio = portfolioIds.map(portfolioId => {
    return positions.value
      .filter((pos: { portfolio_id: string }) => pos.portfolio_id === portfolioId)
      .reduce((sum: number, pos: { balance: string }) => sum + parseFloat(pos.balance), 0)
  })

  return {
    labels: portfolioIds,
    datasets: [
      {
        label: 'Distribution by Portfolio ID',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        data: distributionByPortfolio
      }
    ]
  }
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
})

// Logic to get best and worst gainers
const dataWithValuation = computed(() => {
  if (!positions.value) return null;
  return positions.value
    .filter((pos: { valuation_date: string }) => pos.valuation_date.length > 0)
    .map((pos: { capital_gain: string, cost: string }) => {
      return {
        ...pos,
        percentage_gain: parseFloat(pos.capital_gain) / parseFloat(pos.cost)
      };
    });
});
const bestGains = computed(() => {
  if (!dataWithValuation.value) return null;
  return dataWithValuation.value
    .slice() // create a shallow copy to avoid mutating the original array
    .sort((a: { percentage_gain: number }, b: { percentage_gain: number }) => b.percentage_gain - a.percentage_gain)
    .slice(0, 5);
});
const worstGains = computed(() => {
  if (!dataWithValuation.value) return null;
  return dataWithValuation.value
    .slice() // create a shallow copy to avoid mutating the original array
    .sort((a: { percentage_gain: number }, b: { percentage_gain: number }) => a.percentage_gain - b.percentage_gain)
    .slice(0, 5);
});


</script>

<style scoped>
.chart-container {
  position: relative;
  height: 400px;
}
</style>