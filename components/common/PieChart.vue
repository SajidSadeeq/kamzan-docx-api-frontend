<template>
  <div>
    <div class="mt-4">
      <apexchart type="donut" height="250" :options="chartOptions" :series="series" />
    </div>
    <div class="text-center mt-5">
      Month July
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      series: [44, 55],
      chartOptions: {
        labels: ['Out Pallets', 'In Pallets'],
        chart: {
          type: 'donut'
        },
        expandOnClick: true,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  }
}
</script>

<style>

</style>
