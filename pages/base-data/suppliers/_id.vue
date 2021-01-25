<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="lieferanten anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input label="Lieferantennummer" placeholder="Lieferantennummer" />
      <form-input label="Steuernummer" placeholder="Steuernummer" />
      <form-input label="UID" placeholder="UID" />
      <form-input label="EORI" placeholder="EORI" />
      <h3>Kontakt</h3>
      <form-input label="Telefonnummer" placeholder="Telefonnummer" />
      <form-input label="Homepage" placeholder="Homepage" />
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

      <form-input placeholder="Strasse" label="Strasse" />
      <form-input placeholder="Nr" label="Nr" />

      <form-input placeholder="Straßenzusatz" label="Straßenzusatz" />

      <form-input placeholder="Postleitzahl" label="Postleitzahl" />
      <form-input placeholder="Ort" label="Ort" />

      <form-input placeholder="Land" label="Land" />

      <section class="section-container">
        <h3>Lieferadresse</h3>

        <form-input placeholder="Name" label="Name" />

        <form-input placeholder="Strasse" label="Strasse" />
        <form-input placeholder="Nr" label="Nr" />

        <form-input placeholder="Straßenzusatz" label="Straßenzusatz" />

        <form-input placeholder="Postleitzahl" label="Postleitzahl" />
        <form-input placeholder="Ort" label="Ort" />

        <form-input placeholder="Land" label="Land" />
      </section>
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'
import FormInput from '@/components/forms/form-input.vue'
export default {
  name: 'SupplierPage',
  components: {
    FormInput,
    MenuBar,
    FormTitle,
  },

  methods: {
    saveDocument() {},
    deleteDocument() {},
  },
}
</script>
