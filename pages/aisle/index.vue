<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Aisles
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
                      <li class="nk-block-tools-opt">
                        <a href="javascript:;" class="btn btn-success d-md-inline-flex mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /> <span>Search</span>
                        </a>
                        <NuxtLink to="/aisle/add" class="btn btn-primary d-md-inline-flex">
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
                        <span>Aisle ID</span>
                      </span>
                    </th>

                    <th class="tb-tnx-action">
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(aisle, index) in aisles" :key="aisle.id" class="tb-tnx-item">
                    <td class="tb-tnx-id">
                      <a href="#"><span>{{ aisle.id }}</span></a>
                    </td>
                    <td class="tb-tnx-info">
                      <div class="tb-tnx-desc">
                        <span class="title">{{ aisle.name }}</span>
                      </div>
                    </td>

                    <td class="tb-tnx-action parent-li">
                      <div class="dropdown" :class="{'show': index === activeIndex }">
                        <p v-if="activeIndex === index" v-click-outside="onClickOutside" />
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
                            <li><a href="#" @click.prevent="editAisle(aisle)">Edit</a></li>
                            <li><a href="#" @click.prevent="removeAisle(aisle)">Remove</a></li>
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
import Vue2ClickOutside from 'vue2-click-outside'
export default {
  directives: {
    clickOutside: Vue2ClickOutside.directive
  },
  data () {
    return {
      toggleModal: false,
      activeIndex: null,
      loading: true,
      // aisles: [],
      total: 0,
      perPage: 10,
      currentPage: 1,
      search: ''
    }
  },
  computed: {
    aisles () {
      return this.$store.state.aisle.aisles
    }
  },
  created () {
    this.fetchAisles()
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {
    onClickOutside (event) {
      if (this.hasParentClass(event.target, 'parent-li') === false) {
        this.activeIndex = null
      }
    },
    hasParentClass (child, classname) {
      if (child.className.split(' ').includes(classname)) { return true }
      try {
        // Throws TypeError if child doesn't have parent any more
        return child.parentNode && this.hasParentClass(child.parentNode, classname)
      } catch (TypeError) {
        return false
      }
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
      await this.$store.dispatch('aisle/fetchAisles', {
        page: this.currentPage,
        limit: this.perPage,
        search: this.search
      })
      this.finish()
      this.scrollToTop()
    },
    async fetchAisles () {
      const self = this
      await this.$axios.get('aisle', {
        params: {
          limit: self.perPage
        }
      })
        .then(function (response) {
          if (response.data.status !== false) {
            self.total = response.data.payload.total
            self.$store.commit('aisle/SET_AISLE', response.data.payload.data)
          }
          self.$nuxt.$loading.finish()
        }).catch(function (ex) {
          self.$nuxt.$loading.finish()
        })
    },
    async removeAisle (aisle) {
      const self = this
      self.$nuxt.$loading.start()
      await this.$axios.delete(`/aisle/${aisle.id}`)
        .then(function (response) {
          self.activeIndex = null
          self.fetchAisles()
          self.$nuxt.$loading.finish()
        }).catch(function (ex) {
          self.fetchAisles()
          self.$nuxt.$loading.finish()
        })
    },
    async editAisle (aisle) {
      await this.$store.commit('aisle/SET_EDIT_AISLE', aisle)
      this.$router.push(`aisle/${aisle.id}/edit`)
    }

  }
}
</script>

<style>

</style>
