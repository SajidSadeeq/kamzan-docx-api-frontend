<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
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
                        <a
                          href="#"
                          class="btn btn-primary mr-2"
                          @click="toggleAddGood = !toggleAddGood"
                        >
                          <em class="icon ni ni-plus" /> Add New Good
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
                        <div class="col-md-6">
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
                              <span v-if="containsKey(form_errors, 'pallet_id')" class="text-danger">{{ form_errors.pallet_id[0] }}</span>
                            </div>
                          </div>
                          <br>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label" for="name">Good</label>
                              <v-select
                                :options="goods"
                                label="name"
                                placeholder="Select Side"
                                name="goods[]"
                                multiple
                                :value="palletGoods"
                                @input="addGoods($event)"
                              />
                              <span v-if="containsKey(form_errors, 'good_id')" class="text-danger">{{ form_errors.good_id[0] }}</span>
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
                      </div><!-- .nk-block-head -->
                      <div class="nk-block">
                        <div class="row g-3">
                          <div class="col-12">
                            <div class="form-group">
                              <div class="form-group">
                                <label class="form-label" for="name">Good Id</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="name"
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
      toggleAddGood: false,
      activeTab: 1,
      good_name: '',
      pallets: [],
      goods: [],
      pallet_id: null,
      selectedGoods: [],
      palletGoods: [],
      form_errors: []
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
            if (response.data.status !== false) {
              response.data.payload.pallet_goods.forEach((data) => {
                if (data.goods !== null) {
                  self.palletGoods.push(data.goods)
                }
              })
            } else {
            // self.form_errors = response.data.payload.error
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
            self.pallets = response.data.payload.data
          } else {
            // self.form_errors = response.data.payload.error
          }

          self.$nuxt.$loading.finish()
        })
    },
    async fetchGoods () {
      const self = this
      await this.$axios.get('good')
        .then(function (response) {
          if (response.data.status !== false) {
            self.goods = response.data.payload.data
          } else {
            // self.form_errors = response.data.payload.error
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
        self.form_errors = error.response.data.data
      })
    },
    addGood () {
      const self = this
      this.$axios.post('good', {
        name: self.good_name
      }).then(function (response) {
        self.$toast.success('Good is created successfully')
        self.fetchGoods()
        self.toggleAddGood = false
        self.good_name = ''
      }).catch(function (error) {
        self.form_errors = error.response.data.data
      })
    },
    closeToggleAddGood () {
      const self = this
      self.toggleAddGood = false
    }
  }
}
</script>
<style scoped>
</style>
