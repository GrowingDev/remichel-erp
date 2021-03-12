<template>
  <div class="page">
    <div class="page-header">
      <h2 v-if="this.list.length !== 0">Kunden</h2>
    </div>
    <div class="page-body">
        <table-customers
      :listItems="list"/>
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
import TableCustomers from '~/components/tables/baseData/table-customers.vue'
import Onboarding from '~/components/pages/onboarding.vue'
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableCustomers,
    Onboarding,
  },
   beforeMount() {
    this.getCustomers()
  },
  computed: {
    onboarding() {
      return this.$store.state.baseData.customers.onboarding
    },
  },
  data: () => {
    return {
      list: [],
      typ: '',
      page: 0,
    }
  },
  methods: {
    openNewDocument() {
      console.log()
    this.$router.push(`/base-data/customers/new`)
    },
     async getCustomers() {
      this.list = await this.$axios
        .$post('http:localhost:4000', {
          query: `
      query {
        customers {
          id
          customerId
          customerGroup
          status
          contactPerson{
            gender
            lastName
          }
          billingAddress{
            country
          }
        }
      }
        `,
        })
        .then((res) => {
          return res.data.customers
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
