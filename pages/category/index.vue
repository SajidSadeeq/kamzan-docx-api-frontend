<template>
  <div class="nk-content ">
    <CallModal :show="toggleModal" />
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="components-preview wide-md mx-auto">
            <div class="nk-block-head nk-block-head-sm">
              <div class="nk-block-between">
                <div class="nk-block-head-content">
                  <h3 class="nk-block-title page-title">
                    Categories
                  </h3>
                </div><!-- .nk-block-head-content -->
                <div class="nk-block-head-content">
                  <div class="toggle-wrap nk-block-tools-toggle">
                    <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em
                      class="icon ni ni-more-v"
                    /></a>
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
                        <li>
                          <button @click="toggleModal = true">
                            Click
                          </button>
                        </li>
                        <li class="nk-block-tools-opt">
                          <a href="#" class="btn btn-icon btn-primary d-md-none">
                            <em class="icon ni ni-plus" />
                          </a>
                          <NuxtLink to="/category/add" class="btn btn-primary d-none d-md-inline-flex">
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
                          <span>Bill For</span>
                        </span>
                        <span class="tb-tnx-date d-md-inline-block d-none">
                          <span class="d-md-none">Date</span>
                          <span class="d-none d-md-block">
                            <span>Issue Date</span>
                            <span>Due Date</span>
                          </span>
                        </span>
                      </th>
                      <th class="tb-tnx-amount is-alt">
                        <span class="tb-tnx-total">Total</span>
                        <span class="tb-tnx-status d-none d-md-inline-block">Status</span>
                      </th>
                      <th class="tb-tnx-action">
                        <span>&nbsp;</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="category in categories" :key="category.id" class="tb-tnx-item">
                      <td class="tb-tnx-id">
                        <a href="#"><span>{{ category.id }}</span></a>
                      </td>
                      <td class="tb-tnx-info">
                        <div class="tb-tnx-desc">
                          <span class="title">{{ category.meta_title }}</span>
                        </div>
                        <div class="tb-tnx-date">
                          <span class="date">{{ category.created_at }}</span>
                          <span class="date">{{ category.updated_at }}</span>
                        </div>
                      </td>
                      <td class="tb-tnx-amount is-alt">
                        <div class="tb-tnx-total">
                          <span class="amount">$599.00</span>
                        </div>
                        <div class="tb-tnx-status">
                          <span class="badge badge-dot badge-warning">{{ category.status }}</span>
                        </div>
                      </td>
                      <td class="tb-tnx-action">
                        <div class="dropdown">
                          <button @click="editCategory(category)">
                            <a class="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em
                              class="icon ni ni-more-h"
                            /></a>
                          </button>
                          <a href="" @click.prevent="removeCategories(category)">de</a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                            <ul class="link-list-plain">
                              <li><a href="#">View</a></li>
                              <li><a href="#">Edit</a></li>
                              <li><a href="#">Remove</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div><!-- .card -->
            </div><!-- nk-block -->
          </div><!-- .components-preview -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CallModal from '@/components/common/CallModal'

export default {
  components: {
    CallModal
  },
  data () {
    return {
      toggleModal: false,
      categories: []
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories () {
      const self = this
      await this.$axios.get('/all-category')
        .then(function (response) {
          self.categories = response.data.data.data
          self.$store.commit('category/SET_CATEGORIES', self.categories)
        })
    },
    async removeCategories (cat) {
      const self = this
      await this.$axios.delete(`/delete-category/${cat.id}`)
        .then(function (response) {
          self.fetchCategories()
          // self.categories = response.data.data.data
          // self.$store.commit('SET_CATEGORIES', self.categories)
        }).catch(function (ex) {
          self.fetchCategories()
        })
    },
    async editCategory (category) {
      await this.$store.commit('category/SET_EDIT_CATEGORY', category)
      this.$router.push(`category/${category.id}/edit`)
    }
  }
}
</script>

<style scoped>
</style>
