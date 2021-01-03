<template>
  <div class="loading-spinner"></div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
}
</script>

<style lang="scss">
.loading-spinner {
  border: 5px solid #cccccc;
  border-top: 5px solid $background-primary;

  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  position: relative;
  top: calc(50% - 90px);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
