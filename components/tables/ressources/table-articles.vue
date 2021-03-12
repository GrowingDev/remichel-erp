<template>
  <div class="table-container">
    <div class="table-header grid-cols">
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <div
      class="table-item grid-cols"
      v-for="listItem in listItems"
      :key="listItem.id"
      @click="openListItem(listItem.id)"
    >
      <label>{{ listItem.articleId }}</label>
      <label>{{ listItem.title }}</label>
      <label>{{ listItem.description }}</label>
      <label>{{ listItem.articleGroup }}</label>
      <label>{{ listItem.supplier }}</label>
      <label>{{ listItem.supplierArticleId }}</label>
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
      console.log(id)
      this.$router.push(`/ressources/articles/${id}`)
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
.grid-cols {
  grid-template-columns: repeat(6, 1fr);
}
</style>
