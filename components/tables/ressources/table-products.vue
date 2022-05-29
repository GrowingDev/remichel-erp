<template>
  <div class="table-container">
    <div class="table-header grid-cols">
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <div
      class="table-item grid-cols"
      v-for="listItem in products"
      :key="listItem.id"
      @click="openListItem(listItem.id)"
    >
      <label>{{ listItem.id }}</label>
      <label>{{ listItem.name }}</label>
      <label>{{ listItem.collection }}</label>
      <label>
        <img
          class="thumbnail"
          :src="`http://localhost:4000/images/${listItem.id}-front.png`"
      /></label>
      <label>
        <img
          class="thumbnail"
          :src="`http://localhost:4000/images/${listItem.id}-back.png`"
      /></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableProducts',
  props: {
    route: String,
    create: Boolean,
    listItems: Array,
  },
  computed: {
    products() {
      return this.$store.state.ressources.products.list
    },
  },
  methods: {
    openListItem(id) {
      this.$router.push(`/ressources/products/${id}`)
    },
  },
  data: () => {
    return {
      headers: [
        'produktnr',
        'Titel',
        'kollektion',
        'design front',
        'design back',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.grid-cols {
  grid-template-columns: repeat(5, 1fr);
}
.thumbnail {
  width: 100%;
  max-width:150px;
  height: auto;
padding:1rem;
}
</style>
