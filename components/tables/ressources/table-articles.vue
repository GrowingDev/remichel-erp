<template>
  <div class="table-container">
    <div class="table-header grid-cols">
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <div
      class="table-item grid-cols"
      v-for="listItem in articles"
      :key="listItem.id"
      @click="openListItem(listItem.id)"
    >
      <label>{{ listItem.id }}</label>
      <label>{{ listItem.name }}</label>
      <label>{{ listItem.description }}</label>
      <label>{{ listItem.article_type }}</label>
      <label>{{ listItem.supplier }}</label>
      <label>{{ listItem.supplier_id }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableArticles',
  computed: {
    articles() {
      return this.$store.state.ressources.articles.list
    },
  },
  props: {
    route: String,
    create: Boolean,
  },
  methods: {
    openListItem(id) {
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
