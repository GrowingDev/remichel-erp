<template>
  <div class="form-title">
    <h1 class="form-title-first-word">{{ words[0] }}</h1>
    <h1 class="form-title-second-word">{{ words[1] }}</h1>
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

<style lang="scss" scoped>
.form-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: $background-primary;
  h1 {
    font-size: 25px;
  }
}

.form-title-second-word {
  font-weight: 100;

  color: $background-primary;
}
</style>
