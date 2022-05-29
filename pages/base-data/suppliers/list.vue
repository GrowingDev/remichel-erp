<template>
  <div class="page">
    <div class="page-header">
     <form-title title="lieferanten" />
    </div>
    <div class="page-body">
      <table-suppliers :listItems="suppliers" />
    </div>
    <menu-bar :openDocument="openNewDocument" />
  </div>
</template>

<script>
import NoDataFound from '@/components/pages/no-data-found'
import PageTitle from '~/components/page/page-title'
import MenuBar from '~/components/menu-bar/menu-bar'
import LoadingSpinner from '~/components/pages/loading-spinner'
import ErrorOccured from '@/components/pages/error-occured'
import TableSuppliers from '~/components/tables/baseData/table-suppliers.vue'
import FormTitle from '~/components/forms/form-title.vue'
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableSuppliers,
    FormTitle
  },
  computed:{
    suppliers(){
      return this.$store.state.baseData.suppliers.list
    }
  },
   async fetch() {
    let suppliers = await fetch(
      process.env.API_URL + '/api/entitys/filter/SUPPLIER'
    ).then((res) => res.json())
    this.$store.commit('baseData/suppliers/setSuppliers', suppliers)
  },
  data: () => {
    return {
      doc: false,
      page: 0,
    }
  },

  methods: {
    openNewDocument() {
      this.$router.push(`/base-data/suppliers/new`)
    },

  },
}
</script>

<style lang="scss">
.page {
  height: 100vh;
}
.page-header {
  width: 100%;
  min-height: 90px;
  h1 {
    text-transform: uppercase;
  }
}
.page-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 90px);
}
</style>
