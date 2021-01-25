<template>
  <div  class="doc">
    <div class="doc-basedata">
    <form-title title="acount anlage" style="align-self: center" />
    <div class="placeholder"></div>
    <form-input label="Accountnummer" placeholder="Accountnummer" disabled />
    <form-input label="E-mail" placeholder="E-Mail" />
    <form-input label="entität" placeholder="Entität" />
    <form-select
      label="Rolle"
      defaultOption="Bitte wählen Sie eine Rolle aus"
      :options="options"
    />
    <form-input label="passwort" placeholder="Passwort" />
    <form-input label="Erstellt am" placeholder="Erstellt am" disabled />
    <form-input label="verifiziert" placeholder="Verifiziert" />
    <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
  </div>
  </div>
</template>

<script>
import FormInput from '~/components/forms/form-input.vue'
import FormSelect from '~/components/forms/form-select.vue'
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  name: 'Account',
  components: { MenuBar, FormInput, FormTitle, FormSelect },
  methods: { saveDocument() {}, deletedocument() {} },
  data() {
    return {
      options: [
        {
          value: 'ADMINISTRATOR',
          text: 'ADMINISTRATOR',
        },
        {
          value: 'PRINT',
          text: 'DRUCKEREI',
        },
        {
          value: 'CUSTOMER',
          text: 'KUNDE',
        },
        {
          value: 'SUPPLIER',
          text: 'LIEFERANT',
        },
      ],
    }
  },
}
</script>
