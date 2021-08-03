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
                    Edit product
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
                          <a href="javascript:;" class="btn btn-primary d-none d-md-inline-flex mr-2" @click="updateProduct">
                            <em class="icon ni ni-file" /><span>Update</span>
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
                    <li class="nav-item" @click="activeTab = 2">
                      <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#details"><em class="icon ni ni-setting" /><span>Details</span></a>
                    </li>
                    <li class="nav-item" @click="activeTab = 3">
                      <a class="nav-link" :class="{ active: activeTab === 3 }" data-toggle="tab" href="#images"><em class="icon ni ni-setting" /><span>Images</span></a>
                    </li>
                    <!-- <li class="nav-item" @click="activeTab = 4">
                      <a class="nav-link" :class="{ active: activeTab === 4 }" data-toggle="tab" href="#meta"><em class="icon ni ni-link" /><span>Meta</span></a>
                    </li> -->
                  </ul>
                  <div class="tab-content">
                    <div id="basic" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addProduct">
                        <div class="row g-gs">
                          <div class="col-md-6 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="category_id">Select Category</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="category_id"
                                    v-model="product.category_id"
                                    type="number"
                                    class="form-control"
                                    name="category_id"
                                    placeholder="Select Category"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'category_id')" class="text-danger">{{ form_errors.category_id[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="supplier_id">Select Supplier</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="supplier_id"
                                    v-model="product.supplier_id"
                                    type="number"
                                    class="form-control"
                                    name="supplier_id"
                                    placeholder="Select Supplier"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'supplier_id')" class="text-danger">{{ form_errors.supplier_id[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="name">Name</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="name"
                                    v-model="product.name"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Product Name"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'name')" class="text-danger">{{ form_errors.name[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="sku">Sku</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="sku"
                                    v-model="product.sku"
                                    type="text"
                                    class="form-control"
                                    name="sku"
                                    placeholder="Sku"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'sku')" class="text-danger">{{ form_errors.sku[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="qty">Qty</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="qty"
                                    v-model="product.qty"
                                    type="number"
                                    class="form-control"
                                    name="qty"
                                    placeholder="Qty"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'qty')" class="text-danger">{{ form_errors.qty[0] }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="price">Price</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="price"
                                    v-model="product.price"
                                    type="number"
                                    class="form-control"
                                    name="price"
                                    placeholder="Price"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'price')" class="text-danger">{{ form_errors.price[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="size">size</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="size"
                                    v-model="product.size"
                                    type="number"
                                    class="form-control"
                                    name="size"
                                    placeholder="Size"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'size')" class="text-danger">{{ form_errors.size[0] }}</span>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="weight">Weight</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="weight"
                                    v-model="product.weight"
                                    type="number"
                                    class="form-control"
                                    name="weight"
                                    placeholder="Weight"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'weight')" class="text-danger">{{ form_errors.weight[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="color">Color</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="color"
                                    v-model="product.color"
                                    type="text"
                                    class="form-control"
                                    name="color"
                                    placeholder="color"
                                    required=""
                                  >
                                  <span v-if="containsKey(form_errors, 'color')" class="text-danger">{{ form_errors.color[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="color">Status</label>
                                <div class="form-control-wrap">
                                  <div class="form-control-wrap">
                                    <select
                                      id="status"
                                      v-model="product.status"
                                      class="form-control"
                                      name="status"
                                    >
                                      <option value="0">
                                        Inactive
                                      </option>
                                      <option value="1">
                                        Active
                                      </option>
                                    </select>
                                  </div>
                                  <span v-if="containsKey(form_errors, 'status')" class="text-danger">{{ form_errors.status[0] }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div id="details" class="tab-pane" :class="{ active: activeTab === 2 }">
                      <div class="row g-gs">
                        <div class="col-md-6 border-right">
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
                                  required=""
                                />
                                <span v-if="containsKey(form_errors, 'description')" class="text-danger">{{ form_errors.description[0] }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 border-right">
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="note">Note</label>
                              <div class="form-control-wrap">
                                <textarea
                                  id="note"
                                  v-model="product.note"
                                  class="form-control form-control-sm"
                                  name="note"
                                  placeholder="Product note"
                                  required=""
                                />
                                <span v-if="containsKey(form_errors, 'note')" class="text-danger">{{ form_errors.note[0] }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="images" class="tab-pane" :class="{ active: activeTab === 3 }">
                      <vue-upload-multiple-image
                        :data-images="images"
                        @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        @edit-image="editImage"
                      />
                    </div>
                    <!-- <div id="meta" class="tab-pane" :class="{ active: activeTab === 4 }">
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
    <!-- <div>
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
    </div> -->

    <!-- <treeselect v-model="value" :multiple="true" :options="options" :normalizer="normalizer">
      <div slot="value-label" slot-scope="{ node }">
        {{ node.raw.title }}
      </div>
    </treeselect>

    <vue-upload-multiple-image
      :data-images="product.images"
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
    /> -->
  </div>
</template>

<script>
// import the component
// import Treeselect from '@riophae/vue-treeselect'
// import the styles
// import '@riophae/vue-treeselect/dist/vue-treeselect.css'
// import 'vue-tel-input/dist/vue-tel-input.css'

export default {
  // eslint-disable-next-line vue/no-unused-components
  // components: { Treeselect },
  data () {
    return {
      tabPath: this.$route.fullPath,
      activeTab: 1,
      category_id: '',
      supplier_id: '',
      name: '',
      sku: '',
      qty: '',
      price: '',
      size: '',
      weight: '',
      color: '',
      description: '',
      note: '',
      status: 1,
      form_errors: [],
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
          label: node.name,
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
  watch: {
    product (val) {
      if (val.images != null) {
        this.images = val.images
      }
    }
  },
  created () {
    // this.fetchTree()
    if (Object.keys(this.product).length === 0) {
      this.$store.dispatch('product/fetchSpecificProduct', this.$route.params.productId)
    }
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
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
    updateProduct () {
      const self = this
      this.$axios.post(`/product/update/${this.product.id}`, {
        category_id: this.product.category_id,
        supplier_id: this.product.supplier_id,
        name: this.product.name,
        sku: this.product.sku,
        qty: this.product.qty,
        price: this.product.price,
        size: this.product.size,
        weight: this.product.weight,
        color: this.product.color,
        description: this.product.description,
        note: this.product.note,
        status: this.product.status,
        image: this.new_images,
        delete_images: this.delete_images
      }).then(function (response) {
        // self.$router.push('/product')
      }).catch(function (error) {
        self.form_errors = error.response.data.data
      })
    },
    fetchTree () {
      const self = this
      this.$axios.get('/category/tree').then(function (response) {
        self.options = response.data.payload
        // self.$router.push('/product')
      }).catch(function (error) {
        self.form_errors = error.response.data.data
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
