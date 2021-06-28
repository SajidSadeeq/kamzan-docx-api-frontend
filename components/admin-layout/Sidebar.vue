<template>
  <!-- sidebar @s -->
  <div class="nk-sidebar nk-sidebar-fixed is-light" :class="{'is-compact': toggleSideBar}" data-content="sidebarMenu">
    <div class="nk-sidebar-element nk-sidebar-head">
      <div class="nk-sidebar-brand">
        <a href="html/index.html" class="logo-link nk-sidebar-logo">
          <img class="logo-light logo-img" src="@/assets/admin/images/logo.png" srcset="@/assets/admin/images/logo2x.png 2x" alt="logo">
          <img class="logo-dark logo-img" src="@/assets/admin/images/logo-dark.png" srcset="@/assets/admin/images/logo-dark2x.png 2x" alt="logo-dark">
          <img class="logo-small logo-img logo-img-small" src="@/assets/admin/images/logo-small.png" srcset="@/assets/admin/images/logo-small2x.png 2x" alt="logo-small">
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
            <li class="nk-menu-item">
              <NuxtLink to="/category" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-menu-squared" /></span>
                <span class="nk-menu-text">Category</span>
              </NuxtLink>
            </li><!-- .nk-menu-item -->
            <li class="nk-menu-item">
              <NuxtLink to="/customer" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-users" /></span>
                <span class="nk-menu-text">Customers</span>
              </NuxtLink>
            </li><!-- .nk-menu-item -->
            <li class="nk-menu-item">
              <NuxtLink to="/products" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Products</span>
              </NuxtLink>
            </li><!-- .nk-menu-item -->
            <li class="nk-menu-item">
              <NuxtLink to="/brand" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-building-fill" /></span>
                <span class="nk-menu-text">Brands</span>
              </NuxtLink>
            </li><!-- .nk-menu-item -->
            <li class="nk-menu-item">
              <NuxtLink to="/pallets" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-bag" /></span>
                <span class="nk-menu-text">Pallets</span>
              </NuxtLink>
            </li>
            <li class="nk-menu-item">
              <NuxtLink to="/suppliers" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-sign-sgd" /></span>
                <span class="nk-menu-text">Suppliers</span>
              </NuxtLink>
            </li><!-- .nk-menu-item -->
            <li class="nk-menu-item">
              <NuxtLink to="/orders" class="nk-menu-link">
                <span class="nk-menu-icon"><em class="icon ni ni-sign-sgd" /></span>
                <span class="nk-menu-text">Orders</span>
              </NuxtLink>
            </li><!-- .nk-menu-item -->
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
      toggleSideBar: false
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
</style>
