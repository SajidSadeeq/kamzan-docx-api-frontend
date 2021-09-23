<template>
  <!-- sidebar @s -->
  <div class="nk-sidebar nk-sidebar-fixed is-dark" :class="{'is-compact nk-sidebar-active': toggleSideBar}" data-content="sidebarMenu">
    <div class="nk-sidebar-element nk-sidebar-head">
      <div class="nk-sidebar-brand">
        <a href="html/index.html" class="logo-link nk-sidebar-logo">
          <!-- <img class="logo-light logo-img" src="@/assets/admin/images/logo-old.png" srcset="@/assets/admin/images/logo2x-old.png 2x" alt="logo"> -->
          <img class="logo-dark logo-img" src="@/assets/admin/images/logo.webp" srcset="@/assets/admin/images/logo2x.png 2x" alt="logo-dark">
          <!-- <img class="logo-dark logo-img" src="@/assets/admin/images/logo-dark.png" srcset="@/assets/admin/images/logo-dark2x.png 2x" alt="logo-dark"> -->
          <img class="logo-small logo-img logo-img-small" src="@/assets/admin/images/favicon.png" srcset="@/assets/admin/images/favicon.png 2x" alt="logo-small">
        </a>
      </div>
      <div class="nk-menu-trigger mr-n2" @click="toggleSideBar = !toggleSideBar">
        <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left" /></a>
        <a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu" /></a>
      </div>
    </div><!-- .nk-sidebar-element -->
    <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
      <div class="nk-sidebar-element child-wrap">
        <div class="nk-sidebar-content">
          <div class="nk-sidebar-menu" data-simplebar>
            <ul class="nk-menu">
              <li class="nk-menu-heading">
                <h6 class="overline-title text-primary-alt">
                  Dashboard
                </h6>
              </li><!-- .nk-menu-item -->
              <li class="nk-menu-item">
                <NuxtLink to="/" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                  <span class="nk-menu-text">Dashboard</span><span class="nk-menu-badge badge-danger">HOT</span>
                </NuxtLink>
              </li>
              <!-- .nk-menu-item -->
              <li class="nk-menu-heading">
                <h6 class="overline-title text-primary-alt">
                  Modules
                </h6>
              </li><!-- .nk-menu-heading -->
              <!-- <li class="nk-menu-item" @click="activeSubMenue('')">
                <NuxtLink to="/category" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-menu-squared" /></span>
                  <span class="nk-menu-text">Category</span>
                </NuxtLink>
              </li> -->
              <!-- .nk-menu-item -->
              <li class="nk-menu-item" @click="activeSubMenue('')">
                <NuxtLink to="/customer" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-users" /></span>
                  <span class="nk-menu-text">Customers</span>
                </NuxtLink>
              </li><!-- .nk-menu-item -->
              <!-- <li class="nk-menu-item" @click="activeSubMenue('')">
                <NuxtLink to="/product" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                  <span class="nk-menu-text">Products</span>
                </NuxtLink>
              </li> -->
              <li class="nk-menu-item" @click="activeSubMenue('')">
                <NuxtLink to="/pallets-in-out" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                  <span class="nk-menu-text">Goods Movement</span>
                </NuxtLink>
              </li>
              <!-- <li class="nk-menu-item" @click="activeSubMenue('')">
                <NuxtLink to="/pallets" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                  <span class="nk-menu-text">Pallets</span>
                </NuxtLink>
              </li> -->
              <!-- <li class="nk-menu-item" @click="activeSubMenue('')">
                <NuxtLink to="/brand" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-sign-sgd" /></span>
                  <span class="nk-menu-text">Brands</span>
                </NuxtLink>
              </li> -->
              <!-- <li class="nk-menu-item" @click="activeSubMenue('')">
                <NuxtLink to="/suppliers" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-sign-sgd" /></span>
                  <span class="nk-menu-text">Suppliers</span>
                </NuxtLink>
              </li> -->
              <li class="nk-menu-item has-sub" :class="{active: (link == '/aisle' || link == '/rack' || link == '/level' || toggleSubMenueLations)}" @click="toggleSubMenue1()">
                <a
                  href="javascript:;"
                  class="nk-menu-link nk-menu-toggle"
                  data-original-title=""
                  title=""
                >
                  <span class="nk-menu-icon"><em class="icon ni ni-tile-thumb-fill" /></span>
                  <span class="nk-menu-text">Locations</span>
                </a>
                <ul v-show="(link == '/aisle' || link == '/rack' || link == '/level' || link == '/rack-location' || toggleSubMenueLations)" class="nk-menu-sub">
                  <li class="nk-menu-item" @click="activeSubMenue('')">
                    <NuxtLink to="/aisle" class="nk-menu-link">
                      <!-- <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span> -->
                      <span class="nk-menu-text">Aisles</span>
                    </NuxtLink>
                  </li>
                  <li class="nk-menu-item" @click="activeSubMenue('')">
                    <NuxtLink to="/level" class="nk-menu-link">
                      <!-- <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span> -->
                      <span class="nk-menu-text">Levels</span>
                    </NuxtLink>
                  </li>
                  <li class="nk-menu-item" @click="activeSubMenue('')">
                    <NuxtLink to="/rack" class="nk-menu-link">
                      <!-- <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span> -->
                      <span class="nk-menu-text">Racks</span>
                    </NuxtLink>
                  </li>
                  <li class="nk-menu-item" @click="activeSubMenue('')">
                    <NuxtLink to="/rack-location" class="nk-menu-link">
                      <!-- <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span> -->
                      <span class="nk-menu-text">Rack Locations</span>
                    </NuxtLink>
                  </li>
                </ul><!-- .nk-menu-sub -->
              </li>
              <li class="nk-menu-item has-sub" :class="{active: (link == '/goods' || link == '/product' || toggleSubMenueGoods)}" @click="toggleSubMenue2()">
                <a
                  href="javascript:;"
                  class="nk-menu-link nk-menu-toggle"
                  data-original-title=""
                  title=""
                >
                  <span class="nk-menu-icon"><em class="icon ni ni-tile-thumb-fill" /></span>
                  <span class="nk-menu-text">Goods</span>
                </a>
                <ul v-show="(link == '/goods' || link == '/product' || toggleSubMenueGoods)" class="nk-menu-sub">
                  <li class="nk-menu-item" @click="activeSubMenue('')">
                    <NuxtLink to="/product" class="nk-menu-link">
                      <!-- <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span> -->
                      <span class="nk-menu-text">Products</span>
                    </NuxtLink>
                  </li>
                  <li class="nk-menu-item" @click="activeSubMenue('')">
                    <NuxtLink to="/goods" class="nk-menu-link">
                      <!-- <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span> -->
                      <span class="nk-menu-text">Goods</span>
                    </NuxtLink>
                  </li>
                </ul><!-- .nk-menu-sub -->
              </li>
              <!-- <li class="nk-menu-item has-sub" :class="{active: (link == '/reports/customer-stock' || link == '/reports/stock-history' || toggleSubMenueReports)}" @click="toggleSubMenue3()">
                <a
                  href="javascript:;"
                  class="nk-menu-link nk-menu-toggle"
                  data-original-title=""
                  title=""
                >
                  <span class="nk-menu-icon"><em class="icon ni ni-tile-thumb-fill" /></span>
                  <span class="nk-menu-text">Reports</span>
                </a>
                <ul v-show="(link == '/reports/customer-stock' || link == '/reports/stock-history' || toggleSubMenueReports)" class="nk-menu-sub">
                  <li class="nk-menu-item" @click="activeSubMenue('')">
                    <NuxtLink to="/reports/customer-stock" class="nk-menu-link">
                      <span class="nk-menu-text">Customer Stock Report</span>
                    </NuxtLink>
                  </li>
                  <li class="nk-menu-item" @click="activeSubMenue('')">
                    <NuxtLink to="/reports/stock-history" class="nk-menu-link">
                      <span class="nk-menu-text">Stock History Report</span>
                    </NuxtLink>
                  </li>
                </ul>
              </li> -->
              <!-- <li class="nk-menu-item" @click="activeSubMenue('')">
                <NuxtLink to="/goods" class="nk-menu-link">
                  <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                  <span class="nk-menu-text">Goods</span>
                </NuxtLink>
              </li> -->
            <!-- <li class="nk-menu-item has-sub" :class="(link == '/reports' || link == '/reports') ? 'active':''" @click="activeSubMenue('/reports')">
              <NuxtLink to="#" class="nk-menu-link nk-menu-toggle" data-original-title="" title="">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Reports</span>
              </NuxtLink>
              <ul class="nk-menu-sub" style="(link == '/reports/goods-in' || link == '/reports/goods-out') ? 'display: block;':'display: none;'">
                <li class="nk-menu-item">
                  <NuxtLink to="/reports/goods-in" class="nk-menu-link">
                    <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                    <span class="nk-menu-text">Goods In</span>
                  </NuxtLink>
                </li>
                <li class="nk-menu-item">
                  <NuxtLink to="/reports/goods-out" class="nk-menu-link">
                    <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                    <span class="nk-menu-text">Goods Out</span>
                  </NuxtLink>
                </li>
              </ul> /* .nk-menu-sub */
            </li> -->
            </ul><!-- .nk-menu -->
          </div><!-- .nk-sidebar-menu -->
        </div><!-- .nk-sidebar-content -->
      </div><!-- .nk-sidebar-element -->
    </vue-custom-scrollbar>
  </div>
  <!-- sidebar @e -->
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
export default {
  components: {
    'vue-custom-scrollbar': vueCustomScrollbar
  },
  data () {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      },
      toggleSubMenueLations: false,
      toggleSubMenueGoods: false,
      toggleSubMenueReports: false,
      link: this.$router.currentRoute.path,
      bar: {
        showDelay: 500,
        onlyShowBarOnScroll: true,
        keepShow: false,
        background: '#c1c1c1',
        opacity: 1,
        hoverStyle: false,
        specifyBorderRadius: false,
        minSize: 0,
        size: '6px',
        disable: false
      },
      operation: {
        rail: {
          size: '20px'
        },
        bar: {
          size: '15px',
          opacity: 0.5,
          onlyShowBarOnScroll: false
        }
      },
      ops: {
        rail: {
          opacity: '0.2',
          background: undefined,
          border: '1px solid #cecece',
          size: '15px'
        },
        bar: {
          background: '#00ff00',
          keepShow: false,
          size: '10px',
          minSize: 0.2
        },
        scrollButton: {
          enable: true,
          background: '#cecece'
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 800
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: false,
          locking: true,
          checkShifKey: true
        }
      }
    }
  },
  computed: {
    toggleSideBar: {
      get () {
        return this.$store.state.toggleSideBar
      },
      set (val) {
        this.$store.commit('TOGGLE_SIDE_BAR', val)
      }
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      if (to.path !== '/aisle' || to.path !== '/rack' || to.path !== '/level') {
        this.toggleSubMenue = false
      }
    }
  },
  methods: {
    scrollHanle (evt) {
      // console.log(evt)
    },
    activeSubMenue (currentLink) {
      // this.link = currentLink
      this.link = this.$route.path
    },
    toggleSubMenue1 () {
      if (this.toggleSubMenueLations) {
        this.toggleSubMenueLations = false
      } else {
        this.toggleSubMenueLations = true
      }
      this.toggleSubMenueGoods = false
    },
    toggleSubMenue2 () {
      this.toggleSubMenueLations = false
      if (this.toggleSubMenueGoods) {
        this.toggleSubMenueGoods = false
      } else {
        this.toggleSubMenueGoods = true
      }
    },
    toggleSubMenue3 () {
      this.toggleSubMenueLations = false
      this.toggleSubMenueGoods = false
      if (this.toggleSubMenueReports) {
        this.toggleSubMenueReports = false
      } else {
        this.toggleSubMenueReports = true
      }
    }
  }
}
</script>

<style scoped>
.nk-sidebar.is-dark{
      background: #132238;
}
.nk-sidebar.is-dark .nk-menu-link, .nk-sidebar.is-dark .nk-menu-icon{
  color:#9ca3af;
}

.nk-sidebar.is-dark .nk-menu-link:hover, .nk-sidebar.is-dark .nk-menu-link:hover .nk-menu-icon{
  color:#fff;
}
.nk-sidebar.is-dark a.nuxt-link-exact-active, .nk-sidebar.is-dark a.nuxt-link-exact-active .nk-menu-icon {
  color:#fff; background: #182536;
}

.nk-sidebar.is-dark .nk-sidebar-element { overflow: unset;}

a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #9769ff;
  background: #ebeef2;
}
/* .nk-sidebar-content{
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    z-index: 1;
} */

.nk-sidebar-content{
    scroll-behavior: smooth;
    /* z-index: 1; */
}

.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  max-height: 100%;
}
 .is-dark .logo-dark {opacity: 1;}
 .is-dark .logo-small { opacity: 0;}
 .is-dark.is-compact .logo-dark {opacity: 0;}
 .is-dark.is-compact .logo-small { opacity: 1;}
 .is-dark.is-compact .nk-sidebar-head { padding: 14px; }
</style>
