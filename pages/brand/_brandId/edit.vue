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
                    Edit Brand
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
                          <NuxtLink to="/brand" class="btn btn-danger d-none d-md-inline-flex">
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
                      <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="editBrand">
                        <div class="row g-gs">
                          <div class="col-md-6 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label" for="name">Brand Name</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="name"
                                    v-model="brand.title"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Name"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="description">Description</label>
                                <div class="form-control-wrap">
                                  <textarea
                                    id="description"
                                    v-model="brand.description"
                                    class="form-control form-control-sm"
                                    name="description"
                                    placeholder="Write your description"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="status">Status</label>
                                <div class="form-control-wrap">
                                  <select
                                    id="status"
                                    v-model="brand.status"
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
                              </div>
                            </div>
                            <div class="col-md-12 text-right mt-2">
                              <div class="form-group">
                                <button type="submit" class="btn btn-lg btn-primary">
                                  Save
                                </button>
                              </div>
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
export default {
  data () {
    return {
      tabPath: this.$route.fullPath,
      activeTab: 1,
      title: '',
      description: '',
      status: 0
    }
  },
  computed: {
    brand () {
      return this.$store.state.brand.edit_brand
    }
  },
  created () {
    if (Object.keys(this.brand).length === 0) {
      this.$store.dispatch('brand/fetchSpecificCategories', this.$route.params.brandId)
    }
  },
  methods: {
    editBrand () {
      const self = this
      this.$axios.post(`/brand/update/${this.brand.id}`, {
        title: this.brand.title,
        description: this.brand.description,
        status: this.brand.status
      }).then(function (response) {
        self.$router.push('/brand')
      })
    }
  }
}
</script>

<style scoped>
</style>
