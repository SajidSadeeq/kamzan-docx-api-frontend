<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Edit Customer
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em
                    class="icon ni ni-more-v"
                  /></a>
                </div>
              </div><!-- .nk-block-head-content -->
            </div>
          </div><!-- nk-block-head -->
          <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="editCustomer">
            <div class="nk-block nk-block-lg">
              <div class="card card-preview">
                <div class="card-inner">
                  <ul class="nav nav-tabs mt-n3">
                    <li class="nav-item" @click="activeTab = 1">
                      <a class="nav-link" :class="{ active: activeTab === 1 }" data-toggle="tab" href="#basic"><em
                        class="icon ni ni-setting"
                      /><span>Basic Info</span></a>
                    </li>
                  <!-- <li class="nav-item" @click="activeTab = 2">
                      <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#meta"><em class="icon ni ni-link" /><span>Meta</span></a>
                    </li> -->
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <div class="row g-gs">
                        <div class="col-md-6 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Customer Name</label>
                              <div class="form-control-wrap">
                                <input
                                  id="customer_name"
                                  v-model="customer.customer_name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Customer Name"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'customer_name')" class="invalid">{{ from_errors.customer_name[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Email</label>
                              <div class="form-control-wrap">
                                <input
                                  id="email"
                                  v-model="customer.email"
                                  type="text"
                                  class="form-control"
                                  name="email"
                                  placeholder="Customer email"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'email')" class="invalid">{{ from_errors.email[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">Street 1</label>
                              <div class="form-control-wrap">
                                <input
                                  id="street_1"
                                  v-model="customer.street_1"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Street 1"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'street_1')" class="invalid">{{ from_errors.street_1[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">street 2</label>
                              <div class="form-control-wrap">
                                <input
                                  id="street_2"
                                  v-model="customer.street_2"
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
                                  v-model="customer.city"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="City"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'city')" class="invalid">{{ from_errors.city[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">Postcode</label>
                              <div class="form-control-wrap">
                                <input
                                  id="postcode"
                                  v-model="customer.postcode"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Postcode"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'postcode')" class="invalid">{{ from_errors.postcode[0] }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 border-right">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label">Telephone Number</label>
                              <div class="form-control-wrap">
                                <client-only>
                                  <vue-tel-input
                                    v-model="customer.telephone_number"
                                    :valid-characters-only="true"
                                    :preferred-countries="['GB']"
                                    :auto-default-country="false"
                                  />
                                </client-only>
                                <span v-if="containsKey(from_errors, 'telephone_number')" class="error">{{ from_errors.telephone_number[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-10 mt-2">
                            <div class="form-group">
                              <label class="form-label">County</label>
                              <div class="form-control-wrap">
                                <input
                                  id="county"
                                  v-model="customer.county"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="County"
                                  required=""
                                >
                                <span v-if="containsKey(from_errors, 'county')" class="invalid">{{ from_errors.county[0] }}</span>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="col-md-10">
                              <div class="form-group">
                                <label class="form-label">Main Contact </label>
                                <div class="form-control-wrap">
                                  <input
                                    id="main_contact "
                                    v-model="customer.main_contact "
                                    type="number"
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
                                    v-model="customer.customer_type"
                                    type="number"
                                    class="form-control"
                                    name="name"
                                    placeholder="Customer Type"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div> -->
                          <!-- <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label">Archived</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="archived"
                                    v-model="customer.archived"
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Archived"
                                    required=""
                                  >
                                </div>
                              </div>
                            </div> -->
                        </div>
                      </div>
                    </div>
                  <!-- <div id="tabItem6" class="tab-pane" :class="{ active: activeTab === 2 }">
                      <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                    </div> -->
                  </div>
                </div>
              </div><!-- .card-preview -->
              <div class="mt-2 text-right">
                <div class="form-group">
                  <NuxtLink to="/customer" class="btn btn-danger d-md-inline-flex">
                    <em class="icon ni ni-back-ios" /><span>Back</span>
                  </NuxtLink>

                  <button type="submit" class="btn btn-primary">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import 'vue-tel-input/dist/vue-tel-input.css'
export default {
  data () {
    return {
      tabPath: this.$route.fullPath,
      activeTab: 1,
      customer_name: '',
      email: '',
      street_1: '',
      street_2: '',
      city: '',
      postcode: '',
      telephone_number: '',
      county: '',
      main_contact: '',
      customer_type: '',
      // archived: 1
      from_errors: []
    }
  },
  computed: {
    customer () {
      return this.$store.state.customer.edit_customer
    }
  },
  created () {
    if (Object.keys(this.customer).length === 0) {
      this.$store.dispatch('customer/fetchSpecificCategories', this.$route.params.customerId)
    }
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    editCustomer () {
      const self = this
      this.$axios.put(`/customer/update/${this.customer.id}`, {
        id: this.customer.id,
        customer_name: this.customer.customer_name,
        email: this.customer.email,
        street_1: this.customer.street_1,
        street_2: this.customer.street_2,
        city: this.customer.city,
        postcode: this.customer.postcode,
        telephone_number: this.customer.telephone_number,
        county: this.customer.county,
        main_contact: this.customer.main_contact,
        customer_type: this.customer.customer_type
        // archived: 0
      }).then(function (response) {
        self.$router.push('/customer')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    }
  }
}
</script>

<style scoped>
</style>
