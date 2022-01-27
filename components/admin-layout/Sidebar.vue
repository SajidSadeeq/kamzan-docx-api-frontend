<template>
  <!-- sidebar @s -->
  <div class="nk-sidebar nk-sidebar-fixed is-dark" :class="{'is-compact nk-sidebar-active': toggleSideBar}" data-content="sidebarMenu">
    <div class="nk-sidebar-element nk-sidebar-head">
      <div class="nk-sidebar-brand">
        <NuxtLink to="/" class="logo-link nk-sidebar-logo">
          <img class="logo-dark logo-img" src="@/assets/admin/images/logo.webp" srcset="@/assets/admin/images/logo2x.png 2x" alt="logo-dark">
          <img class="logo-small logo-img logo-img-small" src="@/assets/admin/images/favicon.png" srcset="@/assets/admin/images/favicon.png 2x" alt="logo-small" width="50">
        </NuxtLink>
      </div>
      <div class="nk-menu-trigger mr-n2" @click="toggleSideBar = !toggleSideBar">
        <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left" /></a>
        <a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu" /></a>
      </div>
    </div><!-- .nk-sidebar-element -->
  </div>
  <!-- sidebar @e -->
</template>

<script>
export default {
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
      toggleSubMenueFinance: false,
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
      this.toggleSubMenueGoods = false
      this.toggleSubMenueReports = false
      this.toggleSubMenueFinance = false
      if (this.toggleSubMenueLations) {
        this.toggleSubMenueLations = false
      } else {
        this.toggleSubMenueLations = true
      }
    },
    toggleSubMenue2 () {
      this.toggleSubMenueLations = false
      this.toggleSubMenueReports = false
      this.toggleSubMenueFinance = false
      if (this.toggleSubMenueGoods) {
        this.toggleSubMenueGoods = false
      } else {
        this.toggleSubMenueGoods = true
      }
    },
    toggleSubMenue3 () {
      this.toggleSubMenueLations = false
      this.toggleSubMenueGoods = false
      this.toggleSubMenueFinance = false
      if (this.toggleSubMenueReports) {
        this.toggleSubMenueReports = false
      } else {
        this.toggleSubMenueReports = true
      }
    },
    toggleSubMenue4 () {
      this.toggleSubMenueLations = false
      this.toggleSubMenueGoods = false
      this.toggleSubMenueReports = false
      if (this.toggleSubMenueFinance) {
        this.toggleSubMenueFinance = false
      } else {
        this.toggleSubMenueFinance = true
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
