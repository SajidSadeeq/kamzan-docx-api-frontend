<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Dashboard
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="pageMenu">
                    <ul class="nk-block-tools g-3">
                      <li class="nk-block-tools-opt">
                        <!-- <a href="javascript:;" class="btn btn-primary">
                          <em class="icon ni ni-reports" /><span>Warehouse Map</span></a> -->
                        <NuxtLink to="/warehouse-map" class="btn btn-warning">
                          <em class="icon ni ni-reports" /><span>Warehouse Map</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- .nk-block-head-content -->
            </div><!-- .nk-block-between -->
          </div><!-- .nk-block-head -->
          <div class="nk-block">
            <div class="row g-gs">
              <div class="col-xxl-6 col-sm-6">
                <BarChart />
              </div><!-- .col -->
              <div class="col-xxl-6 col-sm-6">
                <PieChart />
              </div><!-- .col -->
            </div><!-- .row -->
          </div><!-- .nk-block -->
          <hr>
          <div class="nk-block">
            <div class="row g-gs">
              <RecentlyAdded />
            </div><!-- .row -->
          </div><!-- .nk-block -->
          <hr>
          <div class="nk-block">
            <div class="row g-gs">
              <div class="col-xxl-6 col-md-6">
                <ComingPallets />
              </div>
              <div class="col-xxl-6 col-md-6">
                <GoingPallets />
              </div>
              <div class="col-xxl-12 col-md-12">
                <MissedPallets />
              </div>
            </div><!-- .row -->
          </div><!-- .nk-block -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue2-datepicker/index.css'
import BarChart from '~/components/common/dashboard/BarChart.vue'
import PieChart from '~/components/common/dashboard/PieChart.vue'
import RecentlyAdded from '~/components/common/dashboard/RecentlyAdded.vue'
import ComingPallets from '~/components/common/dashboard/ComingPallets.vue'
import GoingPallets from '~/components/common/dashboard/GoingPallets.vue'
import MissedPallets from '~/components/common/dashboard/MissedDeadlinePallets.vue'
export default {
  components: {
    BarChart,
    PieChart,
    RecentlyAdded,
    ComingPallets,
    GoingPallets,
    MissedPallets
  },
  data () {
    return {
      activeIndex: null,
      user: this.$auth.user,
      daterange: null,
      loading: true,
      total: 0,
      perPage: 10,
      currentPage: 1
    }
  },
  computed: {
    pallets () {
      return this.$store.state.palletinout.pallets
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
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
      await this.$axios.get('pallets-in-out/recently-added')
        .then(function (response) {
          _this.$store.commit('palletinout/SET_PALLETS', response.data.payload)
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
    },
    async editPallet (pallet) {
      await this.$store.commit('pallets-in-out/SET_EDIT_PALLET', pallet)
      this.$router.push(`pallets-in-out/${pallet.id}/edit`)
    }
  }
}
</script>

<style>

</style>
