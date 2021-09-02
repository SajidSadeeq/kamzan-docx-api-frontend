<template>
  <div class="card card-full">
    <div class="card-inner">
      <div class="card-title-group">
        <div class="card-title">
          <h6 class="title">
            Due In
          </h6>
        </div>
      </div>
    </div>
    <div class="nk-tb-list mt-n2">
      <div class="nk-tb-item nk-tb-head">
        <div class="nk-tb-col tb-col-sm">
          <span>Customer</span>
        </div>
        <div class="nk-tb-col tb-col-sm">
          <span>Pallet</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span>Date In</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span>Time In</span>
        </div>
        <div class="nk-tb-col">
          <span class="d-none d-sm-inline">In By</span>
        </div>
      </div>
      <!-- <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle"> -->
      <div v-for="(pallet) in comingPallets" :key="pallet.id" class="nk-tb-item">
        <div class="nk-tb-col tb-col-sm">
          <div class="user-card">
            <div class="user-name">
              <span class="tb-lead">{{ pallet.customer.customer_name }}</span>
            </div>
          </div>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="tb-sub">{{ pallet.pallet_id }}</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="tb-sub">{{ pallet.in_date | formateDate }}</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="tb-sub">{{ pallet.in_time | formateTime }}</span>
        </div>
        <div class="nk-tb-col">
          <span class="badge badge-success">{{ pallet.pallet_in_user.name }}</span>
        </div>
      </div>
      <!-- </vue-custom-scrollbar> -->
    </div>
  </div><!-- .card -->
</template>

<script>
import moment from 'moment'
// import vueCustomScrollbar from 'vue-custom-scrollbar'
// import 'vue-custom-scrollbar/dist/vueScrollbar.css'
export default {
  // components: {
  //   'vue-custom-scrollbar': vueCustomScrollbar
  // },
  filters: {
    formateDate: date => date ? moment(date).format('DD-MM-YYYY') : 'n/a',
    formateTime: date => date ? moment(date, 'h:mm a').format('hh:mm a') : 'n/a'
  },
  data () {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      },
      total: 0,
      perPage: 10,
      currentPage: 1,
      comingPallets: []
    }
  },
  created () {
    this.fetchPallets()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    toggleActive (index) {
      this.activeIndex = index
    },
    async fetchPallets () {
      const _this = this
      await this.$axios.get('pallets-in-out/coming-pallets')
        .then(function (response) {
          _this.comingPallets = response.data.payload
          _this.$nuxt.$loading.finish()
        })
    },
    scrollToTop () {
      const element = document.querySelector('html')
      element.scroll({
        top: 90,
        behavior: 'smooth'
      })
    },
    async pageChangeHandler (page) {
      this.start()
      this.currentPage = page
      // const offset = ((this.currentPage - 1) * this.limit)
      await this.$store.dispatch('palletinout/fetchPalletInOut', {
        page: this.currentPage
      })
      this.finish()
      this.scrollToTop()
    }
  }
}
</script>

<style scoped>
.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  height: 300px;
}
</style>
