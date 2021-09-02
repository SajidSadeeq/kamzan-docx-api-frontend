<template>
  <div class="nk-content">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="components-preview wide-md mx-auto">
            <div class="nk-block-head nk-block-head-sm">
              <div class="nk-block-between">
                <div class="nk-block-head-content">
                  <h3 class="nk-block-title page-title">
                    Due In
                  </h3>
                </div><!-- .nk-block-head-content -->
                <div class="nk-block-head-content">
                  <div class="toggle-wrap nk-block-tools-toggle">
                    <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em
                      class="icon ni ni-more-v"
                    /></a>
                    <div class="toggle-expand-content" data-content="more-options">
                      <ul class="nk-block-tools g-3">
                        <li class="nk-block-tools-opt">
                          <a href="javascript:;" class="btn btn-primary d-none d-md-inline-flex mr-2" @click="addPalletOrder()">
                            <em class="icon ni ni-plus" /> <span>Save</span>
                          </a>
                          <NuxtLink to="/pallets-in-out" class="btn btn-danger d-none d-md-inline-flex">
                            <em class="icon ni ni-back-ios" /><span>Back</span>
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div><!-- .nk-block-head-content -->
              </div>
            </div><!-- nk-block-head -->

            <div class="nk-block nk-block-lg">
              <div class="card card-preview">
                <div class="card-inner">
                  <ul class="nav nav-tabs mt-n3">
                    <li class="nav-item" @click="activeTab = 1">
                      <a class="nav-link" :class="{ active: activeTab === 1 }" data-toggle="tab" href="#basic"><em
                        class="icon ni ni-setting"
                      /><span>Add</span></a>
                    </li>
                    <!-- <li class="nav-item" @click="activeTab = 2">
                        <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#meta"><em class="icon ni ni-link" /><span>Meta</span></a>
                      </li> -->
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addRack">
                        <div class="row g-gs">
                          <div class="col-md-6">
                            <!-- <div class="col-md-10">
                              <auto-complete
                                id="customer"
                                label="name"
                                value="id"
                                :data-list="countries"
                                name="customer"
                                placeholder="Search Customer"
                                @selected="getSelectedData"
                              />
                            </div> -->
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="customer_id">Select Customer</label>
                                <vue-search
                                  :img-photo="'path-img'"
                                  :source-field="'name'"
                                  :search-by-field="true"
                                  :show-new-botton="false"
                                  :enable-class-base="true"
                                  :api-source="apiSearchCustomerUrl"
                                  @newitem="newitem()"
                                  @itemselected="customerselected($event)"
                                />
                                <span v-if="containsKey(from_errors, 'customer_id')" class="error">{{ from_errors.customer_id[0] }}</span>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="pallet_id">Select Pallet</label>
                                <vue-search
                                  :source-field="'name'"
                                  :search-by-field="true"
                                  :show-new-botton="false"
                                  :api-source="apiSearchPalletsUrl"
                                  @newitem="newitem()"
                                  @itemselected="palletselected($event)"
                                />
                                <span v-if="containsKey(from_errors, 'pallet_id')" class="error">{{ from_errors.pallet_id[0] }}</span>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="in_date">Pallet In Time</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="in_time"
                                    v-model="in_time"
                                    type="time"
                                    class="form-control"
                                    name="in_time"
                                    required=""
                                  >
                                  <span v-if="containsKey(from_errors, 'in_time')" class="invalid">{{ from_errors.in_time[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="in_date">Pallet In Date</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="in_date"
                                    v-model="in_date"
                                    type="date"
                                    class="form-control"
                                    name="in_date"
                                    required=""
                                  >
                                  <span v-if="containsKey(from_errors, 'in_date')" class="invalid">{{ from_errors.in_date[0] }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <!-- <div id="tabItem6" class="tab-pane" :class="{ active: activeTab === 2 }">
                        <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                      </div> -->
                  </div>
                </div>
              </div><!-- .card-preview -->
            </div>
          </div><!-- .components-preview -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import 'vue-input-search/dist/vue-search.css'
import VueSearch from 'vue-input-search/dist/vue-search.common'
// import Autocomplete from '@/components/common/Autocomplete.vue'
Vue.component('VSelect', vSelect)

export default {
  components: {
    'vue-search': VueSearch
    // 'auto-complete': Autocomplete
  },
  data () {
    return {
      countries: [
        { name: 'Pakistan', id: '1' },
        { name: 'Palau', id: '4' },
        { name: 'Palestine', id: '2' },
        { name: 'India', id: '3' }
      ],
      tabPath: this.$route.fullPath,
      activeTab: 1,
      customer_id: '',
      pallet_id: '',
      in_date: '',
      in_time: '',
      from_errors: [],
      apiSearchCustomerUrl: process.env.APP_URL + 'common/search-customers',
      apiSearchPalletsUrl: process.env.APP_URL + 'common/search-pallets'
    }
  },
  created () {
    this.fetchAisles()
  },
  methods: {
    getSelectedData (childData) {
      // console.log('Our Data: ' + childData) // "Hello World"
    },
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    async fetchAisles () {
      const self = this
      await this.$axios.get('aisle')
        .then(function (response) {
          if (response.data.status !== false) {
            self.aisles = response.data.payload
          } else {
            // self.from_errors = response.data.payload.error
          }

        //   self.$nuxt.$loading.finish()
        })
    },
    customerselected (customer) {
      this.customer_id = customer.id
    },
    palletselected (pallet) {
      this.pallet_id = pallet.id
    },
    addPalletOrder () {
      const self = this
      this.$axios.post('pallets-in-out/create', {
        customer_id: this.customer_id,
        pallet_id: this.pallet_id,
        in_date: this.in_date,
        in_time: this.in_time
      }).then(function (response) {
        if (response.data.status !== false) {
          self.$router.push('/pallets-in-out')
        }
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    }

  }
}
</script>
<style scoped>
</style>
