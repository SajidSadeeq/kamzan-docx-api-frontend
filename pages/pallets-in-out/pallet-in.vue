<template>
  <div class="nk-content">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="components-preview">
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
                  </div>
                </div><!-- .nk-block-head-content -->
              </div>
            </div><!-- nk-block-head -->
            <form action="#" class="form-validate" novalidate="novalidate">
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
                        <div class="row g-gs">
                          <div class="col-md-4">
                            <div class="form-group">
                              <label class="form-label" for="customer_id">Select Customer</label>
                              <vue-search
                                :img-photo="'path-img'"
                                :source-field="'name'"
                                :search-by-field="true"
                                :show-new-botton="false"
                                :enable-class-base="true"
                                :api-source="apiSearchCustomerUrl"
                                :is-required="true"
                                @newitem="newitem()"
                                @itemselected="customerselected($event)"
                              />
                              <span v-if="containsKey(form_errors, 'customer_id')" class="error">{{ form_errors.customer_id[0] }}</span>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label class="form-label" for="name">Batch Number <small>(Optional)</small></label>
                              <div class="form-control-wrap">
                                <input
                                  id="batch_number"
                                  v-model="batch_number"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Pallet Qty"
                                  required=""
                                >
                              </div>
                              <span v-if="containsKey(form_errors, 'name')" class="error">{{ form_errors.name[0] }}</span>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label class="form-label" for="name">Pallets Quantity</label>
                              <div class="form-control-wrap">
                                <input
                                  id="pallet_qty"
                                  v-model="quantity"
                                  type="number"
                                  class="form-control"
                                  name="pallet_qty"
                                  placeholder="Pallet Qty"
                                  required=""
                                >
                              </div>
                              <span v-if="containsKey(form_errors, 'name')" class="error">{{ form_errors.name[0] }}</span>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label class="form-label" for="name">Out By Date (Optional)</label>
                              <div class="form-control-wrap">
                                <input
                                  id="out_by_date"
                                  v-model="out_by_date"
                                  type="date"
                                  class="form-control"
                                  name="out_by_date"
                                  placeholder="Out By Date"
                                  required=""
                                >
                              </div>
                              <span v-if="containsKey(form_errors, 'name')" class="error">{{ form_errors.name[0] }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="row g-gs text-right">
                          <div class="col-md-12">
                            <button type="button" class="btn btn-primary" @click="proceed()">
                              Proceed
                            </button>
                          </div>
                        </div>
                        <hr>
                        <div v-if="preparePallets.length > 0" class="row g-gs">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">
                                  Pallet Id #
                                </th>
                                <th scope="col">
                                  Select Location
                                </th>
                                <th scope="col">
                                  Select Good
                                </th>
                                <th scope="col">
                                  Good Quantity
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(pallet, index) in preparePallets" :key="index">
                                <td>
                                  {{ pallet.pallet_id }}
                                </td>
                                <td>
                                  <v-select :options="avaiableRacks" class="v-select" :value="pallet.rack_id" @input="(rack_id) => setPalletRack(pallet, rack_id)" />
                                </td>
                                <td>
                                  <v-select :options="avaiableGoods" class="v-select" :value="pallet.good_id" @input=" (good_id) => setPalletGood(pallet, good_id)" />
                                </td>
                                <td>
                                  <input
                                    v-model="pallet.quantity"
                                    type="number"
                                    class="form-control"
                                    name="name"
                                    placeholder="Qty"
                                    required=""
                                    @keyup="setGoodQty($event, index)"
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    <!-- <div id="tabItem6" class="tab-pane" :class="{ active: activeTab === 2 }">
                        <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                      </div> -->
                    </div>
                  </div>
                </div><!-- .card-preview -->
                <div class="mt-2 text-right">
                  <a href="javascript:;" class="btn btn-primary d-md-inline-flex mr-2" @click="addPalletOrder()">
                    <em class="icon ni ni-plus" /> <span>Save</span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-primary mr-2"
                    @click="toggleAddGood = !toggleAddGood"
                  >
                    <em class="icon ni ni-plus" /> Add New Good
                  </a>
                  <NuxtLink to="/pallets-in-out" class="btn btn-danger d-md-inline-flex">
                    <em class="icon ni ni-back-ios" /><span>Back</span>
                  </NuxtLink>
                </div>
              </div>
            </form>
            <div
              class="nk-add-product toggle-slide toggle-slide-right toggle-screen-any"
              :class="(toggleAddGood)?'content-active':''"
              data-content="addProduct"
              data-toggle-screen="any"
              data-toggle-overlay="true"
              data-toggle-body="true"
              data-simplebar="init"
            >
              <div class="simplebar-wrapper" style="margin: -24px;">
                <div class="simplebar-height-auto-observer-wrapper">
                  <div class="simplebar-height-auto-observer" />
                </div><div class="simplebar-mask">
                  <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                    <div class="simplebar-content-wrapper" style="height: 100%; overflow: hidden scroll;">
                      <div class="simplebar-content" style="padding: 24px;">
                        <div class="nk-block-head">
                          <div class="nk-block-head-content">
                            <h5 class="nk-block-title">
                              Add Good
                            </h5>
                          </div>
                          <div class="text-right add-more-product-btn">
                            <button class="btn btn-success" @click="addMoreProduct">
                              Add Product
                            </button>
                          </div>
                        </div><!-- .nk-block-head -->
                        <div class="nk-block">
                          <div class="row g-3">
                            <div class="col-12">
                              <div class="form-group">
                                <div class="form-group">
                                  <label class="form-label" for="name">Good Id</label>
                                  <div class="form-control-wrap">
                                    <input
                                      id="good_id"
                                      v-model="good_name"
                                      type="text"
                                      class="form-control"
                                      name="name"
                                      placeholder="Name"
                                      required=""
                                    >
                                  </div>
                                  <span v-if="containsKey(form_errors, 'name')" class="error">{{ form_errors.name[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group">
                                <div class="form-control-wrap">
                                  <ul>
                                    <li v-for="(product, index) in selectedProducts" :key="product.id">
                                      <hr>
                                      <!-- <li> -->
                                      <div class="row gy-4">
                                        <div class="col-sm-4">
                                          <div class="form-group">
                                            <label class="form-label" for="default-01">Product</label>
                                            <div class="form-control-wrap">
                                              <!-- <input id="default-01" type="number" class="form-control" placeholder="1"> -->
                                              <vue-search
                                                :img-photo="'path-img'"
                                                :source-field="'name'"
                                                :search-by-field="true"
                                                :show-new-botton="false"
                                                :enable-class-base="true"
                                                :api-source="apiSearchProductsUrl"
                                                @newitem="newitem()"
                                                @itemselected="productselected($event, index)"
                                              />
                                              <small class="text-primary">{ ID: {{ product.id }}, Name : {{ product.name }} }</small>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-sm-2">
                                          <div class="form-group">
                                            <label class="form-label" for="number">Qty</label>
                                            <div class="form-control-wrap">
                                              <input
                                                id="number"
                                                v-model="product.qty"
                                                type="number"
                                                class="form-control"
                                                placeholder="1"
                                                @change="event => updateVolumeWeight(event, index)"
                                              >
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-sm-2">
                                          <div class="form-group">
                                            <label class="form-label" for="vol">Vol</label>
                                            <div class="form-control-wrap">
                                              <input id="vol" v-model="product.vol" type="number" class="form-control" placeholder="1">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-sm-2">
                                          <div class="form-group">
                                            <label class="form-label" for="weight">Wgt</label>
                                            <div class="form-control-wrap">
                                              <input id="weight" v-model="product.weight" type="number" class="form-control" placeholder="1">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-sm-2">
                                          <div class="form-group">
                                            <div class="form-control-wrap gp_remove">
                                              <button type="button" class="btn btn-danger" @click="removeProduct(index)">
                                                <em class="icon ni ni-cross-circle-fill" />
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <button class="btn btn-primary pull-right" @click="addGood">
                                <em class="icon ni ni-plus" /><span>Add</span>
                              </button>
                              <button class="btn btn-danger pull-right" @click="closeToggleAddGood">
                                <em class="icon ni ni-plus" /><span>Close</span>
                              </button>
                            </div>
                          </div>
                        </div><!-- .nk-block -->
                      </div>
                    </div>
                  </div>
                </div><div class="simplebar-placeholder" style="width: auto; height: 699px;" />
              </div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                <div class="simplebar-scrollbar" style="width: 0px; display: none;" />
              </div><div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                <div class="simplebar-scrollbar" style="height: 139px; transform: translate3d(0px, 0px, 0px); display: block;" />
              </div>
            </div>
          </div><!-- .components-preview -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import 'vue-input-search/dist/vue-search.css'
import VueSearch from 'vue-input-search/dist/vue-search.common'

// import Autocomplete from '@/components/common/Autocomplete.vue'
// Vue.component('VSelect', vSelect)

export default {
  components: {
    'vue-search': VueSearch,
    'v-select': vSelect
    // 'auto-complete': Autocomplete
  },
  data () {
    return {
      toggleAddGood: false,
      countries: [
        { label: 'Pakistan', id: '1' },
        { label: 'Palau', id: '4' },
        { label: 'Palestine', id: '2' },
        { label: 'India', id: '3' }
      ],
      tabPath: this.$route.fullPath,
      activeTab: 1,
      customer_id: '',
      pallet_id: '',
      currentDateTime: '',
      quantity: '',
      batch_number: '',
      out_by_date: '',
      preparePallets: [],
      form_errors: [],
      avaiableRacks: [],
      avaiableGoods: [],
      apiSearchCustomerUrl: process.env.APP_URL + 'common/search-customers',
      apiSearchProductsUrl: process.env.APP_URL + 'common/search-products',
      apiSearchRacks: process.env.APP_URL + 'common/search-products',
      apiSearchGoods: process.env.APP_URL + 'common/search-products',
      good_name: '',
      locationSelectedStatus: true,
      goodSelectedStatus: true,
      selectedProducts: [
        {
          id: '',
          name: '',
          qty: '',
          vol: '',
          weight: '',
          product: {}
        }
      ]

    }
  },
  created () {
    this.fetchRacks()
    this.fetchGoods()
    this.currentDate()
  },
  methods: {
    getSelectedData (childData) {
      // console.log('Our Data: ' + childData) // "Hello World"
    },
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    currentDate () {
      const self = this
      const current = new Date()
      const todayDate = `${current.getDate()}` + '0' + `${current.getMonth() + 1}${current.getFullYear().toString().substr(-2)}`
      const currentTime = `${current.getHours()}${(current.getMinutes() < 10) ? '0' + current.getMinutes() : current.getMinutes()}`
      self.currentDateTime = todayDate + currentTime
    },
    proceed () {
      const self = this
      self.preparePallets = []
      for (let i = 0; i < self.quantity; i++) {
        const ob = {
          pallet_id: `${self.currentDateTime}/${i < 9 ? '0' : ''}${i + 1}`,
          rack_id: '',
          good_id: '',
          quantity: ''
        }
        self.preparePallets.push(ob)
      }
    },
    async fetchRacks () {
      const self = this
      await this.$axios.get('rack/fetch-available-racks')
        .then(function (response) {
          if (response.data.status !== false) {
            self.avaiableRacks = response.data.payload
          }
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
    customerselected (customer) {
      this.customer_id = customer.id
    },
    addPalletOrder () {
      const self = this
      self.goodSelectedStatus = true
      self.locationSelectedStatus = true
      self.preparePallets.forEach((element, index) => {
        if (element.good_id === '') {
          self.goodSelectedStatus = false
        }
        if (element.rack_id === '') {
          self.locationSelectedStatus = false
        }
      })
      if (!self.goodSelectedStatus) {
        this.$toast.error('Please select goods for all pallets')
      }
      if (!self.locationSelectedStatus) {
        this.$toast.error('Please select locations for all pallets')
      }
      if (self.locationSelectedStatus && self.goodSelectedStatus) {
        this.$axios.post('pallets-in-out/create', {
          customer_id: self.customer_id,
          quantity: self.quantity,
          out_by_date: self.out_by_date,
          batch_number: self.batch_number,
          preparePallets: self.preparePallets
        }).then(function (response) {
          if (response.data.status !== false) {
            self.$router.push('/pallets-in-out')
          }
        }).catch(function (error) {
          self.form_errors = error.response.data.data
        })
      }
    },
    addGood () {
      const self = this
      this.$axios.post('good', {
        name: self.good_name,
        products: self.selectedProducts
      }).then(function (response) {
        self.$toast.success('Good is created successfully')
        self.toggleAddGood = false
        self.good_name = ''
        self.selectedProducts = []
        setTimeout(function () {
          self.$toast.clear()
        }, 3000)
      }).catch(function (error) {
        self.form_errors = error.response.data.data
      })
    },
    closeToggleAddGood () {
      const self = this
      self.toggleAddGood = false
    },
    updateVolumeWeight (event, index) {
      const self = this
      self.selectedProducts[index].vol = event.target.value * self.selectedProducts[index].vol
      self.selectedProducts[index].weight = event.target.value * self.selectedProducts[index].weight
    },
    addMoreProduct () {
      const obj = {
        id: '',
        name: '',
        qty: '',
        vol: '',
        weight: '',
        product: {}
      }
      this.selectedProducts.push(obj)
    },
    productselected (event, index) {
      const self = this
      self.selectedProducts[index].id = event.id
      self.selectedProducts[index].name = event.name
      self.selectedProducts[index].qty = 1
      self.selectedProducts[index].vol = 1 * event.volume
      self.selectedProducts[index].weight = 1 * event.weight
      self.selectedProducts[index].product = event
    },
    removeProduct (index) {
      this.$delete(this.selectedProducts, index)
    },
    setPalletRack (pallet, rack) {
      let test = true
      if (rack) {
        test = this.preparePallets.some(rak => rak.rack_id.value === rack.value)
      }
      if (!test) {
        pallet.rack_id = rack
      } else {
        if (rack != null) {
          this.$toast.error('Rack location is already selected')
        }
        pallet.rack_id = ''
      }
    },
    setPalletGood (pallet, good) {
      pallet.good_id = good
    },
    setGoodQty (event, index) {
      const self = this
      self.preparePallets[index].quantity = event.target.value
    }

  }
}
</script>
<style scoped>
.add-more-product-btn {
  margin-top: -25px;
}

</style>
