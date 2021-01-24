<template>
  <label class="base-input">
    <div class="base-input-description">{{ label }}</div>
    <input
      class="base-input-input"
      v-bind="$attrs"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'FormInput',
  props: ['value', 'label'],
    model: {
    prop: "value",
    event: "update"
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.base-input-description {
  background: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px;
  margin: 5px;
  color: #323232;
  text-transform: uppercase;
  align-self: stretch;
  text-align: left;
  min-width: 250px !important;
}
.base-input-input {
  border: none;
  background: #efefef;
  margin: 5px;
  height: 30px;
  min-height: 0;
  font-size: 12px !important;
  padding: 0;
  padding-left: 10px;
  cursor: pointer;
  outline-color: #323232;
  width: 100%;
}
.base-input-input:hover {
  background: #b6b6b6;
}
</style>
