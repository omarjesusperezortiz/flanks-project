<template>
    <div class="grid gap-4 mt-4 xl:grid-cols-1 2xl:grid-cols-1">
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex">
                        <div>
                            <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                                Gain</h5>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Type and Entity</p>
                        </div>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="bar" width="100%" height="420px" :options="columnChartOptions"
                    :series="columnChartData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
    <div class="flex justify-between mt-6">
        <div>
            <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Capital Balance</h5>
            <!-- <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Assets Class</p> -->
        </div>
    </div>
    <div class="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-3">
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Balance</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Position Type</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionTypesOptions"
                    :series="distributionTypeData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Balance</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Currency</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionCurrencyOptions"
                    :series="distributionCurrencyData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Balance</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Entity</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionEntityOptions"
                    :series="distributionEntityData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
    <div class="flex justify-between mt-6">
        <div>
            <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Investments</h5>
            <!-- <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Assets Class</p> -->
        </div>
    </div>
    <div class="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-3">
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Cost</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Position Type</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionTypesOptions"
                    :series="distributionInvestmentTypeData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Cost</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Currency</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionCurrencyOptions"
                    :series="distributionInvestmentCurrencyData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Cost</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Entity</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionEntityOptions"
                    :series="distributionInvestmentEntityData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
    <div class="flex justify-between mt-6">
        <div>
            <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Capital Gains</h5>
            <!-- <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Assets Class</p> -->
        </div>
    </div>
    <div class="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-3">
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Gains</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Position Type</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionTypesOptions"
                    :series="distributionGainsTypeData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Gains</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Currency</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionCurrencyOptions"
                    :series="distributionGainsCurrencyData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
        <div
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="bg-white rounded-lg dark:bg-gray-800">
                <div class="flex justify-between">
                    <div>
                        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Total Capital
                            Gains</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">by Entity</p>
                    </div>
                </div>
                <VueApexCharts class="py-6" type="pie" width="100%" height="420px" :options="positionEntityOptions"
                    :series="distributionGainsEntityData"></VueApexCharts>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-end items-center pt-6">
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
import VueApexCharts from 'vue3-apexcharts';
import type { Position } from "~/types";

const { getAll } = usePositionsApi()
const positions = ref<Position[] | null>(null)
const error = ref(false)
positions.value = await getAll()
if (positions.value === null) {
    error.value = true
}


const getUniqueValues = (field: string) => {
    return computed(() => {
        if (!positions.value) return [];
        const unique = [...new Set(positions.value.map(pos => pos[field]))];
        return unique.sort();
    });
};
const getAccumulatedDataInPercentage = (field: string) => {
    return computed(() => {
        if (error.value || !positions.value) return null;

        const uniqueValues = getUniqueValues(field).value;
        const accumulatedData = uniqueValues.map((value: string) => {
            return positions.value
                .filter((pos: { [x: string]: string }) => pos[field] === value)
                .reduce((sum: number, pos: { balance: string }) => sum + (parseFloat(pos.balance) || 0), 0);
        });

        const total = accumulatedData.reduce((sum: number, value: number) => sum + value, 0);
        const accumulatedDataInPercentage = accumulatedData.map((value: number) => (value / total) * 100);

        return accumulatedDataInPercentage;
    });
};
const getAccumulatedDataInvestmentInPercentage = (field: string) => {
    return computed(() => {
        if (error.value || !positions.value) return null;

        const uniqueValues = getUniqueValues(field).value;
        const accumulatedData = uniqueValues.map((value: string) => {
            return positions.value
                .filter((pos: { [x: string]: string }) => pos[field] === value)
                .reduce((sum: number, pos: { cost: string }) => sum + (parseFloat(pos.cost) || 0), 0);
        });

        const total = accumulatedData.reduce((sum: number, value: number) => sum + value, 0);
        const accumulatedDataInPercentage = accumulatedData.map((value: number) => (value / total) * 100);

        return accumulatedDataInPercentage;
    });
};
const getAccumulatedDataGainsInPercentage = (field: string) => {
    return computed(() => {
        if (error.value || !positions.value) return null;

        const uniqueValues = getUniqueValues(field).value;
        const accumulatedData = uniqueValues.map((value: string) => {
            return positions.value
                .filter((pos: { [x: string]: string }) => pos[field] === value)
                .reduce((sum: number, pos: { capital_gain: string }) => sum + (parseFloat(pos.capital_gain) || 0), 0);
        });

        const total = accumulatedData.reduce((sum: number, value: number) => sum + value, 0);
        const accumulatedDataInPercentage = accumulatedData.map((value: number) => (value / total) * 100);

        return accumulatedDataInPercentage;
    });
};

const positionTypeFields = getUniqueValues('type');
const currencyFields = getUniqueValues('currency');
const entityFields = getUniqueValues('entity');

const accumulatedDataInPercentage = getAccumulatedDataInPercentage('type');
const accumulatedDataCurrencyInPercentage = getAccumulatedDataInPercentage('currency');
const accumulatedDataEntityInPercentage = getAccumulatedDataInPercentage('entity');

