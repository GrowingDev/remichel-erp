<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="geschäftsbrief anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input label="erstellt am" placeholder="Erstellt am" disabled />
      <form-input placeholder="Name" label="Name" />
      <form-input label="Strasse" placeholder="Strasse" />
      <form-input label="Nr" placeholder="Nr" />
      <form-input label="straßenzusatz" placeholder="Straßenzusatz" />
      <form-input label="Postleitzahl" placeholder="Postleitzahl" />
      <form-input label="Ort" placeholder="Ort" />
      <form-input label="Land" placeholder="Land" />
      <h3>Nachricht</h3>
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormTitle from '~/components/forms/form-title.vue'
import FormInput from '~/components/forms/form-input.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  components: { FormTitle, MenuBar, FormInput },
  name: 'BusinessLetter',

  methods: {
    saveDocument() {},
    deleteDocument() {},
  },
}
</script>
