<template>
  <div class="page">
    <div class="page-header">

     <form-title title="Druckauftäge" />
    </div>
    <div class="page-body">
      <loading-spinner v-if="$fetchState.pending" />

      <error-occured v-if="$fetchState.error" :refresh="$fetch" />

      <no-data-found
        v-if="
          this.list.length == 0 &&
          !doc &&
          !$fetchState.pending &&
          !$fetchState.error
        "
        :pages="this.onboarding"
        :action="newDocument"
      />
            <table-prints :listItems="list" />
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
import TablePrints from '@/components/tables/orders/table-prints.vue'
import FormTitle from '~/components/forms/form-title.vue'
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TablePrints,
    FormTitle
  },
  computed: {
    onboarding() {
      return this.$store.state.orders.prints.onboarding
    },
  },
  data: () => {
    return {
      doc: false,
      list: [],
      typ: 'product',
      page: 0,
    }
  },
  methods: {
    openNewDocument() {
    this.$router.push(`/orders/prints/new`)
      this.doc = !this.doc
    },
  },
    async fetch() {
    this.list = await fetch(
      process.env.API_URL + '/api/prints'
    ).then((res) => res.json())

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
