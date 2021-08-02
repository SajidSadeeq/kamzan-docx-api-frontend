<template>
  <div>
    <div class="mt-4">
      <div class="text-center">
        <h6>{{ (new Date()).toLocaleString('default', { month: 'long' }) }} - 2021</h6>
      </div>
      <apexchart type="donut" height="250" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      month: new Date('m'),
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
