<template>
  <div :class="$style.title">
    <h1 :class="$style.firstWord">{{ words[0] }}</h1>
    <h1 :class="$style.secondWord">{{ words[1] }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NavigationTitle',
  props: {
    title: {
      type: String,
      required: true,
      default: () => 'Test Title',
    },
  },
  computed: {
    words() {
      return this.title.split(' ')
    },
  },
}
</script>

<style lang="scss" module scoped>
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: $color-primary;
  h1 {
    font-size: 22px;
  }
}

.secondWord {
  font-weight: 300;
  color: white;
}
</style>
