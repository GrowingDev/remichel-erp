<template>
  <div class="form-textarea">
    <textarea
      class="form-text-area"
      v-bind="$attrs"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseTextArea',
  props: ['value', 'label'],
  model: {
    prop: 'value',
    event: 'update',
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-textarea {
  margin-right: 10px;
}
.form-text-area {
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
