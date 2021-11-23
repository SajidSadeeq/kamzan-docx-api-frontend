<template>
  <div class="nk-content">
    <div class="container-fluid">
      <div class="nk-content-inner">
        <div class="nk-content-body">
          <div class="nk-block-head nk-block-head-sm">
            <div class="nk-block-between">
              <div class="nk-block-head-content">
                <h3 class="nk-block-title page-title">
                  Warehouse Map
                </h3>
              </div><!-- .nk-block-head-content -->
              <div class="nk-block-head-content">
                <ul class="nk-block-tools g-3">
                  <li>
                    <div class="legends">
                      Fill: <span class="lg_fill" /> Empty: <span class="lg_nfill" />
                    </div>
                  </li>
                  <li>
                    <NuxtLink to="/" class="btn btn-success d-md-inline-flex ml-2">
                      <em class="icon ni ni-back-arrow-fill" /><span>Back</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div><!-- nk-block-head -->
          <div class="nk-block nk-block-lg">
            <div class="card card-preview">
              <div class="whm-grid">
                <div class="whm-row head">
                  <div class="whm-name">
                    &nbsp;
                  </div>
                  <div class="whm-racks">
                    <div class="rack">
                      <div class="num">
                        &nbsp;
                      </div>
                      <div v-for="(rack, index) in racksList" :key="index" class="name">
                        {{ rack.name }}
                      </div>
                    </div>
                  </div>
                </div>

                <div v-for="(aisle, key) in map" :key="key" class="whm-row">
                  <div class="whm-name">
                    {{ key }}
                  </div>
                  <div class="whm-racks">
                    <div v-for="(location, index) in aisle" :key="index" class="rack">
                      <div class="num">
                        {{ index }}
                      </div>
                      <div v-for="(rackid, i) in location" :key="i" class="name">
                        <div :class="rackid.class" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><!-- .card -->
          </div><!-- nk-block -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      racksList: null,
      levelsList: null,
      aislesList: null,
      map: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  created () {
    // this.aisles()
    // this.levels()
    // this.racks()
    this.wharehouseMap()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    async aisles () {
      // return this.$store.state.aisle.aisles
      await this.$axios.get('/aisle/list')
        .then(function (response) {
          this.aislesList = response.data.payload
        })
    },
    async levels () {
    },
    async racks () {
      const self = this
      await this.$axios.get('/rack/list')
        .then(function (response) {
          self.racksList = response.data.payload
        })
    },
    async wharehouseMap () {
      const self = this
      await this.$axios.get('/dashboard/wharehour-map-chart')
        .then(function (response) {
          self.racksList = response.data.payload.racks
          self.map = response.data.payload.map
          self.$nuxt.$loading.finish()
        })
    }
  }
}
</script>

<style>

</style>
