<template>
  <div>
    <apexchart v-if="options.chart" width="100%" type="bar" :options="options" :series="series" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: '',
      months: '',
      options: '',
      series: [
        {
          name: 'Pallets Out',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 21, 22, 45, 76]
        },
        {
          name: 'Pallets In',
          data: [20, 50, 65, 30, 99, 20, 30, 71, 42, 54, 54, 10]
        }
      ]
    }
  },
  created () {
    this.fetchBarData()
  },
  methods: {
    async fetchBarData () {
      const _this = this
      await this.$axios.get('dashboard/get-bar-data')
        .then(function (response) {
          _this.year = response.data.payload.year
          _this.options = response.data.payload.options
          _this.$nuxt.$loading.finish()
        })
    }
  }
}
</script>

<style>

</style>
