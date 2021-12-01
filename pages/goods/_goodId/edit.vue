<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Edit Good
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
          <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="editGood">
            <div class="nk-block nk-block-lg">
              <div class="card card-preview">
                <div class="card-inner">
                  <ul class="nav nav-tabs mt-n3">
                    <li class="nav-item" @click="activeTab = 1">
                      <a class="nav-link" :class="{ active: activeTab === 1 }" data-toggle="tab" href="#basic"><em
                        class="icon ni ni-setting"
                      /><span>Basic Info</span></a>
                    </li>
                  <!-- <li class="nav-item" @click="activeTab = 2">
                        <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#meta"><em class="icon ni ni-link" /><span>Meta</span></a>
                      </li> -->
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <div class="row g-gs">
                        <div class="col-md-4 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label" for="name">Name</label>
                              <div class="form-control-wrap">
                                <input
                                  id="name"
                                  v-model="good.name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Name"
                                  required=""
                                >
                              </div>
                              <span v-if="containsKey(from_errors, 'name')" class="text-danger">{{ from_errors.name[0] }}</span>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="good_code">Goods Code</label>
                              <div class="form-control-wrap">
                                <input
                                  id="good_code"
                                  v-model="good.good_code"
                                  type="text"
                                  class="form-control"
                                  name="good_code"
                                  placeholder="Goods Code"
                                  required=""
                                >
                              </div>
                              <span v-if="containsKey(from_errors, 'good_code')" class="text-danger">{{ from_errors.good_code[0] }}</span>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <div class="form-control-wrap">
                                <label class="form-label" for="is_single" /><br>
                                <div class="custom-control custom-checkbox">
                                  <input
                                    id="is_single"
                                    v-model="good.is_single"
                                    :checked="good.is_single"
                                    name="is_single"
                                    type="checkbox"
                                    class="custom-control-input"
                                  >
                                  <label class="custom-control-label form-label" for="is_single">Single Good </label>
                                </div>
                              </div>
                              <span v-if="containsKey(from_errors, 'is_single')" class="text-danger">{{ from_errors.is_single[0] }}</span>
                            </div>
                          </div>
                          <!-- <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Products</label>
                                <v-select
                                  :options="products"
                                  label="name"
                                  placeholder="Select Product"
                                  name="products[]"
                                  multiple
                                  :value="goodProducts"
                                  @input="addProducts($event)"
                                />
                                <span v-if="containsKey(from_errors, 'good_id')" class="text-danger">{{ from_errors.good_id[0] }}</span>
                              </div>
                            </div> -->
                        </div>
                        <div class="col-md-8">
                          <div v-if="!good.is_single" class="col-md-12">
                            <div class="form-group">
                              <div class="form-control-wrap">
                                <ul>
                                  <li v-for="(product, index) in goodProducts" :key="product.id">
                                    <!-- <li> -->
                                    <div class="row gy-4">
                                      <div class="col-sm-5">
                                        <div class="form-group">
                                          <label class="form-label" for="default-01">Search Product</label>
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
                                            <input v-model="product.product_id" type="hidden">
                                            <small class="text-primary">{ ID: {{ product.products.id }}, Name : {{ product.products.name }} }</small>
                                          </div>
                                        </div>
                                      </div>
                                      <input v-model="product.id" type="hidden">
                                      <div class="col-sm-2">
                                        <div class="form-group">
                                          <label class="form-label" for="number">Quantity</label>
                                          <div class="form-control-wrap">
                                            <input v-model="product.quantity" type="number" class="form-control" placeholder="1">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-sm-2">
                                        <div class="form-group">
                                          <label class="form-label" for="vol">Volumn</label>
                                          <div class="form-control-wrap">
                                            <input v-model="product.volumn" type="number" class="form-control" placeholder="1">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-sm-2">
                                        <div class="form-group">
                                          <label class="form-label" for="weight">weight(kg)</label>
                                          <div class="form-control-wrap">
                                            <input v-model="product.weight" type="number" class="form-control" placeholder="1">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-sm-1">
                                        <div class="form-group">
                                          <div class="form-control-wrap gp_remove">
                                            <button type="button" class="btn btn-danger" @click="removeProduct(product, index)">
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
                        </div>
                      </div>
                    </div>
                  <!-- <div id="tabItem6" class="tab-pane" :class="{ active: activeTab === 2 }">
                        <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                      </div> -->
                  </div>
                </div>
              </div><!-- .card-preview -->

              <div class="mt-2 text-right">
                <div class="form-group">
                  <NuxtLink to="/goods" class="btn btn-danger d-md-inline-flex">
                    <em class="icon ni ni-back-ios" /><span>Back</span>
                  </NuxtLink>
                  <button type="submit" class="btn btn-primary" @submit.prevent="editGood">
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
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import 'vue-input-search/dist/vue-search.css'
import VueSearch from 'vue-input-search/dist/vue-search.common'
Vue.component('VSelect', vSelect)
export default {
  components: {
    'vue-search': VueSearch
  },
  data () {
    return {
      tabPath: this.$route.fullPath,
      activeTab: 1,
      name: '',
      good_code: null,
      is_single: false,
      goodProducts: [
        {
          id: '',
          name: '',
          qty: '',
          vol: '',
          weight: '',

          products: {
            id: '',
            name: '',
            qty: '',
            vol: '',
            weight: ''
          }
        }],
      products: [],
      from_errors: [],
      // selectedProducts: [],
      selectedProducts: [
        {
          id: '',
          name: '',
          qty: '',
          vol: '',
          weight: '',
          products: {
            id: '',
            name: '',
            qty: '',
            vol: '',
            weight: ''
          }
        }
      ],
      apiSearchProductsUrl: process.env.APP_URL + 'common/search-products'
    }
  },
  computed: {
    good () {
      return this.$store.state.good.edit_good
    }
  },
  created () {
    if (Object.keys(this.good).length === 0) {
      this.$store.dispatch('good/fetchSpecificGood', this.$route.params.goodId)
    }
    this.fetchProducts()
    this.fetchGoodProducts()
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    async fetchProducts () {
      const self = this
      await this.$axios.get('product')
        .then(function (response) {
          if (response.data.status !== false) {
            self.products = response.data.payload.data
          } else {
            // self.from_errors = response.data.payload.error
          }
          self.$nuxt.$loading.finish()
        })
    },
    async fetchGoodProducts () {
      const self = this
      await this.$axios.get(`good/good-products/${self.$route.params.goodId}`)
        .then(function (response) {
          if (response.data.payload.good_products.length) {
            self.goodProducts = response.data.payload.good_products
          }
          // if (response.data.payload.good_products !== []) {
          //   response.data.payload.good_products.forEach((data) => {
          //     if (data.products !== null) {
          //       self.goodProducts.push(data.products)
          //     }
          //   })
          // } else {
          //   // self.from_errors = response.data.payload.error
          // }
          self.$nuxt.$loading.finish()
        })
    },
    async addProducts  (event) {
      const self = this
      const length = self.goodProducts.length < event.length ? event.length : 'error'
      if (length !== 'error') {
        await this.$axios.get(`good/check-product-availability/${event[length - 1].id}/${self.good.id}`)
          .then(function (response) {
            if (response.data.payload.error === undefined) {
              self.$toast.error('This Good is already asigned to other pallet')
              setTimeout(function () {
                self.$toast.clear()
              }, 3000)
            } else {
              self.goodProducts = event
            }
            self.$nuxt.$loading.finish()
          })
      } else {
        self.goodProducts = event
      }
    },
    editGood () {
      const self = this
      this.$axios.put(`good/${this.good.id}`, {
        name: this.good.name,
        good_code: this.good.good_code,
        is_single: this.good.is_single,
        products: self.goodProducts
      }).then(function (response) {
        self.$router.push('/goods')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    },
    productselected (event, index) {
      const self = this
      // if (this.goodProducts.length === 0) {
      //   self.selectedProducts[index].id = event.id
      //   self.selectedProducts[index].name = event.name
      //   self.selectedProducts[index].qty = 1
      //   self.selectedProducts[index].vol = 1 * event.volume
      //   self.selectedProducts[index].weight = 1 * event.weight
      //   self.selectedProducts[index].product = event
      // } else {
      self.goodProducts[index].product_id = event.id
      self.goodProducts[index].name = event.name
      // }
    },
    addProductArray () {
      this.goodProducts.push({
        product_id: '',
        quantity: '',
        volumn: '',
        weight: '',
        products: {
          id: ''
        }
      })
    },
    removeProduct (product, index) {
      // if (this.goodProducts.length === 0) {
      //   this.$delete(this.selectedProducts, index)
      // } else {
      const self = this
      if (product.id !== 'undefined') {
        self.$delete(self.goodProducts, index)
        return true
      }
      this.start()
      this.$axios.get('good/remove-good-product', {
        params: {
          id: product.id
        }
      })
        .then(function (response) {
          if (response.data.status) {
            self.$toast.success(response.data.message).goAway(2000)
            self.$delete(self.goodProducts, index)
          } else {
            self.$toast.error(response.data.payload.error).goAway(2000)
          }
          self.$nuxt.$loading.finish()
        })
      // }
    }

  }
}
</script>
