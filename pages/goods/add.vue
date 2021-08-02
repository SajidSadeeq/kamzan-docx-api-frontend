<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="components-preview wide-md mx-auto">
            <div class="nk-block-head nk-block-head-sm">
              <div class="nk-block-between">
                <div class="nk-block-head-content">
                  <h3 class="nk-block-title page-title">
                    Add Good
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
                          <a href="javascript:;" class="btn btn-primary d-none d-md-inline-flex mr-2" @click="addProductArray">
                            <em class="icon ni ni-plus" /> Add Product
                          </a>
                          <NuxtLink to="/goods" class="btn btn-danger d-none d-md-inline-flex">
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
                      /><span>Baisc Info</span></a>
                    </li>
                    <!-- <li class="nav-item" @click="activeTab = 2">
                        <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#meta"><em class="icon ni ni-link" /><span>Meta</span></a>
                      </li> -->
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addGood">
                        <div class="row g-gs">
                          <div class="col-md-4 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Name</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="name"
                                    v-model="name"
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
                            <!-- <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Products</label>
                                <v-select
                                  :options="products"
                                  label="name"
                                  placeholder="Select Product"
                                  name="products[]"
                                  multiple
                                  :value="selectedProducts"
                                  @input="addProducts($event)"
                                />
                                <span v-if="containsKey(from_errors, 'good_id')" class="text-danger">{{ from_errors.good_id[0] }}</span>
                              </div>
                            </div> -->
                          </div>
                          <div class="col-md-8">
                            <div class="col-md-12">
                              <div class="form-group">
                                <div class="form-control-wrap">
                                  <ul>
                                    <li v-for="(product, index) in selectedProducts" :key="product.id">
                                      <!-- <li> -->
                                      <div class="row gy-4">
                                        <div class="col-sm-6">
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
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-sm-2">
                                          <div class="form-group">
                                            <label class="form-label" for="number">Quantity</label>
                                            <div class="form-control-wrap">
                                              <input id="number" v-model="product.qty" type="number" class="form-control" placeholder="1">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-sm-2">
                                          <div class="form-group">
                                            <label class="form-label" for="vol">Volumn</label>
                                            <div class="form-control-wrap">
                                              <input id="vol" v-model="product.vol" type="number" class="form-control" placeholder="1">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-sm-2">
                                          <div class="form-group">
                                            <label class="form-label" for="weight">weight(kg)</label>
                                            <div class="form-control-wrap">
                                              <input id="weight" v-model="product.weight" type="number" class="form-control" placeholder="1">
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
                          <div class="col-md-12 text-right">
                            <div class="form-group">
                              <button type="submit" class="btn btn-lg btn-primary" @submit.prevent="addGood">
                                Save
                              </button>
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
      from_errors: [],
      products: [],
      selectedProducts: [
        {
          id: '',
          name: '',
          qty: '',
          vol: '',
          weight: ''
        }
      ],
      apiSearchProductsUrl: process.env.APP_URL + 'common/search-products'
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {

    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    async fetchProducts () {
      const self = this
      await this.$axios.get('product')
        .then(function (response) {
          if (response.data.status !== false) {
            self.products = response.data.payload.data ?? []
          } else {
            // self.from_errors = response.data.payload.error
          }

          self.$nuxt.$loading.finish()
        })
    },
    async addProducts (event) {
      const self = this
      const length = self.selectedProducts.length < event.length ? event.length : 'error'
      if (length !== 'error') {
        await this.$axios.get(`good/check-product-availability/${event[length - 1].id}`)
          .then(function (response) {
            if (response.data.payload.error === undefined) {
              self.$toast.error('This Product is already asigned to other Good')
              setTimeout(function () {
                self.$toast.clear()
              }, 3000)
            } else {
              self.selectedProducts = event
            }
            self.$nuxt.$loading.finish()
          }).catch(function () {
            self.selectedProducts = []
          })
      } else {
        self.selectedProducts = event
      }
    },
    addGood () {
      const self = this
      this.$axios.post('good', {
        products: self.selectedProducts,
        name: self.name
      }).then(function (response) {
        if (response.data.status !== false) {
          self.$router.push('/goods')
        } else {
          self.from_errors = response.data.payload.error
        }
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    },
    addProductArray () {
      this.selectedProducts.push({
        name: '',
        qty: '',
        vol: '',
        weight: ''
      })
    },
    productselected (event, index) {
      const self = this
      self.selectedProducts[index].id = event.id
      self.selectedProducts[index].name = event.name
    }

  }
}
</script>
<style scoped>
</style>
