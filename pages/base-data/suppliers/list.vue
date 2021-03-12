<template>
  <div class="page">
    <div class="page-header">
      <h2 v-if="this.list.length !== 0">lieferanten</h2>
    </div>
    <div class="page-body">
      <table-suppliers :listItems="list" />
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
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableSuppliers,
  },
  computed: {
    onboarding() {
      return this.$store.state.baseData.suppliers.onboarding
    },
  },
  data: () => {
    return {
      doc: false,
      list: [],
      typ: '',
      page: 0,
    }
  },
  beforeMount() {
    this.getSuppliers()
  },
  methods: {
    openNewDocument() {
      this.$router.push(`/base-data/suppliers/new`)
    },
    async getSuppliers() {
      this.list = await this.$axios
        .$post('http:localhost:4000', {
          query: `
      query {
        suppliers {
          id
          supplierId
          contactPerson {
            email
            phone01
          }
          billingAddress {
            title
          }
        }
      }
        `,
        })
        .then((res) => {
          return res.data.suppliers
        })
      console.log(this.list)
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
