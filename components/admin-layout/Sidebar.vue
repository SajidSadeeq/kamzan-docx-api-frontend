<template>
  <!-- sidebar @s -->
  <div class="nk-sidebar nk-sidebar-fixed is-light" :class="{'is-compact': toggleSideBar}" data-content="sidebarMenu">
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
    <div class="nk-sidebar-element">
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
            </li><!-- .nk-menu-item -->
            <li class="nk-menu-heading">
              <h6 class="overline-title text-primary-alt">
                Modules
              </h6>
            </li><!-- .nk-menu-heading -->
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/category" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-menu-squared" /></span>
                <span class="nk-menu-text">Category</span>
              </NuxtLink>
            </li><!-- .nk-menu-item -->
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/customer" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-users" /></span>
                <span class="nk-menu-text">Customers</span>
              </NuxtLink>
            </li><!-- .nk-menu-item -->
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/product" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Products</span>
              </NuxtLink>
            </li>
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/pallets-in-out" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Pallets In Out</span>
              </NuxtLink>
            </li>
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/pallets" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Pallets</span>
              </NuxtLink>
            </li>
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/brand" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-sign-sgd" /></span>
                <span class="nk-menu-text">Brands</span>
              </NuxtLink>
            </li>
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/suppliers" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-sign-sgd" /></span>
                <span class="nk-menu-text">Suppliers</span>
              </NuxtLink>
            </li>

            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/rack" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Racks</span>
              </NuxtLink>
            </li>
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/aisle" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Aisles</span>
              </NuxtLink>
            </li>
            <li class="nk-menu-item" @click="activeSubMenue('')">
              <NuxtLink to="/goods" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Goods</span>
              </NuxtLink>
            </li>
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
  </div>
  <!-- sidebar @e -->
</template>

<script>
export default {
  data () {
    return {
      toggleSideBar: false,
      link: this.$router.currentRoute.path
    }
  },
  methods: {
    activeSubMenue (currentLink) {
      this.link = currentLink
    }
  }
}
</script>

<style scoped>
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #9769ff;
  background: #ebeef2;
}
.nk-sidebar-content{
      max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    z-index: 1;
}
</style>
