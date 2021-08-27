<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Add product
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
                        <a href="javascript:;" class="btn btn-primary d-none d-md-inline-flex mr-2" @click="addProduct">
                          <em class="icon ni ni-file" /><span>Save</span>
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
                    /><span>Basic Info</span></a>
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
                              <label class="form-label" for="name">Name</label>
                              <div class="form-control-wrap">
                                <input
                                  id="name"
                                  v-model="name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Product Name"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'name')" class="text-danger">{{ from_errors.name[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="category_id">Select Category</label>
                              <div class="form-control-wrap">
                                <!-- <input
                                    id="category_id"
                                    v-model="category_id"
                                    type="number"
                                    class="form-control"
                                    name="category_id"
                                    placeholder="Select Category"
                                    required=""
                                  > -->
                                <treeselect v-model="category_id" :options="categories" :normalizer="normalizer" />
                                <span v-if="containsKey(from_errors, 'category_id')" class="text-danger">{{ from_errors.category_id[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="supplier_id">Supplier Id</label>
                              <div class="form-control-wrap">
                                <input
                                  id="supplier_id"
                                  v-model="supplier_id"
                                  type="number"
                                  class="form-control"
                                  name="supplier_id"
                                  placeholder="Supplier"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'supplier_id')" class="text-danger">{{ from_errors.supplier_id[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="sku">Sku</label>
                              <div class="form-control-wrap">
                                <input
                                  id="sku"
                                  v-model="sku"
                                  type="text"
                                  class="form-control"
                                  name="sku"
                                  placeholder="Sku"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'sku')" class="text-danger">{{ from_errors.sku[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="qty">Qty</label>
                              <div class="form-control-wrap">
                                <input
                                  id="qty"
                                  v-model="qty"
                                  type="number"
                                  class="form-control"
                                  name="qty"
                                  placeholder="Qty"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'qty')" class="text-danger">{{ from_errors.qty[0] }}</span>
                              </div>
                            </div>
                          </div> -->
                        </div>
                        <div class="col-md-6 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label" for="price">Price</label>
                              <div class="form-control-wrap">
                                <input
                                  id="price"
                                  v-model="price"
                                  type="number"
                                  class="form-control"
                                  name="price"
                                  placeholder="Price"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'price')" class="text-danger">{{ from_errors.price[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="row">
                              <div class="col-sm-8 col-md-8">
                                <div class="form-group">
                                  <label class="form-label" for="volume">Volume</label>
                                  <div class="form-control-wrap">
                                    <input
                                      id="volume"
                                      v-model="volume"
                                      type="number"
                                      class="form-control"
                                      name="volume"
                                      placeholder="Product volumne"
                                      required=""
                                    >
                                    <span v-if="containsKey(from_errors, 'volume')" class="text-danger">{{ from_errors.volume[0] }}</span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-4 col-md-4">
                                <div class="form-group">
                                  <label class="form-label" for="volume">Volume Unit</label>
                                  <div class="form-control-wrap">
                                    <select id="volume-unit" v-model="volume_unit" class="form-control">
                                      <option value="">
                                        Select
                                      </option>
                                      <option v-for="unit in volUnits" :key="unit.id" :value="unit.type">
                                        {{ unit.type }}
                                      </option>
                                    </select>
                                    <span v-if="containsKey(from_errors, 'volume_unit')" class="text-danger">{{ from_errors.volume_unit[0] }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-10 mt-2">
                            <div class="row">
                              <div class="col-sm-8 col-md-8">
                                <div class="form-group">
                                  <label class="form-label" for="weight">Weight</label>
                                  <div class="form-control-wrap">
                                    <input
                                      id="weight"
                                      v-model="weight"
                                      type="number"
                                      class="form-control"
                                      name="weight"
                                      placeholder="Weight"
                                      required=""
                                    >
                                    <span v-if="containsKey(from_errors, 'weight')" class="text-danger">{{ from_errors.weight[0] }}</span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-4 col-md-4">
                                <div class="form-group">
                                  <label class="form-label" for="weight">Weight Unit</label>
                                  <div class="form-control-wrap">
                                    <select id="weight-unit" v-model="weight_unit" class="form-control">
                                      <option value="">
                                        Select
                                      </option>
                                      <option v-for="unit in weightUnits" :key="unit.id" :value="unit.type">
                                        {{ unit.type }}
                                      </option>
                                    </select>
                                    <span v-if="containsKey(from_errors, 'weight_unit')" class="text-danger">{{ from_errors.weight_unit[0] }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label" for="color">Colour</label>
                              <div class="form-control-wrap">
                                <input
                                  id="color"
                                  v-model="color"
                                  type="text"
                                  class="form-control"
                                  name="color"
                                  placeholder="Colour"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'color')" class="text-danger">{{ from_errors.color[0] }}</span>
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
                                v-model="description"
                                class="form-control form-control-sm"
                                name="description"
                                placeholder="Write your description"
                                required=""
                              />
                              <span v-if="containsKey(from_errors, 'description')" class="text-danger">{{ from_errors.description[0] }}</span>
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
                                v-model="note"
                                class="form-control form-control-sm"
                                name="note"
                                placeholder="Product note"
                                required=""
                              />
                              <span v-if="containsKey(from_errors, 'note')" class="text-danger">{{ from_errors.note[0] }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="images" class="tab-pane" :class="{ active: activeTab === 3 }">
                    <vue-upload-multiple-image
                      :drag-text="dragText"
                      :browse-text="browsText"
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
      tabPath: this.$route.fullPath,
      activeTab: 1,
      category_id: null,
      supplier_id: '',
      dragText: 'Drag Images here',
      browsText: 'Brows image',
      name: '',
      sku: '',
      // qty: '',
      price: '',
      volume: '',
      volume_unit: '',
      weight: '',
      weight_unit: '',
      color: '',
      description: '',
      note: '',
      images: [],
      units: [],
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
    volUnits () {
      return this.units.filter(unit => unit.name === 'volumn')
    },
    weightUnits () {
      return this.units.filter(unit => unit.name === 'weight')
    }
  },
  created () {
    this.fetchTree()
    this.fetchUnits()
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    fetchTree () {
      const _self = this
      this.$axios.get('/category/tree').then(function (response) {
        _self.categories = response.data.payload
        // self.$router.push('/product')
      }).catch(function (error) {
        _self.from_errors = error.response.data.data
      })
    },
    fetchUnits () {
      const _self = this
      this.$axios.get('/common/units').then(function (response) {
        _self.units = response.data
        // self.$router.push('/product')
      }).catch(function (error) {
        _self.from_errors = error.response.data.data
      })
    },
    addProduct () {
      const self = this
      this.$axios.post('product/create', {
        category_id: this.category_id,
        supplier_id: this.supplier_id,
        name: this.name,
        sku: this.sku,
        // qty: this.qty,
        price: this.price,
        volume: this.volume,
        volume_unit: this.volume_unit,
        weight: this.weight,
        weight_unit: this.weight_unit,
        color: this.color,
        description: this.description,
        note: this.note,
        images: this.images
      }).then(function (response) {
        self.$router.push('/product')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    },
    beforeRemove (index, done, fileList) {
      done()
      this.images = [...fileList]
    },
    uploadImageSuccess (formData, index, fileList) {
      this.images = [...fileList]
    },
    editImage (formData, index, fileList) {
      this.images = [...fileList]
    }
  }
}
</script>
