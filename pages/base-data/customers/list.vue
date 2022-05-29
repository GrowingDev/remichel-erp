<template>
  <div class="page">
    <div class="page-header">
  <form-title title="Kunden"/>
    </div>
    <div class="page-body">
        <table-customers
      :listItems="customers"/>
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
import FormTitle from '~/components/forms/form-title.vue'
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
    FormTitle
  },
    async fetch() {
    let customers = await fetch(
      process.env.API_URL + '/api/entitys/filter/B2C'
    ).then((res) => res.json())
    this.$store.commit('baseData/customers/setCustomers', customers)
  },
  computed: {
    onboarding() {
      return this.$store.state.baseData.customers.onboarding
    },
    customers(){
      return this.$store.state.baseData.customers.list
    }
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
