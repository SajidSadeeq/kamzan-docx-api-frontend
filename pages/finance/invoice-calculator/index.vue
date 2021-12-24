<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Invoice <small>Calculator</small>
                </h3>
                <!-- {{ selectedCheckBoxes }} -->
              </div><!-- .nk-block-head-content -->
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
                                <label class="form-label" for="default-01">Search Customer</label>
                                <div class="form-control-wrap">
                                  <vue-search
                                    :img-photo="'path-img'"
                                    :source-field="'name'"
                                    :placeholder="customerSearchPlaceholder"
                                    :search-by-field="true"
                                    :show-new-botton="false"
                                    :enable-class-base="true"
                                    :api-source="apiSearchCustomerUrl"
                                    @newitem="newitem()"
                                    @itemselected="customerselected($event)"
                                  />
                                </div>
                                <span v-if="containsKey(form_errors, 'customer_id')" class="error">{{ form_errors.customer_id[0] }}</span>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label class="form-label" for="default-01">Select Date Range</label>
                                <div class="form-control-wrap">
                                  <date-picker v-model="daterange" range placeholder="Select Date Range" />
                                </div>
                                <span v-if="containsKey(form_errors, 'daterange')" class="error">{{ form_errors.daterange[0] }}</span>
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

        <div v-if="pallets.length > 0 || sundryPallets.length > 0" class="nk-block">
          <!-- <div class="nk-block-head nk-block-head">
            <div class="nk-block-head-content">
              <h4 class="nk-block-title">
                Table Striped Rows
              </h4>
              <div class="nk-block-des">
                <p>Use <code class="code-class">.table-stripped</code> class in <code class="code-tag">&lt;table&gt;</code> tag to make zebra stripping on table row.</p>
              </div>
            </div>
          </div> -->
          <div class="card card-preview">
            <div class="card-inner">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">
                      #
                    </th>
                    <th v-tooltip="'Pallet Id'" scope="col">
                      <span class="sub-text">Pallet</span>
                    </th>
                    <th v-tooltip="'Automatic Invoice'" scope="col">
                      <span class="sub-text">AI</span>
                    </th>
                    <th v-tooltip="'Invoice Frequency'" scope="col">
                      <span class="sub-text">IF</span>
                    </th>
                    <th v-tooltip="'Invoice Day'" scope="col">
                      <span class="sub-text">ID</span>
                    </th>
                    <th v-tooltip="'Cost Per Pallet'" scope="col">
                      <span class="sub-text">CPP</span>
                    </th>
                    <th v-tooltip="'Cost Per Pallet Duration'" scope="col">
                      <span class="sub-text">CPPD</span>
                    </th>
                    <th v-tooltip="'RH&D In Charges'" scope="col">
                      <span class="sub-text">Rdh In</span>
                    </th>
                    <th v-tooltip="'RH&D Out Charges'" scope="col">
                      <span class="sub-text">Rhd Out</span>
                    </th>
                    <th v-tooltip="'Total'" scope="col">
                      <span class="sub-text">Total</span>
                    </th>
                  </tr>
                </thead>
                <tbody v-if="pallets.length > 0">
                  <tr v-for="(pallet, index) in pallets" :key="pallet.id">
                    <th scope="row">
                      {{ index+1 }}
                    </th>
                    <td>{{ pallet.pallet_id }}</td>
                    <td>
                      <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex" :class="(pallet.customer.is_automatic_invoice)?'badge-primary':'badge-warning'">
                        {{ (pallet.customer.is_automatic_invoice)?'Yes':'No' }}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex badge-success">
                        {{ (pallet.customer)?pallet.customer.invoice_frequency:'n/a' }}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex badge-danger">
                        {{ (pallet.customer.invoice_day)?pallet.customer.invoice_day:'n/a' }}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-warning">
                        <em class="icon ni ni-sign-dollar" /><span class="text-capitalize">{{ pallet.customer.cpp }}</span>
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-warning">
                        <em class="icon ni ni-sign-dollar" /><span>{{ pallet.customer.cppd }}</span>
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-dark">
                        <em class="icon ni ni-sign-dollar" /><span>{{ pallet.customer.rhdpp_in }}</span>
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-dark">
                        <em class="icon ni ni-sign-dollar" /><span>{{ pallet.customer.rhdpp_out }}</span>
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-dark">
                        <em class="icon ni ni-sign-dollar" /><span v-html="calculateDiffOfTwoDates(pallet, '')" />
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody v-if="sundryPallets.length > 0">
                  <h6>Sundry Pallets</h6>
                  <tr v-for="(pallet, index) in sundryPallets" :key="pallet.id">
                    <th scope="row">
                      {{ index+1 }}
                    </th>
                    <td>{{ pallet.pallet_id }}</td>
                    <td>
                      <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex" :class="(pallet.customer.is_automatic_invoice)?'badge-primary':'badge-warning'">
                        {{ (pallet.customer.is_automatic_invoice)?'Yes':'No' }}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex badge-success">
                        {{ (pallet.customer)?pallet.customer.invoice_frequency:'n/a' }}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex badge-danger">
                        {{ (pallet.invoice_day)?pallet.invoice_day:'n/a' }}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-warning">
                        <em class="icon ni ni-sign-dollar" /><span class="text-capitalize">{{ pallet.cpp }}</span>
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-warning">
                        <em class="icon ni ni-sign-dollar" /><span>{{ pallet.cppd }}</span>
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-dark">
                        <em class="icon ni ni-sign-dollar" /><span>{{ pallet.customer.rhdpp_in }}</span>
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-dark">
                        <em class="icon ni ni-sign-dollar" /><span>{{ pallet.customer.rhdpp_out }}</span>
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-dim badge-dark">
                        <em class="icon ni ni-sign-dollar" /><span>{{ calculateDiffOfTwoDates(pallet, 'sundry') }}</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- <div v-if="Math.ceil(total / perPage) > 1" class="card"> -->
          <div class="card">
            <div class="card-inner">
              <div class="pages float-left">
                <select class="form-control" @change="changePerPage($event)">
                  <option value="10">
                    10
                  </option>
                  <option value="20">
                    20
                  </option>
                  <option value="50">
                    50
                  </option>
                  <option value="100">
                    100
                  </option>
                </select>
              </div>
              <div v-if="Math.ceil(total / perPage) > 1" class="pages float-right">
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
import moment from 'moment'
import DatePicker from 'vue2-datepicker'
import Vue2ClickOutside from 'vue2-click-outside'
import 'vue-input-search/dist/vue-search.css'
import VueSearch from 'vue-input-search/dist/vue-search.common'
export default {
  directives: {
    clickOutside: Vue2ClickOutside.directive
  },
  components: {
    'date-picker': DatePicker,
    'vue-search': VueSearch
  },
  filters: {
    formateDate: date => date ? moment(date).format('DD-MM-YYYY') : 'n/a',
    formateTime: date => date ? moment(date, 'h:mm a').format('hh:mm a') : 'n/a',
    replace (st, rep, repWith) {
      const result = st.split(rep).join(repWith)
      return result
    }
  },
  data () {
    return {
      filterCollapse: false,
      pallets: [],
      sundryPallets: [],
      activeIndex: null,
      loading: true,
      total: 0,
      perPage: 10,
      currentPage: 1,
      daterange: '',
      customerSearchPlaceholder: 'Search Customer',
      apiSearchCustomerUrl: process.env.APP_URL + 'common/search-customers',
      customer_id: '',
      form_errors: ''
    }
  },
  created () {
    // this.fetchPalletCaculations()
  },
  methods: {
    onClickOutside (event) {
      if (this.hasParentClass(event.target, 'parent-li') === false) {
        this.activeIndex = null
      }
      if (this.hasParentClass(event.target, 'pick-sheet') === false) {
        this.pickSheetDropdown = false
      }
    },
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    hasParentClass (child, classname) {
      if (child.className.split(' ').includes(classname)) { return true }
      try {
        // Throws TypeError if child doesn't have parent any more
        return child.parentNode && this.hasParentClass(child.parentNode, classname)
      } catch (TypeError) {
        return false
      }
    },
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    toggleActive (index) {
      this.activeIndex = index
    },
    // async fetchPalletCaculations () {
    //   const self = this
    //   self.$nuxt.$loading.start()
    //   await this.$axios.get('finance/invoice-calculator', {
    //     params: {
    //       perpage: this.perPage
    //     }
    //   })
    //     .then(function (response) {
    //       self.total = response.data.payload.total
    //       self.$store.commit('reports/CUSTOMER_STOCK', response.data.payload.data)
    //       self.$nuxt.$loading.finish()
    //     })
    // },
    scrollToTop () {
      const element = document.querySelector('html')
      element.scroll({
        top: 90,
        behavior: 'smooth'
      })
    },
    customerselected (customer) {
      this.customer_id = customer.id
    },
    async pageChangeHandler (page) {
      const self = this
      self.$nuxt.$loading.start()
      self.currentPage = page
      // const offset = ((this.currentPage - 1) * this.limit)
      await this.$axios.get('finance/invoice-calculator', {
        params: {
          page: self.currentPage,
          perpage: self.perPage,
          daterange: self.daterange,
          customer_id: self.customer_id
        }
      })
        .then(function (response) {
          self.pallets = []
          self.sundryPallets = []
          response.data.payload.data.forEach(function (value, index) {
            if (value.is_sundry) {
              self.sundryPallets.push(value)
            } else {
              self.pallets.push(value)
            }
          })
          self.total = response.data.payload.total
          self.$nuxt.$loading.finish()
        })
        .catch(function (error) {
          self.form_errors = error.response.data.data
        })
      this.scrollToTop()
    },
    changePerPage (event) {
      this.perPage = event.target.value
      this.pageChangeHandler(1)
    },
    calculateDiffOfTwoDates (pallet, check) {
      const start = moment(new Date(pallet.last_paid_date || pallet.in_date))
      const end = moment(new Date())
      const tdays = end.diff(start, 'days') + 1
      const tweeks = Math.floor(tdays / 7) + ((tdays % 7 >= 1) ? 1 : 0)
      const tmonths = Math.floor(tdays / 30) + ((tdays % 30 >= 1) ? 1 : 0)
      let total = pallet.customer.rhdpp_in
      if (check === '') {
        if (pallet.customer.cppd === 'day') {
          total += pallet.customer.cpp * tdays
        }
        if (pallet.customer.cppd === 'week') {
          total += pallet.customer.cpp * tweeks
        }
        if (pallet.customer.cppd === 'month') {
          total += pallet.customer.cpp * tmonths
        }
        if (pallet.out_date !== null) {
          total += pallet.customer.rhdpp_out
        }
      }

      if (check === 'sundry') {
        if (pallet.cppd === 'day') {
          total += pallet.cpp * tdays
        }
        if (pallet.cppd === 'week') {
          total += pallet.cpp * tweeks
        }
        if (pallet.out_date !== null) {
          total += pallet.rhdpp_out
        }
      }

      return total
    }
  }
}
</script>

<style scoped>
.mx-datepicker-range {
    width: 100%;
}
@media print {
  table tbody tr td {
    background-color: aqua;
  }
}
</style>
