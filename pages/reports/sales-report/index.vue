<template>
  <div class="nk-content customer">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Sales Report
                </h3>
              </div><!-- .nk-block-head-content -->
              <!-- <div class="nk-block-head-content filters">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="more-options">
                    <ul class="nk-block-tools g-3">
                      <li>
                        <div class="form-control-wrap">
                          <div class="form-icon form-icon-right">
                            <em class="icon ni ni-search" />
                          </div>
                          <input id="search" v-model="search" type="text" class="form-control" placeholder="Search by name">
                        </div>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="javascript:;" class="btn btn-success d-md-inline-flex mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /> <span>Search</span>
                        </a>
                        <NuxtLink to="/customer/add" class="btn btn-primary d-md-inline-flex">
                          <em class="icon ni ni-plus" /><span>Add</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>.nk-block-head-content -->
            </div><!-- .nk-block-between -->
          </div><!-- .nk-block-head -->
          <div class="nk-block nk-block-lg mb-1">
            <div class="card card-preview">
              <div class="card-inner">
                <div id="accordion-1" class="accordion accordion-s2">
                  <div class="accordion-item">
                    <a
                      href="javascript:;"
                      class="accordion-head"
                      :class="(filterCollapse)?'':'collapsed'"
                      data-toggle="collapse"
                      data-target="#accordion-item-1-1"
                      aria-expanded="false"
                      @click="filterCollapse = !filterCollapse"
                    >
                      <h6 class="title"> Filters </h6>
                      <span class="accordion-icon" />
                    </a>
                    <div id="accordion-item-1-1" class="accordion-body collapse" :class="(filterCollapse)?'show':''" data-parent="#accordion-1" style="">
                      <div class="accordion-inner">
                        <div class="preview-block">
                          <div class="row gy-4">
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label class="form-label" for="default-01">Select Date Range</label>
                                <div class="form-control-wrap">
                                  <date-picker v-model="daterange" range placeholder="Select Date Range" />
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label class="form-label" for="default-01">Order By</label>
                                <div class="form-control-wrap">
                                  <select id="order-by" v-model="order_by" class="form-control">
                                    <option value="">
                                      All
                                    </option>
                                    <option value="desc">
                                      Desc
                                    </option>
                                    <option value="Asc">
                                      Asc
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="mt-5 text-right">
                                <button class="btn btn-success mr-2" @click="pageChangeHandler(1)">
                                  <em class="icon ni ni-search" />
                                  <span>Search</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><!-- .card-preview -->
          </div>
        </div>
        <div class="nk-block">
          <div class="nk-tb-list is-separate mb-3">
            <div class="nk-tb-item nk-tb-head">
              <div class="nk-tb-col nk-tb-col-check">
                <span class="sub-text">#</span>
              </div>
              <div class="nk-tb-col">
                <span class="sub-text">Customer Name</span>
              </div>
              <div class="nk-tb-col tb-col-mb">
                <span class="sub-text">Pallet</span>
              </div>
              <div class="nk-tb-col tb-col-mb">
                <span class="sub-text">Type</span>
              </div>
              <div class="nk-tb-col tb-col-mb">
                <span class="sub-text">From</span>
              </div>
              <div class="nk-tb-col tb-col-mb">
                <span class="sub-text">To</span>
              </div>
              <div class="nk-tb-col tb-col-md">
                <span class="sub-text">Vat</span>
              </div>
              <div class="nk-tb-col tb-col-md">
                <span class="sub-text">Total</span>
              </div>
              <div class="nk-tb-col tb-col-lg">
                <span class="sub-text">Status</span>
              </div>
            </div><!-- .nk-tb-item -->
            <div v-for="(invocie, index) in invocies" :key="index" class="nk-tb-item">
              <div class="nk-tb-col tb-col-mb">
                <span class="tb-amount">{{ invocie.id }}</span>
              </div>
              <div class="nk-tb-col">
                <a href="javascript:;">
                  <div class="user-card">
                    <div class="user-info">
                      <span class="tb-lead"> {{ (invocie.customer)?invocie.customer.customer_name:'n/a' }} <span class="dot dot-success d-md-none ml-1" /></span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="nk-tb-col tb-col-mb">
                <span class="tb-amount">{{ (invocie.pallet_id)?invocie.pallet_id:'n/a' }}</span>
              </div>
              <div class="nk-tb-col tb-col-mb">
                <span class="tb-amount" :class="(invocie.invoice_type == 1)?'text-success':(invocie.invoice_type == 2)?'text-warning':'text-danger'">{{ (invocie.invoice_type == 1)?'Pallet':(invocie.invoice_type == 2)?'RH&D':'Sundry' }}</span>
              </div>
              <div class="nk-tb-col tb-col-md">
                <span>{{ invocie.invoice_from | formateDate }}</span>
              </div>
              <div class="nk-tb-col tb-col-lg">
                <span>{{ invocie.invoice_to | formateDate }}</span>
              </div>
              <div class="nk-tb-col tb-col-lg">
                <span>{{ invocie.vat }}</span>
              </div>
              <div class="nk-tb-col tb-col-lg">
                <span>{{ invocie.sum_total }}</span>
              </div>
              <div class="nk-tb-col tb-col-md">
                <span class="tb-status text-success">Paid</span>
              </div>
            </div><!-- .nk-tb-item -->
          </div><!-- .nk-tb-list -->
          <div v-if="Math.ceil(total / perPage) > 1" class="card">
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
</template>

