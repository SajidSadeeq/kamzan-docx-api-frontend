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
                    Rack
                  </h3>
                </div><!-- .nk-block-head-content -->
                <div class="nk-block-head-content">
                  <div class="toggle-wrap nk-block-tools-toggle">
                    <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options">
                      <em class="icon ni ni-more-v" />
                    </a>
                    <div class="toggle-expand-content" data-content="more-options">
                      <ul class="nk-block-tools g-3">
                        <li>
                          <div class="form-control-wrap">
                            <div class="form-icon form-icon-right">
                              <em class="icon ni ni-search" />
                            </div>
                            <input id="default-04" type="text" class="form-control" placeholder="Search by name">
                          </div>
                        </li>
                        <li>
                          <div class="drodown">
                            <a
                              href="#"
                              class="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                              data-toggle="dropdown"
                            >Status</a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <ul class="link-list-opt no-bdr">
                                <li><a href="#"><span>Actived</span></a></li>
                                <li><a href="#"><span>Inactived</span></a></li>
                                <li><a href="#"><span>Blocked</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li class="nk-block-tools-opt">
                          <a href="#" class="btn btn-icon btn-primary d-md-none">
                            <em class="icon ni ni-plus" />
                          </a>
                          <NuxtLink to="/rack/add" class="btn btn-primary d-none d-md-inline-flex">
                            <em class="icon ni ni-plus" /><span>Add</span>
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
                <table class="table table-tranx">
                  <thead>
                    <tr class="tb-tnx-head">
                      <th class="tb-tnx-id">
                        <span class="">#</span>
                      </th>
                      <th class="tb-tnx-info">
                        <span class="tb-tnx-desc d-none d-sm-inline-block">
                          <span>Rack  ID</span>
                        </span>
                      </th>
                      <th class="tb-tnx-info">
                        <span class="tb-tnx-desc d-none d-sm-inline-block">
                          <span>Side</span>
                        </span>
                      </th>
                      <th class="tb-tnx-info">
                        <span class="tb-tnx-desc d-none d-sm-inline-block">
                          <span>Status</span>
                        </span>
                      </th>

                      <th class="tb-tnx-action">
                        <span>Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rack, index) in racks" :key="rack.id" class="tb-tnx-item">
                      <td class="tb-tnx-id">
                        <a href="#"><span>{{ index+1 }}</span></a>
                      </td>
                      <td class="tb-tnx-info">
                        <div class="tb-tnx-desc">
                          <span class="title">{{ rack.name }}</span>
                        </div>
                      </td>
                      <td class="tb-tnx-info">
                        <div class="tb-tnx-desc">
                          <span class="title">{{ rack.side=='1'?'Right':'Left' }}</span>
                        </div>
                      </td>
                      <td class="tb-tnx-info">
                        <div class="tb-tnx-desc">
                          <span class="title">{{ rack.status=='2'?'Empty':'Filled' }}</span>
                        </div>
                      </td>

                      <td class="tb-tnx-action">
                        <div class="dropdown" :class="{'show': index === activeIndex }">
                          <a
                            class="text-soft dropdown-toggle btn btn-icon btn-trigger"
                            data-toggle="dropdown"
                            aria-expanded="true"
                            @click="activeIndex = activeIndex === index ? null : index"
                          ><em
                            class="icon ni ni-more-h"
                          /></a>
                          <div
                            class="dropdown-menu dropdown-menu-right dropdown-menu-xs"
                            :class="{'show': index === activeIndex }"
                            x-placement="top-end"
                            style="position: absolute; transform: translate3d(-100px, -94px, 0px); top: 0px; left: 0px; will-change: transform;"
                          >
                            <ul class="link-list-plain">
                              <li><a href="#" @click.prevent="editRack(rack)">Edit</a></li>
                              <li><a href="#" @click.prevent="removeRack(rack)">Remove</a></li>
                            <!--                              <li><a href="#" @click.prevent="removeAisle(aisle.id)">Remove</a></li>-->
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div><!-- .card -->
              <div class="card">
                <div class="card-inner">
                  <div class="pages float-right">
                    <vue-pagination
                      :current="currentPage"
                      :total="Math.ceil(total / perPage)"
                      @page-change="pageChangeHandler"
                    />
                  </div>
                </div>
              </div>
            </div><!-- nk-block -->
          </div><!-- .components-preview -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleModal: false,
      activeIndex: null,
      loading: true,
      // aisles: [],
      // racks: [],
      total: 0,
      perPage: 10,
      currentPage: 1
    }
  },
  computed: {
    racks () {
      return this.$store.state.rack.racks
    }
  },
  created () {
    this.fetchRacks()
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    scrollToTop () {
      const element = document.querySelector('html')
      element.scroll({
        top: 90,
        behavior: 'smooth'
      })
    },
    async pageChangeHandler (page) {
      this.start()
      this.currentPage = page
      // const offset = ((this.currentPage - 1) * this.limit)
      await this.$store.dispatch('rack/fetchRacks', {
        page: this.currentPage,
        limit: this.perPage
      })
      this.finish()
      this.scrollToTop()
    },
    async fetchRacks () {
      const self = this
      await this.$axios.get('rack', {
        params: {
          limit: self.perPage
        }
      })
        .then(function (response) {
          if (response.data.status !== false) {
            self.total = response.data.payload.total
            self.$store.commit('rack/SET_RACK', response.data.payload.data)
          }
          self.$nuxt.$loading.finish()
        }).catch(function (ex) {
          self.$nuxt.$loading.finish()
        })
    },

    async removeRack (rack) {
      const self = this
      await this.$axios.delete(`/rack/${rack.id}`)
        .then(function (response) {
          self.racks = []
          self.fetchRacks()
          self.$store.commit('SET_RACK', self.rack)
        }).catch(function (ex) {
          self.fetchRacks()
        })
    },
    async editRack (rack) {
      await this.$store.commit('rack/SET_EDIT_RACK', rack)
      this.$router.push(`rack/${rack.id}/edit`)
    }

  }
}
</script>

<style>

</style>
