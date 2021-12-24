<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Sales <small>Report</small>
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
        <div class="nk-block">
          <div id="pallets-table" class="nk-tb-list is-separate mb-3">
            <div class="nk-tb-item nk-tb-head">
              <div class="nk-tb-col">
                <input v-model="selectAll" type="checkbox">
              </div>
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
              <div v-if="columnSettings.use_by" class="nk-tb-col tb-col-lg">
                <span class="sub-text">Use By</span>
              </div>
              <div v-if="columnSettings.batch_number" class="nk-tb-col tb-col-lg">
                <span class="sub-text">Batch Number</span>
              </div>
              <!-- <div class="nk-tb-col nk-tb-col-tools">
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
              </div> -->
            </div><!-- .nk-tb-item -->
            <div v-for="(pallet) in pallets" :key="pallet.id" class="nk-tb-item">
              <div class="nk-tb-col">
                <input v-if="pallet.status !== 2" v-model="selectedCheckBoxes" type="checkbox" :value="pallet">
              </div>
              <div class="nk-tb-col">
                <span class="tb-amount">{{ pallet.id }}</span>
              </div>
              <div v-if="columnSettings.customer" class="nk-tb-col">
                <span v-if="pallet.customer" class="tb-amount">{{ pallet.customer.customer_name }}</span>
              </div>
              <div v-if="columnSettings.pallet" class="nk-tb-col tb-col-md">
                <span>{{ pallet.pallet_id }}</span><br>
                <a href="javascript:;" class="tb-status text-warning" @click="viewGoods(pallet)">View Goods</a>
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
              <div v-if="columnSettings.use_by" class="nk-tb-col tb-col-lg">
                <span class="badge badge-dim badge-success">
                  <em class="icon ni ni-clock" /><span>{{ pallet.product_expiry_date | formateTime }}</span></span>
              </div>
              <div v-if="columnSettings.batch_number" class="nk-tb-col tb-col-lg">
                <span class="badge badge-dim badge-success">
                  <em class="icon ni ni-file" /><span>{{ pallet.batch_number }}</span></span>
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
      activeIndex: null,
      pickSheetDropdown: false,
      columnSettingsDropdown: false,
      loading: true,
      total: 0,
      perPage: 10,
      currentPage: 1,
      daterange: '',
      customerSearchPlaceholder: '',
      apiSearchCustomerUrl: process.env.APP_URL + 'common/search-customers',
      customer_id: '',
      selectedCheckBoxes: [],
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
    // pallets () {
    //   return this.$store.state.reports.customer_stock
    // },
    selectAll: {
      get () {
        return this.pallets ? this.selectedCheckBoxes.length === this.pallets.length : false
      },
      set (value) {
        const selected = []
        if (value) {
          this.pallets.forEach(function (pallet) {
            if (pallet.status !== 2) {
              selected.push(pallet)
            }
          })
        }
        this.selectedCheckBoxes = selected
      }
    }
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
    onClickOutside (event) {
      if (this.hasParentClass(event.target, 'parent-li') === false) {
        this.activeIndex = null
      }
      if (this.hasParentClass(event.target, 'pick-sheet') === false) {
        this.pickSheetDropdown = false
      }
      if (this.hasParentClass(event.target, 'settings') === false) {
        this.columnSettingsDropdown = false
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
    // async fetchPallets () {
    //   const _this = this
    //   await this.$axios.get('reports/customer-stock', {
    //     params: {
    //       perpage: this.perPage
    //     }
    //   })
    //     .then(function (response) {
    //       _this.total = response.data.payload.total
    //       _this.$store.commit('reports/CUSTOMER_STOCK', response.data.payload.data)
    //       _this.$nuxt.$loading.finish()
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
      self.start()
      self.currentPage = page
      // const offset = ((this.currentPage - 1) * this.limit)
      await this.$axios.get('reports/customer-stock', {
        params: {
          page: self.currentPage,
          perpage: self.perPage,
          daterange: self.daterange,
          customer_id: self.customer_id
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
    async editPallet (pallet) {
      await this.$store.commit('pallets-in-out/SET_EDIT_PALLET', pallet)
      this.$router.push(`pallets-in-out/${pallet.id}/edit`)
    },
    changePerPage (event) {
      this.perPage = event.target.value
      this.pageChangeHandler(1)
    },
    columnCheckBox (columnSettings, column, e) {
      columnSettings[column] = e.target.checked
    },
    confirmPickSheet () {
      const self = this

      const selectedIds = []
      self.selectedCheckBoxes.forEach(function (pallet) {
        if (pallet.status !== 2) {
          selectedIds.push(pallet.id)
        }
      })

      if (self.selectedCheckBoxes.length < 1) {
        this.$swal.fire({
          title: 'You didn\'t select pallet!',
          // text: "You won't be able to revert this!",
          icon: 'error',
          confirmButtonColor: '#e85347',
          confirmButtonText: 'Close'
        })
      } else {
        this.$swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#1ee0ac',
          cancelButtonColor: '#e85347',
          confirmButtonText: 'Confirm Pick Sheet'
        }).then((result) => {
          if (result.isConfirmed) {
            self.$nuxt.$loading.start()
            this.$axios.post('/pallets-in-out/multiple-pallet-out', {
              ids: selectedIds
            })
              .then(function (response) {
                self.fetchPallets()
                self.$nuxt.$loading.finish()
              })

            this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    },
    printPickSheet () {
      if (this.selectedCheckBoxes.length < 1) {
        this.$swal.fire({
          title: 'You didn\'t select pallet!',
          // text: "You won't be able to revert this!",
          icon: 'error',
          confirmButtonColor: '#e85347',
          confirmButtonText: 'Close'
        })
      } else {
        const tr = this.selectedCheckBoxes.map(pallet =>
      `<tr>
                <td>${pallet.customer.customer_name}</td>
                <td>${pallet.location.name}</td>
                <td>${(pallet.good) ? pallet.good.name : 'n/a'}<br>${pallet.good_quantity}</td>
                <td>${pallet.product_expiry_date ? moment(pallet.product_expiry_date, 'h:mm a').format('hh:mm a') : 'n/a'}</td>
                <td>${pallet.batch_number}</td>
            </tr>`
        )
          .join('')

        this.$swal.fire({
          html: `<div id="table-striped">
          <table class="table table-striped" border=1>
        <thead class="thead-dark">
            <tr>
                <th scope="col">Customer</th>
                <th scope="col">Location</th>
                <th scope="col">Good/Qty</th>
                <th scope="col">Use By</th>
                <th scope="col">Batch Number</th>
            </tr>
        </thead>
        <br>
        <tbody>` + tr +
        `</tbody>
        </table>
        </div>
        `,
          showCancelButton: true,
          confirmButtonColor: '#1ee0ac',
          cancelButtonColor: '#e85347',
          confirmButtonText: 'Print'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$htmlToPaper('table-striped')
          }
        })
      }
    },
    viewGoods (products) {
      const tr = products.good.good_products.map(pallet =>
      `<tr>
            <td>${products.good.name}</td>
            <td>${pallet.products.name}</td>
            <td>${this.$options.filters.formateDate(products.in_date)}</td>
            <td>${this.$options.filters.formateTime(products.in_date)}</td>
        </tr>`
      ).join('')

      this.$swal.fire({
        html: `<div id="table-striped">
          <table class="table table-striped" border=1>
        <thead class="thead-dark">
            <tr>
                <th scope="col">Good Name</th>
                <th scope="col">Product Name</th>
                <th scope="col">In Date</th>
                <th scope="col">In Time</th>
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
