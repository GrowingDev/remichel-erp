<template>
  <div :class="$style.title">
    <h1 :class="$style.firstWord">{{ words[0] }}</h1>
    <h1 :class="$style.secondWord">{{ words[1] }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
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
  color: $background-primary;
  h1 {
    font-size: 3.052rem;
    font-weight: 400;
  }
}

.secondWord {
  font-weight: 100;

  color: $background-primary;
}
</style>
