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
      <label>{{ listItem.id }}</label>
      <label>{{ listItem.orderId }}</label>
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
      this.$router.push(`/orders/prints/${id}`)
    },
  },
  data: () => {
    return {
      headers: ['Druckauftragsnummer', 'Kundenauftragsnummer'],
    }
  },
}
</script>

<style lang="scss" scoped>
.grid-cols {
  grid-template-columns: repeat(2, 1fr);
}
</style>
