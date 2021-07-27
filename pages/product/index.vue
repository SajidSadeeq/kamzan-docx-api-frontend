<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Products
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em
                    class="icon ni ni-more-v"
                  /></a>
                  <div class="toggle-expand-content" data-content="more-options">
                    <ul class="nk-block-tools g-3">
                      <li>
                        <div class="form-control-wrap">
                          <div class="form-icon form-icon-right">
                            <em class="icon ni ni-search" />
                          </div>
                          <input id="default-04" type="text" class="form-control" placeholder="Search by name">
                        </div>
                      </li>
                      <li>
                        <div class="drodown">
                          <a
                            href="#"
                            class="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                            data-toggle="dropdown"
                          >Status</a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <ul class="link-list-opt no-bdr">
                              <li><a href="#"><span>Actived</span></a></li>
                              <li><a href="#"><span>Inactived</span></a></li>
                              <li><a href="#"><span>Blocked</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="#" class="btn btn-icon btn-primary d-md-none"><em class="icon ni ni-plus" /></a>
                        <NuxtLink to="/product/add" class="btn btn-primary d-none d-md-inline-flex">
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
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid" />
                  </div>
                </div>
                <div class="nk-tb-col">
                  <span class="sub-text">Image</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="sub-text">Title</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="sub-text">Sku</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Price</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Size</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Weight</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Color</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="sub-text">Status</span>
                </div>
                <div class="nk-tb-col nk-tb-col-tools">
                  <ul class="nk-tb-actions gx-1 my-n1">
                    <li>
                      <div class="drodown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger mr-n1" data-toggle="dropdown"><em
                          class="icon ni ni-more-h"
                        /></a>
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

              <div v-for="(product, index) in products" :key="product.id" class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col">
                  <a href="html/ecommerce/customer-details.html">
                    <div class="user-card">
                      <div class="user-avatar bg-primary">
                        <span>AB</span>
                      </div>
                      <div class="user-info">
                        <!-- <span class="tb-lead"> {{ product.name }} <span class="dot dot-success d-md-none ml-1" /></span> -->
                      </div>
                    </div>
                  </a>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ product.name }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span>{{ product.sku }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ product.price }}  </span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ product.size }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ product.weight }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ product.color }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-status text-success">Active</span>
                  <span class="tb-status" :class="[ product.status ? 'text-success':'text-danger' ]">{{ (product.status == true) ? 'Active':'Inactive' }}</span>
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
                      <div class="dropdown" :class="{'show': index === activeIndex }">
                        <a
                          href="#"
                          class="dropdown-toggle btn btn-icon btn-trigger"
                          data-toggle="dropdown"
                          aria-expanded="true"
                          @click="activeIndex = activeIndex === index ? null : index"
                        >
                          <em class="icon ni ni-more-h" />
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          :class="{'show': index === activeIndex }"
                          x-placement="top-end"
                          style="position: absolute; transform: translate3d(-100px, -94px, 0px); top: 0px; left: 0px; will-change: transform;"
                        >
                          <ul class="link-list-opt no-bdr">
                            <li>
                              <a href="javascript:;"><em class="icon ni ni-eye" />
                                <span>View Details</span></a>
                            </li>
                            <li>
                              <a href="#" @click.prevent="editProduct(product)">
                                <em class="icon ni ni-repeat" /><span>Edit</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" @click.prevent="removeProduct(product.id)">
                                <em class="icon ni ni-activity-round" /><span>Remove</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
            </div><!-- .nk-tb-list -->
            <div class="card">
              <div class="card-inner">
                <div class="pages float-right">
                  <vue-pagination
                    :current="currentPage"
                    :total="Math.ceil(total / 10)"
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
import 'vue-sliding-pagination/dist/style/vue-sliding-pagination.css'

export default {
  data () {
    return {
      toggleModal: false,
      currentPage: 1,
      limit: 1,
      list_view: false,
      count: 0,
      total: 0,
      products: [],
      activeIndex: null,
      loading: true
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    async pageChangeHandler (page) {
      this.currentPage = page
      // const offset = ((this.currentPage - 1) * this.limit)
      await this.$store.dispatch('product/fetchProducts', {
        page: this.currentPage
      })
      this.products = this.$store.state.product.products
      this.scrollToTop()
    },
    scrollToTop () {
      const element = document.querySelector('html')
      element.scroll({
        top: 90,
        behavior: 'smooth'
      })
    },
    async fetchProducts () {
      const self = this
      await this.$axios.get('/product')
        .then(function (response) {
          self.products = response.data.payload.data
          self.total = response.data.payload.total
          self.$store.commit('product/SET_PRODUCTS', self.products)
        })
    },
    async removeProduct (productId) {
      const self = this
      await this.$axios.delete(`/product/delete/${productId}`)
        .then(function (response) {
          self.fetchProducts()
        }).catch(function (ex) {
          self.fetchProducts()
        })
    },
    async editProduct (product) {
      await this.$store.commit('product/SET_EDIT_PRODUCT', product)
      this.$router.push(`product/${product.id}/edit`)
    }
  }
}
</script>
