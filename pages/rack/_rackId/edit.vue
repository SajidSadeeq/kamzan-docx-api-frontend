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
                    Edit Rack
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
                          <NuxtLink to="/rack" class="btn btn-danger d-none d-md-inline-flex">
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
                      /><span>Baisc Info </span></a>
                    </li>
                    <!-- <li class="nav-item" @click="activeTab = 2">
                        <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#meta"><em class="icon ni ni-link" /><span>Meta</span></a>
                      </li> -->
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="editRack">
                        <div class="row g-gs">
                          <div class="col-md-6 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Rack ID</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="name"
                                    v-model="rack.name"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Rack ID"
                                    required=""
                                  >
                                </div>
                                <span v-if="containsKey(errors, 'name')" class="text-danger">{{ errors.name[0] }}</span>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="name">Aisle</label>
                                <div class="form-control-wrap">
                                  <v-select
                                    :options="aisles"
                                    label="name"
                                    placeholder="Aisle"
                                    name="aisle_id"
                                    :value="aisle"
                                    @input="aisle=$event?$event:{}"
                                  />
                                  <span v-if="containsKey(errors, 'aisle_id')" class="text-danger">{{ errors.aisle_id[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <br>
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Side</label>
                                <v-select
                                  :options=" [{name: 'Right', value: 1},{name: 'Left', value: 2}]"
                                  label="name"
                                  placeholder="Side"
                                  name="side"
                                  :value="side"
                                  @input="side=$event?$event:{}"
                                />
                              </div>
                            </div>
                            <span v-if="containsKey(errors, 'side')" class="text-danger">{{ errors.side[0] }}</span>
                          </div>
                          <div class="col-md-12 text-right">
                            <div class="form-group">
                              <button type="submit" class="btn btn-lg btn-primary" @submit.prevent="editAisle">
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
      name: '',
      sides: [{ name: 'Right', value: 1 }, { name: 'Left', value: 2 }],
      aisles: [],
      aisle: {},
      side: {},
      errors: []
    }
  },
  computed: {
    rack () {
      return this.$store.state.rack.edit_rack
    }
  },
  created () {
    if (Object.keys(this.rack).length === 0) {
      this.$store.dispatch('rack/fetchSpecificRack', this.$route.params.rackId)
    }
    this.fetchAisles()
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    async fetchAisles () {
      const self = this
      await this.$axios.get('aisle')
        .then(function (response) {
          self.aisles = response.data.payload
          self.aisle = self.aisles.find(elem => elem.id === self.rack.aisle_id)
          self.side = self.sides.find(el => el.value === parseInt(self.rack.side))
          self.$nuxt.$loading.finish()
        })
    },
    editRack () {
      const self = this
      this.$axios.put(`rack/${this.rack.id}`, {
        name: self.rack.name,
        aisle_id: self.aisle.id,
        side: self.side.value
      }).then(function (response) {
        if (response.data.status !== false) {
          self.$router.push('/rack')
        }
      }).catch(function (error) {
        self.errors = error.response.data.data
      })
    }

  }
}
</script>
