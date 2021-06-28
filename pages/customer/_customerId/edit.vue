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
                          <NuxtLink to="/customer" class="btn btn-danger d-none d-md-inline-flex">
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
                      <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="editCustomer">
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
                                    v-model="customer.telephone_number"
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
                                    v-model="customer.county"
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
                                    v-model="customer.main_contact "
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
                                    v-model="customer.customer_type"
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
                                    v-model="customer.archived"
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
    editCustomer () {
      const self = this
      this.$axios.post(`update-customer/${this.customer.id}`, {
        customer_name: this.customer.customer_name,
        street_1: this.customer.street_1,
        street_2: this.customer.street_2,
        city: this.customer.city,
        postcode: this.customer.postcode,
        telephone_number: this.customer.telephone_number,
        county: this.customer.county,
        main_contact: this.customer.main_contact,
        customer_type: this.customer.customer_type,
        archived: 0
      }).then(function (response) {
        self.$router.push('/customer')
      })
    }
  }
}
</script>

<style scoped>
</style>
