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
                        /><span>Update</span></a>
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
                              <small class="text-primary">{ Selected Customer : <span class="text-danger">{{ slected_customer }} </span> }</small>
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
                        <hr>
                        <div class="row g-gs">
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
                                <!-- <th scope="col">
                                  Good Quantity
                                </th> -->
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
                                  <!-- <v-select :options="avaiableGoods" class="v-select" :value="pallet.good_id" @input=" (good_id) => setPalletGood(pallet, good_id)" /> -->
                                  <button type="button" class="btn btn-warning" @click="addGoods(pallet)">
                                    Update Goods
                                  </button>
                                </td>
                                <!-- <td>
                                  <input
                                    v-model="pallet.quantity"
                                    type="number"
                                    class="form-control"
                                    name="name"
                                    placeholder="Qty"
                                    required
                                    @keyup="setGoodQty($event, index)"
                                  >
                                </td> -->
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
                  <a href="javascript:;" class="btn btn-primary d-md-inline-flex mr-2" @click="updatePalletOrder()">
                    <em class="icon ni ni-file" /> <span>Update</span>
                  </a>
                  <NuxtLink to="/pallets-in-out" class="btn btn-danger d-md-inline-flex">
                    <em class="icon ni ni-back-ios" /><span>Back</span>
                  </NuxtLink>
                </div>
              </div>
            </form>
          </div><!-- .components-preview -->
        </div>
      </div>
    </div>
    <add-goods v-if="showAddGoodsModal" :pallet="goodPallet" @close="closeModal" @selectedGoods="getSelectedGoods" />
  </div>
</template>

<script>
// import Vue from 'vue'
import moment from 'moment'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import 'vue-input-search/dist/vue-search.css'
import VueSearch from 'vue-input-search/dist/vue-search.common'
import AddGoods from '~/components/common/AddGoodsModal.vue'

// import Autocomplete from '@/components/common/Autocomplete.vue'
// Vue.component('VSelect', vSelect)

export default {
  components: {
    'vue-search': VueSearch,
    'v-select': vSelect,
    'add-goods': AddGoods
    // 'auto-complete': Autocomplete
  },
  data () {
    return {
      toggleAddGood: false,
      showAddGoodsModal: false,
      goodPallet: '',
      countries: [
        { label: 'Pakistan', id: '1' },
        { label: 'Palau', id: '4' },
        { label: 'Palestine', id: '2' },
        { label: 'India', id: '3' }
      ],
      tabPath: this.$route.fullPath,
      activeTab: 1,
      customer_id: '',
      slected_customer: '',
      pallet_id: '',
      currentDateTime: '',
      quantity: '',
      out_by_date: null,
      batch_number: '',
      preparePallets: [],
      form_errors: [],
      avaiableRacks: [],
      avaiableGoods: [],
      apiSearchCustomerUrl: process.env.APP_URL + 'common/search-customers',
      apiSearchProductsUrl: process.env.APP_URL + 'common/search-products',
      apiSearchRacks: process.env.APP_URL + 'common/search-products',
      apiSearchGoods: process.env.APP_URL + 'common/search-products',
      good_name: '',
      selectedProducts: [
        {
          id: '',
          name: '',
          qty: '',
          vol: '',
          weight: '',
          product: {}
        }
      ],
      loading: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  created () {
    this.fetchRacks()
    this.fetchGoods()
    this.currentDate()
    this.editPallet()
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
    editPallet () {
      const self = this
      // console.log('SSS Path : ' + this.$route.params.palletId)
      this.$axios.get(`pallets-in-out/edit/${this.$route.params.palletId}`)
        .then(function (response) {
          if (response.data.status !== false) {
            // console.log('Res : ' + response.data.payload.pallet_id)
            self.slected_customer = response.data.payload.order.customer.customer_name
            self.customer_id = response.data.payload.order.customer_id
            self.out_by_date = (response.data.payload.order.product_expiry_date != null) ? moment(response.data.payload.order.product_expiry_date).format('YYYY-MM-DD') : null
            const ob = {
              pallet_id: response.data.payload.order.pallet_id,
              rack_id: response.data.payload.rack,
              good: response.data.payload.order.pallet_goods,
              quantity: response.data.payload.order.good_quantity
            }
            self.preparePallets.push(ob)
            self.$nuxt.$loading.finish()
          }
        })
    },
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    customerselected (customer) {
      this.customer_id = customer.id
    },
    updatePalletOrder () {
      const self = this
      this.$axios.post(`pallets-in-out/update-pallet/${this.$route.params.palletId}`, {
        customer_id: self.customer_id,
        batch_number: self.batch_number,
        out_by_date: self.out_by_date,
        preparePallets: self.preparePallets
      }).then(function (response) {
        if (response.data.status !== false) {
          self.$router.push('/pallets-in-out')
        }
      }).catch(function (error) {
        self.form_errors = error.response.data.data
      })
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
      pallet.rack_id = rack
    },
    setPalletGood (pallet, good) {
      pallet.good_id = good
    },
    setGoodQty (event, index) {
      const self = this
      self.preparePallets[index].quantity = event.target.value
    },
    addGoods (pallet) {
      this.goodPallet = pallet
      this.showAddGoodsModal = true
    },
    closeModal () {
      this.showAddGoodsModal = false
    },
    getSelectedGoods (pallet) {
      const self = this
      self.preparePallets.forEach((element, index) => {
        if (element.pallet_id === pallet.pallet_id) {
          element.good = pallet.good
        }
      })
    }

  }
}
</script>
<style scoped>
.add-more-product-btn {
  margin-top: -25px;
}

</style>
