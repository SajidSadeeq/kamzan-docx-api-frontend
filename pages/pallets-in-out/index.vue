<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Pallets <small>In/Out</small> List
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="more-options">
                    <ul class="nk-block-tools g-3">
                      <li>
                        <date-picker v-model="daterange" range placeholder="Select Date Range" />
                      </li>
                      <li>
                        <select v-model="type" class="form-control">
                          <option value="pallet-in">
                            Pallet In
                          </option>
                          <option value="pallet-out">
                            Pallet Out
                          </option>
                        </select>
                      </li>
                      <li>
                        <button class="btn btn-success" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /><span>Search</span>
                        </button>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="#" class="btn btn-icon btn-primary d-md-none"><em class="icon ni ni-plus" /></a>
                        <NuxtLink to="/pallets-in-out/pallet-in" class="btn btn-primary d-none d-md-inline-flex">
                          <em class="icon ni ni-plus" /><span>Pallet In</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div><!-- .nk-block-head-content -->
            </div><!-- .nk-block-between -->
          </div><!-- .nk-block-head -->
          <div class="nk-block">
            <div class="nk-tb-list is-separate mb-3">
              <div class="nk-tb-item nk-tb-head">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid" />
                  </div>
                </div>
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
              <div v-for="(pallet, index) in pallets" :key="pallet.id" class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ pallet.customer.customer_name }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span>{{ pallet.pallet.name }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex" :class="(pallet.pallet_in_user)?'badge-success':'badge-danger'">
                    {{ (pallet.pallet_in_user)?pallet.pallet_in_user.name:'n/a' }}
                  </span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="badge badge-dim badge-success"><em class="icon ni ni-clock" /><span>{{ pallet.in_date | formateDate }}</span></span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="badge badge-dim badge-warning"><em class="icon ni ni-clock" /><span>{{ pallet.in_time | formateTime }}</span></span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex" :class="(pallet.pallet_out_user)?'badge-success':'badge-danger'">
                    {{ (pallet.pallet_out_user)?pallet.pallet_out_user.name:'n/a' }}
                  </span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="badge badge-dim badge-success"><em class="icon ni ni-clock" /><span>{{ pallet.out_date | formateDate }}</span></span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="badge badge-dim badge-warning"><em class="icon ni ni-clock" /><span>{{ pallet.out_time | formateTime }}</span></span>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1">
                    <li class="nk-tb-action-hidden">
                      <a
                        href="javascript:;"
                        class="btn btn-trigger btn-icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Pallet Out"
                        data-original-title="Pallet Out"
                        @click="outPallet(pallet)"
                      >
                        <em class="icon ni ni-forward-arrow-fill" />
                      </a>
                    </li>
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
                    <li>
                      <div class="drodown" :class="{'show': index === activeIndex }">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" @click="activeIndex = activeIndex === index ? null : index">
                          <em class="icon ni ni-more-h" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" :class="{'show': index === activeIndex }">
                          <ul class="link-list-opt no-bdr">
                            <!-- <li><a href="html/ecommerce/customer-details.html"><em class="icon ni ni-eye" /><span>View Details</span></a></li> -->
                            <li><a href="javascript:;" @click="editPallet(pallet)"><em class="icon ni ni-edit" /><span>Edit Details</span></a></li>
                            <li><a href="javascript:;" @click="removePallet(pallet)"><em class="icon ni ni-trash" /><span>Delete</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
            </div><!-- .nk-tb-list -->
            <div class="card">
              <div class="card-inner">
                <div class="pages float-right">
                  <vue-pagination
                    :current="currentPage"
                    :total="Math.ceil(total / perPage)"
                    @page-change="pageChangeHandler"
                  />
                </div>
              </div>
            </div>
          </div><!-- .nk-block -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import DatePicker from 'vue2-datepicker'
export default {
  components: {
    'date-picker': DatePicker
  },
  filters: {
    formateDate: date => date ? moment(date).format('DD-MM-YYYY') : 'n/a',
    formateTime: date => date ? moment(date, 'h:mm a').format('hh:mm a') : 'n/a'
  },
  data () {
    return {
      toggleModal: false,
      // pallets: [],
      toggleHeader: false,
      activeIndex: null,
      loading: true,
      total: 0,
      perPage: 10,
      currentPage: 1,
      daterange: '',
      type: 'pallet-in'
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
      await this.$axios.get('pallets-in-out')
        .then(function (response) {
          _this.total = response.data.payload.total
          _this.$store.commit('palletinout/SET_PALLETS', response.data.payload.data)
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
        page: this.currentPage,
        daterange: this.daterange,
        type: this.type
      })
      this.finish()
      this.scrollToTop()
    },
    async removePallet (pallet) {
      const self = this
      await this.$axios.delete(`/pallets-in-out/delete/${pallet.id}`)
        .then(function (response) {
          self.fetchPallets()
        }).catch(function (ex) {
          self.fetchPallets()
        })
    },
    async editPallet (pallet) {
      await this.$store.commit('pallets-in-out/SET_EDIT_PALLET', pallet)
      this.$router.push(`pallets-in-out/${pallet.id}/edit`)
    },
    async outPallet (pallet) {
      await this.$store.commit('pallets-in-out/SET_EDIT_PALLET', pallet)
      this.$router.push(`pallets-in-out/${pallet.id}/pallet-out`)
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
