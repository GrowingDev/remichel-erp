<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="kunden anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input label="Kundennummer" placeholder="Kundennummer" />
      <form-input label="Kundengruppe" placeholder="Kundengruppe" />
      <section class="section-container" v-if="!privateCustomer">
        <form-input label="Steuernummer" placeholder="Steuernummer" />
        <form-input label="UID" placeholder="UID" />
        <form-input label="EORI" placeholder="EORI" />
        <form-input label="Homepage" placeholder="Homepage" />
      </section>
      <h3>Ansprechpartner</h3>
      <form-input label="Anrede" placeholder="Anrede" />
      <form-input label="Vorname" placeholder="Vorname" />
      <form-input label="Nachname" placeholder="Nachname" />
      <form-input
        label="Primäre Telefonnummer"
        placeholder="Primäre Telefonnummer"
      />
      <form-input
        label="Sekundäre Telefonnummer"
        placeholder="Sekundäre Telefonnummer"
      />
      <form-input label="E-Mail" placeholder="E-Mail" />
      <h3>Rechnungsadresse</h3>

      <form-input placeholder="Name" label="Name" />
      <form-input label="Strasse" placeholder="Strasse" />
      <form-input label="Nr" placeholder="Nr" />

      <form-input label="straßenzusatz" placeholder="Straßenzusatz" />

      <form-input label="Postleitzahl" placeholder="Postleitzahl" />
      <form-input label="Ort" placeholder="Ort" />
      <form-input label="Land" placeholder="Land" />
      <section class="section-container">
        <h3>Lieferadresse</h3>
        <form-input placeholder="Name" label="Name" />
        <form-input label="Strasse" placeholder="Strasse" />
        <form-input label="Nr" placeholder="Nr" />

        <form-input label="straßenzusatz" placeholder="Straßenzusatz" />

        <form-input label="Postleitzahl" placeholder="Postleitzahl" />
        <form-input label="Ort" placeholder="Ort" />
        <form-input label="Land" placeholder="Land" />
      </section>
      <h3>Bestellhistorie</h3>

      <menu-bar :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import formInput from '~/components/forms/form-input.vue'
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  components: { formInput, FormTitle, MenuBar },
  name: 'CustomerPage',

  methods: {
    openNewDocument() {},
  },
  data() {
    return {
      privateCustomer: false,
      seperateShippingAddress: false,
      listColumns: [
        'Auftragsnummer',
        'Rechnungsbetrag',
        'Bestellt am',
        'Status',
      ],
    }
  },
}
</script>

<style lang="scss">
.base-input-input--b:hover {
  background: #b6b6b6;
}
.base-input-input--a:hover {
  background: #b6b6b6;
}
</style>

