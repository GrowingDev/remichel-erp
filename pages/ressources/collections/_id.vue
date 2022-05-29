<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="Kollektionen" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Kollektionsnummer"
        placeholder="Produktgruppennummer"
        v-model="collection.id"
        :disabled="true"
      />
      <form-input
        label="Bezeichnung"
        placeholder="Bezeichnung"
        v-model="collection.name"
      />
      <form-input
        label="Erstellt am"
        placeholder="Erstellt am"
        v-model="collection.createdAt"
        :disabled="true"
      />
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

  computed: {
    collection() {
      return { ...this.$store.state.ressources.collections.collection }
    },
  },
  async fetch() {
    let collection = await fetch(
      process.env.API_URL + `/api/collections/${this.$route.params.id}`
    ).then((res) => res.json())
    this.$store.commit('ressources/collections/setCollection', collection)
  },
  methods: {
    saveDocument() {
      if (this.$route.params.id !== 'new') {
        this.$axios
          .$put(
            process.env.API_URL + `/api/collections/${this.$route.params.id}`,
           this.collection
          )
          .then((res) => {
            this.$router.back()
          })
      } else {
        this.$axios
          .$post(process.env.API_URL + `/api/collections/`, this.collection)
          .then((res) => {
            this.$router.back()
          })
      }
    },
    deleteDocument() {
      this.$axios
        .$delete(
          process.env.API_URL + `/api/collections/${this.$route.params.id}`
        )
        .then((res) => {
          console.log(res)
          this.$router.back()
        })
    },
  },
}
</script>
