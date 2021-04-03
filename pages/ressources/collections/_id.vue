<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="Artike gruppe" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Artikelgruppennummer"
        placeholder="Artikelgruppennummer"
        v-model="collection.collectionId"
      />
      <form-input
        label="Bezeichnung"
        placeholder="Bezeichnung"
        v-model="collection.title"
      />

      <form-input
        label="Navigationsgruppe"
        placeholder="Navigationsgruppe"
        v-model="collection.navigationGroup"
      />
      <form-input
        label="Navigationstext"
        placeholder="Navigationstext"
        v-model="collection.navigationText"
      />
      <form-input label="Route" placeholder="Route" />
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
  mounted() {
    if (this.$route.params.id !== 'new') {
      this.getCollection(this.$route.params.id)
    }
  },
  data() {
    return {
      collection: {},
    }
  },
  methods: {
    getCollection(id) {
      console.log(id)
      this.$axios
        .$post('https://api.remichel-cc.com/api', {
          query: `
       query Collection($id: ID!) {
        collection(id: $id) {
          id
          collectionId
          title
          description
          navigationText
          navigationGroup
        }
      }
        `,
          fetchPolicy: 'no-cache',
          variables: {
            id: id,
          },
        })
        .then((res) => {
          this.collection = res.data.collection
          console.log(this.collection)
        })
    },
    saveDocument() {},
    deleteDocument() {},
  },
}
</script>
