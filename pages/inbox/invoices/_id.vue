<template>
  <div id="incoming-invoice">
    <div id="incoming-invoice-basedata">
      <form-title
        preTitle="Rechnungs"
        title="anlage"
        isBlack
        style="align-self: center"
      />
      <div class="placeholder"></div>
      <form-input label="Firma" placeholder="Firma" />
      <form-input label="Belegnummer" placeholder="Belegnummer" />
      <form-input label="Rechnungsnummer" placeholder="Rechnungsnummer" />
      <form-select
        label="Rechnungstyp"
        defaultOption="Bitte wähle einen Rechnungstyp aus"
        :options="invoiceTypes"
      />
      <form-input label="Beschreibung" placeholder="Beschreibung" />
      <form-select
        label="Lieferant"
        defaultOption="Bitte wähle einen Lieferanten aus"
        :options="suppliers"
      />
      <form-select
        label="Lager"
        defaultOption="Bitte wähle ein Lager aus"
        :options="depots"
      />
      <form-select
        label="Lieferstatus"
        defaultOption="Bitte wähle den derzeitigen Lieferstatus aus"
        :options="statusTypes"
      />
      <form-input label="Rechnungsdatum" placeholder="Rechnungsdatum" />
      <form-input label="Eingegangen am" placeholder="Eingegangen am" />
      <form-currency-input label="Gesamtpreis Netto" />
      <form-currency-input label="Gesamtpreis Brutto" />
      <div class="list-container">
        <h2>Rechnungsposten</h2>
      </div>
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormCurrencyInput from '~/components/forms/form-currency-input.vue'
import FormInput from '~/components/forms/form-input.vue'
import FormSelect from '~/components/forms/form-select.vue'

export default {
  name: 'IncomingInvoicePage',
  components: {
    FormSelect,
    FormInput,
    FormCurrencyInput,
  },
  methods: {
    data() {
      return {
        document: {},
        openList: false,
        supplier: true,
      }
    },
  },
  computed: {
    statusTypes() {
      return [
        {
          value: 'AUSSTEHEND',
          text: 'AUSSTEHEND',
        },
        {
          value: 'GELIEFERT',
          text: 'GELIEFERT',
        },
      ]
    },
    invoiceTypes() {
      return [
        {
          value: 'LIEFERANT',
          text: 'LIEFERANT',
        },
        {
          value: 'BETRIEBSMITTEL',
          text: 'BETRIEBSMITTEL',
        },
        {
          value: 'DARLEHEN',
          text: 'DARLEHEN',
        },
        {
          value: 'ENTWICKLUNGSKOSTEN',
          text: 'ENTWICKLUNGSKOSTEN',
        },
        {
          value: 'LEASING',
          text: 'LEASING',
        },
        {
          value: 'BERATUNGSAUFWAND',
          text: 'BERATUNGSAUFWAND',
        },
        {
          value: 'LOGISTIK',
          text: 'LOGISTIK',
        },
        {
          value: 'MIETEN',
          text: 'MIETEN',
        },
        {
          value: 'VERSICHERUNGEN',
          text: 'VERSICHERUNGEN',
        },
        {
          value: 'WERBEMITTEL',
          text: 'WERBEMITTEL',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped >
#incoming-invoice {
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
    margin-left: 5px;
  }
  #incoming-invoice-basedata {
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
