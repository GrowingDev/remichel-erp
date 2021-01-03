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
  name: 'TableSuppliers',
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
        'lieferantennr',
        'Bezeichung',
        'E-mail',
        'telefon',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.grid-cols{
  grid-template-columns: repeat(4, 1fr);
}
</style>
