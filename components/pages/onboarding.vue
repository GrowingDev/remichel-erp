<template>
  <div id="onboarding">
    <div id="onboarding-header">
      <h2>{{ selectedPage.title }}</h2>
    </div>

    <div id="onboarding-body">
      <p id="onboarding-description">{{ selectedPage.description }}</p>
    </div>
    <div id="onboarding-footer">
      <button
        v-if="selectedPage.action.active"
        class="btn-default onboarding-next"
        @click="nextPage"
      >
        {{ selectedPage.action.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Onboarding',
  props: {
    pages: {
      type: Array,
      required: true,
      default: () => {},
    },
    action: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
  computed: {
    selectedPage() {
      return this.pages[this.index]
    },
  },
  data: () => {
    return {
      index: 0,
    }
  },
  methods: {
    nextPage() {
      this.index++
    },
  },
}
</script>

<style lang="scss">
#onboarding {
  color: $background-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  text-align: center;
  position: relative;
  top: 30%;
}

#onboarding-header {
  height: 50px;
  width: 100%;
  h2 {
    text-transform: uppercase;
    font-weight: 400;
  }
}
#onboarding-body {
  width: 100%;
  height: 150px;
  display:flex;
  flex-direction: column;
  justify-content: center;
}
#onboarding-footer {
  width: 100%;
  height: 50px;
}
</style>
