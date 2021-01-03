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
      <label>{{ listItem.Group }}</label>
      <label></label>
      <label></label>
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
  methods: {
    openListItem(id) {

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
.grid-cols{
  grid-template-columns: repeat(5, 1fr);
}
</style>
