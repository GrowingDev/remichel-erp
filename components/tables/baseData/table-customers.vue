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
      <label>{{ listItem.customerId }}</label>
      <label>{{ listItem.contactPerson.gender }}</label>
      <label>{{ listItem.customerGroup }}</label>
      <label>{{ listItem.billingAddress.country }}</label>
      <label> {{listItem.status}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableCustomers',
  props: {
    route: String,
    create: Boolean,
    listItems: Array,
  },
  methods: {
    openListItem(id) {
      console.log(id)
      this.$router.push(`/base-data/customers/${id}`)
    },
  },
  data: () => {
    return {
      headers: ['kundennr', 'Bezeichung', 'Gruppe', 'Land', 'status'],
    }
  },
}
</script>

<style lang="scss" scoped>
.grid-cols {
  grid-template-columns: repeat(5, 1fr);
}
</style>
