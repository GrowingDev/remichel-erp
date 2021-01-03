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
          !doc &&
          !$fetchState.pending &&
          !$fetchState.error
        "
        :pages="this.onboarding"
        :action="newDocument"
      />

      <table-products :listItems="list"
      v-if="!$fetchState.pending && !$fetchState.error"/>
    </div>
    <menu-bar
      :newDocument="newDocument"
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
      typ: 'product',
      page: 0,
    }
  },
  methods: {
    newDocument() {
      console.log('new Documents')
    },
  },
  async fetch() {
    this.list = await fetch(`http://localhost:9091/list`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        Typ: this.typ,
        Page: this.page,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return [...res.ArticleList]
      })
  },
}
</script>
