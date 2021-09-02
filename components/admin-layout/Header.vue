<template>
  <div class="nk-header nk-header-fixed is-light">
    <div class="container-fluid">
      <div class="nk-header-wrap">
        <div class="nk-menu-trigger d-xl-none ml-n1">
          <a href="javascript:;" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu" @click="toggleSideBar = !toggleSideBar"><em class="icon ni ni-menu" /></a>
        </div>
        <div class="nk-header-brand d-xl-none">
          <a href="html/index.html" class="logo-link">
            <img class="logo-dark logo-img" src="@/assets/admin/images/logo.png" srcset="@/assets/admin/images/logo2x.png 2x" alt="logo">
            <!-- <img class="logo-dark logo-img" src="@/assets/admin/images/logo-dark.png" srcset="@/assets/admin/images/logo-dark2x.png 2x" alt="logo-dark"> -->
          </a>
        </div><!-- .nk-header-brand -->
        <div class="nk-header-search ml-3 ml-xl-0">
          <em class="icon ni ni-search" />
          <input type="text" class="form-control border-transparent form-focus-none" placeholder="Search anything">
        </div><!-- .nk-header-news -->
        <div class="nk-header-tools">
          <ul class="nk-quick-nav">
            <li class="dropdown user-dropdown">
              <a href="javascript:;" class="dropdown-toggle mr-n1" data-toggle="dropdown" @click="toggleHeaderDropdown">
                <div class="user-toggle">
                  <div class="user-avatar sm">
                    <img :src="user.profile_photo_url">
                  </div>
                  <div class="user-info d-none d-xl-block">
                    <div class="user-name dropdown-indicator text-capitalize">{{ user.name }}</div>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-md dropdown-menu-right" :class="{show:toggleHeader}">
                <div v-click-outside="onClickOutside" class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                  <div class="user-card">
                    <div class="user-avatar">
                      <span><img :src="user.profile_photo_url"></span>
                    </div>
                    <div class="user-info">
                      <span class="lead-text text-capitalize">{{ user.name }}</span>
                      <span class="sub-text">{{ user.email }}</span>
                    </div>
                  </div>
                </div>
                <!-- <div class="dropdown-inner">
                  <ul class="link-list">
                    <li><a href="html/user-profile-regular.html"><em class="icon ni ni-user-alt" /><span>View Profile</span></a></li>
                    <li><a href="html/user-profile-setting.html"><em class="icon ni ni-setting-alt" /><span>Account Setting</span></a></li>
                    <li><a href="html/user-profile-activity.html"><em class="icon ni ni-activity-alt" /><span>Login Activity</span></a></li>
                    <li><a class="dark-switch" href="#"><em class="icon ni ni-moon" /><span>Dark Mode</span></a></li>
                  </ul>
                </div> -->
                <div class="dropdown-inner">
                  <ul class="link-list">
                    <li><a href="javascript:;" @click.prevent="logout"><em class="icon ni ni-signout" /><span>Sign out</span></a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div><!-- .nk-header-wrap -->
    </div><!-- .container-fliud -->
  </div>
</template>

<script>
import Vue2ClickOutside from 'vue2-click-outside'
export default {
  directives: {
    clickOutside: Vue2ClickOutside.directive
  },
  data () {
    return {
      toggleHeader: false,
      user: this.$auth.user
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
  methods: {
    toggleHeaderDropdown () {
      const _this = this
      _this.toggleHeader = !_this.toggleHeader
    },
    onClickOutside (event) {
      if (this.hasParentClass(event.target, 'dropdown') === false && this.toggleHeader) {
        this.toggleHeader = false
      }
    },
    hasParentClass (child, classname) {
      if (child.className.split(' ').includes(classname)) { return true }
      try {
        // Throws TypeError if child doesn't have parent any more
        return child.parentNode && this.hasParentClass(child.parentNode, classname)
      } catch (TypeError) {
        return false
      }
    },
    async logout () {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
