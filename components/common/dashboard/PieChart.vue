<template>
  <div>
    <div class="mt-4">
      <!-- <div class="text-center">
        <h6>{{ (new Date()).toLocaleString('default', { month: 'long' }) }}</h6>
      </div> -->

      <apexchart type="donut" width="100%" height="250" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      month: new Date('m'),
      series: [0, 0],
      date: new Date(),
      chartOptions: {
        labels: ['Due In', ' Due Out'],
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
  created () {
    this.fetchPieData()
  },
  methods: {
    async fetchPieData () {
      const _this = this
      await this.$axios.get('dashboard/get-monthly-chart')
        .then(function (response) {
          _this.series = response.data.payload.series
          _this.chartOptions.labels = response.data.payload.labels
          _this.$nuxt.$loading.finish()
        })
    }
  }
}
</script>

<style>
.apexcharts-canvas { width: 100%!important; text-align: center;}
</style>
