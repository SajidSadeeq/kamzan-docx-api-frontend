<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Pallets
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
                          <input id="search" v-model="search" type="text" class="form-control" placeholder="Search by name">
                        </div>
                      </li>
                      <li>
                        <select id="select-status" v-model="status" class="form-control">
                          <option value="">
                            --Status--
                          </option>
                          <option value="2">
                            Empty
                          </option>
                          <option value="1">
                            Filled
                          </option>
                        </select>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="javascript:;" class="btn btn-success d-md-inline-flex mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-plus" /> <span>Search</span>
                        </a>
                        <NuxtLink to="/pallets/add" class="btn btn-primary d-none d-md-inline-flex">
                          <em class="icon ni ni-plus" /><span>Add</span>
                        </NuxtLink>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="#" class="btn btn-icon btn-primary d-md-none">
                          <em class="icon ni ni-plus" />
                        </a>
                        <NuxtLink to="/pallets/add-goods" class="btn btn-primary d-none d-md-inline-flex">
                          <em class="icon ni ni-plus" /><span>Add Pallet Goods</span>
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
                        <span>Pallet ID</span>
                      </span>
                    </th>
                    <!--                      <th class="tb-tnx-info">-->
                    <!--                        <span class="tb-tnx-desc d-none d-sm-inline-block">-->
                    <!--                          <span>Unique ID</span>-->
                    <!--                        </span>-->
                    <!--                      </th>-->
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
                  <tr v-for="(pallet, index) in pallets" :key="pallet.id" class="tb-tnx-item">
                    <td class="tb-tnx-id">
                      <a href="#"><span>{{ pallet.id }}</span></a>
                    </td>
                    <td class="tb-tnx-info">
                      <div class="tb-tnx-desc">
                        <span class="title">{{ pallet.name }}</span>
                      </div>
                    </td>
                    <!--                      <td class="tb-tnx-info">-->
                    <!--                        <div class="tb-tnx-desc">-->
                    <!--                          <span class="title">{{ pallet.uniq_no }}</span>-->
                    <!--                        </div>-->
                    <!--                      </td>-->
                    <td class="tb-tnx-info">
                      <div class="tb-tnx-desc">
                        <span class="title">{{ pallet.status==1?'Filled':'Empty' }}</span>
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
                            <li><a href="#" @click.prevent="editPallet(pallet)">Edit</a></li>
                            <li><a href="#" @click.prevent="removePallet(pallet)">Remove</a></li>
                            <!--                              <li><a href="#" @click.prevent="removeAisle(aisle.id)">Remove</a></li>-->
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div><!-- .card -->
            <div v-if="Math.ceil(total / perPage) > 1" class="card">
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
      // pallets: [],
      total: 0,
      perPage: 10,
      currentPage: 1,
      search: '',
      status: ''
    }
  },
  computed: {
    pallets () {
      return this.$store.state.pallet.pallets
    }
  },
  created () {
    this.fetchPallets()
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  methods: {
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
      await this.$store.dispatch('pallet/fetchPallets', {
        page: this.currentPage,
        limit: this.perPage,
        status: this.status,
        search: this.search
      })
      this.finish()
      this.scrollToTop()
    },
    async fetchPallets () {
      const self = this
      await this.$axios.get('pallet', {
        params: {
          limit: self.perPage
        }
      })
        .then(function (response) {
          if (response.data.status !== false) {
            self.total = response.data.payload.total
            // console.log(response.data)
            self.$store.commit('pallet/SET_PALLET', response.data.payload.data)
          }
          self.$nuxt.$loading.finish()
        }).catch(function () {
          self.$nuxt.$loading.finish()
        })
    },
    async removePallet (pallet) {
      const self = this
      await this.$axios.delete(`/pallet/${pallet.id}`)
        .then(function (response) {
          self.pallets = []
          self.fetchPallets()
          // self.categories = response.data.data.data
          self.$store.commit('pallet/SET_PALLET', self.pallets)
        }).catch(function (ex) {
          self.fetchPallets()
        })
    },
    async editPallet (pallet) {
      await this.$store.commit('pallet/SET_EDIT_PALLET', pallet)
      this.$router.push(`pallets/${pallet.id}/edit`)
    }

  }
}
</script>

<style scoped>

</style>
