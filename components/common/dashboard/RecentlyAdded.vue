<template>
  <div class="col-xxl-12 col-sm-12">
    <div class="nk-block nk-block-lg">
      <div class="nk-block-head nk-block-head-sm mb-2">
        <div class="nk-block-between">
          <div class="nk-block-head-content">
            <h3 class="nk-block-title page-title">
              Recently Added
            </h3>
          </div><!-- .nk-block-head-content -->
          <div class="nk-block-head-content">
            <div class="toggle-wrap nk-block-tools-toggle">
              <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-more-v" /></a>
              <div class="toggle-expand-content" data-content="pageMenu">
                <ul class="nk-block-tools g-3">
                  <li class="nk-block-tools-opt">
                    <div class="form-group">
                      <div class="form-icon form-icon-right">
                        <em class="icon ni ni-search" />
                      </div><input id="search" v-model="search" type="text" class="form-control" name="search">
                    </div>
                  </li>
                  <li class="nk-block-tools-opt">
                    <div class="form-group">
                      <button type="button" class="btn btn-success" @click="fetchPallets()">
                        Search Now
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div><!-- .nk-block-head-content -->
      </div><!-- .nk-block-between -->
    </div><!-- .nk-block-head -->
    <div class="nk-tb-list is-separate mb-3">
      <div class="nk-tb-item nk-tb-head">
        <div class="nk-tb-col">
          <span class="sub-text">Customer</span>
        </div>
        <div class="nk-tb-col">
          <span class="sub-text">Pallet</span>
        </div>
        <div class="nk-tb-col tb-col-mb">
          <span class="sub-text">In By</span>
        </div>
        <div class="nk-tb-col tb-col-mb">
          <span class="sub-text">In Date</span>
        </div>
        <div class="nk-tb-col tb-col-mb">
          <span class="sub-text">In Time</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="sub-text">Out By</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="sub-text">Out Date</span>
        </div>
        <div class="nk-tb-col tb-col-md">
          <span class="sub-text">Out Time</span>
        </div>
        <div class="nk-tb-col nk-tb-col-tools">
          <ul class="nk-tb-actions gx-1 my-n1">
            <li>
              <div class="drodown">
                <a href="#" class="dropdown-toggle btn btn-icon btn-trigger mr-n1" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                <div class="dropdown-menu dropdown-menu-right">
                  <ul class="link-list-opt no-bdr">
                    <li><a href="#"><em class="icon ni ni-mail" /><span>Send Email to All</span></a></li>
                    <li><a href="#"><em class="icon ni ni-na" /><span>Suspend Selected</span></a></li>
                    <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Seleted</span></a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div><!-- .nk-tb-item -->
      <div v-for="(pallet) in pallets" :key="pallet.id" class="nk-tb-item">
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col tb-col-mb">
          <span class="tb-amount">{{ pallet.customer.customer_name }}</span>
        </div>
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col tb-col-md">
          <span>{{ pallet.pallet.name }}</span>
        </div>
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col tb-col-lg">
          <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex" :class="(pallet.pallet_in_user)?'badge-success':'badge-danger'">
            {{ (pallet.pallet_in_user)?pallet.pallet_in_user.name:'n/a' }}
          </span>
        </div>
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col tb-col-lg">
          <span class="badge badge-dim badge-success"><em class="icon ni ni-clock" /><span>{{ pallet.in_date }}</span></span>
        </div>
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col tb-col-lg">
          <span class="badge badge-dim badge-warning"><em class="icon ni ni-clock" /><span>{{ pallet.in_time }}</span></span>
        </div>
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col tb-col-lg">
          <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex" :class="(pallet.pallet_out_customer)?'badge-success':'badge-danger'">
            {{ (pallet.pallet_out_user)?pallet.pallet_out_user.name:'n/a' }}
          </span>
        </div>
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col tb-col-lg">
          <span class="badge badge-dim badge-success"><em class="icon ni ni-clock" /><span>{{ (pallet.out_date)?pallet.out_date:'n/a' }}</span></span>
        </div>
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col tb-col-lg">
          <span class="badge badge-dim badge-warning"><em class="icon ni ni-clock" /><span>{{ (pallet.out_time)?pallet.out_time:'n/a' }}</span></span>
        </div>
        <div v-if="pallet.customer !== null && pallet.pallet !== null" class="nk-tb-col nk-tb-col-tools">
          <ul class="nk-tb-actions gx-1">
            <li class="nk-tb-action-hidden">
              <a
                href="javascript:;"
                class="btn btn-trigger btn-icon"
                data-toggle="tooltip"
                data-placement="top"
                title="Pallet Move"
                data-original-title="Send Email"
                @click="movePallet(pallet)"
              >
                <em class="icon ni ni-move" />
              </a>
            </li>
          </ul>
        </div>
      </div><!-- .nk-tb-item -->
    </div><!-- .nk-tb-list -->
  </div>
</template>

<script>
export default {

  data () {
    return {
      total: 0,
      perPage: 10,
      currentPage: 1,
      search: ''
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
      await this.$axios.get('pallets-in-out/recently-added', {
        params: {
          search: _this.search
        }
      })
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
    async movePallet (pallet) {
      await this.$store.commit('pallets-in-out/SET_EDIT_PALLET', pallet)
      this.$router.push(`pallets-in-out/${pallet.id}/move`)
    }
  }
}
</script>

<style>

</style>
