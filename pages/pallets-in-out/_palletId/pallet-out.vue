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
                    Pallet Out
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
                          <a href="javascript:;" class="btn btn-primary d-none d-md-inline-flex mr-2" @click="outPallet()">
                            <em class="icon ni ni-plus" /> <span>Update</span>
                          </a>
                          <NuxtLink to="/pallets-in-out" class="btn btn-danger d-none d-md-inline-flex">
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
                      /><span>Schedule</span></a>
                    </li>
                    <!-- <li class="nav-item" @click="activeTab = 2">
                        <a class="nav-link" :class="{ active: activeTab === 2 }" data-toggle="tab" href="#meta"><em class="icon ni ni-link" /><span>Meta</span></a>
                      </li> -->
                  </ul>
                  <div class="tab-content">
                    <div id="tabItem5" class="tab-pane " :class="{ active: activeTab === 1 }">
                      <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addRack">
                        <div class="row g-gs">
                          <div class="col-md-6 border-right">
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="in_date">Out Time</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="out_time"
                                    v-model="out_time"
                                    type="time"
                                    class="form-control"
                                    name="out_time"
                                    required=""
                                  >
                                  <span v-if="containsKey(from_errors, 'out_time')" class="invalid">{{ from_errors.out_time[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-10 mt-2">
                              <div class="form-group">
                                <label class="form-label" for="in_date">Out Date</label>
                                <div class="form-control-wrap">
                                  <input
                                    id="out_date"
                                    v-model="out_date"
                                    type="date"
                                    class="form-control"
                                    name="out_date"
                                    required=""
                                  >
                                  <span v-if="containsKey(from_errors, 'out_date')" class="invalid">{{ from_errors.out_date[0] }}</span>
                                </div>
                              </div>
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
      customer_id: '',
      out_date: '',
      out_time: '',
      from_errors: [],
      apiSearchCustomerUrl: process.env.APP_URL + 'common/search-customers',
      apiSearchPalletsUrl: process.env.APP_URL + 'common/search-pallets',
      customer_order_id: this.$route.params.palletId
    }
  },
  computed: {
    pallet () {
      return this.$store.state.palletinout.edit_pallet
    }
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    customerselected (customer) {
      this.customer_id = customer.id
    },
    outPallet () {
      const self = this
      this.$axios.post('pallets-in-out/pallet-out', {
        out_date: self.out_date,
        out_time: self.out_time,
        customer_order_id: self.customer_order_id
      }).then(function (response) {
        self.$router.push('/pallets-in-out')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    }

  }
}
</script>
<style scoped>
</style>
