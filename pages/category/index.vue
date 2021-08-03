<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Categories
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
                        <span>Parent Category</span>
                      </span>
                    </th>
                    <th class="tb-tnx-info">
                      <span class="tb-tnx-desc d-none d-sm-inline-block">
                        <span>Category Name</span>
                      </span>
                    </th>
                    <th class="tb-tnx-amount is-alt">
                      <span class="tb-tnx-status d-none d-md-inline-block">Status</span>
                    </th>
                    <th class="tb-tnx-action">
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(category, index) in categories" :key="category.id" class="tb-tnx-item">
                    <td class="tb-tnx-id">
                      <a href="#"><span>{{ category.id }}</span></a>
                    </td>
                    <td class="tb-tnx-info">
                      <div class="tb-tnx-desc">
                        <span class="title">{{ (category.parent)?category.parent.name:'N/A' }}</span>
                      </div>
                    </td>
                    <td class="tb-tnx-info">
                      <div class="tb-tnx-desc">
                        <span class="title">{{ category.name }}</span>
                      </div>
                    </td>
                    <td class="tb-tnx-info">
                      <div class="tb-tnx-desc">
                        <span class="title">{{ (category.status) ? 'Active' : 'Inactive' }}</span>
                      </div>
                    </td>
                    <td class="tb-tnx-action" />
                    <td class="tb-tnx-action">
                      <div class="dropdown" :class="{'show': index === activeIndex }">
                        <a
                          class="text-soft dropdown-toggle btn btn-icon btn-trigger"
                          data-toggle="dropdown"
                          aria-expanded="true"
                          @click="activeIndex = activeIndex === index ? null : index"
                        >
                          <em class="icon ni ni-more-h" />
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right dropdown-menu-xs"
                          :class="{'show': index === activeIndex }"
                          x-placement="top-end"
                          style="position: absolute; transform: translate3d(-100px, -94px, 0px); top: 0px; left: 0px; will-change: transform;"
                        >
                          <ul class="link-list-plain">
                            <li><a href="#">View</a></li>
                            <li><a href="#" @click.prevent="editCategory(category)">Edit</a></li>
                            <li><a href="#" @click.prevent="removeCategory(category.id)">Remove</a></li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="categories.length < 1">
                    <div class="col-md-12 text-center">
                      {{ 'Data Not Found' }}
                    </div>
                  </tr>
                </tbody>
              </table>
            </div><!-- .card -->
            <div v-if="total > 0" class="card">
              <div class="card-inner">
                <div class="pages float-right">
                  <vue-pagination
                    :current="currentPage"
                    :total="Math.ceil(total / 10)"
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
  components: {
  },
  data () {
    return {
      toggleModal: false,
      toggleHeader: false,
      activeIndex: null,
      loading: true,
      total: 0,
      currentPage: 1
    }
  },
  computed: {
    categories () {
      return this.$store.state.category.categories
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    toggleActive (index) {
      this.activeIndex = index
    },
    scrollToTop () {
      const element = document.querySelector('html')
      element.scroll({
        top: 90,
        behavior: 'smooth'
      })
    },
    async pageChangeHandler (page) {
      this.currentPage = page
      // const offset = ((this.currentPage - 1) * this.limit)
      await this.$store.dispatch('category/fetchCategories', {
        page: this.currentPage
      })
      this.scrollToTop()
    },
    async fetchCategories () {
      const self = this
      await this.$axios.get('/category')
        .then(function (response) {
          self.total = response.data.payload.total
          self.$store.commit('category/SET_CATEGORIES', response.data.payload.data)
          self.$nuxt.$loading.finish()
          // this.$toast.show('hello toaster !!!')
          // self.loading = false
        })
    },
    async removeCategory (cat) {
      const self = this
      await this.$axios.delete(`/category/delete/${cat}`)
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
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
