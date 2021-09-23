<template>
  <div class="nk-content customer">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Customers
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content filters">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="more-options">
                    <ul class="nk-block-tools g-3">
                      <li>
                        <div class="form-control-wrap">
                          <div class="form-icon form-icon-right">
                            <em class="icon ni ni-search" />
                          </div>
                          <input id="search" v-model="search" type="text" class="form-control" placeholder="Search by name">
                        </div>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="javascript:;" class="btn btn-success d-md-inline-flex mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /> <span>Search</span>
                        </a>
                        <NuxtLink to="/customer/add" class="btn btn-primary d-md-inline-flex">
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
                <div class="nk-tb-col nk-tb-col-check">
                  <span class="sub-text">#</span>
                </div>
                <div class="nk-tb-col">
                  <span class="sub-text">Customer Name</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="sub-text">Email</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="sub-text">Street 1</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="sub-text">Street 2</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Country</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Last Order</span>
                </div>
                <div class="nk-tb-col tb-col-md status">
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

              <div v-for="(customer, index) in customers" :key="customer.id" class="nk-tb-item">
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ customer.id }}</span>
                </div>
                <div class="nk-tb-col">
                  <a href="javascript:;">
                    <div class="user-card">
                      <div class="user-avatar bg-primary">
                        <span>AB</span>
                      </div>
                      <div class="user-info">
                        <span class="tb-lead"> {{ customer.customer_name }} <span class="dot dot-success d-md-none ml-1" /></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ customer.email }}</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ customer.street_1 }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span>{{ customer.street_2 }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ customer.county }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ customer.street_2 }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-status text-success">Active</span>
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
                    <li class="parent-li">
                      <div class="drodown" :class="{'show': index === activeIndex }">
                        <p v-if="activeIndex === index" v-click-outside="onClickOutside" />
                        <a href="javascript:;" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" @click="activeIndex = activeIndex === index ? null : index">
                          <em class="icon ni ni-more-h" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" :class="{'show': index === activeIndex }">
                          <ul class="link-list-opt no-bdr">
                            <!-- <li><a href="html/ecommerce/customer-details.html"><em class="icon ni ni-eye" /><span>View Details</span></a></li> -->
                            <li>
                              <a
                                href="javascript:;"
                                @click="editCustomer(customer)"
                              ><em class="icon ni ni-edit" /><span>Edit Details</span></a>
                            </li>
                            <li><a href="javascript:;" @click="removeCustomer(customer)"><em class="icon ni ni-trash" /><span>Delete</span></a></li>
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
import Vue2ClickOutside from 'vue2-click-outside'
export default {
  directives: {
    clickOutside: Vue2ClickOutside.directive
  },
  data () {
    return {
      toggleModal: false,
      toggleHeader: false,
      activeIndex: null,
      loading: true,
      total: 0,
      currentPage: 1,
      search: '',
      status: '',
      perPage: 10
    }
  },
  computed: {
    customers () {
      return this.$store.state.customer.customers
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
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
    onClickOutside (event) {
      if (this.hasParentClass(event.target, 'parent-li') === false) {
        this.activeIndex = null
      }
    },
    hasParentClass (child, classname) {
      if (child.className.split(' ').includes(classname)) { return true }
      try {
        return child.parentNode && this.hasParentClass(child.parentNode, classname)
      } catch (TypeError) {
        return false
      }
    },

    toggleActive (index) {
      this.activeIndex = index
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
      this.total = await this.$store.dispatch('customer/fetchCustomers', {
        page: this.currentPage,
        search: this.search
        // status: this.status
      })
      this.finish()
      this.scrollToTop()
    },
    async fetchCustomers () {
      const _this = this
      await this.$axios.get('customer')
        .then(function (response) {
          _this.total = response.data.payload.total
          _this.$store.commit('customer/SET_CUSTOMER', response.data.payload.data)
          _this.$nuxt.$loading.finish()
        })
    },
    async removeCustomer (customer) {
      const self = this
      self.$nuxt.$loading.start()
      await this.$axios.delete(`/customer/delete/${customer.id}`)
        .then(function (response) {
          self.activeIndex = null
          self.fetchCustomers()
          self.$nuxt.$loading.finish()
        }).catch(function (ex) {
          self.fetchCustomers()
          self.$nuxt.$loading.finish()
        })
    },
    async editCustomer (customer) {
      await this.$store.commit('customer/SET_EDIT_CUSTOMER', customer)
      this.$router.push(`customer/${customer.id}/edit`)
    }
  }
}
</script>

<style>

</style>
