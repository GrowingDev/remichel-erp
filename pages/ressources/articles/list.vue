<template>
  <div class="page">
    <div class="page-header">
      <h2 v-if="this.list.length !== 0">artikel</h2>
    </div>
    <div class="page-body">
       <loading-spinner v-if="$fetchState.pending"/>
       <error-occured v-if="$fetchState.error" :refresh="$fetch"/>
      <no-data-found
        v-if="this.list.length == 0 && !$fetchState.pending && !$fetchState.error"
        :pages="this.onboarding"
        :action="newDocument"
      />
       <table-articles
      :listItems="list"
      v-if="!$fetchState.pending && !$fetchState.error"
    />
    </div>
    <menu-bar :newDocument="newDocument" v-if="!$fetchState.pending && !$fetchState.error"/>
  </div>
</template>

<script>
import NoDataFound from '@/components/pages/no-data-found'
import PageTitle from '~/components/page/page-title'
import MenuBar from '~/components/menu-bar/menu-bar'
import LoadingSpinner from '~/components/pages/loading-spinner.vue'
import ErrorOccured from '~/components/pages/error-occured.vue'
import TableArticles from '@/components/tables/ressources/table-articles'
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableArticles,
  },
  computed: {
   onboarding() {
      return this.$store.state.ressources.articles.onboarding
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
    newDocument() {
      console.log('new Documents')
      this.doc = !this.doc
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
