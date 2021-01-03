<template>
  <div id="no-data-found">
    <div id="no-data-found-header">
      <h2>{{ selectedPage.title }}</h2>
    </div>

    <div id="no-data-found-body">
      <p id="no-data-found-description">{{ selectedPage.description }}</p>
    </div>
    <div id="no-data-found-footer">
      <button
        v-if="selectedPage.action.active"
        class="btn-default no-data-found-next"
        @click="nextPage"
      >
        {{ selectedPage.action.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoDataFound',
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
#no-data-found {
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

#no-data-found-header {
  height: 50px;
  width: 100%;
  h2 {
    text-transform: uppercase;
    font-weight: 400;
  }
}
#no-data-found-body {
  width: 100%;
  height: 150px;
  display:flex;
  flex-direction: column;
  justify-content: center;
}
#no-data-found-footer {
  width: 100%;
  height: 50px;
}
</style>
