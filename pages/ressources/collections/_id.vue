<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="Artike gruppe" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Artikelgruppennummer"
        placeholder="Artikelgruppennummer"
      />
      <form-input label="Artikelgruppennummer" placeholder="Artikelgruppennummer" />
      <form-input label="Navigationsgruppe" placeholder="Navigationsgruppe" />
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormInput from '~/components/forms/form-input.vue'
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  name: 'ProductGroup',
  components: { FormInput, MenuBar, FormTitle },
  methods: {
    saveDocument() {},
    deleteDocument() {},
  },
}
</script>
