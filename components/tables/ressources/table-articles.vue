<template>
  <div class="table-container">
    <div class="table-header grid-cols">
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <div class="table-item grid-cols" v-for="listItem in listItems" :key="listItem.id">
      <label>{{ listItem.ArticleID }}</label>
      <label>{{ listItem.Title }}</label>
      <label>{{ listItem.Description }}</label>
      <label>{{ listItem.Group }}</label>
      <label>{{ listItem.SupplierID }}</label>
      <label>{{ listItem.OwnerID }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableArticles',
  props: {
    route: String,
    create: Boolean,
    listItems: Array,
  },
  methods: {
    openListItem(id) {
      this.$router.push(`${id}`)
    },
  },
  data: () => {
    return {
      headers: [
        'artikelnr',
        'Titel',
        'Beschreibung',
        'Gruppe',
        'Lieferant',
        'Externe ID',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.grid-cols{
  grid-template-columns: repeat(6, 1fr);
}
</style>
