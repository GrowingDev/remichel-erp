<template>
  <div id="navigation">
    <div id="navigation-header">
      <navigation-title :title="'remichel homebase'" />
    </div>
    <div id="navigation-sub-header-placeholder">
      <h1 v-if="subNavigation" id="navigation-sub-header">
        {{ selectedSubNavigation.title }}
      </h1>
    </div>
    <div id="navigation-body">
      <transition-group
        v-if="!subNavigation"
        class="menu-list"
        name="menu-list"
        tag="ul"
        appear
      >
        <navigation-main-link
          v-for="(link, i) in mainNavigation"
          :key="link.index"
          :link="link"
          :index="i"
        />
      </transition-group>
      <ul v-if="subNavigation" class="sub-menu-list">
        <navigation-sub-link
          v-for="link in selectedSubNavigation.links"
          :key="link.index"
          :link="link"
        />
      </ul>
    </div>

    <div id="navigation-footer">
      <navigation-signout />
    </div>
  </div>
</template>

<script>
import NavigationMainLink from './components/navigation-main-link.vue'
import NavigationSignout from './components/navigation-signout'
import navigationSubLink from './components/navigation-sub-link.vue'
import NavigationTitle from './components/navigation-title'

export default {
  name: 'Navigation',
  components: {
    NavigationTitle,
    NavigationSignout,
    NavigationMainLink,
    navigationSubLink,
    NavigationTitle,
  },
  mounted() {
    window.addEventListener('keypress', (e) => {
      var regexp = new RegExp('^[0-9]+$')
      if (e.key.match(regexp)) {
        if (!this.subNavigation) {
          if (e.key != '0') {
           // this.$store.commit('navigation/selectSubNavigation', e.key - 1)
          }
        } else {
          if (e.key == '0') {
           // this.$store.commit('navigation/toogleSubNavigation')
          } else {
           // this.$store.commit('navigation/navigateTo', parseInt(e.key))
          }
        }
      }
    })
  },
  computed: {
    subNavigation() {
      return this.$store.state.navigation.subNavigation
    },
    selectedSubNavigation() {
      return this.$store.state.navigation.selectedSubNavigation
    },
    mainNavigation() {
      return this.$store.state.navigation.mainNavigation
    },
  },
}
</script>

<style lang="scss">
#navigation {
  width: 320px;
  background: $background-primary;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 0;
}

#navigation-header,
#navigation-footer {
  width: 100%;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
#navigation-header {
  padding-left: 50px;
}
#navigation-sub-header-placeholder {
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 50px;
}
#navigation-sub-header {
  color: white;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
}
#navigation-body {
  display: flex;
  flex-direction: column !important;
  justify-content: flex-start;
  height: 100%;
}
.sub-menu-list,
.menu-list {
  list-style: none;
  padding: 0;
}
.sub-menu-list {
  background: $background-primary;
  position: absolute;
  z-index: 3 !important;
  width: 320px;
  top: 190px;
}

.menu-list-enter-active,
.menu-list-leave-active {
  transition: all 1s;
}

.menu-list-enter {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
