<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Customer <small>Stock</small> Report
                </h3>
                <!-- {{ selectedCheckBoxes }} -->
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content filters">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="more-options">
                    <ul class="nk-block-tools g-3">
                      <!-- <li class="nk-block-tools-opt pick-sheet">
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
                        <NuxtLink to="/pallets-in-out/pallet-in" class="btn btn-primary d-md-inline-flex">
                          <em class="icon ni ni-plus" /><span>Create</span>
                        </NuxtLink>
                      </li> -->
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
                            <div class="col-sm-8">
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
          <div class="row g-gs">
            <div class="col-xxl-4 col-sm-4">
              <div class="card">
                <div class="nk-ecwg nk-ecwg6">
                  <div class="card-inner">
                    <div class="card-title-group">
                      <div class="card-title">
                        <h6 class="title">
                          Pallet Total
                        </h6>
                      </div>
                    </div>
                    <div class="data">
                      <div class="data-group">
                        <div class="amount">
                          {{ pallet_total }}
                        </div>
                        <div class="nk-ecwg6-ck">
                          <div class="chartjs-size-monitor">
                            <div class="chartjs-size-monitor-expand">
                              <div class="" />
                            </div><div class="chartjs-size-monitor-shrink">
                              <div class="" />
                            </div>
                          </div>
                          <canvas id="todayOrders" class="ecommerce-line-chart-s3 chartjs-render-monitor" style="display: block; width: 100px; height: 40px;" width="100" height="40" />
                        </div>
                      </div>
                    </div>
                  </div><!-- .card-inner -->
                </div><!-- .nk-ecwg -->
              </div><!-- .card -->
            </div><!-- .col -->
            <div class="col-xxl-4 col-sm-4">
              <div class="card">
                <div class="nk-ecwg nk-ecwg6">
                  <div class="card-inner">
                    <div class="card-title-group">
                      <div class="card-title">
                        <h6 class="title">
                          RH&D Total
                        </h6>
                      </div>
                    </div>
                    <div class="data">
                      <div class="data-group">
                        <div class="amount">
                          {{ rhd_total }}
                        </div>
                        <div class="nk-ecwg6-ck">
                          <div class="chartjs-size-monitor">
                            <div class="chartjs-size-monitor-expand">
                              <div class="" />
                            </div><div class="chartjs-size-monitor-shrink">
                              <div class="" />
                            </div>
                          </div>
                          <canvas id="todayOrders" class="ecommerce-line-chart-s3 chartjs-render-monitor" style="display: block; width: 100px; height: 40px;" width="100" height="40" />
                        </div>
                      </div>
                    </div>
                  </div><!-- .card-inner -->
                </div><!-- .nk-ecwg -->
              </div><!-- .card -->
            </div><!-- .col -->
            <div class="col-xxl-4 col-sm-4">
              <div class="card">
                <div class="nk-ecwg nk-ecwg6">
                  <div class="card-inner">
                    <div class="card-title-group">
                      <div class="card-title">
                        <h6 class="title">
                          Sundry Total
                        </h6>
                      </div>
                    </div>
                    <div class="data">
                      <div class="data-group">
                        <div class="amount">
                          {{ sundry_total }}
                        </div>
                        <div class="nk-ecwg6-ck">
                          <div class="chartjs-size-monitor">
                            <div class="chartjs-size-monitor-expand">
                              <div class="" />
                            </div><div class="chartjs-size-monitor-shrink">
                              <div class="" />
                            </div>
                          </div>
                          <canvas id="todayOrders" class="ecommerce-line-chart-s3 chartjs-render-monitor" style="display: block; width: 100px; height: 40px;" width="100" height="40" />
                        </div>
                      </div>
                    </div>
                  </div><!-- .card-inner -->
                </div><!-- .nk-ecwg -->
              </div><!-- .card -->
            </div><!-- .col -->
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
export default {
  directives: {
    clickOutside: Vue2ClickOutside.directive
  },
  components: {
    'date-picker': DatePicker
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
      toggleHeader: false,
      loading: true,
      total: 0,
      perPage: 10,
      currentPage: 1,
      daterange: '',
      form_errors: '',
      pallet_total: 0,
      rhd_total: 0,
      sundry_total: 0
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    async pageChangeHandler (page) {
      const self = this
      self.$nuxt.$loading.start()
      self.currentPage = page
      await this.$axios.get('reports/sales-forecast', {
        params: {
          daterange: self.daterange
        }
      })
        .then(function (response) {
          self.pallet_total = response.data.payload.pallet_total
          self.rhd_total = response.data.payload.rhd_total
          self.sundry_total = response.data.payload.sundry_total
          self.$nuxt.$loading.finish()
        })
        .catch(function (error) {
          self.form_errors = error.response.data.data
        })
      this.$nuxt.$loading.finish()
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
