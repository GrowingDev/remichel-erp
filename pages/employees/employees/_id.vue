<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="mitarbeiter anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Mitarbeiternummer"
        placeholder="Mitarbeiternummer"
        type="text"
      />
      <form-input label="SV-Nr" placeholder="SV-Nr" type="number" />
      <form-input label="eintritt" placeholder="Eintritt" type="date" />
      <form-input label="Ansprache" placeholder="Ansprache" type="text" />
      <form-input label="vorname" placeholder="Vorname" type="text" />
      <form-input label="nachname" placeholder="Nachname" type="text" />
      <form-input label="geboren am" placeholder="Geboren am" type="date" />
      <form-input label="Tätigkeit" placeholder="Tätigkeit" type="text" />
      <form-input label="Abteilung" placeholder="Abteilung" type="text" />
      <h3>Kontaktdaten</h3>
      <form-input label="Telefon" placeholder="Telefon" type="text" />
      <form-input label="e-mail" placeholder="E-Mail" type="text" />
      <h3>Adresse</h3>
      <form-input placeholder="Name" label="Name" />
      <form-input placeholder="Strasse" label="Strasse" />
      <form-input placeholder="Nr" label="Nr" />
      <form-input placeholder="Straßenzusatz" label="Straßenzusatz" />
      <form-input placeholder="Postleitzahl" label="Postleitzahl" />
      <form-input placeholder="Ort" label="Ort" />
      <form-input placeholder="Land" label="Land" />
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormTitle from '~/components/forms/form-title.vue'
import menuBar from '~/components/menu-bar/menu-bar.vue'
import FormInput from '@/components/forms/form-input.vue'
export default {
  name: 'Employee',
  components: { menuBar, FormTitle, FormInput },
  methods: {
    saveDocument() {},
    deletedocument() {},
  },
}
</script>
