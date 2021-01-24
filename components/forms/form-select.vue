<template>
  <label class="base-select">
    <div class="base-input-description"> {{ label }}</div>
    <select
      class="base-select-select"
      v-bind="$attrs"
      :value="value"
      @change="$emit('update', $event.target.value)"
    >
      <option disabled value="">{{ defaultOption }}</option>
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'FormSelect',

  props: ['value', 'defaultOption', 'label', 'options'],
   model: {
    prop: "value",
    event: "update"
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base-select {
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
.base-select-select {
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
</style>
