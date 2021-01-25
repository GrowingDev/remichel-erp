<template>
  <div class="page">
    <div class="page-header">
      <h2 v-if="this.list.length !== 0">Kunden</h2>
    </div>
    <div class="page-body">
   <loading-spinner v-if="$fetchState.pending" />

      <error-occured v-if="$fetchState.error" :refresh="$fetch" />

      <no-data-found
        v-if="
          this.list.length == 0 &&
          !$fetchState.pending &&
          !$fetchState.error
        "
        :pages="this.onboarding"
        :action="newDocument"
      />
        <table-customers
      :listItems="list"
      v-if="!$fetchState.pending && !$fetchState.error && this.list.length !== 0"
    />
    </div>
   <menu-bar :openDocument="openNewDocument" v-if="!$fetchState.pending && !$fetchState.error"/>
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
      console.log('new Documents')
    this.$router.push(`/base-data/customers/new`)
    },
  },
  async fetch() {
   return []
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