const accumulatedDataInvestmentInPercentage = getAccumulatedDataInvestmentInPercentage('type');
const accumulatedDataCurrencyInvestmentInPercentage = getAccumulatedDataInvestmentInPercentage('currency');
const accumulatedDataEntityInvestmentInPercentage = getAccumulatedDataInvestmentInPercentage('entity');

const accumulatedDataGainsInPercentage = getAccumulatedDataGainsInPercentage('type');
const accumulatedDataCurrencyGainsInPercentage = getAccumulatedDataGainsInPercentage('currency');
const accumulatedDataEntityGainsInPercentage = getAccumulatedDataGainsInPercentage('entity');

const colorsChart = ['#1C64F2', '#16BDCA', '#9061F9', '#FDBA8C', '#E74694', '#ffb31c'];


// Fields
const positionTypesOptions = computed(() => {
    return {
        colors: colorsChart,
        stroke: {
            colors: ["white"],
        },
        plotOptions: {
            pie: {
                labels: {
                    show: true,
                },
                size: "100%",
                dataLabels: {
                    offset: -25
                }
            },
        },
        labels: positionTypeFields.value,
        dataLabels: {
            enabled: true,
            style: {
                fontFamily: "Inter, sans-serif",
            },
        },
        legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
        },
        yaxis: {
            labels: {
                formatter: (value: number) => value.toFixed(2) + "%",
            },
        }
    };
});
const positionCurrencyOptions = computed(() => {
    return {
        colors: colorsChart,
        stroke: {
            colors: ["white"],
        },
        plotOptions: {
            pie: {
                labels: {
                    show: true,
                },
                size: "100%",
                dataLabels: {
                    offset: -25
                }
            },
        },
        labels: currencyFields.value,
        dataLabels: {
            enabled: true,
            style: {
                fontFamily: "Inter, sans-serif",
            },
        },
        legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
        },
        yaxis: {
            labels: {
                formatter: (value: number) => value.toFixed(2) + "%",
            },
        }
    };
});
const positionEntityOptions = computed(() => {
    return {
        colors: colorsChart,
        stroke: {
            colors: ["white"],
        },
        plotOptions: {
            pie: {
                labels: {
                    show: true,
                },
                size: "100%",
                dataLabels: {
                    offset: -25
                }
            },
        },
        labels: entityFields.value,
        dataLabels: {
            enabled: true,
            style: {
                fontFamily: "Inter, sans-serif",
            },
        },
        legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
        },
        yaxis: {
            labels: {
                formatter: (value: number) => value.toFixed(2) + "%",
            },
        }
    };
});

// Balance
const distributionTypeData = computed(() => {
    return accumulatedDataInPercentage.value;
});
const distributionCurrencyData = computed(() => {
    return accumulatedDataCurrencyInPercentage.value;
});
const distributionEntityData = computed(() => {
    return accumulatedDataEntityInPercentage.value;
});

// Investment (Cost)
const distributionInvestmentTypeData = computed(() => {
    return accumulatedDataInvestmentInPercentage.value;
});
const distributionInvestmentCurrencyData = computed(() => {
    return accumulatedDataCurrencyInvestmentInPercentage.value;
});
const distributionInvestmentEntityData = computed(() => {
    return accumulatedDataEntityInvestmentInPercentage.value;
});

// CapitalGains
const distributionGainsTypeData = computed(() => {
    return accumulatedDataGainsInPercentage.value;
});
const distributionGainsCurrencyData = computed(() => {
    return accumulatedDataCurrencyGainsInPercentage.value;
});
const distributionGainsEntityData = computed(() => {
    return accumulatedDataEntityGainsInPercentage.value;
});

function processDataAndFormatForApexCharts(data, groupField1, groupField2, accumulateField) {
    const result = {};
    const allTypes = new Set();
    const allEntities = new Set();

    data.forEach(pos => {
        const key1 = pos[groupField1]; // entity
        const key2 = pos[groupField2]; // type

        allEntities.add(key1);
        allTypes.add(key2);

        if (!result[key1]) {
            result[key1] = {}; // Initialize entity as the primary grouping.
        }
        if (!result[key1][key2]) {
            result[key1][key2] = 0; // Initialize type under each entity.
        }

        const gainValue = Number(pos[accumulateField]);
        if (!isNaN(gainValue)) {
            result[key1][key2] += gainValue;
        } else {
            console.error('Invalid number conversion for:', pos[accumulateField]);
        }
    });

    const series = Array.from(allTypes).map(type => {
        const data = Array.from(allEntities).map(entity => ({
            x: entity,
            y: result[entity][type] || 0
        }));

        return {
            name: type,
            data: data
        };
    });

    return series;
}

const columnChartOptions = computed(() => {
    return {
        colors: ["#1A56DB", "#FDBA8C", "#9061F9", "#16BDCA", "#E74694"],
        chart: {
            type: "bar",
            height: 420,
            fontFamily: "Inter, sans-serif",
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadius: 8,
            },
        },
        tooltip: {
            enabled: true,

            shared: true,
            intersect: false,
            style: {
                fontFamily: "Inter, sans-serif"
            },
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
                formatter: function (value) {
                    return "€" + parseFloat(value).toFixed(2);
                }
            }
        },
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true
        }
    }
});
const columnChartData = computed(() => {
    return processDataAndFormatForApexCharts(positions.value, 'type', 'entity', 'capital_gain');
});

</script>
