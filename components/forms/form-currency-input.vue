<template>
  <label class="form-currency-input">
    <div class="currency-input-description">{{ label }}</div>
    <input
      class="currency-input-input"
      v-bind="$attrs"
      :disabled="disabled"
      placeholder="00.00"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
    <p>€</p>
  </label>
</template>

<script>
export default {
  name: 'FormCurrencyInput',
  props: ['value', 'label', 'disabled'],
  model: {
    prop: 'value',
    event: 'update',
  },
  watch: {
    value(value) {
      return parseFloat(value).toFixed(2)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-currency-input {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  p {
    margin: 0;
    background: #efefef;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding-right: 10px;
    font-size: 12px !important;
  }
}

.currency-input-description {
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
  min-width: 70% !important;
}
.currency-input-input {
  border: none;
  background: #efefef;
  margin: 5px;
  margin-right: 0;
  height: 30px;
  min-height: 0;
  font-size: 12px !important;
  padding: 0;
  padding-left: 10px;

  cursor: pointer;
  outline-color: #323232;
  text-align: right;
  width: 30%;
}
</style>
