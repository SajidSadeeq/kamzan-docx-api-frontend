<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Suppliers
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="more-options">
                    <ul class="nk-block-tools g-3">
                      <li>
                        <div class="form-control-wrap">
                          <div class="form-icon form-icon-right">
                            <em class="icon ni ni-search" />
                          </div>
                          <input id="search" v-model="search" type="text" class="form-control" placeholder="Search by company name">
                        </div>
                      </li>
                      <li>
                        <select id="select-status" v-model="status" class="form-control">
                          <option value="">
                            --Status--
                          </option>
                          <option value="2">
                            Inactive
                          </option>
                          <option value="1">
                            Active
                          </option>
                        </select>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="javascript:;" class="btn btn-success d-md-inline-flex mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /> <span>Search</span>
                        </a>
                        <NuxtLink to="/suppliers/add" class="btn btn-primary d-none d-md-inline-flex">
                          <em class="icon ni ni-plus" /><span>Add</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div><!-- .nk-block-head-content -->
            </div><!-- .nk-block-between -->
          </div><!-- .nk-block-head -->
          <div class="nk-block">
            <div class="nk-tb-list is-separate mb-3">
              <div class="nk-tb-item nk-tb-head">
                <div class="nk-tb-col">
                  <span class="sub-text">Customer</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="sub-text">Company</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="sub-text">Contact Details</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Email</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">City</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Country</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="sub-text">Status</span>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li>
                      <div class="drodown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger mr-n1" data-toggle="dropdown"><em class="icon ni ni-more-h" /></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="#"><em class="icon ni ni-mail" /><span>Send Email to All</span></a></li>
                            <li><a href="#"><em class="icon ni ni-na" /><span>Suspend Selected</span></a></li>
                            <li><a href="#"><em class="icon ni ni-trash" /><span>Remove Seleted</span></a></li>
                            <li><a href="#"><em class="icon ni ni-shield-star" /><span>Reset Password</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->

              <div v-for="(supplier, index) in suppliers" :key="supplier.id" class="nk-tb-item">
                <div class="nk-tb-col">
                  <a href="#">
                    <div class="user-card">
                      <div class="user-info">
                        <span class="tb-lead"> {{ (supplier.customer)?supplier.customer.customer_name:'n/a' }} <span class="dot dot-success d-md-none ml-1" /></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ supplier.company_name }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex badge-success">
                    {{ supplier.contact_fname+' '+supplier.contact_lname }}
                  </span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex badge-primary">
                    {{ supplier.email }}
                  </span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex badge-warning">
                    {{ (supplier.city)?supplier.city:'n/a' }}
                  </span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="badge badge-sm badge-dot has-bg d-none d-mb-inline-flex badge-warning">
                    {{ (supplier.country)?supplier.country:'n/a' }}
                  </span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-status" :class="(supplier.status)?'text-success':'text-danger'">{{ (supplier.status)?'Active':'Inactive' }}</span>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1">
                    <li class="nk-tb-action-hidden">
                      <a
                        href="#"
                        class="btn btn-trigger btn-icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Send Email"
                      >
                        <em class="icon ni ni-mail-fill" />
                      </a>
                    </li>
                    <li class="nk-tb-action-hidden">
                      <a
                        href="#"
                        class="btn btn-trigger btn-icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Suspend"
                      >
                        <em class="icon ni ni-user-cross-fill" />
                      </a>
                    </li>
                    <li>
                      <div class="drodown" :class="{'show': index === activeIndex }">
                        <a href="javascript:;" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" @click="activeIndex = activeIndex === index ? null : index">
                          <em class="icon ni ni-more-h" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" :class="{'show': index === activeIndex }">
                          <ul class="link-list-opt no-bdr">
                            <!-- <li><a href="javascript:;"><em class="icon ni ni-eye" /><span>View Details</span></a></li> -->
                            <li><a href="javascript:;" @click="editSupplier(supplier)"><em class="icon ni ni-edit" /><span>Edit Details</span></a></li>
                            <li><a href="javascript:;" @click="removeSupplier(supplier)"><em class="icon ni ni-trash" /><span>Delete</span></a></li>
                            <!-- <li><a href="#"><em class="icon ni ni-repeat" /><span>Orders</span></a></li>
                            <li class="divider" />
                            <li><a href="#"><em class="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                            <li><a href="#"><em class="icon ni ni-na" /><span>Suspend</span></a></li> -->
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
            </div><!-- .nk-tb-list -->
            <div v-if="Math.ceil(total / perPage) > 1" class="card">
              <div class="card-inner">
                <div class="pages float-right">
                  <vue-pagination
                    :current="currentPage"
                    :total="Math.ceil(total / perPage)"
                    @page-change="pageChangeHandler"
                  />
                </div>
              </div>
            </div>
          </div><!-- .nk-block -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleModal: false,
      // suppliers: [],
      activeIndex: null,
      loading: true,
      total: 0,
      perPage: 10,
      currentPage: 1,
      search: '',
      status: ''
    }
  },
  computed: {
    suppliers () {
      return this.$store.state.supplier.suppliers
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  created () {
    this.fetchCustomers()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    scrollToTop () {
      const element = document.querySelector('html')
      element.scroll({
        top: 90,
        behavior: 'smooth'
      })
    },
    async pageChangeHandler (page) {
      this.start()
      this.currentPage = page
      // const offset = ((this.currentPage - 1) * this.limit)
      await this.$store.dispatch('supplier/fetchSuppliers', {
        page: this.currentPage,
        limit: this.perPage,
        status: this.status,
        search: this.search
      })
      this.finish()
      this.scrollToTop()
    },
    async fetchCustomers () {
      const self = this
      await this.$axios.get('/supplier')
        .then(function (response) {
          self.total = response.data.payload.total
          self.$store.commit('supplier/SET_SUPPLIER', response.data.payload.data)
          self.$nuxt.$loading.finish()
        })
    },
    async removeSupplier (supplier) {
      const self = this
      self.$nuxt.$loading.start()
      await this.$axios.delete(`/supplier/delete/${supplier.id}`)
        .then(function (response) {
          self.fetchCustomers()
          self.$nuxt.$loading.finish()
        }).catch(function (ex) {
          self.fetchCustomers()
        })
    },
    async editSupplier (supplier) {
      await this.$store.commit('supplier/SET_EDIT_SUPPLIER', supplier)
      this.$router.push(`suppliers/${supplier.id}/edit`)
    }
  }
}
</script>

<style>

</style>
