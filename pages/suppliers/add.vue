<template>
  <div class="nk-content ">
    <div id="preview">
      <img v-if="img_url" :src="img_url">
    </div>
    <!-- <input type="file" @change="onFileChange()"> -->
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="components-preview wide-md mx-auto">
            <div class="nk-block-head nk-block-head-sm">
              <div class="nk-block-between">
                <div class="nk-block-head-content">
                  <h3 class="nk-block-title page-title">
                    Add Supplier
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
                          <button type="button" class="btn btn-success" @click="addSupplier()">
                            <em class="icon ni ni-file" />
                            <span>Save</span>
                          </button>
                        </li>
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
                      <a class="nav-link" :class="{ active: activeTab === 1 }" data-toggle="tab" href="#basic">
                        <em class="icon ni ni-setting" /><span>Baisc Info</span>
                      </a>
                    </li>
                    <li class="nav-item" @click="activeTab = 2">
                      <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#meta"><em class="icon ni ni-home" /><span>Address</span></a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <div class="row g-gs">
                        <div class="col-md-6 border-right">
                          <!-- <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label">Select Logo</label>
                                <vue-upload-multiple-image
                                  :data-images="images"
                                  @upload-success="uploadImageSuccess"
                                  @before-remove="beforeRemove"
                                  @edit-image="editImage"
                                />
                              </div>
                            </div> -->

                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Select Customer</label>
                              <div class="form-control-wrap">
                                <input
                                  id="customer_id"
                                  v-model="customer_id"
                                  type="number"
                                  class="form-control"
                                  name="customer_id"
                                  placeholder="Select Customer"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Company Name</label>
                              <div class="form-control-wrap">
                                <input
                                  id="company_name"
                                  v-model="company_name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Company Name"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Contact First Name</label>
                              <div class="form-control-wrap">
                                <input
                                  id="contact_fname"
                                  v-model="contact_fname"
                                  type="text"
                                  class="form-control"
                                  name="contact_fname"
                                  placeholder="Contact First Name"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Contact Last Name</label>
                              <div class="form-control-wrap">
                                <input
                                  id="contact_lname"
                                  v-model="contact_lname"
                                  type="text"
                                  class="form-control"
                                  name="contact_lname"
                                  placeholder="Contact Last Name"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Contact title</label>
                              <div class="form-control-wrap">
                                <input
                                  id="contact_title"
                                  v-model="contact_title"
                                  type="text"
                                  class="form-control"
                                  name="contact_title"
                                  placeholder="Contact Title"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Email </label>
                              <div class="form-control-wrap">
                                <input
                                  id="email"
                                  v-model="email"
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  placeholder="email"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Fax </label>
                              <div class="form-control-wrap">
                                <input
                                  id="fax"
                                  v-model="fax"
                                  type="text"
                                  class="form-control"
                                  name="fax"
                                  placeholder="Fax No#"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Url </label>
                              <div class="form-control-wrap">
                                <input
                                  id="url"
                                  v-model="url"
                                  type="url"
                                  class="form-control"
                                  name="url"
                                  placeholder="Web url"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Note </label>
                              <div class="form-control-wrap">
                                <textarea id="note" v-model="note" class="form-control" name="note" placeholder="Contact note" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tabItem6" class="tab-pane" :class="{ active: activeTab === 2 }">
                      <div class="row g-gs">
                        <div class="col-md-6 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Address</label>
                              <div class="form-control-wrap">
                                <input
                                  id="address1"
                                  v-model="address1"
                                  type="text"
                                  class="form-control"
                                  name="address1"
                                  placeholder="Enter Address"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Address (Optional)</label>
                              <div class="form-control-wrap">
                                <input
                                  id="address2"
                                  v-model="address2"
                                  type="text"
                                  class="form-control"
                                  name="address2"
                                  placeholder="Enter Second Address"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Phone</label>
                              <div class="form-control-wrap">
                                <input
                                  id="phone1"
                                  v-model="phone1"
                                  type="text"
                                  class="form-control"
                                  name="phone1"
                                  placeholder="Phone number"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Phone (Optional)</label>
                              <div class="form-control-wrap">
                                <input
                                  id="phone2"
                                  v-model="phone2"
                                  type="text"
                                  class="form-control"
                                  name="phone2"
                                  placeholder="Phone number"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">City </label>
                              <div class="form-control-wrap">
                                <input
                                  id="city"
                                  v-model="city"
                                  type="text"
                                  class="form-control"
                                  name="city"
                                  placeholder="Enter City"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">State </label>
                              <div class="form-control-wrap">
                                <input
                                  id="state"
                                  v-model="state"
                                  type="text"
                                  class="form-control"
                                  name="state"
                                  placeholder="Enter State"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Postcode </label>
                              <div class="form-control-wrap">
                                <input
                                  id="postcode"
                                  v-model="postcode"
                                  type="text"
                                  class="form-control"
                                  name="postcode"
                                  placeholder="Enter Postcode"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Country </label>
                              <div class="form-control-wrap">
                                <input
                                  id="country"
                                  v-model="country"
                                  type="text"
                                  class="form-control"
                                  name="country"
                                  placeholder="Country"
                                  required=""
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
      image: [],
      activeTab: 1,
      customer_id: '',
      company_name: '',
      contact_title: '',
      contact_fname: '',
      contact_lname: '',
      email: '',
      address1: '',
      address2: '',
      phone1: '',
      phone2: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
      fax: '',
      url: '',
      note: ''
    }
  },
  methods: {
    addSupplier () {
      const self = this
      const formData = new FormData()
      formData.append('customer_id', self.customer_id)
      formData.append('company_name', self.company_name)
      formData.append('contact_title', self.contact_title)
      formData.append('contact_fname', self.contact_fname)
      formData.append('contact_lname', self.contact_lname)
      formData.append('email', self.email)
      formData.append('fax', self.fax)
      formData.append('url', self.url)
      formData.append('note', self.note)
      formData.append('address1', self.address1)
      formData.append('address2', self.address2)
      formData.append('phone1', self.phone1)
      formData.append('phone2', self.phone2)
      formData.append('city', self.city)
      formData.append('state', self.state)
      formData.append('postcode', self.postcode)
      formData.append('country', self.country)
      // formData.append('archived', 0)
      formData.append('image', self.image)
      this.$axios.post('supplier/create', formData).then(function (response) {
        self.$router.push('/suppliers')
      })
    },
    onFileChange (e) {
      const file = e.target.files[0]
      // this.img_url = URL.createObjectURL(file)
      this.image = file
    },
    beforeRemove (index, done, fileList) {
      done()
      this.image = [...fileList]
    },
    uploadImageSuccess (formData, index, fileList) {
      this.image = [...fileList]
    },
    editImage (formData, index, fileList) {
      this.image = [...fileList]
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
