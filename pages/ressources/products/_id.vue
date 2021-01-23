<template>
  <div id="product">
    <div id="product-basedata">
      <form-title title="produkt anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input label="Setnummer" placeholder="Setnummer" />
      <form-input label="Bezeichnung" placeholder="Bezeichnung" />
      <form-input label="Kollektion" placeholder="Kollektion" />
      <form-input label="Furniture" placeholder="Furniture" />
      <form-input label="Inlay" placeholder="Inlay" />
      <form-input label="Etui" placeholder="Etui" />
      <form-input label="Verpackung" placeholder="Verpackung" />
      <form-input label="Maße Clip" placeholder="Maße Clip" />
      <form-input label="Gewicht Clip" placeholder="Gewicht Clip" />
      <form-input label="EAN" placeholder="EAN" />
      <form-input label="EORI" placeholder="EORI" />
      <h3>Kalkulation</h3>
      <form-currency-input label="Summe Artikel" />
      <form-currency-input label="Komplettierung" />
      <form-currency-input label="Überverpackung" />
      <form-currency-input label="Logistik" />
      <div class="placeholder"></div>
      <form-currency-input label="Gesamtsumme" />
      <form-currency-input label="Lizenzgebühr 6%" />
      <div class="placeholder"></div>
      <form-currency-input label="EP Netto" />
      <form-currency-input label="EH Spanne +100%" />
      <form-currency-input label="Gesamt Netto" />
      <form-currency-input label="Mehrwertsteuer 20%" />
      <form-currency-input label="VK B2C" />
      <div class="placeholder"></div>
      <form-currency-input label="RECHNUNGSBETRAG B2B NETTO" />
      <form-currency-input label="RECHNUNGSBETRAG B2B INKL. STEUER" />
      <form-currency-input label="RECHNUNGSBETRAG B2C NETTO" />
      <form-currency-input label="RECHNUNGSBETRAG B2C INKL. STEUER" />
      <div class="placeholder"></div>
      <form-images />
      <div class="list-container">
        <div class="placeholder"></div>
        <h2>Produktbestandteile</h2>
      </div>
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormCurrencyInput from '~/components/forms/form-currency-input.vue'
import FormImages from '~/components/forms/form-images.vue'
import FormInput from '~/components/forms/form-input.vue'
import FormSelect from '~/components/forms/form-select.vue'
import FormTitle from '~/components/forms/form-title.vue'
import menubar from '~/components/menu-bar/menu-bar.vue'

export default {
  name: 'ProductPage',
  components: {
    FormTitle,
    FormCurrencyInput,
    FormSelect,
    FormInput,
    menubar,
    FormImages,
  },

  data() {
    return {
      document: {
        productId: '',
        title: '',
      },
    }
  },

  methods: {
    updateList() {},
    saveDocument() {},
    deleteDocument() {},
  },
}
</script>


<style lang="scss" scoped >
#product {
  padding: 100px;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  float: right;
  width: calc(100vw - 320px);

  h3 {
    justify-self: flex-start;
    margin-bottom: 2rem;
    margin-top: 2rem;
    margin-left:5px;
  }
  #product-basedata {
    background: white;
    padding: 50px;
    width: 210mm;
    text-transform: uppercase;
  }
}
.placeholder {
  margin: 25px;
}
</style>
