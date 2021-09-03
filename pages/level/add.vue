<template>
  <div class="nk-content ">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Add Level
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
          <form action="#" class="form-validate" novalidate="novalidate" @submit.prevent="addLevel">
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
                        <div class="col-md-6">
                          <div class="col-md-10">
                            <div class="form-group">
                              <label class="form-label" for="name">Level ID</label>
                              <div class="form-control-wrap">
                                <input
                                  id="name"
                                  v-model="name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Level ID"
                                  required=""
                                >
                              </div>
                              <span v-if="containsKey(from_errors, 'name')" class="error">{{ from_errors.name[0] }}</span>
                            </div>
                          </div>
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
                  <NuxtLink to="/aisle" class="btn btn-danger d-md-inline-flex">
                    <em class="icon ni ni-back-ios" /><span>Back</span>
                  </NuxtLink>

                  <button type="submit" class="btn btn-primary" @submit.prevent="addAisle">
                    Save
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

export default {
  data () {
    return {
      tabPath: this.$route.fullPath,
      activeTab: 1,
      name: '',
      from_errors: []
    }
  },
  methods: {
    containsKey (obj, key) {
      return Object.keys(obj).includes(key)
    },
    addLevel () {
      const self = this
      this.$axios.post('level', {
        name: this.name
      }).then(function (response) {
        self.$router.push('/level')
      }).catch(function (error) {
        self.from_errors = error.response.data.data
      })
    }

  }
}
</script>
<style scoped>
</style>