<script>
import Vue2ClickOutside from 'vue2-click-outside'
import moment from 'moment'
export default {
  directives: {
    clickOutside: Vue2ClickOutside.directive
  },
  filters: {
    formateDate: date => date ? moment(date).format('DD-MM-YYYY') : 'n/a'
  },
  data () {
    return {
      toggleModal: false,
      toggleHeader: false,
      filterCollapse: false,
      activeIndex: null,
      loading: true,
      total: 0,
      currentPage: 1,
      search: '',
      status: '',
      perPage: 10,
      daterange: null,
      order_by: 'desc'
    }
  },
  computed: {
    invocies () {
      return this.$store.state.reports.sales_report
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  created () {
    this.fetchSalesReport()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    onClickOutside (event) {
      if (this.hasParentClass(event.target, 'parent-li') === false) {
        this.activeIndex = null
      }
    },
    hasParentClass (child, classname) {
      if (child.className.split(' ').includes(classname)) { return true }
      try {
        return child.parentNode && this.hasParentClass(child.parentNode, classname)
      } catch (TypeError) {
        return false
      }
    },

    toggleActive (index) {
      this.activeIndex = index
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
      this.total = await this.$store.dispatch('reports/fetchSalesReport', {
        page: this.currentPage,
        search: this.search,
        perpage: this.perPage,
        daterange: this.daterange,
        order_by: this.order_by
      })
      this.finish()
      this.scrollToTop()
    },
    async fetchSalesReport () {
      const self = this
      await this.$axios.get('reports/sales-report', {
        params: {
          page: self.currentPage,
          perpage: self.perPage
        }
      })
        .then(function (response) {
          self.total = response.data.payload.total
          self.$store.commit('reports/SET_SALES_REPORT', response.data.payload.data)
          self.$nuxt.$loading.finish()
        })
    },
    async removeCustomer (customer) {
      const self = this
      self.$nuxt.$loading.start()
      await this.$axios.delete(`/customer/delete/${customer.id}`)
        .then(function (response) {
          self.activeIndex = null
          self.fetchCustomers()
          self.$nuxt.$loading.finish()
        }).catch(function (ex) {
          self.fetchCustomers()
          self.$nuxt.$loading.finish()
        })
    },
    async editCustomer (customer) {
      await this.$store.commit('customer/SET_EDIT_CUSTOMER', customer)
      this.$router.push(`customer/${customer.id}/edit`)
    }
  }
}
</script>

<style>

</style>
