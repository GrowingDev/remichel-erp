<template>
  <li class="navigation-main-link" @click="closeSubNavigation">
    <NuxtLink :to="link.route" class="nuxt-link">

      <div class="navigation-main-link-icon">
        {{ link.index }}
      </div>
      {{ link.title }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'NavigationSubLink',
  props: {
    link: {
      type: Object,
      required: true,
      default: () => {
        return {
          index: '0',
          title: 'test',
          route: '/',
        }
      },
    },
  },
  methods: {
    closeSubNavigation() {
      if(this.link.title == 'zurück')
      this.$store.commit('navigation/toogleSubNavigation')
    }
  }
}
</script>

<style lang="scss">
.navigation-main-link {
  width: 100%;
  color: $menu-btn-color-default;
  position: relative;
  display: flex;
}
li:hover {
  background: $menu-btn-background-hover;

  .nuxt-link {
    color: $color-primary;
  }
  .navigation-main-link-icon {
    margin-right: 15px;
  }
}
.nuxt-link {
  text-decoration: none !important;
  color: $menu-btn-color-default;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;

}
.nuxt-link-exact-active,
.nuxt-link-active {
  color: $color-primary;
  background: $menu-btn-background-hover;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
}

.navigation-main-link-icon {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 800;
  transition: all 0.5s ease;
}
</style>
