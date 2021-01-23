<template>
  <div id="article">
    <div id="article-basedata">
      <form-title
        title="artikel anlage"
        style="align-self: center"
      />
      <div class="placeholder"></div>
      <form-input
        label="artikelnummer"
        placeholder="Artikelnummer"
        v-model="article.articleID"
      />
      <form-input
        label="Artikel"
        placeholder="Artikel"
        v-model="article.title"
      />
      <form-input
        label="Beschreibung"
        placeholder="Beschreibung"
        v-model="article.description"
      />
      <form-select
        label="Artikelgruppe"
        defaultOption="Bitte wählen Sie eine Artikelgruppe aus"
        :options="groups"
        v-model="article.group"
      />
      <form-select
        label="Lieferant"
        defaultOption="Bitte wählen Sie einen Lieferanten aus"
        :options="articleDetails.supplier"
      />
      <form-input
        label="Externe Artikelnummer"
        placeholder="Externe Artikelnummer"
        v-model="articleDetails.supplierArticleID"
      />
      <form-input label="EAN" placeholder="EAN" v-model="articleDetails.ean" />
      <h3>Kalkulation</h3>
      <form-currency-input
        label="Einkaufspreis"
        placeholder="Einkaufspreis"
        v-model="calculation.purchasingPrice_01"
      />
      <form-currency-input
        label="Aufschlag"
        placeholder="Aufschlag"
        v-model="calculation.surcharge"
      />
      <form-currency-input
        label="Netto"
        placeholder="Netto"
        v-model="calculation.net"
      />
      <form-currency-input
        label="Steuersatz in Prozent z.B 10%"
        placeholder="Steuersatz in Prozent z.B 10%"
        v-model="calculation.tax"
      />
      <form-currency-input
        label="Gesamt"
        placeholder="Gesamt"
        v-model="calculation.total"
      />
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormCurrencyInput from '~/components/forms/form-currency-input.vue'
import FormInput from '~/components/forms/form-input.vue'
import FormSelect from '~/components/forms/form-select.vue'
import FormTitle from '~/components/forms/form-title.vue'
import menuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  name: 'ArticlePage',
  components: { menuBar, FormInput, FormSelect, FormCurrencyInput, FormTitle },

  computed: {
    article() {
      return {}
    },
  },
  methods: {},

  data() {
    return {
      articleDetails: {
        supplier: '',
        supplierArticleID: '',
        ean: '',
        net: '',
      },
      calculation: {
        purchasingPrice_01: '',
        surcharge: '',
        tax: '',
        total: '',
      },
      groups: [
        {
          value: 'STANDARD',
          text: 'STANDARD',
        },
        {
          value: 'FLÜGEL',
          text: 'FLÜGEL',
        },
        {
          value: 'HALTEBÜGEL',
          text: 'HALTEBÜGEL',
        },
        {
          value: 'ETUI',
          text: 'ETUI',
        },
        {
          value: 'DESIGN',
          text: 'DESIGN',
        },
        {
          value: 'BÜGELHALTER',
          text: 'BÜGELHALTER',
        },
        {
          value: 'ÖFFNER',
          text: 'ÖFFNER',
        },
        {
          value: 'VERPACKUNG',
          text: 'VERPACKUNG',
        },
        {
          value: 'DRUCKERZEUGNIS',
          text: 'DRUCKERZEUGNIS',
        },
        {
          value: 'SONSTIGE',
          text: 'SONSTIGE',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped >
#article {
  padding: 100px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  float:right;
  width: calc(100vw - 320px);

  #article-basedata {
    background: white;
    padding: 50px;
    width: 210mm;
    text-transform: uppercase;
  }
}
</style>
