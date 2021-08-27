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
                    Pallet Goods
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
                          <a href="#" class="btn btn-icon btn-primary d-md-none">
                            <em class="icon ni ni-plus" />
                          </a>
                          <NuxtLink to="/pallets" class="btn btn-danger d-none d-md-inline-flex">
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
                      <form id="pallet_goods" action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addPallet">
                        <div class="row g-gs">
                          <div class="col-md-6 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Pallets</label>
                                <div class="form-control-wrap">
                                  <v-select
                                    :options="pallets"
                                    label="name"
                                    placeholder="Select Pallet"
                                    name="pallet"
                                    @input="getPalletGood"
                                  />
                                </div>
                                <span v-if="containsKey(errors, 'pallet_id')" class="text-danger">{{ errors.pallet_id[0] }}</span>
                              </div>
                            </div>
                            <br>
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Good</label>
                                <v-select
                                  :options="goods"
                                  label="name"
                                  placeholder="Select Good"
                                  name="goods[]"
                                  multiple
                                  :value="palletGoods"
                                  @input="addGoods($event)"
                                />
                                <span v-if="containsKey(errors, 'good_id')" class="text-danger">{{ errors.good_id[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 text-right">
                            <div class="form-group">
                              <button type="submit" class="btn btn-lg btn-primary" @submit.prevent="addPallet">
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
Vue.component('VSelect', vSelect)

export default {
  data () {
    return {
      tabPath: this.$route.fullPath,
      activeTab: 1,
      pallets: [],
      goods: [],
      pallet_id: null,
      selectedGoods: [],
      palletGoods: [],
      errors: []
    }
  },
  created () {
    this.fetchPallets()
    this.fetchGoods()
  },

  methods: {

    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    async addGoods (event) {
      const self = this
      const length = self.palletGoods.length < event.length ? event.length : 'error'
      if (length !== 'error') {
        if (this.pallet_id === '' || this.pallet_id === null) {
          self.$toast.error('Select Pallet First')
          setTimeout(function () {
            self.$toast.clear()
          }, 3000)
          return true
        }
        await this.$axios.get(`pallet/check-good-availability/${self.pallet_id}/${event[length - 1].id}`)
          .then(function (response) {
            if (response.data.payload.error === undefined) {
              self.$toast.error('This Good is already asigned to other pallet')
              setTimeout(function () {
                self.$toast.clear()
              }, 3000)
            } else {
              self.palletGoods = event
            }
            self.$nuxt.$loading.finish()
          })
      } else {
        self.palletGoods = event
      }
    },
    async getPalletGood (event) {
      this.pallet_id = event !== null ? event.id : ''
      const self = this
      self.palletGoods = []
      if (this.pallet_id) {
        await this.$axios.get(`pallet/pallet-goods/${this.pallet_id}`)
          .then(function (response) {
            console.log(response)
            if (response.data.status !== false) {
              response.data.payload.pallet_goods.forEach((data) => {
                self.palletGoods.push(data.goods)
              })
            } else {
              // self.errors = response.data.payload.error
            }

            self.$nuxt.$loading.finish()
          })
      }
    },
    async fetchPallets () {
      const self = this
      await this.$axios.get('pallet')
        .then(function (response) {
          if (response.data.status !== false) {
            self.pallets = response.data.payload
          } else {
            // self.errors = response.data.payload.error
          }

          self.$nuxt.$loading.finish()
        })
    },
    async fetchGoods () {
      const self = this
      await this.$axios.get('good')
        .then(function (response) {
          if (response.data.status !== false) {
            self.goods = response.data.payload
          } else {
            // self.errors = response.data.payload.error
          }

          self.$nuxt.$loading.finish()
        })
    },
    addPallet () {
      const self = this
      this.$axios.post('pallet-good', {
        pallet_id: self.pallet_id,
        goods: self.palletGoods
      }
      ).then(function (response) {
        self.$router.push('/pallets')
      }).catch(function (error) {
        self.errors = error.response.data.data
      })
    }

  }
}
</script>
<style scoped>
</style>
