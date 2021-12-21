<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Due <small>In/Out</small> List
                </h3>
                <!-- {{ selectedCheckBoxes }} -->
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content filters">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="more-options">
                    <ul class="nk-block-tools g-3">
                      <!-- <li>
                        <v-select :options="avaiableGoods" class="v-select vs-good" multiple @input="(good_id) => setGoodsFilter(good_id)" />
                      </li>
                      <li>
                        <date-picker v-model="daterange" range placeholder="Select Date Range" />
                      </li>
                      <li>
                        <select v-model="type" class="form-control">
                          <option value="pallet-in">
                            Due In
                          </option>
                          <option value="pallet-out">
                            Due Out
                          </option>
                        </select>
                      </li>
                      <li>
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
                      </li> -->

                      <li class="nk-block-tools-opt pick-sheet">
                        <!-- <button class="btn btn-success mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /><span>Search</span>
                        </button> -->
                        <!-- <a v-if="$auth.hasScope('pallet_in_out_col_settings')" href="javascript:;" class="btn btn-dark d-md-inline-flex" data-toggle="dropdown" aria-expanded="false"> -->
                        <a
                          v-click-outside="onClickOutside"
                          href="javascript:;"
                          class="btn btn-success d-md-inline-flex"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          @click="pickSheetDropdown = !pickSheetDropdown"
                        >
                          <em class="icon ni ni-setting" /> <span>Pick Sheet</span>
                        </a>
                        <div class="dropdown">
                          <div class="dropdown-menu dropdown-menu-right px-3" :class="{show:pickSheetDropdown}" style="">
                            <ul class="link-list-opt no-bdr">
                              <li class="border-bottom mb-1">
                                <strong>Pick Sheet ({{ selectedCheckBoxes.length }} Selected)</strong>
                              </li>
                              <li class="border-bottom mb-1">
                                <a href="javascript:;" @click="printPickSheet()">Print Pick Sheet</a>
                              </li>
                              <li class="border-bottom mb-1">
                                <a href="javascript:;" @click="confirmPickSheet()">Confirm Pick Sheet</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="nk-block-tools-opt settings">
                        <!-- <button class="btn btn-success mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /><span>Search</span>
                        </button> -->
                        <!-- <a v-if="$auth.hasScope('pallet_in_out_col_settings')" href="javascript:;" class="btn btn-dark d-md-inline-flex" data-toggle="dropdown" aria-expanded="false"> -->
                        <a
                          v-if="$auth.hasScope('pallet_in_out_col_settings')"
                          v-click-outside="onClickOutside"
                          href="javascript:;"
                          class="btn btn-dark d-md-inline-flex"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          @click="columnSettingsDropdown = !columnSettingsDropdown"
                        >
                          <em class="icon ni ni-setting" />
                        </a>
                        <div class="dropdown">
                          <div class="dropdown-menu dropdown-menu-right px-3" :class="{show:columnSettingsDropdown}" style="">
                            <ul class="link-list-opt no-bdr">
                              <li class="border-bottom mb-1">
                                <strong>Columns</strong>
                              </li>
                              <li v-for="(column, index) in columnSettings" :key="index" class="text-capitalize">
                                {{ index | replace("_"," ") }}
                                <div class="custom-control custom-control-sm custom-checkbox notext float-right">
                                  <input :id="index" type="checkbox" class="custom-control-input" :checked="index ? 'checked': ''" @click="columnCheckBox(columnSettings,index,$event)">
                                  <label class="custom-control-label" :for="index" />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="nk-block-tools-opt">
                        <!-- <button class="btn btn-success mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /><span>Search</span>
                        </button> -->
                        <NuxtLink to="/pallets-in-out/pallet-in" class="btn btn-primary d-md-inline-flex">
                          <em class="icon ni ni-plus" /><span>Create</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
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
                                <label class="form-label" for="default-01">Select Date Range</label>
                                <div class="form-control-wrap">
                                  <date-picker v-model="daterange" range placeholder="Select Date Range" />
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label class="form-label" for="default-01">Select Status</label>
                                <div class="form-control-wrap">
                                  <select v-model="type" class="form-control">
                                    <option value="pallet-in">
                                      Due In
                                    </option>
                                    <option value="pallet-out">
                                      Due Out
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
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
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label class="form-label" for="default-05">Rack Location</label>
                                <div class="form-control-wrap">
                                  <v-select :options="avaiableRacks" class="v-select" @input="(rack) => setPalletRack(rack)" />
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label class="form-label" for="default-05">Select Goods</label>
                                <div class="form-control-wrap">
                                  <v-select :options="avaiableGoods" class="v-select vs-good" multiple @input="(good_id) => setGoodsFilter(good_id)" />
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
              <div v-if="columnSettings.location" class="nk-tb-col tb-col-md">
                <span class="sub-text">Location</span>
              </div>
              <div v-if="columnSettings.good" class="nk-tb-col tb-col-md">
                <span class="sub-text">Good Name/Qty</span>
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
                <span>{{ pallet.pallet_id }}</span>
              </div>
              <div v-if="columnSettings.location" class="nk-tb-col tb-col-md">
                <span>{{ (pallet.location)?pallet.location.name:'n/a' }}</span>
              </div>
              <div v-if="columnSettings.good" class="nk-tb-col tb-col-md">
                <span>{{ (pallet.good)?pallet.good.name:'n/a' }}</span><br>
                <span>{{ pallet.good_quantity }}</span>
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
                  <em class="icon ni ni-clock" /><span>{{ pallet.batch_number }}</span></span>
              </div>
              <div class="nk-tb-col nk-tb-col-tools">
                <ul class="nk-tb-actions gx-1">
                  <li v-if="pallet.status != 2" class="nk-tb-action-hidden">
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
                  <li v-if="pallet.status != 2" class="nk-tb-action-hidden">
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
                  <li class="parent-li">
                    <div class="drodown" :class="{'show': index === activeIndex }">
                      <p v-if="activeIndex === index" v-click-outside="onClickOutside" />
                      <a href="javascript:;" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" @click="activeIndex = activeIndex === index ? null : index">
                        <em class="icon ni ni-more-h" />
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" :class="{'show': index === activeIndex }">
                        <ul class="link-list-opt no-bdr">
                          <!-- <li><a href="html/ecommerce/customer-details.html"><em class="icon ni ni-eye" /><span>View Details</span></a></li> -->
                          <li><a href="javascript:;" @click="editPallet(pallet)"><em class="icon ni ni-edit" /><span>Edit</span></a></li>
                          <li><a href="javascript:;" @click="removePallet(pallet)"><em class="icon ni ni-trash" /><span>Delete</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
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
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
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
    'vue-search': VueSearch,
    'v-select': vSelect
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
      // pallets: [],
      toggleHeader: false,
      activeIndex: null,
      pickSheetDropdown: false,
      columnSettingsDropdown: false,
      loading: true,
      avaiableRacks: [],
      avaiableGoods: [],
      total: 0,
      perPage: 10,
      currentPage: 1,
      daterange: '',
      rack_location: '',
      customerSearchPlaceholder: '',
      type: 'pallet-in',
      apiSearchCustomerUrl: process.env.APP_URL + 'common/search-customers',
      customer_id: '',
      searchSelectedGood: '',
      selectedCheckBoxes: [],
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
      },
      LastMovePallet: null
    }
  },
  computed: {
    pallets () {
      return this.$store.state.palletinout.pallets
    },
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
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  created () {
    this.fetchPallets()
    this.fetchGoods()
    this.fetchRacks()
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
    async fetchPallets () {
      const _this = this
      await this.$axios.get('pallets-in-out', {
        params: {
          perpage: this.perPage
        }
      })
        .then(function (response) {
          _this.total = response.data.payload.total
          _this.$store.commit('palletinout/SET_PALLETS', response.data.payload.data)
          _this.$nuxt.$loading.finish()
        })
    },
    async fetchGoods () {
      const self = this
      await this.$axios.get('good/fetch-available-goods')
        .then(function (response) {
          if (response.data.status !== false) {
            self.avaiableGoods = response.data.payload
          }
        })
    },
    async fetchRacks () {
      const self = this
      await this.$axios.get('rack/fetch-all-racks')
        .then(function (response) {
          if (response.data.status !== false) {
            self.avaiableRacks = response.data.payload
          }
        })
    },
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
      self.total = await this.$store.dispatch('palletinout/fetchPalletInOut', {
        page: self.currentPage,
        perpage: self.perPage,
        daterange: self.daterange,
        type: self.type,
        customer_id: self.customer_id,
        selected_goods: self.searchSelectedGood,
        rack_location: self.rack_location
      })
      this.finish()
      this.scrollToTop()
    },
    async removePallet (pallet) {
      const self = this
      self.$nuxt.$loading.start()
      await this.$axios.delete(`/pallets-in-out/delete/${pallet.id}`)
        .then(function (response) {
          self.activeIndex = null
          self.fetchPallets()
          self.$nuxt.$loading.finish()
        }).catch(function (ex) {
          self.fetchPallets()
          self.$nuxt.$loading.finish()
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
    },
    setGoodsFilter (good) {
      const selectedGoods = []
      good.forEach((value, key) => {
        selectedGoods.push(value.value)
      })
      this.searchSelectedGood = selectedGoods.join(',')
    },
    changePerPage (event) {
      this.perPage = event.target.value
      this.pageChangeHandler(1)
    },
    setPalletRack (rack) {
      this.rack_location = ''
      if (rack) {
        this.rack_location = rack.value
      }
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
    fetchLastMovePallet () {
      const self = this
      this.$axios.get('/pallet/fetch-last-move-pallet')
        .then(function (response) {
          self.LastMovePallet = response.data.payload
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
