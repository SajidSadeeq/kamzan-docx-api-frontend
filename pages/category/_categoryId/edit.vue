<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Edit Category
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
                        <NuxtLink to="/category" class="btn btn-danger d-none d-md-inline-flex">
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
                    <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="editCategory">
                      <div class="row g-gs">
                        <div class="col-md-6 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label" for="parent_id">Select Parent</label>
                              <div class="form-control-wrap">
                                <treeselect v-model="category.parent_id" :options="categories" :normalizer="normalizer" @change="changeParent" />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="name">Category Name</label>
                              <div class="form-control-wrap">
                                <input
                                  id="name"
                                  v-model="category.name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Name"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'name')" class="invalid">{{ from_errors.name[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="description">Description</label>
                              <div class="form-control-wrap">
                                <textarea
                                  id="description"
                                  v-model="category.description"
                                  class="form-control form-control-sm"
                                  name="description"
                                  placeholder="Write your description"
                                  required=""
                                />
                                <span v-if="containsKey(from_errors, 'description')" class="invalid">{{ from_errors.description[0] }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="col-md-10">
                            {{ "dlska : "+status }}
                            <div class="form-group">
                              <label class="form-label">Status</label>
                              <div class="form-control-wrap">
                                <select v-model="category.status" name="status" class="form-control">
                                  <option value="1">
                                    Active
                                  </option>
                                  <option value="0">
                                    Inactive
                                  </option>
                                </select>
                                <span v-if="containsKey(from_errors, 'status')" class="invalid">{{ from_errors.status[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="meta-title">Meta Title</label>
                              <div class="form-control-wrap">
                                <input
                                  id="meta-title"
                                  v-model="category.meta_title"
                                  type="text"
                                  class="form-control"
                                  name="meta_title"
                                  placeholder="Meta title"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'meta_title')" class="invalid">{{ from_errors.meta_title[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="meta-description">Meta Description</label>
                              <div class="form-control-wrap">
                                <textarea
                                  id="meta-description"
                                  v-model="category.meta_description"
                                  class="form-control form-control-sm"
                                  name="meta_description"
                                  placeholder="Write your meta description"
                                  required=""
                                />
                                <span v-if="containsKey(from_errors, 'meta_description')" class="invalid">{{ from_errors.meta_description[0] }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 text-right">
                          <div class="form-group">
                            <button type="submit" class="btn btn-lg btn-primary" @submit.prevent="editCategory()">
                              Update
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  components: { Treeselect },
  data () {
    return {
      category: {
        name: '',
        description: '',
        meta_title: '',
        meta_description: '',
        status: '',
        parent_id: null
      },
      tabPath: this.$route.fullPath,
      activeTab: 1,
      from_errors: [],
      categories: [],
      normalizer (node) {
        return {
          id: node.id,
          label: node.name,
          children: node.children
        }
      }
    }
  },
  computed: {
    editCatrgory () {
      return this.$store.state.category.edit_category
    }
  },
  mounted () {
    this.fetchCategories()
    this.category = { ...this.editCatrgory }
  },

  created () {
    this.fetchTree()

    if (Object.keys(this.category).length === 0) {
      this.$store.dispatch('category/fetchSpecificCategories', this.$route.params.categoryId)
    }
  },
  updated () {
    this.parent_id = this.category.parent_id
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    async fetchCategories () {
      const self = this
      await this.$axios.get('/category')
        .then(function (response) {
          self.categories = response.data.payload.data
          self.$store.commit('category/SET_CATEGORIES', self.categories)
          self.$nuxt.$loading.finish()
          // this.$toast.show('hello toaster !!!')
          // self.loading = false
        })
    },
    changeParent () {
      alert()
    },
    editCategory () {
      const self = this
      this.$axios.post(`category/update/${this.category.id}`, this.category).then(function (response) {
        self.$router.push('/category')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    },
    fetchTree () {
      const _self = this
      this.$axios.get('/category/tree').then(function (response) {
        _self.categories = response.data.payload
        // self.$router.push('/product')
      }).catch(function (error) {
        _self.from_errors = error.response.data.data
      })
    }
  }
}
</script>

<style scoped>
</style>
