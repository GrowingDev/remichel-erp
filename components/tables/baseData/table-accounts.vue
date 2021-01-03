<template>
  <div class="table-container">
    <div class="table-header grid-cols">
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <div class="table-item grid-cols" v-for="listItem in listItems" :key="listItem.id">
      <label>{{ listItem.ArticleID }}</label>
      <label ></label>
      <label>{{ listItem.Title }}</label>
       <label>{{ listItem.Group }}</label>
        <label></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableAccounts',
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
        'accountnr',
        'Rolle',
        'Entität',
        'verifiziert',
        'erstellt am'
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
