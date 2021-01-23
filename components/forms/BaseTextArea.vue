<template>
  <div class="base-textarea">
    <textarea
      class="base-text-area"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseTextArea',
  props: ['modelValue', 'label'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base-textarea {
  margin-right: 10px;
}
.base-text-area {
  border: none;
  background: #efefef;

  font-size: 12px !important;
  cursor: pointer;
  outline-color: #323232;
  padding: 10px;
  width: 100%;
  margin: 5px;
  height: 250px;
}
</style>
