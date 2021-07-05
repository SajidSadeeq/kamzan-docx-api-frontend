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
                        <li class="nk-block-tools-opt">
                          <a href="#" class="btn btn-icon btn-primary d-md-none">
                            <em class="icon ni ni-plus" />
                          </a>
                          <NuxtLink to="/product" class="btn btn-danger d-none d-md-inline-flex">
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
                      <form action="#" class="form-validate" @submit.prevent="editBrand">
                        <div class="row g-gs">
                          <div class="col-md-6 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Category Name</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="name"
                                    v-model="product.name"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Name"
                                  >
                                  {{ errors.name ? errors.name[0] : '' }}
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="description">Description</label>
                                <div class="form-control-wrap">
                                  <textarea
                                    id="description"
                                    v-model="product.description"
                                    class="form-control form-control-sm"
                                    name="description"
                                    placeholder="Write your description"
                                    required
                                  />
                                  <client-only>
                                    <vue-tel-input
                                      v-model="phone"
                                      :valid-characters-only="true"
                                      @validate="phoneValidate"
                                    />
                                    {{ phone }}
                                  </client-only>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 text-right">
                            <div class="form-group">
                              <button type="submit" class="btn btn-lg btn-primary">
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

    <div>
      <label class="typo__label" for="ajax">Async multiselect</label>
      <multiselect
        id="ajax"
        v-model="selectedCountries"
        label="company_name"
        track-by="id"
        placeholder="Type to search"
        open-direction="bottom"
        :options="countries"
        :multiple="true"
        :searchable="true"
        :loading="isLoading"
        :internal-search="false"
        :clear-on-select="false"
        :close-on-select="false"
        :options-limit="300"
        :limit="3"
        :limit-text="limitText"
        :max-height="600"
        :show-no-results="false"
        :hide-selected="true"
        @search-change="asyncFind"
      >
        <template slot="tag" slot-scope="{ option, remove }">
          <span class="custom__tag"><span>{{
            option.company_name
          }}</span><span class="custom__remove" @click="remove(option)">❌</span></span>
        </template>
        <template slot="clear" slot-scope="props">
          <div
            v-if="selectedCountries.length"
            class="multiselect__clear"
            @mousedown.prevent.stop="clearAll(props.search)"
          />
        </template>
        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
      </multiselect>
      <pre class="language-json"><code>{{ selectedCountries }}</code></pre>
    </div>

    <treeselect v-model="value" :multiple="true" :options="options" :normalizer="normalizer">
      <div slot="value-label" slot-scope="{ node }">
        {{ node.raw.title }}
      </div>
    </treeselect>

    <vue-upload-multiple-image
      :data-images="product.images"
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
    />
  </div>
</template>

<script>
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import 'vue-tel-input/dist/vue-tel-input.css'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Treeselect },
  data () {
    return {
      tabPath: this.$route.fullPath,
      activeTab: 1,
      name: '',
      description: '',
      status: 1,
      phone: '',
      errors: [''],
      images: [],
      new_images: [],
      delete_images: [],
      selectedCountries: [],
      countries: [],
      isLoading: false,
      // define the default value
      value: null,
      // define options
      options: [],
      normalizer (node) {
        return {
          id: node.id,
          label: node.title,
          children: node.children
        }
      }
    }
  },
  computed: {
    product () {
      return this.$store.state.product.edit_product
    }
  },
  created () {
    this.fetchTree()
    if (Object.keys(this.product).length === 0) {
      this.$store.dispatch('product/fetchSpecificProduct', this.$route.params.productId)
    }
  },
  methods: {
    limitText (count) {
      return `and ${count} other countries`
    },
    asyncFind (keyword) {
      const self = this
      this.isLoading = true
      this.$axios.get(`/supplier/search/${keyword}`).then(function (response) {
        self.countries = response.data.payload
        self.isLoading = false
      }).catch(function () {
        // this.countries = []
        // this.isLoading = false
      })
    },
    clearAll () {
      this.selectedCountries = []
    },
    editBrand () {
      const self = this
      this.$axios.post(`/product/update/${this.product.id}`, {
        name: this.product.name,
        description: this.product.description,
        status: this.product.status,
        image: this.new_images,
        delete_images: this.delete_images
      }).then(function (response) {
        // self.$router.push('/product')
      }).catch(function (error) {
        self.errors = error.response.data.data
      })
    },
    fetchTree () {
      const self = this
      this.$axios.get('/category/tree').then(function (response) {
        self.options = response.data.payload
        // self.$router.push('/product')
      }).catch(function (error) {
        self.errors = error.response.data.data
      })
    },
    beforeRemove (index, done, fileList) {
      this.delete_images.push(fileList[index].id)
      done()
      this.new_images = [...fileList]
    },
    uploadImageSuccess (formData, index, fileList) {
      this.new_images = [...fileList]
    },
    editImage (formData, index, fileList) {
      this.delete_images.push(fileList[index].id)
      this.new_images = [...fileList]
    },
    phoneValidate (ev) {
      return true
      // console.log(ev)
    }
  }
}
</script>

<style scoped>
</style>
