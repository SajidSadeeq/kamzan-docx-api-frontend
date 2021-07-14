<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Brands
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
                          <input id="default-04" type="text" class="form-control" placeholder="Search by name">
                        </div>
                      </li>
                      <li>
                        <div class="drodown">
                          <a href="#" class="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white" data-toggle="dropdown">Status</a>
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
                        <NuxtLink to="/brand/add" class="btn btn-primary d-none d-md-inline-flex">
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
                  <span class="sub-text">Title</span>
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

              <div v-for="(brand, index) in brands" :key="brand.id" class="nk-tb-item">
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
                        <span class="tb-lead"> {{ brand.title }} <span class="dot dot-success d-md-none ml-1" /></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="tb-status" :class="[ brand.status ? 'text-success':'text-danger' ]">{{ (brand.status == true) ? 'Active':'Inactive' }}</span>
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
                          class="text-soft dropdown-toggle btn btn-icon btn-trigger"
                          data-toggle="dropdown"
                          aria-expanded="true"
                          @click="activeIndex = activeIndex === index ? null : index"
                        >
                          <em class="icon ni ni-more-h" />
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right dropdown-menu-xs"
                          :class="{'show': index === activeIndex }"
                          x-placement="top-end"
                          style="position: absolute; transform: translate3d(-100px, -94px, 0px); top: 0px; left: 0px; will-change: transform;"
                        >
                          <ul class="link-list-plain">
                            <li><a href="#">View</a></li>
                            <li><a href="#" @click.prevent="editBrand(brand)">Edit</a></li>
                            <li><a href="#" @click.prevent="removeBrand(brand.id)">Remove</a></li>
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
                <div class="nk-block-between-md g-3">
                  <div class="g">
                    <ul class="pagination justify-content-center justify-content-md-start">
                      <li class="page-item">
                        <a class="page-link" href="#"><em class="icon ni ni-chevrons-left" /></a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <span class="page-link"><em class="icon ni ni-more-h" /></span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">6</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">7</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#"><em class="icon ni ni-chevrons-right" /></a>
                      </li>
                    </ul><!-- .pagination -->
                  </div>
                  <div class="g">
                    <div class="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                      <div>Page</div>
                      <div>
                        <select
                          class="form-select form-select-sm select2-hidden-accessible"
                          data-search="on"
                          data-dropdown="xs center"
                          data-select2-id="1"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="page-1" data-select2-id="3">
                            1
                          </option>
                          <option value="page-2">
                            2
                          </option>
                          <option value="page-4">
                            4
                          </option>
                          <option value="page-5">
                            5
                          </option>
                          <option value="page-6">
                            6
                          </option>
                          <option value="page-7">
                            7
                          </option>
                          <option value="page-8">
                            8
                          </option>
                          <option value="page-9">
                            9
                          </option>
                          <option value="page-10">
                            10
                          </option>
                          <option value="page-11">
                            11
                          </option>
                          <option value="page-12">
                            12
                          </option>
                          <option value="page-13">
                            13
                          </option>
                          <option value="page-14">
                            14
                          </option>
                          <option value="page-15">
                            15
                          </option>
                          <option value="page-16">
                            16
                          </option>
                          <option value="page-17">
                            17
                          </option>
                          <option value="page-18">
                            18
                          </option>
                          <option value="page-19">
                            19
                          </option>
                          <option value="page-20">
                            20
                          </option>
                        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 41px;"><span class="selection"><span
                          class="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-xiaa-container"
                        ><span id="select2-xiaa-container" class="select2-selection__rendered" role="textbox" aria-readonly="true" title="1">1</span><span class="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span class="dropdown-wrapper" aria-hidden="true" /></span>
                      </div>
                      <div>OF 102</div>
                    </div>
                  </div><!-- .pagination-goto -->
                </div><!-- .nk-block-between -->
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
      brands: [],
      activeIndex: null,
      loading: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  created () {
    this.fetchBrands()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    async fetchBrands () {
      const self = this
      await this.$axios.get('/brand')
        .then(function (response) {
          self.brands = response.data.payload.data
          self.$store.commit('brand/SET_BRAND', self.categories)
          self.$nuxt.$loading.finish()
        })
    },
    async removeBrand (brand) {
      const self = this
      self.$nuxt.$loading.start()
      await this.$axios.delete(`/brand/delete/${brand}`)
        .then(function (response) {
          self.$nuxt.$loading.finish()
          self.fetchBrands()
        }).catch(function (ex) {
          self.fetchBrands()
        })
    },
    async editBrand (brand) {
      await this.$store.commit('brand/SET_EDIT_CATEGORY', brand)
      this.$router.push(`brand/${brand.id}/edit`)
    }
  }
}
</script>

<style>

</style>
