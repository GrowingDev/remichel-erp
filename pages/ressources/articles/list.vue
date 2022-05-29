<template>
  <div class="page">
    <div class="page-header">
<form-title title="artikel"/>
    </div>
    <div class="page-body">
      <table-articles />
    </div>
    <menu-bar :openDocument="openNewDocument" />
  </div>
</template>

<script>
import NoDataFound from '@/components/pages/no-data-found'
import PageTitle from '~/components/page/page-title'
import MenuBar from '~/components/menu-bar/menu-bar'
import LoadingSpinner from '~/components/pages/loading-spinner.vue'
import ErrorOccured from '~/components/pages/error-occured.vue'
import FormTitle from '~/components/forms/form-title.vue'
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
    FormTitle
  },
  async fetch() {
    let articles = await fetch(process.env.API_URL + '/api/articles').then(
      (res) => res.json()
    )
    this.$store.commit('ressources/articles/setArticles', articles)
  },
  computed: {
    onboarding() {
      return this.$store.state.ressources.articles.onboarding
    },
  },
  data: () => {
    return {
      page: 0,
    }
  },

  methods: {
    openNewDocument() {
      this.$router.push(`/ressources/articles/new`)
    },
  },
}
</script>
