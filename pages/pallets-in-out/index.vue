<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Pallets In/Out
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <div class="toggle-wrap nk-block-tools-toggle">
                  <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em class="icon ni ni-more-v" /></a>
                  <div class="toggle-expand-content" data-content="more-options">
                    <ul class="nk-block-tools g-3">
                      <li>
                        <div class="form-group">
                          <label class="form-label">Datepicker Range</label>    <div class="form-control-wrap">
                            <div class="input-daterange date-picker-range input-group">
                              <input type="text" class="form-control">            <div class="input-group-addon">
                                TO
                              </div>            <input type="text" class="form-control">
                            </div>
                          </div>
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
                        <NuxtLink to="/pallets-in-out/add" class="btn btn-primary d-none d-md-inline-flex">
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
                  <span class="sub-text">Customer</span>
                </div>
                <div class="nk-tb-col pl-5">
                  <span class="sub-text">Pallet</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="sub-text">In By</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="sub-text">In Date</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="sub-text">Out By</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="sub-text">Out Date</span>
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
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->

              <div v-for="(pallet, index) in pallets" :key="pallet.id" class="nk-tb-item">
                <div class="nk-tb-col nk-tb-col-check">
                  <div class="custom-control custom-control-sm custom-checkbox notext">
                    <input id="uid1" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="uid1" />
                  </div>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ pallet.customer_id }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span>{{ pallet.pallet_id }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ pallet.in_by }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ pallet.in_date }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ pallet.out_by }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span>{{ pallet.out_date }}</span>
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
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown" @click="activeIndex = activeIndex === index ? null : index">
                          <em class="icon ni ni-more-h" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" :class="{'show': index === activeIndex }">
                          <ul class="link-list-opt no-bdr">
                            <li><a href="html/ecommerce/customer-details.html"><em class="icon ni ni-eye" /><span>View Details</span></a></li>
                            <li><a href="javascript:;" @click="editPallet(pallet)"><em class="icon ni ni-edit" /><span>Edit Details</span></a></li>
                            <li><a href="javascript:;" @click="removePallet(pallet)"><em class="icon ni ni-trash" /><span>Delete</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div><!-- .nk-tb-item -->
            </div><!-- .nk-tb-list -->
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
      pallets: [],
      toggleHeader: false,
      activeIndex: null,
      loading: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  created () {
    this.fetchPallets()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    toggleActive (index) {
      this.activeIndex = index
    },
    async fetchPallets () {
      const _this = this
      await this.$axios.get('pallets-in-out')
        .then(function (response) {
          _this.pallets = response.data.payload
          _this.$store.commit('palletinout/SET_PALLETS', _this.pallets)
          _this.$nuxt.$loading.finish()
        })
    },
    // async removePallet (customer) {
    //   const self = this
    //   await this.$axios.delete(`/pallets-in-out/delete/${customer.id}`)
    //     .then(function (response) {
    //       self.fetchCustomers()
    //     }).catch(function (ex) {
    //       self.fetchCustomers()
    //     })
    // },
    async editPallet (pallet) {
      await this.$store.commit('pallets-in-out/SET_EDIT_PALLET', pallet)
      this.$router.push(`pallets-in-out/${pallet.id}/edit`)
    }
  }
}
</script>

<style>

</style>
