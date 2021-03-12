<template>
  <div class="page">
    <div class="page-header">
      <h1 v-if="this.list.length !== 0">Kundenaufträge</h1>
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
    </div>
     <menu-bar :newDocument="newDocument" v-if="!$fetchState.pending && !$fetchState.error"/>
  </div>
</template>

<script>
import NoDataFound from '@/components/pages/no-data-found'
import PageTitle from '~/components/page/page-title'
import MenuBar from '~/components/menu-bar/menu-bar'
import LoadingSpinner from '~/components/pages/loading-spinner'
import ErrorOccured from '@/components/pages/error-occured'
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
  },
  computed: {
    onboarding() {
      return this.$store.state.orders.customers.onboarding
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
  methods: {
    newDocument() {
      console.log('new Documents')
      this.doc = !this.doc
    },
  },
  async fetch() {
    this.list = await fetch(`${process.env.ORDER_SERVICE}/list`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        Typ: this.typ,
        Page: this.page,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.OrderList == null) {
          return []
        }
        return [...res.ArticleList]
      })
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
