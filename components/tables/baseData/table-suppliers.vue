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
      <label>{{ listItem.supplierId }}</label>
      <label>{{ listItem.billingAddress.title }}</label>
      <label>{{ listItem.contactPerson.email }}</label>
      <label>{{ listItem.contactPerson.phone01 }}</label>
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
      this.$router.push(`/base-data/suppliers/${id}`)
    },
  },
  data: () => {
    return {
      headers: ['lieferantennr', 'Bezeichung', 'E-mail', 'telefon'],
    }
  },
}
</script>

<style lang="scss" scoped>
.grid-cols {
  grid-template-columns: repeat(4, 1fr);
}
</style>
