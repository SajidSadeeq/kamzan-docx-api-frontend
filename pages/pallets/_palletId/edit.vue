<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Edit Pallet
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
                    <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="editPallet">
                      <div class="row g-gs">
                        <div class="col-md-6">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label" for="name">Pallets ID </label>
                              <div class="form-control-wrap">
                                <input
                                  id="name"
                                  v-model="pallet.name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Pallet ID"
                                  required=""
                                >
                              </div>
                              <span v-if="errors" class="text-danger">{{ errors[0] }}</span>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="name">Racks</label>
                              <v-select
                                :options="racks"
                                label="name"
                                placeholder="Select Side"
                                name="rack_id"
                                :value="selectedRack"
                                @input="selectedRack=$event !== undefined?$event:''"
                              />
                              <span v-if="containsKey(errors, 'good_id')" class="text-danger">{{ errors.good_id[0] }}</span>
                            </div>
                          </div>

                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="name">Goods</label>
                              <v-select
                                :options="goods"
                                label="name"
                                placeholder="Select Side"
                                name="goods[]"
                                multiple
                                :value="palletGoods"
                                @input="palletGoods=$event"
                              />
                              <span v-if="containsKey(errors, 'good_id')" class="text-danger">{{ errors.good_id[0] }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 text-right">
                        <div class="form-group">
                          <button type="submit" class="btn btn-lg btn-primary" @submit.prevent="editPallet">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- <div id="tabItem6" class="tab-pane" :class="{ active: activeTab === 2 }">
                        <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                      </div> -->
              </div>
            </div>
          </div><!-- .card-preview -->
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
      name: '',
      errors: [],
      goods: [],
      racks: [],
      rack_id: '',
      selectedRack: [],
      selectedGoods: [],
      palletGoods: []
    }
  },
  computed: {
    pallet () {
      return this.$store.state.pallet.edit_pallet
    }
  },
  created () {
    if (Object.keys(this.pallet).length === 0) {
      this.$store.dispatch('pallet/fetchSpecificPallet', this.$route.params.palletId)
    }
    this.fetchRacks()
    this.fetchGoods()
    this.fetchPalletGoods()
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    async fetchRacks () {
      const self = this
      await this.$axios.get('racks/available-racks')
        .then(function (response) {
          if (response.data.payload.error === undefined) {
            self.racks = response.data.payload
            self.selectedRack = self.racks.find(elem => elem.id === self.pallet.rack_id)
            // console.log(self.pallet.rack_id)
            // console.log(self.racks)
            // console.log(self.selectedRack)
          }
          // self.$store.commit('pallet/SET_PALLET', self.pallets)
          self.$nuxt.$loading.finish()
        })
    },
    async fetchGoods () {
      const self = this
      await this.$axios.get('good/list')
        .then(function (response) {
          if (response.data.status !== false) {
            self.goods = response.data.payload
          } else {
            // self.errors = response.data.payload.error
          }
          self.$nuxt.$loading.finish()
        })
    },
    async fetchPalletGoods () {
      const self = this
      await this.$axios.get(`pallet/pallet-goods/${self.$route.params.palletId}`)
        .then(function (response) {
          if (response.data.status !== false) {
            response.data.payload.pallet_goods.forEach((data) => {
              if (data.goods !== null) {
                self.palletGoods.push(data.goods)
              }
            })
          } else {
            // self.errors = response.data.payload.error
          }
          self.$nuxt.$loading.finish()
        })
    },
    editPallet () {
      const self = this
      this.$axios.put(`pallet/${this.pallet.id}`, {
        name: self.pallet.name,
        palletGoods: self.palletGoods,
        rack_id: self.selectedRack ? self.selectedRack.id : ''
      }).then(function (response) {
        if (response.data.status !== false) {
          self.$router.push('/pallets')
        } else {
          self.errors = response.data.payload.error
        }
      }).catch(function (ext) {
        self.errors = ext.data.payload.error
      })
    }

  }
}
</script>
