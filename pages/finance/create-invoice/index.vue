<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Create Invoice
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
          <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addInvoice">
            <div class="nk-block nk-block-lg">
              <div class="card card-preview">
                <div class="card-inner">
                  <ul class="nav nav-tabs mt-n3">
                    <li class="nav-item" @click="activeTab = 1">
                      <a class="nav-link" :class="{ active: activeTab === 1 }" data-toggle="tab" href="#basic"><em
                        class="icon ni ni-setting"
                      /><span>Basic Info</span></a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <div class="row g-gs">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label class="form-label">Customer Name</label>
                            <div class="form-control-wrap">
                              <vue-search
                                :img-photo="'path-img'"
                                :source-field="'name'"
                                :placeholder="'Search customer'"
                                :search-by-field="true"
                                :show-new-botton="false"
                                :enable-class-base="true"
                                :api-source="apiSearchCustomerUrl"
                                @newitem="newitem()"
                                @itemselected="customerselected($event)"
                              />
                              <span v-if="containsKey(from_errors, 'customer_id')" class="invalid">{{ from_errors.customer_id[0] }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="form-group">
                            <label class="form-label">Options</label>
                            <ul class="custom-control-group g-3 align-center">
                              <li>
                                <div class="custom-control custom-checkbox mt-1">
                                  <input id="scratch" type="checkbox" class="custom-control-input" @change="createFromScratch($event)">
                                  <label v-tooltip="'Create from scratch'" class="custom-control-label" for="scratch">From Scratch</label>
                                </div>
                              </li>
                              <li>
                                <div class="custom-control custom-checkbox mt-1">
                                  <input id="export" v-model="export_data" type="checkbox" class="custom-control-input">
                                  <label v-tooltip="'Update customer email'" class="custom-control-label" for="export">Export</label>
                                </div>
                              </li>
                              <li>
                                <div class="custom-control custom-checkbox mt-1">
                                  <input id="send-email" type="checkbox" class="custom-control-input" @change="canSendMail($event)">
                                  <label v-tooltip="'Send email to customer'" class="custom-control-label" for="send-email">Send Mail</label>
                                </div>
                              </li>
                              <li v-if="canSendEmail">
                                <div class="custom-control custom-checkbox mt-1">
                                  <input id="new-email" type="checkbox" class="custom-control-input" @change="enterNewMail($event)">
                                  <label v-tooltip="'Enter new email for sending mail'" class="custom-control-label" for="new-email">New Email</label>
                                </div>
                              </li>
                              <li v-if="canSendEmail">
                                <div class="custom-control custom-checkbox mt-1">
                                  <input id="update-email" type="checkbox" class="custom-control-input" @change="canUpdateMail($event)">
                                  <label v-tooltip="'Update customer email'" class="custom-control-label" for="update-email">Update Email</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div v-if="!fromScratch" class="col-md-4">
                          <div class="form-group">
                            <label class="form-label">Daterange</label>
                            <div class="form-control-wrap">
                              <date-picker v-model="daterange" range placeholder="Select Date Range" @cleared="clearDatePicker" />
                              <span v-if="containsKey(from_errors, 'daterange')" class="invalid">{{ from_errors.daterange[0] }}</span>
                            </div>
                          </div>
                        </div>
                        <div v-if="!fromScratch && isNewEmail" class="col-md-4">
                          <div class="form-group">
                            <label class="form-label">New Email</label>
                            <div class="form-control-wrap">
                              <input
                                id="email"
                                v-model="email"
                                type="text"
                                class="form-control"
                                name="email"
                                placeholder="New Email"
                                required=""
                              >
                              <span v-if="containsKey(from_errors, 'new_email')" class="invalid">{{ from_errors.new_email[0] }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr v-if="fromScratch">
                      <div v-if="fromScratch" class="row g-gs">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label class="form-label">Total</label>
                            <div class="form-control-wrap">
                              <input
                                id="total"
                                v-model="total"
                                type="number"
                                class="form-control"
                                name="total"
                                placeholder="Invoice Total"
                                required=""
                              >
                              <span v-if="containsKey(from_errors, 'total')" class="invalid">{{ from_errors.total[0] }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label class="form-label">Description</label>
                            <div class="form-control-wrap">
                              <textarea
                                id="description"
                                v-model="description"
                                class="form-control"
                                name="description"
                                placeholder="Invoice description"
                                required
                              />
                              <span v-if="containsKey(from_errors, 'total')" class="invalid">{{ from_errors.total[0] }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label class="form-label">Manual Daterange</label>
                            <div class="form-control-wrap">
                              <date-picker v-model="daterange" range placeholder="Select Date Range" @cleared="clearDatePicker" />
                              <span v-if="containsKey(from_errors, 'daterange')" class="invalid">{{ from_errors.daterange[0] }}</span>
                            </div>
                          </div>
                        </div>
                        <div v-if="isNewEmail" class="col-md-4">
                          <div class="form-group">
                            <label class="form-label">New Email</label>
                            <div class="form-control-wrap">
                              <input
                                id="email"
                                v-model="email"
                                type="text"
                                class="form-control"
                                name="email"
                                placeholder="New Email"
                                required=""
                              >
                              <span v-if="containsKey(from_errors, 'new_email')" class="invalid">{{ from_errors.new_email[0] }}</span>
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
      apiSearchCustomerUrl: process.env.APP_URL + 'common/search-customers',
      fromScratch: false,
      canSendEmail: false,
      canUpdateEamil: false,
      isNewEmail: false,
      activeTab: 1,
      customer_id: '',
      daterange: '',
      email: '',
      total: '',
      description: '',
      export_data: false,
      from_errors: [],
      json_data: []
    }
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    addInvoice () {
      const self = this
      this.$axios.post('/finance/create-invoice', {
        customer_id: self.customer_id,
        export_data: self.export_data,
        daterange: self.daterange,
        email: self.email,
        total: self.total,
        description: self.description,
        fromScratch: self.fromScratch,
        canSendEmail: self.canSendEmail,
        canUpdateEamil: self.canUpdateEamil,
        isNewEmail: self.isNewEmail
      }).then(function (response) {
        self.$router.push('/finance/create-invoice')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    },
    createFromScratch (event) {
      this.fromScratch = event.target.checked
    },
    canSendMail (event) {
      this.canSendEmail = event.target.checked
    },
    enterNewMail (event) {
      this.isNewEmail = event.target.checked
    },
    canUpdateMail (event) {
      this.canUpdateEamil = event.target.checked
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
    },
    clearDatePicker () {
      this.daterange = ''
    },
    customerselected (customer) {
      this.customer_id = customer.id
    }
  }
}
</script>

<style scoped>
</style>
