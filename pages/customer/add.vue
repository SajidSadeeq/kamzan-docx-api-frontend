<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Add Customer
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em
                    class="icon ni ni-more-v"
                  /></a>
                </div>
              </div><!-- .nk-block-head-content -->
            </div>
          </div><!-- nk-block-head -->
          <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addCustomer">
            <div class="nk-block nk-block-lg">
              <div class="card card-preview">
                <div class="card-inner">
                  <ul class="nav nav-tabs mt-n3">
                    <li class="nav-item" @click="activeTab = 1">
                      <a class="nav-link" :class="{ active: activeTab === 1 }" data-toggle="tab" href="#basic"><em
                        class="icon ni ni-setting"
                      /><span>Basic Info</span></a>
                    </li>
                    <li class="nav-item" @click="activeTab = 2">
                      <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#billinginfo"><em class="icon ni ni-link" /><span>Billing Info</span></a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <div class="row g-gs">
                        <div class="col-md-6 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Customer Name</label>
                              <div class="form-control-wrap">
                                <input
                                  id="customer_name"
                                  v-model="customer_name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Customer Name"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'customer_name')" class="invalid">{{ from_errors.customer_name[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">Email</label>
                              <div class="form-control-wrap">
                                <input
                                  id="email"
                                  v-model="email"
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  placeholder="Customer email"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'email')" class="invalid">{{ from_errors.email[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">Street 1</label>
                              <div class="form-control-wrap">
                                <input
                                  id="street_1"
                                  v-model="street_1"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Street 1"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'street_1')" class="invalid">{{ from_errors.street_1[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">street 2</label>
                              <div class="form-control-wrap">
                                <input
                                  id="street_2"
                                  v-model="street_2"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="street 2"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">City</label>
                              <div class="form-control-wrap">
                                <input
                                  id="city"
                                  v-model="city"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="City"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'city')" class="invalid">{{ from_errors.city[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">Postcode</label>
                              <div class="form-control-wrap">
                                <input
                                  id="postcode"
                                  v-model="postcode"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Postcode"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'postcode')" class="invalid">{{ from_errors.postcode[0] }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label telinput">Telephone Number</label>
                              <div class="form-control-wrap">
                                <client-only>
                                  <vue-tel-input
                                    v-model="telephone_number"
                                    :valid-characters-only="true"
                                    :preferred-countries="['GB']"
                                    :auto-default-country="false"
                                  />
                                </client-only>
                                <span v-if="containsKey(from_errors, 'telephone_number')" class="error">{{ from_errors.telephone_number[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">County</label>
                              <div class="form-control-wrap">
                                <input
                                  id="county"
                                  v-model="county"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="County"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'county')" class="invalid">{{ from_errors.county[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">Customer Code</label>
                              <div class="form-control-wrap">
                                <input
                                  id="customer_code"
                                  v-model="customer_code"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Customer code"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'customer_code')" class="invalid">{{ from_errors.customer_code[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label">Main Contact </label>
                                <div class="form-control-wrap">
                                  <input
                                    id="main_contact "
                                    v-model="main_contact "
                                    type="text"
                                    class="form-control"
                                    name="number"
                                    placeholder="Main Contact"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label">Customer Type</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="customer_type"
                                    v-model="customer_type"
                                    type="number"
                                    class="form-control"
                                    name="name"
                                    placeholder="Customer Type"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div> -->
                        </div>
                      </div>
                    </div>
                    <div id="billinginfo" class="tab-pane" :class="{ active: activeTab === 2 }">
                      <div class="row g-gs">
                        <div class="col-md-6 border-right">
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-label">Cost Per Pallet (£)</label>
                                  <div class="form-control-wrap">
                                    <input
                                      id="cost_per_pallet"
                                      v-model="cost_per_pallet"
                                      type="number"
                                      class="form-control"
                                      name="name"
                                      placeholder="Cost per pallet"
                                      required=""
                                    >
                                    <span v-if="containsKey(from_errors, 'cost_per_pallet')" class="invalid">{{ from_errors.cost_per_pallet[0] }}</span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-label">Cost Duration</label>
                                  <div class="form-control-wrap">
                                    <div class="form-control-select">
                                      <select id="cost_duration" v-model="cost_duration" class="form-control" name="cost_duration">
                                        <option value="day" selected>
                                          Per Day
                                        </option>
                                        <option value="week">
                                          Per Week
                                        </option>
                                        <option value="month">
                                          Per Month
                                        </option>
                                      </select>
                                    </div>
                                    <span v-if="containsKey(from_errors, 'cost_duration')" class="invalid">{{ from_errors.cost_duration[0] }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 mt-2">
                            <label class="form-label">RH&D Per Pallet (£)</label>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-label">In</label>
                                  <div class="form-control-wrap">
                                    <input
                                      id="in_price"
                                      v-model="in_price"
                                      type="number"
                                      class="form-control"
                                      name="name"
                                      placeholder="In Price"
                                      required=""
                                    >
                                    <span v-if="containsKey(from_errors, 'in_price')" class="invalid">{{ from_errors.in_price[0] }}</span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-label">Out</label>
                                  <div class="form-control-wrap">
                                    <input
                                      id="out_price"
                                      v-model="out_price"
                                      type="number"
                                      class="form-control"
                                      name="name"
                                      placeholder="Out Price"
                                      required=""
                                    >
                                    <span v-if="containsKey(from_errors, 'out_price')" class="invalid">{{ from_errors.out_price[0] }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 mt-3">
                            <div class="row g-3 align-center">
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label class="form-label">Create Invoice Automatically?</label>
                                </div>
                              </div>
                              <div class="col-lg-5">
                                <div class="form-group">
                                  <div class="custom-control custom-switch">
                                    <input
                                      id="invoice_automatic"
                                      v-model="invoice_automatic"
                                      type="checkbox"
                                      class="custom-control-input ml-5"
                                      name="reg-public"
                                      @click="createInvoiceAuto($event)"
                                    >
                                    <label class="custom-control-label" for="invoice_automatic" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 mt-2">
                            <label class="form-label">Invoice Frequency</label>
                            <div class="form-group">
                              <div class="custom-control custom-radio">
                                <input
                                  id="customCheck1"
                                  v-model="invoice_frequency"
                                  type="radio"
                                  value="1week"
                                  class="custom-control-input"
                                  name="invoice_frequency"
                                  @change="invoiceFrequency($event)"
                                >
                                <label class="custom-control-label" for="customCheck1">1 Week</label>
                              </div>
                              <div class="custom-control custom-radio mt-2">
                                <input
                                  id="customCheck2"
                                  v-model="invoice_frequency"
                                  type="radio"
                                  class="custom-control-input"
                                  value="2week"
                                  name="invoice_frequency"
                                  @change="invoiceFrequency($event)"
                                >
                                <label class="custom-control-label" for="customCheck2">2 week</label>
                              </div>
                              <div class="custom-control custom-radio mt-2">
                                <input
                                  id="customCheck3"
                                  v-model="invoice_frequency"
                                  type="radio"
                                  class="custom-control-input"
                                  value="4week"
                                  name="invoice_frequency"
                                  @change="invoiceFrequency($event)"
                                >
                                <label class="custom-control-label" for="customCheck3">4 Week</label>
                              </div>
                              <div class="custom-control custom-radio mt-2">
                                <input
                                  id="customCheck4"
                                  v-model="invoice_frequency"
                                  type="radio"
                                  class="custom-control-input"
                                  value="month"
                                  name="invoice_frequency"
                                  @change="invoiceFrequency($event)"
                                >
                                <label class="custom-control-label" for="customCheck4">Monthly</label>
                              </div>
                              <span v-if="containsKey(from_errors, 'in_price')" class="invalid">{{ from_errors.in_price[0] }}</span>
                            </div>
                          </div>
                          <div v-if="is_monthly === 'no'" class="col-md-12 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="every">Week Days</label>
                              <div class="form-control-wrap">
                                <select id="every" v-model="week_day" class="form-control" name="every">
                                  <option value="monday">
                                    Monday
                                  </option>
                                  <option value="tuesday">
                                    Tuesday
                                  </option>
                                  <option value="thursday">
                                    Thursday
                                  </option>
                                  <option value="wednesday">
                                    Wednesday
                                  </option>
                                  <option value="firday">
                                    Friday
                                  </option>
                                  <option value="saturday">
                                    Saturday
                                  </option>
                                  <option value="sunday">
                                    Sunday
                                  </option>
                                </select>
                                <span v-if="containsKey(from_errors, 'week_day')" class="invalid">{{ from_errors.week_day[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div v-if="is_monthly === 'yes'" class="col-md-12 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="every">Month Date</label>
                              <div class="form-control-wrap">
                                <input
                                  id="month_date"
                                  v-model="month_date"
                                  type="date"
                                  class="form-control date-picker"
                                  name="month_date"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'month_date')" class="invalid">{{ from_errors.month_date[0] }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- .card-preview -->
              <div class="mt-2 text-right">
                <div class="form-group">
                  <NuxtLink to="/customer" class="btn btn-danger  d-md-inline-flex">
                    <em class="icon ni ni-back-ios" /><span>Back</span>
                  </NuxtLink>

                  <button type="submit" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import 'vue-tel-input/dist/vue-tel-input.css'

export default {
  data () {
    return {
      tabPath: this.$route.fullPath,
      activeTab: 1,
      customer_name: '',
      email: '',
      street_1: '',
      street_2: '',
      city: '',
      postcode: '',
      telephone_number: '',
      customer_code: '',
      county: '',
      main_contact: '',
      customer_type: '',
      cost_per_pallet: '',
      cost_duration: '',
      in_price: '',
      out_price: '',
      invoice_automatic: 0,
      invoice_frequency: '1week',
      week_day: 'monday',
      month_date: '',
      is_monthly: 'no',
      from_errors: []
    }
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    addCustomer () {
      const self = this
      this.$axios.post('/customer/create', {
        customer_name: self.customer_name,
        email: self.email,
        street_1: self.street_1,
        street_2: self.street_2,
        city: self.city,
        postcode: self.postcode,
        telephone_number: self.telephone_number,
        county: self.county,
        main_contact: self.main_contact,
        customer_type: self.customer_type,
        cpp: self.cost_per_pallet,
        cppd: self.cost_duration,
        rhdpp_in: self.in_price,
        rhdpp_out: self.out_price,
        is_automatic_invoice: self.invoice_automatic,
        invoice_frequency: self.invoice_frequency,
        invoice_day: self.week_day,
        invoice_month_date: self.month_date,
        customer_code: self.customer_code
      }).then(function (response) {
        self.$router.push('/customer')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    },
    createInvoiceAuto (event) {
      this.invoice_automatic = event.target.checked
    },
    invoiceFrequency (event) {
      const self = this
      if (event.target.value === 'month') {
        self.is_monthly = 'yes'
        self.week_day = null
      } else {
        self.is_monthly = 'no'
        self.month_date = ''
        self.week_day = 'monday'
      }
      self.invoice_frequency = event.target.value
    }
  }
}
</script>

<style scoped>
</style>
