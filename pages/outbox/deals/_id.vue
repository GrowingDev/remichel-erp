<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="angebots anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Angebotsnummer"
        placeholder="Angebotsnummer"
        disabled
      />
      <form-input label="erstellt am" placeholder="Erstellt am" disabled />
      <h3>Anschrift</h3>
      <form-input placeholder="Name" label="Name" />
      <form-input label="Strasse" placeholder="Strasse" />
      <form-input label="Nr" placeholder="Nr" />
      <form-input label="straßenzusatz" placeholder="Straßenzusatz" />
      <form-input label="Postleitzahl" placeholder="Postleitzahl" />
      <form-input label="Ort" placeholder="Ort" />
      <form-input label="Land" placeholder="Land" />
      <h3>Nachricht</h3>
      <form-texarea />
      <div class="list-container">
        <h3>Produkte</h3>
      </div>
      <menu-bar
        :updateList="updateList"
        :openList="openList"
        :saveDocument="saveDocument"
        :deleteDocument="deleteDocument"
      />
    </div>
  </div>
</template>

<script>
import FormInput from '~/components/forms/form-input.vue'
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  name: 'Deal',
  components: {
    MenuBar,
    FormInput,
    FormTitle,
  },

  methods: {
    updateList() {},
    saveDocument() {},
    deleteDocument() {},
  },
  data() {
    return {
      openList: false,
    }
  },
}
</script>
