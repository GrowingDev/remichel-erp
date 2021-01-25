<template>
  <div class="page">
    <div class="page-header">
      <h2 v-if="this.list.length !== 0">Produkte</h2>
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

      <table-products :listItems="list"
      v-if="this.list.length != 0 && !$fetchState.pending && !$fetchState.error"/>
    </div>
    <menu-bar
      :openDocument="openNewDocument"
      v-if="!$fetchState.pending && !$fetchState.error"
    />
  </div>
</template>

<script>
import NoDataFound from '@/components/pages/no-data-found'
import PageTitle from '~/components/page/page-title'
import MenuBar from '~/components/menu-bar/menu-bar'
import LoadingSpinner from '~/components/pages/loading-spinner'
import ErrorOccured from '@/components/pages/error-occured'
import TableProducts from '~/components/tables/ressources/table-products.vue'
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableProducts,
  },
  computed: {
    onboarding() {
      return this.$store.state.ressources.products.onboarding
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
      console.log(this.$route.path)
      this.$router.push(`/ressources/products/new`)
    },
  },
  async fetch() {
    this.list = []
  },
}
</script>
