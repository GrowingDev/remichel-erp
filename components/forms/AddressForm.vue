<template>
  <div class="address-form">
    <label class="base-input">
      <div class="base-input-description">Name</div>
      <input
        v-model="form.title"
        class="base-input-input--a"
        placeholder="Name"
      />
    </label>
    <label class="base-input">
      <div class="base-input-description"> Strasse / Strassen Nr</div>
      <input
        class="base-input-input--b"
        v-model="form.street"
        placeholder="Strasse"
      />
      <input
        v-model="form.streetNr"
        class="base-input-input--b"
        placeholder="Nr"
      />
    </label>
    <label class="base-input">
      <div class="base-input-description">Straßenzusatz</div>
      <input
        class="base-input-input--a"
        v-model="form.streetExtension"
        placeholder="Straßenzusatz"
      />
    </label>
    <label class="base-input">
      <div class="base-input-description"> Postleitzahl / ORT</div>
      <input
        class="base-input-input--b"
        v-model="form.postCode"
        placeholder="Postleitzahl"
      />
      <input
        class="base-input-input--b"
        v-model="form.city"
        placeholder="Ort"
      />
    </label>
    <label class="base-input">
      <div class="base-input-description">Land</div>
      <input
        class="base-input-input--a"
        v-model="form.country"
        placeholder="Land"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'AddressForm',
  props: {
    formData: Object,
  },
  data() {
    return {
      form: this.formData,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.address-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

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
  min-width: 250px !important;

  text-align: left;
}
.base-input-input--a {
  border: none;
  background: #efefef;
  margin: 5px;
  height: 30px;
  min-height: 0;
  width: 100%;
  font-size: 12px !important;
  padding: 0;
  padding-left: 10px;
  cursor: pointer;
  outline-color: #323232;
}
.base-input-input--b {
  border: none;
  background: #efefef;
  height: 30px;
  min-height: 0;
  font-size: 12px !important;
  padding: 0;
  padding-left: 10px;
  cursor: pointer;
  outline-color: #323232;
  width: 50%;
  margin: 5px;
}
.base-input-input--b:hover {
  background: #b6b6b6;
}
.base-input-input--a:hover {
  background: #b6b6b6;
}
</style>
