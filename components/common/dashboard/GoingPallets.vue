<template>
  <div class="card card-full">
    <div class="card-inner">
      <div class="card-title-group">
        <div class="card-title">
          <h6 class="title">
            Due Out
          </h6>
        </div>
        <div class="nk-block-head-content">
          <div class="toggle-wrap nk-block-tools-toggle">
            <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-more-v" /></a>
            <div class="toggle-expand-content" data-content="pageMenu">
              <ul class="nk-block-tools g-3">
                <!-- <li class="nk-block-tools-opt">
                    <div class="form-group">
                      <div class="form-icon form-icon-right">
                        <em class="icon ni ni-search" />
                      </div><input id="going-pallet" type="text" class="form-control form-control-sm coming_going_search" name="going_pallet">
                    </div>
                  </li>
                  <li class="nk-block-tools-opt">
                    <div class="form-group">
                      <button type="button" class="btn btn-sm btn-success">
                        Search
                      </button>
                    </div>
                  </li> -->
              </ul>
            </div>
          </div>
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
          <span>Date Out</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span>Out Time</span>
        </div>
        <div class="nk-tb-col">
          <span class="d-none d-sm-inline">Out By</span>
        </div>
      </div>
      <div v-for="(pallet) in goingPallets" :key="pallet.id" class="nk-tb-item">
        <div class="nk-tb-col tb-col-sm">
          <div class="user-card">
            <div class="user-name">
              <span class="tb-lead">{{ (pallet.customer)?pallet.customer.customer_name:'n/a' }}</span>
            </div>
          </div>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="tb-sub">{{ pallet.pallet_id }}</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="tb-sub">{{ pallet.out_date | formateDate }}</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="tb-sub">{{ pallet.out_time | formateTime }}</span>
        </div>
        <div class="nk-tb-col">
          <span class="badge badge-success">{{ pallet.pallet_in_user.name }}</span>
        </div>
      </div>
    </div>
  </div><!-- .card -->
</template>

<script>
import moment from 'moment'
export default {
  filters: {
    formateDate: date => date ? moment(date).format('DD-MM-YYYY') : 'n/a',
    formateTime: date => date ? moment(date, 'h:mm a').format('hh:mm a') : 'n/a'
  },
  data () {
    return {
      total: 0,
      perPage: 10,
      currentPage: 1,
      goingPallets: []
    }
  },
  computed: {
    pallets () {
      return this.$store.state.palletinout.pallets
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
      await this.$axios.get('pallets-in-out/going-pallets')
        .then(function (response) {
          _this.goingPallets = response.data.payload
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

<style>

</style>
