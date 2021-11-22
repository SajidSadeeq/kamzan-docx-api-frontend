<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Stock <small>History</small> Report
                </h3>
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
                                <label class="form-label" for="default-01">Search Location</label>
                                <div class="form-control-wrap">
                                  <vue-search
                                    :img-photo="'path-img'"
                                    :source-field="'name'"
                                    :search-by-field="true"
                                    :show-new-botton="false"
                                    :enable-class-base="true"
                                    :api-source="apiSearchRackLocationUrl"
                                    @newitem="newitem()"
                                    @itemselected="rackSelected($event)"
                                  />
                                </div>
                                <span v-if="containsKey(form_errors, 'rack_id')" class="error">{{ form_errors.rack_id[0] }}</span>
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
        <div class="nk-block">
          <div id="pallets-table" class="nk-tb-list is-separate mb-3">
            <div class="nk-tb-item nk-tb-head">
              <div class="nk-tb-col">
                <span class="sub-text">#</span>
              </div>
              <div v-if="columnSettings.customer" class="nk-tb-col">
                <span class="sub-text">Customer</span>
              </div>
              <div v-if="columnSettings.pallet" class="nk-tb-col tb-col-md">
                <span class="sub-text">Pallet</span>
              </div>
              <div v-if="columnSettings.in_by" class="nk-tb-col tb-col-lg">
                <span class="sub-text">In By</span>
              </div>
              <div v-if="columnSettings.in_date_time" class="nk-tb-col tb-col-lg">
                <span class="sub-text">In Date/Time</span>
              </div>
              <div v-if="columnSettings.out_by" class="nk-tb-col tb-col-lg">
                <span class="sub-text">Out By</span>
              </div>
              <div v-if="columnSettings.out_date_time" class="nk-tb-col tb-col-lg">
                <span class="sub-text">Out Date/Time</span>
              </div>
            </div><!-- .nk-tb-item -->
            <div v-for="(pallet) in pallets" :key="pallet.id" class="nk-tb-item">
              <div class="nk-tb-col">
                <span class="tb-amount">{{ pallet.id }}</span>
              </div>
              <div v-if="columnSettings.customer" class="nk-tb-col">
                <span v-if="pallet.customer" class="tb-amount">{{ pallet.customer.customer_name }}</span>
              </div>
              <div v-if="columnSettings.pallet" class="nk-tb-col tb-col-md">
                <span>{{ pallet.pallet_id }}</span><br>
                <a href="javascript:;" class="tb-status text-warning" @click="viewLogs(pallet)">View Logs</a>
              </div>
              <div v-if="columnSettings.in_by" class="nk-tb-col tb-col-lg">
                <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex" :class="(pallet.pallet_in_user)?'badge-success':'badge-danger'">
                  {{ (pallet.pallet_in_user)?pallet.pallet_in_user.name:'n/a' }}
                </span>
              </div>
              <div v-if="columnSettings.in_date_time" class="nk-tb-col tb-col-lg">
                <span class="badge badge-dim badge-success"><em class="icon ni ni-clock" /><span>{{ pallet.in_date | formateDate }}</span></span>
                <span class="badge badge-dim badge-success"><em class="icon ni ni-clock" /><span>{{ pallet.in_time | formateTime }}</span></span>
              </div>
              <div v-if="columnSettings.out_by" class="nk-tb-col tb-col-lg">
                <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex" :class="{'badge-success': pallet.status == 2, 'badge-warning': pallet.status == 4, 'badge-danger': pallet.status == 1, 'badge-primary': pallet.status == 3}">
                  {{ (pallet.pallet_out_user)?pallet.pallet_out_user.name:'n/a' }}
                </span>
              </div>
              <div v-if="columnSettings.out_date_time" class="nk-tb-col tb-col-lg">
                <span class="badge badge-dim" :class="{'badge-success': pallet.status == 2, 'badge-warning': pallet.status == 4, 'badge-danger': pallet.status == 1, 'badge-primary': pallet.status == 3}">
                  <em class="icon ni ni-clock" /><span>{{ pallet.out_date | formateDate }}</span></span>
                <span class="badge badge-dim" :class="{'badge-success': pallet.status == 2, 'badge-warning': pallet.status == 4, 'badge-danger': pallet.status == 1, 'badge-primary': pallet.status == 3}">
                  <em class="icon ni ni-clock" /><span>{{ pallet.out_time | formateTime }}</span></span>
              </div>
            </div><!-- .nk-tb-item -->
          </div><!-- .nk-tb-list -->
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
      toggleModal: false,
      filterCollapse: false,
      pallets: [],
      toggleHeader: false,
      loading: true,
      total: 0,
      perPage: 10,
      currentPage: 1,
      daterange: '',
      apiSearchRackLocationUrl: process.env.APP_URL + 'common/search-rack-location',
      rack_id: '',
      form_errors: '',
      columnSettings: {
        customer: true,
        pallet: true,
        location: true,
        good: true,
        in_by: true,
        in_date_time: true,
        out_by: true,
        out_date_time: true,
        use_by: true,
        batch_number: true
      }
    }
  },
  computed: {
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    // })
  },
  created () {
    // this.fetchPallets()
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    scrollToTop () {
      const element = document.querySelector('html')
      element.scroll({
        top: 90,
        behavior: 'smooth'
      })
    },
    rackSelected (rack) {
      this.rack_id = rack.id
    },
    async pageChangeHandler (page) {
      const self = this
      self.start()
      self.currentPage = page
      // const offset = ((this.currentPage - 1) * this.limit)
      await this.$axios.get('reports/stock-history', {
        params: {
          page: self.currentPage,
          perpage: self.perPage,
          daterange: self.daterange,
          rack_id: self.rack_id
        }
      })
        .then(function (response) {
          self.pallets = response.data.payload.data
          self.total = response.data.payload.total
          self.$nuxt.$loading.finish()
        })
        .catch(function (error) {
          self.form_errors = error.response.data.data
        })
      this.finish()
      this.scrollToTop()
    },
    changePerPage (event) {
      this.perPage = event.target.value
      this.pageChangeHandler(1)
    },
    columnCheckBox (columnSettings, column, e) {
      columnSettings[column] = e.target.checked
    },
    viewLogs (pallet) {
      const self = this
      this.$axios.get('reports/stock-history/pallet-logs', {
        params: {
          rack_id: pallet.rack_id,
          pallet_id: pallet.pallet_id
        }
      })
        .then(function (response) {
          let tr = ''
          tr = response.data.payload.map(function (log, i) {
            tr += `<tr><td>${log.rack_id}</td>
            <td>${log.new_rack_id}</td>
            <td>${log.is_full_out}</td>
            <td>${log.type}</td>
            <td>${log.action_by.name}</td>
            <td>${log.created_at}</td></tr>`
            return tr
          }).join('')

          self.$swal.fire({
            html: `<div id="table-striped">
                <table class="table table-striped" border=1>
              <thead class="thead-dark">
                  <tr>
                      <th scope="col">Old Rack</th>
                      <th scope="col">New Rack</th>
                      <th scope="col">Out Qty</th>
                      <th scope="col">Action Type</th>
                      <th scope="col">Actin By</th>
                      <th scope="col">Date</th>
                  </tr>
              </thead>
              <br>
              <tbody>` + tr +
              `</tbody>
              </table>
              </div>
              `,
            showCancelButton: true,
            cancelButtonColor: '#e85347'
          })
        })
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
