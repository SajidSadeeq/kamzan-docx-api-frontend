<template>
  <div class="nk-content customer">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Invocies
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
                          <input id="search" v-model="search" type="text" class="form-control" placeholder="Search by id">
                        </div>
                      </li>
                      <li class="nk-block-tools-opt">
                        <a href="javascript:;" class="btn btn-success d-md-inline-flex mr-2" @click="pageChangeHandler(1)">
                          <em class="icon ni ni-search" /> <span>Search</span>
                        </a>
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
                  <span class="sub-text">From</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="sub-text">To</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span class="sub-text">Total</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <span class="sub-text">Vat</span>
                </div>
                <div class="nk-tb-col tb-col-md status">
                  <span class="sub-text">Status</span>
                </div>
              </div><!-- .nk-tb-item -->
              <div v-for="(invoice, index) in invoices" :key="invoice.id" class="nk-tb-item">
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ invoice.id }}</span>
                </div>
                <div class="nk-tb-col">
                  <a href="javascript:;">
                    <div class="user-card">
                      <div class="user-info">
                        <span class="tb-lead"> {{ invoice.customer.customer_name }} <span class="dot dot-success d-md-none ml-1" /></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ invoice.invoice_from | formateDate }}</span>
                </div>
                <div class="nk-tb-col tb-col-mb">
                  <span class="tb-amount">{{ invoice.invoice_to | formateDate }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span>{{ invoice.total }}</span>
                </div>
                <div class="nk-tb-col tb-col-md">
                  <span>{{ invoice.vat }}</span>
                </div>
                <div class="nk-tb-col tb-col-lg">
                  <div class="custom-control custom-switch">
                    <input
                      :id="index"
                      type="checkbox"
                      :checked="(invoice.is_paid)?'checked':''"
                      class="custom-control-input"
                      @change="updateStatus($event, invoice.id)"
                    >
                    <label class="custom-control-label" :for="index">Switch</label>
                  </div>
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
import moment from 'moment'
import Vue2ClickOutside from 'vue2-click-outside'
export default {
  directives: {
    clickOutside: Vue2ClickOutside.directive
  },
  filters: {
    formateDate: date => date ? moment(date).format('DD-MM-YYYY') : 'n/a',
    formateTime: date => date ? moment(date, 'h:mm a').format('hh:mm a') : 'n/a',
    replace (st, rep, repWith) {
      const result = st.split(rep).join(repWith)
      return result
    }
  },
  data () {
    return {
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
    invoices () {
      return this.$store.state.invoice.invoices
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  created () {
    this.fetchInvoices()
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
      this.total = await this.$store.dispatch('invoice/fetchInvocies', {
        page: this.currentPage,
        search: this.search
        // status: this.status
      })
      this.finish()
      this.scrollToTop()
    },
    async fetchInvoices () {
      const self = this
      await this.$axios.get('invoice')
        .then(function (response) {
          self.total = response.data.payload.total
          self.$store.commit('invoice/SET_INVOICES', response.data.payload.data)
          self.$nuxt.$loading.finish()
        })
    },
    updateStatus (event, invoiceId) {
      const self = this
      self.$nuxt.$loading.start()
      this.$axios.post('invoice/update-status', {
        id: invoiceId,
        status: event.target.checked
      })
        .then(function (response) {
          self.$nuxt.$loading.finish()
          if (response.data.status) {
            self.$toast.success('Successfully updated')
          } else {
            self.$toast.error('Server Error')
          }
        })
    }
  }
}
</script>

<style>

</style>
