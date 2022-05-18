<template>
  <div>
    <navigation/>

    <Nuxt />
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation'
export default {
  components: {
    Navigation,
  }
}
</script>
<style lang="scss">
html {
   font-family: 'Manrope', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

}
body{
  max-height:100vh;
  padding-left: 320px;
  background: $background-secondary;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
