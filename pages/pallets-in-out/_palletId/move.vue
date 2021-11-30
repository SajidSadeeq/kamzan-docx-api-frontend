<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Move Due
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
                    <a class="nav-link" :class="{ active: activeTab === 1 }" data-toggle="tab" href="#basic">
                      <em class="icon ni ni-setting" />
                      <span>Basic Info</span>
                    </a>
                  </li>
                  <!-- <li class="nav-item" @click="activeTab = 2">
                        <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#meta"><em class="icon ni ni-link" /><span>Meta</span></a>
                      </li> -->
                </ul>
                <div class="tab-content">
                  <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                    <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="movePallet">
                      <div class="row g-gs">
                        <div class="col-md-6">
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label text-danger">Currtent Location : {{ current_rack }}</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row g-gs">
                        <div class="col-md-6">
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="name">Select Rack</label>
                              <v-select
                                :options="racks"
                                placeholder="Select New Rack"
                                @input="selectedRack=$event !== undefined?$event:''"
                              />
                              <span v-if="containsKey(from_errors, 'new_rack_id')" class="error">{{ from_errors.new_rack_id[0] }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 text-right">
                        <div class="form-group">
                          <button type="submit" class="btn btn-lg btn-primary" @submit.prevent="editPallet">
                            Move Now
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
      from_errors: [],
      goods: [],
      racks: [],
      rack_id: '',
      selectedRack: [],
      current_rack: '',
      customer_order_id: this.$route.params.palletId,
      pallet_id: ''
    }
  },
  computed: {
    // pallet () {
    //   return this.$store.state.pallet.edit_pallet
    // }
  },
  created () {
    this.fetchRacks()
    this.editPallet()
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    async fetchRacks () {
      const self = this
      await this.$axios.get('rack/fetch-available-racks')
        .then(function (response) {
          if (response.data.payload.error === undefined) {
            self.racks = response.data.payload
            // self.selectedRack = self.racks.find(elem => elem.id === self.pallet.rack_id)
          }
          self.$nuxt.$loading.finish()
        })
    },
    movePallet () {
      const self = this
      this.$axios.post('pallet/move-pallet', {
        new_rack_id: self.selectedRack ? self.selectedRack.value : '',
        customer_order_id: this.$route.params.palletId
      }).then(function (response) {
        self.$router.push('/pallets-in-out')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    },
    editPallet () {
      const self = this
      // console.log('SSS Path : ' + this.$route.params.palletId)
      this.$axios.get(`pallets-in-out/edit/${this.$route.params.palletId}`)
        .then(function (response) {
          if (response.data.status !== false) {
            // console.log('Res : ' + response.data.payload)
            self.current_rack = response.data.payload.rack.label
          }
        })
    }

  }
}
</script>
