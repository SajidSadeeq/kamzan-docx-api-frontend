<template>
  <div class="nk-content ">
    <div id="preview">
      <img v-if="img_url" :src="img_url">
    </div>
    <input type="file" @change="onFileChange">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="components-preview wide-md mx-auto">
            <div class="nk-block-head nk-block-head-sm">
              <div class="nk-block-between">
                <div class="nk-block-head-content">
                  <h3 class="nk-block-title page-title">
                    Supplier
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
                          <NuxtLink to="/suppliers" class="btn btn-danger d-none d-md-inline-flex">
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
                      <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addBrand">
                        <div class="row g-gs">
                          <div class="col-md-6 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label">Customer Name</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="customer_name"
                                    v-model="customer_name"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Customer Name"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label">Street 1</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="street_1"
                                    v-model="street_1"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Street 1"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label">street 2</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="street_2"
                                    v-model="street_2"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="street 2"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label">City</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="city"
                                    v-model="city"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="City"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label">Postcode</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="postcode"
                                    v-model="postcode"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Postcode"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 border-right">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label">Telephone Number</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="telephone_number"
                                    v-model="telephone_number"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Telephone Number"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label">County</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="county"
                                    v-model="county"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="County"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label">Main Contact </label>
                                <div class="form-control-wrap">
                                  <input
                                    id="main_contact "
                                    v-model="main_contact "
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Main Contact"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label">Customer Type</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="customer_type"
                                    v-model="customer_type"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Customer Type"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label">Archived</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="archived"
                                    v-model="archived"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Archived"
                                    required=""
                                  >
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabPath: this.$route.fullPath,
      img_url: null,
      activeTab: 1,
      customer_name: '',
      street_1: '',
      street_2: '',
      city: '',
      postcode: '',
      telephone_number: '',
      county: '',
      main_contact: '',
      customer_type: '',
      archived: 1
    }
  },
  methods: {
    addBrand () {
      debugger
      const self = this
      const formData = new FormData()
      formData.append('customer_name', this.customer_name)
      formData.append('street_1', this.street_1)
      formData.append('street_2', this.street_2)
      formData.append('city', this.city)
      formData.append('postcode', this.postcode)
      formData.append('telephone_number', this.telephone_number)
      formData.append('county', this.county)
      formData.append('main_contact', this.main_contact)
      formData.append('customer_type', this.customer_type)
      formData.append('archived', 0)
      formData.append('image', this.img_url)
      this.$axios.post('supplier/create', formData).then(function (response) {
        self.$router.push('/suppliers')
      })
    },
    onFileChange (e) {
      const file = e.target.files[0]
      // this.img_url = URL.createObjectURL(file)
      this.img_url = file
    }
  }
}
</script>

<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
</style>
