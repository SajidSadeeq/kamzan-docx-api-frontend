<template>
  <div>
    <div class="mt-4">
      <div class="text-center">
        <h6 class="date">
          {{ (new Date()).toLocaleString('default', { month: 'long' }) }} - 2021
        </h6>
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
        title: {
          text: ''
        },
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
  },
  mounted () {
    // const fragment = document.createDocumentFragment()
    // fragment.appendChild(document.querySelector('.date'))
    // document.querySelector('.apexcharts-inner').appendChild(fragment)

    // const source = document.querySelector('.date')
    // document.querySelector('.apexcharts-inner').appendChild(source)
  }
}
</script>
<!-- apexcharts-inner apexcharts-graphical -->
<style>

</style>
